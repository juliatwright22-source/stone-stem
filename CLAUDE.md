# Stone & Stem Landscape Co. — project context

This file is read automatically at the start of every session in this
directory. Keep it current — update the Session Log below whenever
meaningful work happens, so future sessions don't have to re-derive
context from scratch.

## What this is

A marketing website for Stone & Stem Landscape Co., a fictional
design–build landscaping company in Tulsa, OK. It started as a
single-page design handoff (see `README.md`) and has since been built
out into a full static multi-page site, deployed to GitHub Pages.

- **Live site:** https://juliatwright22-source.github.io/stone-stem/
- **Repo:** https://github.com/juliatwright22-source/stone-stem (branch `main`)
- **Stack:** plain static HTML/CSS/vanilla JS. No framework, no build
  step required to deploy — GitHub Pages serves the files as-is.

## Source of truth for design

- `design-system/tokens/*.css` — authoritative colors, type, spacing,
  elevation, motion. Ported into `css/tokens.css`.
- `design-system/_ds_bundle.js` — compiled React reference components
  (Button, Card, NavBar, Footer, form controls, etc.). Read this
  before adding any new UI pattern — match its exact styles/hover
  logic rather than inventing new ones.
- `design-system/readme.md` — brand voice and visual rules (banned
  words, casing, tracking, icon rules). Follow this for any new copy.
- `Stone_and_Stem_Website.dc.html` — the original homepage spec
  (read-only reference, not runnable).
- `screenshots/01–08-section.png` — the pixel-accuracy target for the
  homepage specifically.

## Structure

- `index.html` — homepage, hand-authored, verified pixel-accurate
  against the screenshots. Don't regenerate this one via script.
- `css/tokens.css`, `css/styles.css`, `js/main.js` — shared styles/JS
  for every page.
- `about/`, `careers/`, `contact/`, `process/`, `services/`,
  `services/<slug>/`, `work/`, `work/<slug>/`, `service-area/<slug>/`
  — interior pages, each a real folder with its own `index.html`
  (clean URLs, e.g. `/services/design/`).
- `scripts/generate-pages.js` — regenerates every interior page (not
  the homepage) from data arrays (SERVICES, PROJECTS, TOWNS) plus
  shared nav/footer/page-header render functions. Run with
  `node scripts/generate-pages.js` after editing the data or the
  shared render functions. This keeps nav/footer and relative-path
  depth math consistent across ~20 pages instead of hand-editing each.

## Conventions that matter

- **All internal links are relative, not root-absolute** (`services/`,
  not `/services/`), and every internal link ends in a trailing slash.
  This is because the site deploys to a GitHub Pages *project* site
  (`.../stone-stem/`), not the domain root — root-absolute paths would
  silently break there. If you ever add a page by hand, follow this
  pattern; `scripts/generate-pages.js`'s `rel()`/`asset()` helpers do
  the depth math automatically.
