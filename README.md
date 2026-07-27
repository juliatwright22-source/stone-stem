# Handoff: Stone & Stem Landscape Co. — marketing homepage

## Overview
A single-page marketing homepage for Stone & Stem Landscape Co., a design–build landscaping studio serving Tulsa, OK and surrounding towns (Jenks, Bixby, Broken Arrow, Owasso). Tagline: "Crafted Outdoor Living."

The page sells the design–build proposition and drives one action: **Request an estimate**. Sections in order: full-bleed photographic hero with floating transparent nav → about + proof stats → seven-service grid → recent work (3 project tiles) → full-bleed quote band → green testimonial/CTA band → charcoal footer.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing intended look and behavior, not production code to copy directly. The task is to **recreate this design in the target codebase's existing environment** (React, Next.js, Astro, WordPress theme, etc.) using its established patterns, component library and build tooling. If no environment exists yet, pick the most appropriate framework for a small marketing site and implement the design there.

`Stone_and_Stem_Website.dc.html` is authored in a proprietary streaming-component format: markup lives inside `<x-dc>`, all styling is inline, and `<x-import component-from-global-scope="StoneStemDesignSystem_50e91a.X">` tags mount React components out of the design-system bundle. Do not try to run this format in production — read it as a spec. The design-system source in `design-system/` contains the real CSS custom properties and the compiled React components; those tokens and component behaviors are the authoritative values.

## Fidelity
**High-fidelity.** Colors, typography, spacing and interaction states are final and come from the Stone & Stem design system. Recreate pixel-accurately using the tokens below.

## Screens / Views

### Homepage (single scrolling page, 1200px max content width, 24px gutters)

#### 1a. Hero
- **Purpose:** establish the brand and push to estimate/work.
- **Layout:** full-bleed section, `min-height: 940px` (configurable 600–1200), `display:flex; flex-direction:column`. Background photograph `position:absolute; inset:0; object-fit:cover; object-position:center 20%` (vertical framing configurable: top 20% / center 50% / bottom 80%). A protection gradient (`--scrim-full`) sits over the photo. Content is relatively positioned above it.
- **Nav (NavBar, tone="dark"):** inside the 1200px container, `padding: 32px 0`, transparent background, 1px bottom border `--border-on-dark`. Left: full logo lockup, 46px tall, ivory-filtered. Center: nav links SERVICES / OUR WORK / ABOUT / CONTACT — Lato 700, 12px, uppercase, letter-spacing .14em, muted ivory; active link gets a 1px ivory underline 3px below. Right: phone `918.555.2476` (14px, .06em tracking, ivory) then an outline-inverse small button "Request an estimate".
- **Hero content block:** 1200px container, `padding: 130px 24px 120px`, vertically centered, column flex.
  - Logo mark `assets/logo-mark.png` at **150 × 106px**, original green/stone colors (no filter), left-aligned, 32px bottom margin. (The mark must never render below 36px tall.)
  - Eyebrow row: 32×1px rule in `--green-300` + text "TULSA · JENKS · BIXBY · BROKEN ARROW · OWASSO", Lato 700, 12px, uppercase, letter-spacing .22em, color `--green-300`. 32px bottom margin.
  - H1 "Crafted outdoor living": Cormorant Garamond 500, `--size-display-1` (76px), line-height `--leading-display`, color `--ivory-100`, `max-width:15ch`, margin 0.
  - Paragraph: 18px Lato, line-height `--leading-body`, color `rgba(245,242,235,0.82)`, `max-width:46ch`, 32px top margin. Copy: "Stone set by hand, plantings chosen for the site, and one crew that stays with your property from the first sketch to the last sweep."
  - Button row, 24px gap, 40px top margin: **"Request an estimate"** (variant inverse, size lg) and **"See our work"** (variant outlineInverse, size lg).

#### 1b. About + stats
- Ivory background, `padding: 112px 0`. Two-column grid `1fr 1fr`, 80px gap, vertically centered.
- Left: SectionHeading — eyebrow "WHO WE ARE" (rule + tracked uppercase, `--text-brand`), serif H2 "A landscape company that draws first" at `--size-display-3` (44px), intro paragraph 18px `--text-muted`, max 58ch: "We are a design–build studio: the person who measures your grade is the person who sets your stone. That is why our patios sit flat a decade later." Below it (48px top margin) a StatRow: **18** Years in Tulsa · **240+** Properties built · **2** Crews, no subs.
- Right: photograph in a 4:5 portrait frame, `border-radius: 4px`, `object-fit: cover`.

#### 1c. Services grid
- Ivory background, `padding: 0 0 112px`.
- SectionHeading — eyebrow "WHAT WE DO", title "Seven services, one standard".
- 4-column grid, 24px gap, 48px top margin. Seven ServiceCards then one inverse (charcoal) Card.
- **ServiceCard:** ivory `#FFFDF8` fill, 1px hairline border (10% charcoal), 4px radius, low warm shadow, **2px stone top rule that turns forest green on hover**, card lifts −2px with a deeper shadow on hover. Contents: numeric index (01–07), Lucide line icon at 22px / stroke-width 1.5 in forest green, serif title, 14px description.

