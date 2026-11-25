# Fortabella

Latina-owned, bilingual (EN/ES) sticker shop for women who love fitness. Motto: "Strength is
beauty / La fortaleza es belleza". Instagram @fortabellastickers; domain fortabellashop.com
(not live yet). Stage: **four demo directions built 2026-11-25, waiting for the client to
react.** Product brief: `PRODUCT.md`.

## Layout

- `index.html` — presenter hub for the four directions (noindex)
- `1-rosa-y-oro/` — blush boutique, logo centred, stickers in arched niches; Bodoni Moda + Jost
- `2-terciopelo/` — black velvet jewelry box: generated velvet plates in `2-terciopelo/img/` (cushion behind every sticker, velvet hero ground), gold buy colour; Marcellus + Jost
- `3-flash-sheet/` — tattoo flash sheet in thick black linework, bilingual glossary; Grenze Gotisch + Archivo
- `4-flor-fuerte/` — crimson fields, the logo's own painted rose (`shared/brand/rose.webp`) turning behind the hero sticker; Gloock + Figtree
- Each demo: `index.html` (home), `shop.html` (filters, `?cat=`), `product.html?id=<id>`, `theme.css`
- `shared/data/catalog.js` — **the one file to edit to add stickers, categories, prices**; `checkoutUrl` goes here at launch
- `shared/js/store.js` — engine: header/footer/cart dialog injection, EN/ES strings, grids, shop, product page, cart (localStorage key `fortabella:cart:<demo>`), sticker SVG renderer
- `shared/css/core.css` — structure shared by all demos; each `theme.css` sets tokens and the look
- `shared/brand/` — `logo-full.png` (from the client's `Logo_transparent.tiff`), `logo-mark.webp` (no tagline; tagline is set as live text so it reads on dark grounds), `logo-mark-720.webp` (nav), `favicon-64.png`
- `shared/thumbs/` — hub thumbnails (1440x900 first-screen captures)
- `DESIGN.md` + `.impeccable/design.json` — the shared system and each direction's tokens/rules (One Buy Colour, One Field, Real Material); read before building out the chosen direction
- `source/generated/` — original Higgsfield outputs for the Terciopelo velvet (prompts in the `.json` sidecars next to the WebPs)
- `shared/brand/rose.webp`, `rose-small.webp` — roses lifted from the client logo (black backing keyed out); `logo-lockup.webp` includes the logo's own tagline (light grounds only)

Static HTML, no build step. Preview: `python3 -m http.server 8850` from this folder, or the
`fortabella` entry in `.claude/launch.json`. Pages need a server (query strings, localStorage).

## Rules

- **Stickers are the client's real designs** (`shared/products/*.webp`, originals in `source/client/`, not in git). Bilingual designs are one product with `versions` (en/es); the product page has a version picker and cart lines store the version. Products without an image still fall back to the drawn SVG `art` renderer.
- **Sample data:** prices ($4.50 / $12 pack), sizes, finishes and descriptions are placeholders. Confirm with the client. No invented reviews, customer counts, shipping promises or press.
- **Checkout** is not wired: the cart's Checkout button shows a "connects at launch" note until `checkoutUrl` is set.
- Logo is a brand asset: keep its gold bevel and black outline as supplied; never recolour it.
- Montserrat is used only inside sticker art (matches the logo tagline); UnifrakturMaguntia stands in for the logo's Old English lettering on stickers.
