# Charity Card — Благодійний фонд «Освіта. Наука. Медицина»

A design system for the **Charity Card** donation experience of the Ukrainian
charitable foundation **«Освіта. Наука. Медицина»** (*"Education. Science.
Medicine"*). The flagship product is a single-page donation site whose primary
job is to drive support for a live fundraising campaign.

> **Current campaign:** funds for a modern **hybrid operating clinic for head &
> neck surgery, traumatology and reconstructive surgery** at the University
> Hospital of **Lviv National Medical University (LNMU)**. Public goal:
> **20 000 000 грн**. Tagline: *«Це інвестиція у життя. У відновлення. У майбутнє.»*

The fund's identity rests on **three pillars**, encoded directly in the logo:

| Pillar | Ukrainian | Mark element | Signature colour |
|---|---|---|---|
| Education | Освіта | open book | brand blue `#13548C` |
| Science | Наука | atom | teal-green `#2E9E88` |
| Medicine | Медицина | medical cross + pulse | deep teal `#1F7A6A` |

---

## Sources & provenance

This system was built from materials provided by the foundation:

- **Logo** — `assets/logo-full.jpg` (original), cleaned into `logo-mark.png`
  (transparent icon), `logo-mark-cream.png`, `logo-wordmark.png`.
- **Campaign poster** — `assets/poster-lnmu.jpg` (LNMU charity-evening poster;
  source of the dramatic navy palette and campaign copy).
- **GitHub repo** — [`sviatkk666/charity-card`](https://github.com/sviatkk666/charity-card).
  *At build time the GitHub connector was not authorised, so the repo was not
  imported.* The user described it as an **early scaffold to be elevated**, so
  this system designs the brand up from the logo, poster, and the page-structure
  brief rather than recreating scaffold code. **Connect GitHub and re-run to fold
  in real copy, routes, and component structure** — explore the repo further to
  align the UI kit with the actual codebase.

Page structure follows the foundation's brief (top → bottom):
1. **Hero** — campaign focus: goal, amount raised, *«Підтримати збір»* CTA.
2. **Про збір** — detail & justification, current state of premises (photo),
   scan of the university's letter (for transparency).
3. **Про фонд** — mission, key statute points, link to the statute, non-profit
   decision, ЄДР extract.
4. **Політики** — links to fund policies (the set will grow over time).
5. **Контакти** — currently email only.

---

## Type

Two open Google Fonts, chosen as the closest match to the geometric sans in the
official logo/wordmark. **No original brand font files were provided** — flag
for the foundation if a licensed brand typeface exists.

- **Montserrat** — display, headings, and all numerals (tabular). Echoes the
  logo's geometric letterforms; reads as confident and institutional.
- **Manrope** — body copy and UI. Clean, warm, excellent Ukrainian Cyrillic.

Full token set in [`colors_and_type.css`](colors_and_type.css): primitives
(`--cc-blue`, `--cc-teal`, …), semantic roles (`--cc-primary`, `--cc-text`, …),
a fluid type scale (`--cc-fs-h1` …), spacing, radii, and elevation. Apply via the
`.cc-display / .cc-h1 / .cc-body / .cc-num …` utility classes.

> **Substitution flagged:** Montserrat + Manrope stand in for the logo typeface.
> Fonts load from the Google Fonts CDN (Cyrillic subset). For fully-offline use,
> drop the `.woff2` files into `fonts/` and swap the `@import` for `@font-face`.

---

## CONTENT FUNDAMENTALS

**Language.** Ukrainian-primary (with optional English secondary). All product
copy is written in natural, contemporary Ukrainian.

**Voice.** A balance of **hopeful & warm** and **serious & trustworthy** — the
two registers the brand lives between. Healing, восстановлення and future on one
side; transparency, non-profit status and official documents on the other.

**Person.** Speaks as **"ми"** (the fund) to **"ви"** (the supporter), but warmly
— *«Дякуємо, що ви поруч»*, *«Маєте питання чи хочете долучитися?»*. Inclusive,
never demanding.

**Casing.** Sentence case for body and most headings. **ALL-CAPS** is reserved
for short eyebrows/overlines (`ПРО ЗБІР`, `НАША МЕТА`) and the occasional poster-
style emphatic line. Never all-caps for long text.

**Tone of specific elements**
- *Eyebrows*: short, categorical — `Про збір`, `Прозорість`, `Підстава збору`.
- *Headlines*: emotive but concrete — *«Клініка, яка повертає обличчя і майбутнє»*.
- *The pledge line* is the brand's emotional refrain: **«Це інвестиція у життя.
  У відновлення. У майбутнє.»** Always teal, always weighty.
- *Money*: grouped with spaces, Ukrainian locale — `20 000 000 грн`,
  `7 420 000 грн`. Currency word `грн` lowercase, lighter weight beside the number.
- *Transparency copy* is plain and factual — *«Неприбуткова організація. Кошти
  спрямовуються виключно на створення клініки.»*

**Punctuation.** Ukrainian guillemets **«…»** for names and quotes (not " ").
Em/en dashes for asides. The apostrophe is the Ukrainian **ʼ** (`імʼя`).

**Emoji:** none. The brand does not use emoji. Warmth comes from colour, imagery
and word choice, not emoji.

**Illustrative data flag.** `raised` and `donors` in `ui_kits/website/data.js`
are **zeroed** for campaign start — update them as real contributions arrive.
The email is still a placeholder — replace with the foundation's actual address
before publishing. Site copy comes from the foundation's leaflet
(`uploads/листівка повний ткст.docx`); fund documents are published from `docs/`.

---

## VISUAL FOUNDATIONS

**Palette philosophy.** Cream paper is the home surface — it makes the site feel
human, calm and approachable. Deep navy (lifted from the poster) carries the
**dramatic, emotional fundraising moments** (hero alt-treatment, contacts band,
footer). Teal-green is the colour of **healing and life** and owns the donation
CTAs and progress. Brand blue is **institutional trust**.

- Primary blue `#13548C`, deep `#0B3A63`, soft tint `#E4EDF4`
- Teal `#2E9E88`, deep `#1F7A6A`, soft tint `#E2F1ED`
- Amber `#E0A23B` — sparing warmth accent ("інвестиція у життя")
- Cream `#FAF7F2` / warm cream `#F2ECE0`; ink navy `#0A2236`
- Warm-grey neutral ramp tuned toward the cream (never pure grey)

**Backgrounds.** Mostly **flat cream / warm-cream / white**, alternating to
separate sections. The one gradient used is the **hero/contacts dramatic
surface** — a radial navy gradient (`--cc-hero-bg`) echoing the poster, sometimes
with the poster photo blended in at low opacity (`mix-blend: luminosity`, masked
top/bottom). A large faint logo mark (≈5% opacity) can sit as a watermark on
light hero. **No** purple gradients, no noisy textures.

**Imagery.** Warm, documentary, human — real photos of premises, patients,
the team, scans of official letters. Treated honestly (not heavily filtered).
On the dramatic navy surface, photos drop to luminosity blend so they read as
texture rather than a literal image. User-supplied photos use drag-and-drop
`<image-slot>` placeholders.

**Corner radii.** Soft but not bubbly. Cards `--cc-r-lg` (20px) / panels
`--cc-r-xl` (28px); inputs & small tiles `--cc-r-sm`/`md` (10–14px); all buttons
and badges are **full pills** (`--cc-r-pill`).

**Cards.** White (or cream) fill, **1px hairline border** (`--cc-line`,
warm-tinted), soft shadow (`--cc-shadow-sm/md`). No coloured left-border accents.
Hover lifts the card `translateY(-2px)` and deepens the shadow + border colour.

**Shadows.** Soft, low, warm-tinted (navy-based rgba, not black). Three steps
(sm/md/lg) plus coloured "glow" shadows under primary/donate buttons
(`--cc-shadow-blue`, `--cc-shadow-teal`).

**Buttons.** Pill-shaped. *Donate* = teal fill + teal glow; *Primary* = blue fill
+ blue glow; *Secondary* = blue outline on transparent; *Ghost* = text only;
*onDark* = translucent white. Hover: `translateY(-1px)` + slight brightness lift
(fills) or soft tint fill (outline/ghost). Press relies on the lift settling.

**Progress meter.** Rounded track (`--cc-meter-track`) with a teal→blue gradient
fill (`--cc-meter-fill`) that animates from 0 to its value on mount
(`cubic-bezier(.2,.7,.2,1)`, ~1.1s).

**Motion.** Restrained and purposeful. Fades + small rises for the modal
(`ccFade`, `ccPop`), the meter fill animation, smooth scroll, and the success
check pop. Hover transitions ~120–150ms. **No** bounces, no infinite decorative
loops.

**Transparency & blur.** Used on the sticky header (translucent cream +
`backdrop-filter: blur`) once scrolled, the donation card on the dramatic hero
(glassy translucent white), and the modal backdrop. Sparingly elsewhere.

**Layout rules.** Centered max-width container (`Container`, ≤1180px) with 24px
gutters. Sticky header. Generous vertical rhythm (≈88px section padding). Two-
column splits collapse to one column under 880px; card grids to one column under
760px.

**Hairlines & dividers.** 1px `--cc-line`; dashed `--cc-line-strong` to separate
sub-blocks (e.g. policies under transparency); on dark, `--cc-line-on-dark`.

---

## ICONOGRAPHY

- **Logo / mark.** The atom + medical-cross + open-book lockup is the core brand
  asset. Use `assets/logo-mark.png` (transparent) on any surface; pair with the
  `Освіта · Наука · Медицина` wordmark or the typeset name. Keep clear space ≈
  the height of the cross around the mark. Don't recolour the mark.
- **UI icons.** A small **Lucide-style** line set (1.8px stroke, round caps/joins)
  defined inline in [`ui_kits/website/icons.jsx`](ui_kits/website/icons.jsx):
  Heart, Arrow, File, Download, Mail, Check, Shield, Calendar, Pin, Users, Book,
  Atom, Activity, Menu, X, Chevron. The three-pillar glyphs (Book / Atom /
  Activity-pulse) intentionally echo the logo.
  > **Substitution flagged:** the source repo provided **no icon assets**, so this
  > is an open Lucide-style stand-in. If a real icon set exists, drop the SVGs in
  > `assets/icons/` and replace `icons.jsx`. The closest CDN match is
  > [Lucide](https://lucide.dev) (same geometry) if you prefer to link it.
- **Emoji / unicode icons:** not used. Bullets and status use real icons or the
  `●` dot inside badges only.

---

## Index / manifest

| Path | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography. |
| `SKILL.md` | Agent-Skill entry point (works in Claude Code). |
| `colors_and_type.css` | All design tokens + `.cc-*` type utilities. |
| `assets/` | Logo (full / mark / wordmark), campaign poster. |
| `preview/` | 21 Design-System preview cards (Colors / Type / Spacing / Components / Brand). |
| `ui_kits/website/` | **Donation site UI kit** — see its own `README.md`. |

**UI kits**
- `ui_kits/website/` — the Charity Card donation landing page (hero + donation
  card + meter, Про збір, Про фонд, Прозорість, Контакти, footer, donate modal),
  assembled in `index.html` with a Tweaks panel (hero style · CTA colour).

*No slide template was provided, so no `slides/` deck was created.*