| # | Icon (Lucide) | Title | Description |
| --- | --- | --- | --- |
| 01 | ruler | Design | Measured site plans and planting drawings before anything is built. |
| 02 | hammer | Build | One crew from first cut to final sweep — no subcontracted hand-offs. |
| 03 | mountain-snow | Stonework | Dry-laid walls, cut-stone steps and flagstone terraces set to last. |
| 04 | leaf | Plantings | Beds chosen for the site's light, soil and water — not a catalogue. |
| 05 | flame | Outdoor living | Kitchens, fire features and shade structures matched to the house. |
| 06 | lightbulb | Lighting | Low-voltage paths, uplit specimens and warm 2700K fixtures. |
| 07 | droplets | Drainage | Grading, dry creeks and French drains that move water away quietly. |

- **Eighth tile:** charcoal Card, 40px padding, space-between column, 32px gap. Serif 24px ivory line "Not sure where to start?" + small inverse button "Book a site walk".

#### 1d. Recent work
- Background `--surface-sunken` (warm ivory tint), `padding: 112px 0`.
- Header row: SectionHeading (eyebrow "RECENT WORK", title "Properties we finished this season") left, secondary button "All projects" right, aligned at the bottom.
- 3-column grid, 24px gap, 48px top margin, of **ProjectCard**s: 4:5 portrait, 4px radius, photo `object-fit:cover` scaling to **1.035 on hover over 420ms**, bottom protection gradient (`--scrim-bottom`), and a bottom-left stack (40px padding, 6px gap): category eyebrow 10.5px `--green-300`, serif 24px ivory title, 12.5px location at `rgba(245,242,235,0.72)`.
  1. Stonework — Terraced bluestone patio — Midtown Tulsa, OK
  2. Plantings — Oak shade garden — Jenks, OK
  3. Lighting — Evening walk lighting — Bixby, OK

#### 1e. Quote band
- Full-bleed photograph + `--scrim-full`, content in a 760px narrow container, `padding: 128px 24px`, centered.
- Eyebrow "MEASURED FIRST, THEN BUILT" (12px, .22em, `--green-300`), then serif 44px ivory line: "Every drawing starts on the property, in the light you will actually use it in."

#### 1f. Testimonial / CTA band
- Background `--surface-brand` (forest green), `padding: 112px 0`. Grid `1.3fr 1fr`, 80px gap, centered.
- Left: Testimonial (tone dark) — quote "They treated the back yard like it mattered — and the stonework still looks set, four winters on." — The Harmons — "Midtown Tulsa — terrace, plantings & lighting". Rendered with a 2px left edge rule.
- Right column, 24px gap, left-aligned: inverse Badge "Fully licensed & insured"; 16px body copy at `rgba(245,242,235,0.82)`: "Estimates are free, scheduled within one business day, and walked with a designer — not a salesperson."; inverse button "Request an estimate".

#### 1g. Footer
- Charcoal (`--surface-inverse`), `padding: 80px 48px 40px`, 1200px inner grid `1.4fr repeat(3,1fr)`, 48px gap.
- Brand column: logo mark 64px, serif 22px "Stone & Stem" (.06em tracking), then "Crafted Outdoor Living" in 11px uppercase `--green-300`.
- Columns: **Services** (Design, Build, Stonework, Plantings, Outdoor living, Lighting, Drainage) · **Company** (Our work, About, Process, Careers) · **Service area** (Tulsa, Jenks, Bixby, Broken Arrow, Owasso). Column titles 11px uppercase `--stone-500`; items 14px `--text-on-dark-muted`.
- Bottom bar: 1px `--border-on-dark` top border, 64px above, 32px padding-top; `918.555.2476` · `jonathan@stoneandstem.com` · `stoneandstem.com` left, "© Stone & Stem Landscape Co." right. 12.5px, .06em tracking, `--stone-500`.

## Interactions & Behavior
- **Nav:** links route to /services, /work, /about, /contact; the header floats transparently over the hero only (`tone="dark"`); on interior pages it is the light variant with an ivory background and hairline bottom border. It does not stick.
- **Buttons:** hover darkens one ramp step (green-600 → green-700); press is `scale(0.985)` + green-800. No ripple, no hue change. Focus ring = 2px ivory gap + 4px bronze (`--shadow-focus`), never browser blue.
- **Cards:** hover lifts −2px with a deeper warm shadow; ServiceCard top rule turns forest green.
- **Project photos:** `transform: scale(1.035)` on hover over 420ms `--ease-out-soft`.
- **Motion budget:** fades and 2px lifts only, 160–420ms, easing `cubic-bezier(0.16,0.84,0.44,1)`. No parallax, bounce, spring or slide-in. Optional reveal-on-scroll: a single 700ms fade + 8px rise.
- **Responsive (not designed — implement to these rules):** below ~1000px collapse the two-column about and testimonial grids to one column; services grid 4 → 2 → 1; work grid 3 → 2 → 1; hero min-height may drop to ~640px and the H1 to `--size-display-2`; nav collapses to a menu button with the phone number retained.
- No forms, loading states or validation on this page. The estimate form lives on /contact.

