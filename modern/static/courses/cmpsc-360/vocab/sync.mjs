#!/usr/bin/env node
/**
 * sync.mjs — copy vocab.js into glossary.html and cards.html.
 *
 *   node sync.mjs
 *
 * vocab.js is the only file you edit. Both HTML pages keep an inline copy of
 * the array between the VOCAB:BEGIN / VOCAB:END markers so that each page
 * stays a single standalone file with nothing to load.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const BEGIN = '/* VOCAB:BEGIN */';
const END = '/* VOCAB:END */';

const src = readFileSync(join(here, 'vocab.js'), 'utf8');
const a = src.indexOf(BEGIN);
const b = src.indexOf(END);
if (a < 0 || b < 0) {
  console.error('vocab.js is missing its VOCAB:BEGIN / VOCAB:END markers.');
  process.exit(1);
}
const block = src.slice(a, b + END.length);

// how many entries, and are the ids unique?
const ids = [...block.matchAll(/^\s*id:\s*'([^']+)'/gm)].map((m) => m[1]);
const dupes = ids.filter((id, k) => ids.indexOf(id) !== k);
if (dupes.length) {
  console.error('Duplicate ids in vocab.js: ' + [...new Set(dupes)].join(', '));
  process.exit(1);
}

for (const file of ['glossary.html', 'cards.html']) {
  const p = join(here, file);
  const html = readFileSync(p, 'utf8');
  const i = html.indexOf(BEGIN);
  const j = html.indexOf(END);
  if (i < 0 || j < 0) {
    console.error(`${file} is missing its VOCAB markers — skipped.`);
    continue;
  }
  writeFileSync(p, html.slice(0, i) + block + html.slice(j + END.length));
  console.log(`updated ${file}`);
}

console.log(`${ids.length} terms.`);
