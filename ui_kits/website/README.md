# Website UI Kit — Charity Card donation site

A high-fidelity, interactive recreation of the **«Освіта. Наука. Медицина»**
donation landing page. This is a *visual + interaction* kit — cosmetic, not
production-wired (no real payment provider).

## Run it
Open `index.html`. It loads React 18 + Babel (in-browser) and the brand tokens
from `../../colors_and_type.css`. A **Tweaks** panel (toolbar) lets you explore:
- **Стиль hero** — `paper` (cream, calm) vs `dramatic` (navy poster surface).
- **Колір CTA** — `teal` (donate) vs `blue` (primary).

## Structure (page order matches the foundation's brief)
1. **Header** — sticky, turns translucent-blurred on scroll; logo + nav + donate.
2. **Hero** — campaign focus: title, lede, the pledge line, event date/place, and
   a **DonationCard** (live meter + amount presets + CTA). Two visual treatments.
3. **Про збір** (`CollectionSection`) — justification, partner institutions,
   *why* cards, **premises photo** + **scan of the university letter**
   (drag-and-drop `<image-slot>`s for real content).
4. **Про фонд** (`FundSection`) — mission, three pillars, statute principles,
   download-statute CTA, quote panel.
5. **Прозорість** (`TransparencySection`) — document tiles (Статут / неприбутковість
   / ЄДР) + growing **Політики** list.
6. **Контакти** (`ContactsSection`) — dramatic navy band, email CTA.
7. **Footer** + **DonateModal** (fake checkout → thank-you state).

## Files
| File | Exports |
|---|---|
| `data.js` | `window.CC_DATA` content + `window.fmtUAH` (uk-UA money formatter). |
| `icons.jsx` | Lucide-style icon components. |
| `primitives.jsx` | `Button`, `Badge`, `Meter`, `AmountPicker`, `Eyebrow`, `Container`. |
| `header-hero.jsx` | `Header`, `Hero`, `DonationCard`. |
| `sections-about.jsx` | `SectionHead`, `ImageSlot`, `CollectionSection`, `FundSection`. |
| `sections-trust.jsx` | `DocTile`, `TransparencySection`, `ContactsSection`, `Footer`. |
| `donate-modal.jsx` | `DonateModal`. |
| `image-slot.js` / `tweaks-panel.jsx` | starter components. |

All components attach to `window` (separate Babel scopes). Style objects are
inlined or uniquely named — no shared `styles` global.

## Known stubs
- **Amounts & donor count** start at 0 in `data.js`; set `window.CC_COUNTER_URL`
  (published Google Sheet CSV) to let the foundation update them without code.
- **Payment** is a real NBU payment QR (`assets/qr-donate.jpg` + `payment` in
  `data.js`) — opens in any Ukrainian bank app; no checkout form by design.
- `<image-slot>` persistence writes a sidecar at the **project root**; from this
  nested path drops render but may not persist. Move the page to root, or accept
  placeholder-only behaviour in the kit.
- Built without the `sviatkk666/charity-card` repo (connector wasn't authorised).
  Re-run with GitHub connected to align with real routes/components.