## State Management
The page is static. The only variable state in the prototype is authoring-time configuration, which in production should be content/CMS fields rather than runtime state:
- `heroHeight` (number, px, default 940) — hero min-height
- `heroImage` (string path, default the dusk terrace photo)
- `heroAlign` ("top" | "center" | "bottom", default "top") → `object-position: center 20% / 50% / 80%`

Hover state is local to buttons, cards and project tiles.

## Design Tokens
Authoritative source: `design-system/tokens/*.css` in this bundle. Key values:

**Color**

| Token | Hex | Use |
| --- | --- | --- |
| Warm Ivory | #F5F2EB | page background |
| Ivory (card) | #FFFDF8 | card fill |
| Charcoal | #2F3437 | inverse surfaces, footer, headings |
| Forest Green | #4D5D3F | single action/brand color |
| Stone Gray | #A39B90 | borders, rules, quiet fills |
| Bronze | #8C6D43 | hardware accent, focus ring — keep under 5% of a layout |

Plus ramp steps (green-300 on dark, green-600/700/800 for button states) and `--scrim-bottom` / `--scrim-full` protection gradients — the only gradients allowed in the system.

**Typography** — Cormorant Garamond 500 (display) + Lato 400/700 (UI/body), both Google Fonts stand-ins for unsupplied brand faces.
- Display scale: 76 / 58 / 44 / 36 / 28 / 22
- Body scale: 18 / 16 / 14 / 12.5
- Tracking: eyebrow .22em · nav .14em · button .13em · wordmark .06em · tagline .34em
- Casing: sentence case for headlines and body; uppercase only for eyebrows, nav, buttons, labels, tagline. No Title Case.

**Spacing** — 4px base. Section rhythm 96–128px vertical (this page uses 112px). Container 1200px, narrow prose 760px, gutters 24px.

**Radius** — 2 / 3 / 4 / 6px. `--radius-card` = 4px. 999px pills only for filter tags.

**Shadow** — warm and low (green/brown rgba, never blue-black). `sm` resting, `md`/`card-hover` on hover, `lg` for dialogs and toasts only. Never stacked.

## Assets

| File | Source | Use |
| --- | --- | --- |
| `assets/logo-lockup.png` | design system | NavBar full lockup (ivory via `brightness(0) invert(1) sepia(.1) saturate(1.2)` on dark) |
| `assets/logo-mark.png` | design system | hero mark (150px tall, original colors) and footer mark (64px) |
| `assets/wordmark.png` | design system | available, unused on this page |
| `uploads/stockimage1.png` | user-supplied stock | hero |
| `uploads/stockimage4.png` | user-supplied stock | about portrait |
| `uploads/stockimage5.png`, `stockimage3.png`, `stockimage6.png` | user-supplied stock | project tiles 1 / 2 / 3 |
| `uploads/stockimage2.png` | user-supplied stock | quote band |

Photography direction: warm late-afternoon-to-dusk light, deep greens and stone greys, slightly desaturated, no cool casts, no HDR, no black and white. Portrait 4:5 for project tiles, 16:9 for hero/detail. **The stock images here are placeholders — swap in real project photography before launch.**

Icons: Lucide 0.454.0, line only, stroke-width 1.5, 20–24px. Never filled, never two-tone, never in a colored circle.

## Files

| Path | What it is |
| --- | --- |
| `Stone_and_Stem_Website.dc.html` | the homepage design (read as spec, not runnable code) |
| `screenshots/01–08-section.png` | the rendered design, top to bottom in scroll order — the target appearance |
| `design-system/tokens/*.css` | design tokens — colors, type, spacing, elevation, motion, base |
| `design-system/styles.css` | token import entry point |
| `design-system/_ds_bundle.js` | compiled React components (NavBar, Button, Card, Badge, SectionHeading, ServiceCard, ProjectCard, Testimonial, StatRow, Footer, Logo) — read for exact markup and hover logic |
| `design-system/readme.md` | full brand guide: voice, palette discipline, motion, iconography |
| `assets/`, `uploads/` | logo artwork and photography |

## Notes for implementation
- **Match `screenshots/` exactly.** They are sequential scroll captures of the rendered design, top to bottom; treat them as the visual target.
- Use the design system's own components as the model; do not restyle raw HTML to imitate them, and do not invent colors, type sizes or radii outside the token set.
- Copy voice rules exactly: verb-first buttons ("Request an estimate", "Book a site walk"), dot-formatted phone, no emoji, no exclamation marks, and none of the banned words (luxury, stunning, transform, dream, oasis, solutions, ROI, elevate).
- Max two background colors per page: ivory plus one of charcoal or green (this page uses green for the testimonial band and charcoal for the footer, both grounded in the design system's own UI kit).
