# Pei Wu's academic website

This repository contains the Hugo source for
[pwu.netlify.app](https://pwu.netlify.app/). The active site lives entirely in
`modern/`; Netlify builds it according to `netlify.toml` whenever `master` is
updated.

## Local preview

Install Hugo Extended 0.147.3 or later, then run:

```sh
hugo server --source modern --disableFastRender --bind 127.0.0.1 --port 1315
```

The site will be available at <http://localhost:1315/>.

## Content and layout

- `modern/data/` contains the profile, publications, and talks.
- `modern/content/` contains courses, the reading group, and other pages.
- `modern/layouts/` contains the Hugo templates.
- `modern/assets/` contains styles and the portrait source.
- `modern/static/` contains the CV, papers, slides, lecture notes, and course
  games. Some files are intentionally retained even when they are not currently
  linked.

## Validation

```sh
./scripts/verify-production.sh /tmp/academic-modern-production
./scripts/verify-site.sh http://127.0.0.1:1315 all modern
```

The first command builds the production artifact and checks internal links. The
second checks the running site, representative downloads, courses, and games.

## Deployment

Pushing a validated change to `master` triggers the linked Netlify deployment.
