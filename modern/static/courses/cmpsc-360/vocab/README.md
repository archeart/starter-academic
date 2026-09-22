# CMPSC 360 — vocabulary pages

Two standalone pages built from `beamer/lec1.tex`, `lec2.tex`, `lec3.tex`.
80 terms across Sets, Relations, Equivalence, Order, Functions, Logic and
Quantifiers. Last checked against the decks 2026-09-12.

| file | what it is |
|---|---|
| `glossary.html` | the dictionary — search, filter by topic, examples, gotchas, cross-links |
| `cards.html` | flashcards — term on the front, click reveals the definition |
| `vocab.js` | **the only file you edit.** All 80 entries live here |
| `sync.mjs` | copies `vocab.js` into both HTML pages |

## Putting them on your site

In this Hugo repository, `modern/static/` is served at the site root. Run
Hugo from the repository root:

```sh
./bin/hugo server --source modern --disableFastRender --bind 127.0.0.1 --port 1315
```

Use `hugo` instead of `./bin/hugo` if it is installed on your PATH. Open:

- Flashcards: <http://localhost:1315/courses/cmpsc-360/vocab/cards.html>
- Glossary: <http://localhost:1315/courses/cmpsc-360/vocab/glossary.html>

Both are linked from the CMPSC 360 course page. The `vocab/` folder itself
has no `index.html`, so use the explicit page URLs above.

Both HTML files are completely self-contained: no fonts, scripts or
stylesheets are fetched from anywhere, and all notation is real Unicode
(∀ ∃ ⊆ 𝒫 ⟹ ≡). Copy them anywhere and they work — including from a
`file://` path, offline.

Keep them in the same directory and the two cross-links (dictionary ⇄ cards)
work as-is. If you split them up, edit:

- `cards.html` → `const GLOSSARY_URL = 'glossary.html';` near the bottom
- `glossary.html` → the `<a href="cards.html">` in the masthead

Everything is scoped under `#cs360-vocab` / `#cs360-cards`, so you can also
paste the `<style>` + inner `<div>` + `<script>` straight into a page of your
own without the styles leaking either way.

Deep links work: `glossary.html#injective` opens the dictionary at that term.
Useful from a slide, Canvas, or a homework sheet.

## Adding or editing a term

Edit `vocab.js`, then:

```sh
node sync.mjs
```

That rewrites the inline copy inside both HTML files and reports the term
count. It refuses to run if two entries share an `id`.

Each entry:

```js
{
  id: 'injective',                  // anchor + card key — don't change once published
  term: 'Injective (one-to-one)',
  sym: '<i>f</i>(<i>a</i>) = <i>f</i>(<i>a</i>′) ⟹ <i>a</i> = <i>a</i>′',
  topic: 'Functions',               // must match the TOPICS list in the HTML
  lec: 2,
  def: '…',                         // also the flashcard back — keep it to 1–2 sentences
  ex: '…',                          // dictionary only
  note: '…',                        // the thing students get wrong; dictionary only
  see: ['surjective', 'bijective']  // cross-links
}
```

`<i>` renders variables in Palatino italic; `<span class="ovl">A</span>` gives
a set complement its overline; `<sup>`, `<sub>` and `<b>` work as expected.

Adding a new topic (Lecture 4 onward) means adding its name to the `TOPICS`
array in **both** HTML files — one line each, near the top of the script.

## Parked terms

Terms from slides that are parked in `lec3.tex` (Part C — inference, and the
"All … not" vs "not all …" slide) sit commented out at the bottom of
`vocab.js`, *after* the `VOCAB:END` marker so `sync.mjs` never copies them into
the pages. If Part C comes back — or the inference rules land in the Week 3
proofs lecture — cut those entries into the array, give them the right `lec`
and a topic that exists in `TOPICS`, and re-run `sync.mjs`.

## Keyboard, on the cards

<kbd>space</kbd> reveal · <kbd>→</kbd> next · <kbd>←</kbd> previous · <kbd>s</kbd> shuffle
