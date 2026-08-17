#!/usr/bin/env python3

"""Check a built Hugo site for broken internal links and page-quality basics."""

from __future__ import annotations

import argparse
from collections import defaultdict
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlparse


AUDITED_ROUTES = (
    "/",
    "/courses/",
    "/courses/cmpsc-360/",
    "/courses/cse-564/",
    "/talks/",
    "/reading-group/",
    "/404.html",
)


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.links: list[tuple[str, str]] = []
        self.ids: list[str] = []
        self.images: list[dict[str, str | None]] = []
        self.tables = 0
        self.captions = 0
        self.h1_count = 0
        self.main_ids: list[str | None] = []
        self.skip_links = 0
        self.target_blank: list[dict[str, str | None]] = []
        self.inline_styles = 0
        self.html_lang: str | None = None
        self.title_depth = 0
        self.title_text: list[str] = []
        self.meta: dict[tuple[str, str], str] = {}
        self.canonical: str | None = None

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "html":
            self.html_lang = values.get("lang")
        if tag == "title":
            self.title_depth += 1
        if tag == "h1":
            self.h1_count += 1
        if tag == "main":
            self.main_ids.append(values.get("id"))
        if tag == "table":
            self.tables += 1
        if tag == "caption":
            self.captions += 1
        if tag == "img":
            self.images.append(values)
        if "style" in values:
            self.inline_styles += 1
        element_id = values.get("id")
        if element_id:
            self.ids.append(element_id)

        class_names = set((values.get("class") or "").split())
        if tag == "a" and "skip-link" in class_names:
            self.skip_links += 1
        if values.get("target") == "_blank":
            self.target_blank.append(values)

        for attribute in ("href", "src"):
            value = values.get(attribute)
            if value:
                self.links.append((attribute, value))
        srcset = values.get("srcset")
        if srcset:
            for candidate in srcset.split(","):
                url = candidate.strip().split()[0]
                if url:
                    self.links.append(("srcset", url))

        if tag == "meta":
            if values.get("name") and values.get("content"):
                self.meta[("name", values["name"])] = values["content"]
            if values.get("property") and values.get("content"):
                self.meta[("property", values["property"])] = values["content"]
        if tag == "link" and values.get("rel") == "canonical":
            self.canonical = values.get("href")

    def handle_endtag(self, tag: str) -> None:
        if tag == "title" and self.title_depth:
            self.title_depth -= 1

    def handle_data(self, data: str) -> None:
        if self.title_depth:
            self.title_text.append(data)


def route_for_file(root: Path, html_file: Path) -> str:
    relative = html_file.relative_to(root).as_posix()
    if relative == "index.html":
        return "/"
    if relative.endswith("/index.html"):
        return "/" + relative[: -len("index.html")]
    return "/" + relative


def file_for_route(root: Path, route: str) -> Path | None:
    decoded = unquote(route).lstrip("/")
    direct = root / decoded
    candidates = [direct]
    if route.endswith("/") or not Path(decoded).suffix:
        candidates.append(direct / "index.html")
    if not Path(decoded).suffix:
        candidates.append(root / f"{decoded}.html")
    for candidate in candidates:
        if candidate.is_file() and has_exact_case(root, candidate):
            return candidate
    return None


def has_exact_case(root: Path, candidate: Path) -> bool:
    """Enforce Linux-style path casing even when checks run on macOS."""
    try:
        relative = candidate.relative_to(root)
    except ValueError:
        return False
    current = root
    for part in relative.parts:
        try:
            names = {entry.name for entry in current.iterdir()}
        except OSError:
            return False
        if part not in names:
            return False
        current = current / part
    return True


def parse_page(path: Path, cache: dict[Path, PageParser]) -> PageParser:
    if path not in cache:
        parser = PageParser()
        parser.feed(path.read_text(encoding="utf-8", errors="replace"))
        cache[path] = parser
    return cache[path]


def check_metadata(route: str, page: PageParser, failures: list[str]) -> None:
    title = "".join(page.title_text).strip()
    required_meta = (
        ("name", "description"),
        ("name", "robots"),
        ("property", "og:title"),
        ("property", "og:description"),
        ("property", "og:image"),
        ("name", "twitter:title"),
        ("name", "twitter:description"),
        ("name", "twitter:image"),
    )
    if not page.html_lang:
        failures.append(f"{route}: missing html lang")
    if not title:
        failures.append(f"{route}: missing page title")
    if not page.canonical:
        failures.append(f"{route}: missing canonical URL")
    for key in required_meta:
        if not page.meta.get(key, "").strip():
            failures.append(f"{route}: missing {key[1]} metadata")