- **The contact form has no backend.** GitHub Pages is static-only,
  so `contact/index.html` builds a `mailto:` link from the form
  fields on submit rather than POSTing anywhere. This is a deliberate,
  disclosed tradeoff (there's a note under the submit button), not a
  bug — don't "fix" it into a fake success state without wiring a
  real backend (e.g. Formspree) first.
- **Favicon:** `assets/logo-mark.png` via `<link rel="icon">` on every
  page — keeps the browser from 404ing on `/favicon.ico`.
- Brand voice: sentence case for headlines/body, uppercase only for
  eyebrows/nav/buttons/labels, verb-first buttons, no banned words
  (luxury, stunning, transform, dream, oasis, solutions, ROI,
  elevate), phone always dot-formatted. See `design-system/readme.md`
  for the full list before writing new copy.

## Verifying changes locally

There's no dev server checked in. To preview locally: run a static
file server from the project root (e.g. a tiny Node `http.createServer`
that maps directory requests to `index.html`, since GitHub Pages does
this and Python's/`serve`'s defaults don't always match) and open it
in a browser. Check both a top-level page and a nested one (e.g.
`/services/design/`) since that's where relative-path bugs show up.

## Session Log

### 2026-07-27 — Initial homepage build + full site build-out
- Read the design handoff (`README.md`, screenshots, design-system
  tokens/components, `Stone_and_Stem_Website.dc.html`) and rebuilt the
  homepage as static HTML/CSS/JS, verified pixel-accurate against all
  8 screenshots via a real Chromium browser (Playwright + local Edge,
  since no browser tooling was preinstalled).
- Fixed a real asset bug: `assets/logo-lockup-ivory.png` is not
  actually ivory-colored (opaque cream background) — switched the nav
  logo to `logo-lockup.png` + the CSS filter the design system itself
  specifies for logo-on-dark.
- Initialized git, created GitHub repo `stone-stem` under
  `juliatwright22-source`, pushed `main`.
- Built out the full site per user request ("build out the whole
  thing"): services (index + 7 detail pages), work (index + 3 project
  detail pages), about, process, careers, contact (with mailto-based
  estimate form), and 5 service-area pages. Used a one-off-turned-
  committed Node generator (`scripts/generate-pages.js`) to keep
  nav/footer and relative-path depth consistent across all new pages.
- Found and fixed two real bugs during verification: `.eyebrow` CSS
  was accidentally scoped to `.section-heading .eyebrow` only, so
  standalone eyebrow labels (e.g. project category on work detail
  pages) rendered unstyled; and `.content-split`'s `align-items:center`
  produced a large awkward gap above short text columns next to tall
  4:5 images (fixed to `align-items:start`).
- Committed and pushed the full build to `main`.
- Created this file.

### 2026-07-28 — Cleanup pass
- Homepage nav links (`SERVICES` / `OUR WORK` / `ABOUT` / `CONTACT`)
  were rendering in a muted sage-gray (`--text-on-dark-muted`) that
  blended into the hero photo's sky/foliage. Brightened to near-ivory
  (`rgba(245,242,235,0.92)`) to match the phone number/CTA legibility.
  Interior pages' light nav uses a separate color rule and was
  unaffected — this was reported as homepage-only, and was.
- Swapped the hero logo mark for a new bordered version the user
  supplied (`assets/newherologo.png`, 236×322, opaque ivory card
  background baked into the image itself, unlike the old transparent
  `logo-mark.png`). Kept it at the same 150px height; switched
  `.hero-mark` from a fixed 106px width to `width:auto` so the
  slightly different aspect ratio doesn't get squeezed or letterboxed.
- About page: now shows all four "How we work" steps inline instead
  of three plus a "See the full process" link to `/process/` (edited
  in `scripts/generate-pages.js`'s about-page body, then regenerated).
- Note: pasted/inline chat images can't be saved to disk directly by
  Claude — had to ask the user to drop the file into `assets/`
  themselves and confirm the filename before it could be wired in.
- Hero logo mark went through two more iterations the same day: the
  user's next upload (`newherodesign.png`) was a 1920×1080 canvas with
  the actual mark occupying a small centered rectangle — trimmed with
  a one-off `sharp().trim()` script (installed in the scratchpad, not
  committed) down to the tight card content before using it. Then,
  after being told the display size is fixed by CSS
  (`.hero-mark{height:150px;width:auto}`) regardless of source pixel
  dimensions, the user exported a properly pre-cropped
  450×640 file (`assets/newhero.png`, ~0.7:1 ratio matching the
  original mark) which is now the hero logo — no server-side cropping
  needed for that one.
- Real service photos replace the generic stock images on 6 of 7
  service detail pages (`services/design|build|stonework|plantings
  |outdoor-living|drainage`), sourced from `assets/{slug-without-
  hyphen}.png` (e.g. `assets/outdoorliving.png`). `services/lighting`
  intentionally still uses `uploads/stockimage6.png` — the user didn't
  supply a replacement for it. Updated via the `image:` field in each
  `SERVICES` entry in `scripts/generate-pages.js`, then regenerated.
- The user is actively curating `assets/` directly (adding/deleting
  files between turns) — don't assume a filename mentioned earlier in
  a session still exists; check before wiring it in.
