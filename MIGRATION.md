# Modern Hugo migration

This file is the migration ledger for replacing the legacy Wowchemy site with a
small modern Hugo site. The legacy implementation stays runnable until the new
site passes every parity check.

## Ground rules

- Preserve public URLs, especially `/files/`, `/courses/`, and the course-game
  URLs. Existing links from papers, syllabi, search engines, and bookmarks
  should continue to work.
- Do not delete legacy files until the replacement has passed local review.
- End every phase with a successful production build, automated route checks,
  and a human review in the browser.
- Keep generated output and local toolchains out of Git.
- Treat content cleanup separately from migration. Obvious spelling corrections
  are welcome, but no publication, talk, course document, or download should
  disappear accidentally.

## Baseline inventory

- 42 rendered Hugo pages
- 36 PDF files under `static/files/`
- 3 interactive CMPSC 360 course games
- Important routes covered by `scripts/verify-site.sh`

## Migration phases

### 1. Baseline and safety checks

- [x] Confirm the legacy worktree starts clean.
- [x] Confirm the legacy site builds with the bundled Hugo toolchain.
- [x] Record the content/material baseline.
- [x] Add repeatable checks for representative public routes and downloads.
- [x] Review the legacy site locally and accept it as the parity reference.

Acceptance: the legacy build succeeds and every automated baseline check passes.

### 2. Modern shell and homepage

- [x] Create an isolated, theme-free Hugo implementation inside this repository.
- [x] Add the global page shell, navigation, typography, footer, and responsive
      layout.
- [x] Reproduce the biography, portrait, contact details, and homepage structure.
- [x] Keep the legacy site available for side-by-side review.

Acceptance: the new homepage is recognizable, responsive, and contains all
legacy homepage biography/contact material.

### 3. Selected publications and talks

- [x] Move selected publications from hand-written heading markup into structured data.
- [x] Move talks into structured data.
- [x] Preserve the selected-publication PDFs, venues, and author lists, plus all
      displayed talk links.
- [x] Render lists from reusable Hugo templates.
- [x] Keep four recent publications visible and place older papers, slides, and
      recorded talks in an expandable section on the homepage.

Acceptance: the selected homepage publications and displayed talks render from
structured data and all their links pass. Older supporting material remains
available without turning the website into a complete publication record;
Google Scholar remains the complete record.

### 4. Courses, reading group, and static material

- [x] Migrate the course index, CMPSC 360, CSE 564, and reading-group pages.
- [x] Preserve all 36 PDFs and their stable URLs.
- [x] Preserve and test all 3 course games.
- [x] Move page-specific inline styles into maintainable site styles where
      practical.

Acceptance: all representative course routes, downloads, and games pass the
automated checks and the schedules are visually readable on desktop and mobile.

### 5. Quality and metadata

- [x] Add page titles, descriptions, canonical URLs, social metadata, and a
      sitemap/robots policy.
- [x] Check keyboard navigation, focus states, contrast, headings, and image alt
      text.
- [x] Correct confirmed typos and the CSE 564/565 mismatch.
- [x] Add a link check and final production build check.

Acceptance: production build and automated checks pass with no known broken
internal link or missing material.

### 6. Cutover and cleanup

- [ ] Review the complete new site locally.
- [ ] Create a deploy preview and compare it with the local build.
- [ ] Switch production to the modern site while preserving URLs.
- [ ] Remove only confirmed Wowchemy/demo/generated leftovers.
- [ ] Rotate and remove the ignored plaintext credential before final cleanup.

Acceptance: the production site passes the same route checks; the legacy source
is removed only after the new deployment is accepted.