def check_accessibility(route: str, page: PageParser, failures: list[str]) -> None:
    if page.h1_count != 1:
        failures.append(f"{route}: expected one h1, found {page.h1_count}")
    if page.main_ids != ["main-content"]:
        failures.append(f"{route}: expected one main#main-content")
    if page.skip_links != 1:
        failures.append(f"{route}: expected one skip link")
    if page.tables != page.captions:
        failures.append(
            f"{route}: found {page.tables} table(s) but {page.captions} caption(s)"
        )
    for index, image in enumerate(page.images, start=1):
        if "alt" not in image:
            failures.append(f"{route}: image {index} is missing alt text")
    duplicates = sorted(key for key, count in _counts(page.ids).items() if count > 1)
    if duplicates:
        failures.append(f"{route}: duplicate IDs: {', '.join(duplicates)}")
    if page.inline_styles:
        failures.append(f"{route}: found {page.inline_styles} inline style attribute(s)")
    for link in page.target_blank:
        rel = set((link.get("rel") or "").split())
        if "noopener" not in rel:
            failures.append(f"{route}: target=_blank link is missing rel=noopener")


def _counts(values: list[str]) -> dict[str, int]:
    counts: dict[str, int] = defaultdict(int)
    for value in values:
        counts[value] += 1
    return counts


def main() -> int:
    argument_parser = argparse.ArgumentParser()
    argument_parser.add_argument("build_root", type=Path)
    argument_parser.add_argument("--base-url", default="https://pwu.netlify.app/")
    args = argument_parser.parse_args()

    root = args.build_root.resolve()
    expected_host = urlparse(args.base_url).netloc
    html_files = sorted(root.rglob("*.html"))
    cache: dict[Path, PageParser] = {}
    failures: list[str] = []
    internal_references = 0

    for html_file in html_files:
        source_route = route_for_file(root, html_file)
        page = parse_page(html_file, cache)
        for attribute, raw_url in page.links:
            parsed_raw = urlparse(raw_url)
            if parsed_raw.scheme in {"mailto", "tel", "data", "javascript"}:
                continue
            if parsed_raw.scheme and parsed_raw.scheme not in {"http", "https"}:
                continue
            if parsed_raw.netloc and parsed_raw.netloc != expected_host:
                continue

            absolute = urlparse(urljoin(args.base_url.rstrip("/") + source_route, raw_url))
            target_route = absolute.path or "/"
            target_file = file_for_route(root, target_route)
            internal_references += 1
            if target_file is None:
                failures.append(
                    f"{source_route}: broken {attribute} {raw_url!r} (missing {target_route})"
                )
                continue
            if absolute.fragment and target_file.suffix.lower() == ".html":
                target_page = parse_page(target_file, cache)
                if unquote(absolute.fragment) not in target_page.ids:
                    failures.append(
                        f"{source_route}: missing fragment #{absolute.fragment} in {target_route}"
                    )

    for route in AUDITED_ROUTES:
        page_file = file_for_route(root, route)
        if page_file is None:
            failures.append(f"{route}: audited route was not built")
            continue
        page = parse_page(page_file, cache)
        check_metadata(route, page, failures)
        check_accessibility(route, page, failures)

    robots = root / "robots.txt"
    sitemap = root / "sitemap.xml"
    if not robots.is_file() or "Sitemap:" not in robots.read_text(encoding="utf-8"):
        failures.append("robots.txt: missing sitemap policy")
    if not sitemap.is_file():
        failures.append("sitemap.xml: missing")
    elif any(term in sitemap.read_text(encoding="utf-8") for term in ("/tags/", "/categories/")):
        failures.append("sitemap.xml: contains unused taxonomy pages")

    css_text = "\n".join(
        path.read_text(encoding="utf-8", errors="replace")
        for path in (root / "css").glob("*.css")
    )
    for marker in (":focus-visible", "prefers-reduced-motion"):
        if marker not in css_text:
            failures.append(f"CSS: missing {marker} accessibility rule")

    if failures:
        print("Build check failed:")
        for failure in failures:
            print(f"  - {failure}")
        return 1

    print(
        f"Build check passed: {len(html_files)} HTML files and "
        f"{internal_references} internal references checked."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
