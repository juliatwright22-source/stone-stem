# Stone & Stem Landscape Co. — Design System

Stone & Stem is a **luxury outdoor landscaping company** serving Tulsa, Oklahoma and the surrounding towns (Jenks, Bixby, Broken Arrow, Owasso). It is a design–build studio: the same people who measure the grade set the stone. Services shown on brand collateral are **Design | Build | Stonework | Plantings | Outdoor Living | Lighting | Drainage**. Tagline: **"Crafted Outdoor Living."** Owner: Jonathan Laboube. Contact on collateral: 918.555.2476 · jonathan@stoneandstem.com · stoneandstem.com.

The brand reads *quiet luxury, not landscaping-truck loud*: warm ivory paper, forest green, hand-set stone greys, a serif wordmark in small caps, and bronze used like a hardware detail.

## Sources given
| Source | What it gave us | Status |
| --- | --- | --- |
| `uploads/Stone & Stem Lanscape Logo2.png` | Primary logo lockup (mark + wordmark + "Landscape Co." rule) | Used — cropped into `assets/` |
| `uploads/Stone&Stem_Brand Mockup.png` | Vehicle, trailer, apparel, business card, yard sign, and the **named palette bar** (Forest Green #4D5D3F, Charcoal #2F3437, Stone Gray #A39B90, Warm Ivory #F5F2EB, Bronze #8C6D43) | Used — primary source of truth |
| `uploads/Stone_Stem_Brand_Standards.html` | **Unusable.** The file is a saved SharePoint/OneDrive *viewer page* (`Stone_Stem_Brand_Standards_v1.pdf` was never included) — it contains Microsoft app chrome only, no brand content. | ⚠️ Needs re-supply as the actual PDF |

No codebase, Figma file, website or deck was provided. Everything below the palette and logo is **inferred from the collateral** and marked where it is an interpretation.

## Index
- `styles.css` — the one file consumers link. `@import` list only.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/` — `logo-source.png`, `logo-lockup.png` (transparent), `logo-lockup-ivory.png`, `logo-mark.png`, `wordmark.png`, `brand-mockup.png`, `image-slot.js`
- `guidelines/` — 23 specimen cards (Brand, Colors, Type, Spacing)
- `components/` — `core/`, `forms/`, `feedback/`, `navigation/`, `brand/`
- `ui_kits/website/` — click-through recreation of the public site (see its README)
- `thumbnail.html`, `SKILL.md`

## Components
**core/** Button · IconButton · Badge · Tag · Card · Logo
**forms/** Field · Input · Textarea · Select · Checkbox · Radio · Switch
**feedback/** Dialog · Toast · Tooltip
**navigation/** NavBar · Tabs · Footer
**brand/** SectionHeading · ServiceCard · ProjectCard · Testimonial · StatRow · ImageFrame

### Intentional additions
No source defined a component inventory, so a standard set was authored. Five brand-specific additions exist because the collateral implies them: `Logo` (renders the supplied artwork so nobody redraws the mark), `SectionHeading` (the eyebrow-rule + serif-title block seen on the yard sign and card), `ServiceCard` (the seven-service list on the trailer), `ProjectCard` and `ImageFrame` (photography is central to this category), `StatRow` and `Testimonial` (standard proof blocks for a residential build company).

## CONTENT FUNDAMENTALS
- **Voice:** plain-spoken craftsman with an editorial polish. Short declarative sentences. The confidence comes from specifics, never adjectives — "cut bluestone on a compacted base, swept with polymeric sand," not "stunning premium hardscape solutions."
- **Person:** "we" for the company, "you/your" for the client. Never "I". Never third-person ("Stone & Stem offers…") outside legal copy.
- **Casing:** sentence case for headlines and body ("Stone, softened by planting"). UPPERCASE + wide tracking only for eyebrows, nav, buttons, labels and the tagline. Title Case is not used.
- **Headline shape:** 3–6 words, concrete, often two clauses with a comma: *"Measured first, then built."* *"A landscape company that draws first."*
- **Body length:** 1–3 sentences per block, max ~66 characters per line.
- **Buttons:** verb-first, 2–4 words — "Request an estimate", "Book a site walk", "See our work". Never "Submit", never "Learn more" alone, never "Click here".
- **Numbers:** written as digits with a unit of proof — "18 years in Tulsa", "240+ properties", "one business day", "6 weeks". Phone is always dot-formatted: 918.555.2476.
- **Emoji: never.** Not in UI, not in marketing, not in email. The exclamation mark is also effectively banned.
- **Words the brand uses:** crafted, set, measured, grade, drainage, dry-laid, terrace, beds, site walk, crew, season, property.
- **Words the brand avoids:** luxury (it demonstrates it instead), stunning, transform, dream, oasis, solutions, ROI, "elevate".
- **Tagline is fixed:** "CRAFTED OUTDOOR LIVING" — uppercase, ~0.34em tracking, never reworded or translated into a sentence.

## VISUAL FOUNDATIONS
- **Palette discipline:** warm ivory (`#F5F2EB`) is the page; charcoal (`#2F3437`) is the inverse; forest green (`#4D5D3F`) is the single action/brand colour; stone grey is structure (borders, rules, quiet fills); bronze is a hardware accent kept under ~5% of any layout. Max two background colours per page or deck — ivory plus one of charcoal/green.
- **Type:** serif display (Cormorant Garamond 500) for everything expressive; humanist sans (Lato 400/700) for all running copy and UI. The pairing is always: tracked uppercase eyebrow → serif headline → sans paragraph. Display sizes 76/58/44/36/28/22; body 18/16/14/12.5.
- **Tracking is the brand's signature:** eyebrows .22em, nav .14em, buttons .13em, wordmark .06em, tagline .34em.
- **Spacing:** 4px base scale; sections breathe at 96–128px vertical; 1200px max container, 760px for narrow prose; 24px gutters. Layout is a plain 12-column-feeling grid — no diagonal cuts, no overlapping collage.
- **Corner radii:** architectural and nearly square — 2/3/4/6px. `--radius-card` is **4px**. Pills (999px) exist for exactly one thing: filter `Tag`s.
- **Cards:** ivory (`#FFFDF8`) fill, 1px hairline border at 10% charcoal, 4px radius, one low warm shadow. `ServiceCard` adds a 2px stone top rule that turns forest green on hover. Never a coloured left border, never a gradient fill, never stacked shadows.
- **Shadows:** warm and low — greens/browns in the rgba, never blue-black. Two levels in normal use (`sm` resting, `md`/`card-hover` on hover); `lg` is dialogs and toasts only.
- **Backgrounds:** flat colour bands, plus full-bleed photography. No gradient washes as decoration, no repeating patterns, no hand-drawn illustration, no texture overlays. The only gradients in the system are **protection gradients** over photography (`--scrim-bottom`, `--scrim-full`) — the brand uses a scrim, never a solid capsule or text plate, behind type on images.
- **Imagery:** warm, late-afternoon-to-dusk daylight; deep greens, stone greys, bronze-ish wood; slightly desaturated; no cool blue casts, no HDR, no grain filter, no black and white. People appear as crew at work or clients using the space — never stock-smiling. Portrait 4:5 for project tiles, 16:9 for hero and detail, 4:3 for supporting.
- **Transparency & blur:** almost never. Two sanctioned uses: the scrim over photography, and `--glass-dark` + 10px blur for a floating control bar over content. No frosted cards, no translucent panels.
- **Motion:** calm and horizontal. Fades and 2px lifts, 160–420ms, `--ease-out-soft` (cubic-bezier(0.16,0.84,0.44,1)). Photographs scale to 1.035 on hover over 420ms. **No bounce, no spring, no parallax, no slide-in-from-side.** Reveal-on-scroll, if used, is a single 700ms fade + 8px rise.
- **Hover states:** filled buttons darken one ramp step (green-600 → green-700); outlined controls swap border to forest green and text to green; cards lift −2px with a deeper shadow and their top rule turns green; links darken and their underline darkens with them. Never lighten, never change hue, never grow.
- **Press states:** `scale(0.985)` plus one further ramp step darker (green-800). No colour flash, no ripple.
- **Borders & rules:** 1px `--border-hairline` inside components, 1px `--border-default` (stone-300) for structural rules, 2px only for emphasis (active tab, testimonial edge, card top rule). Section dividers are hairline rules, never thick bars.
- **Focus:** never the browser blue. `--shadow-focus` = 2px ivory gap + 4px bronze ring; inputs additionally take a forest-green border and a 3px 12%-green ring.
- **Fixed elements:** the site header may float transparently over a hero (`NavBar tone="dark"`); everything else scrolls. Dialogs centre over a 62% charcoal scrim with a 3px blur.

## ICONOGRAPHY
- **No icon set was supplied** — no icon font, no SVG sprite, no PNG glyphs exist in the source material. **Substituted: [Lucide](https://lucide.dev) 0.454.0 via CDN**, at `stroke-width: 1.5`, 20–24px, square-ish caps. Flagged for the user's approval.
- Icons are **line only** — never filled, never two-tone, never in a coloured circle. They render in `--forest-green` on ivory, `--ivory-100` on dark, or `--text-body` when purely functional.
- Service icons in use: `ruler` (Design), `hammer` (Build), `mountain-snow` (Stonework), `leaf` (Plantings), `flame` (Outdoor living), `lightbulb` (Lighting), `droplets` (Drainage). UI icons: `arrow-right`, `arrow-left`, `check`, `phone`, `mail`, `share`.
- **Unicode is used sparingly and deliberately** where an icon would be too loud: `·` as a meta separator, `→` inside ghost links, `×` for dismissal, `▾` as the select caret.
- **Emoji are never used** as icons or anywhere else.
- The **logo mark is not an icon.** Do not use it as a bullet, favicon-sized glyph below 36px tall, or list marker; use `assets/logo-mark.png` at 36px+ only.

## Known substitutions & gaps
1. **Fonts.** No binaries were supplied. Cormorant Garamond (display) and Lato (UI) are Google Fonts stand-ins loaded via `tokens/fonts.css`; the real wordmark face is unknown. Swap in real `@font-face` files when available.
2. **Icons.** Lucide substituted (above).
3. **Photography.** None supplied — every image in the UI kit is a droppable `<image-slot>` placeholder.
4. **Brand standards PDF.** Not readable (see Sources). Any rule in this document not visible in the logo or mockup is an interpretation and should be checked against that PDF.
