---
name: Fortabella
description: Bilingual (EN/ES) fitness sticker shop, Latina-owned. One shared shop system wearing four pitch directions until the client picks one.
colors:
  rosa-ground: "#f8e5e7"
  rosa-surface: "#fff8f2"
  rosa-surface-2: "#f1d3d8"
  rosa-ink: "#2a0e15"
  rosa-ink-soft: "#6a3442"
  rosa-crimson: "#b3123e"
  rosa-crimson-deep: "#93072f"
  rosa-gold: "#d99a12"
  rosa-wine: "#3a0e18"
  velvet-ground: "#110a0c"
  velvet-surface: "#1d1215"
  velvet-surface-2: "#2b1a1f"
  velvet-footer: "#0a0607"
  velvet-ink: "#fff2e2"
  velvet-ink-soft: "#d8c0b2"
  velvet-gold: "#ebb33a"
  velvet-gold-light: "#f5c556"
  velvet-cream: "#fff4e4"
  velvet-cream-ink: "#1a0d10"
  velvet-crimson: "#c8174a"
  flash-ground: "#f5ecdd"
  flash-surface: "#efe3cf"
  flash-surface-2: "#e5d4b9"
  flash-ink: "#17110f"
  flash-ink-soft: "#594a40"
  flash-crimson: "#b3123e"
  flash-crimson-deep: "#950a31"
  flash-gold: "#c98a0b"
  flash-olive: "#5e7019"
  flash-crimson-ink: "#fff4e4"
  flor-ground: "#fff3e6"
  flor-surface: "#fbe6dc"
  flor-surface-2: "#f3d2c8"
  flor-ink: "#1c0a0e"
  flor-ink-soft: "#6b2a38"
  flor-rose: "#9e0f35"
  flor-rose-hover: "#800a2a"
  flor-rose-deep: "#730a27"
  flor-gold: "#f2b51c"
  flor-olive: "#8fa12a"
typography:
  body:
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  button:
    fontSize: "16px"
    fontWeight: 600
    lineHeight: 1
  rosa-display:
    fontFamily: "Bodoni Moda, Didot, serif"
    fontSize: "clamp(36px, 3.9vw, 56px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  rosa-body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  velvet-display:
    fontFamily: "Marcellus, Trajan Pro, serif"
    fontSize: "clamp(38px, 4.4vw, 64px)"
    fontWeight: 400
    lineHeight: 1.04
    letterSpacing: "0em"
  velvet-body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  flash-display:
    fontFamily: "Grenze Gotisch, UnifrakturMaguntia, serif"
    fontSize: "clamp(40px, 3.9vw, 58px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "0em"
  flash-body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  flor-display:
    fontFamily: "Gloock, Bodoni Moda, serif"
    fontSize: "clamp(40px, 4.8vw, 74px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  flor-body:
    fontFamily: "Figtree, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  none: "0px"
  velvet-btn: "2px"
  flor-card: "28px"
  pill: "999px"
spacing:
  gutter-min: "16px"
  gutter-max: "40px"
  grid-gap: "28px"
  head-h: "76px"
  head-h-mobile: "64px"
  max-width: "1360px"
  touch-min: "44px"
components:
  rosa-button-buy:
    backgroundColor: "{colors.rosa-crimson}"
    textColor: "{colors.rosa-surface}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  rosa-button-buy-hover:
    backgroundColor: "{colors.rosa-crimson-deep}"
  rosa-button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.rosa-ink}"
    rounded: "{rounded.pill}"
    padding: "0 30px"
    height: "54px"
  velvet-button-buy:
    backgroundColor: "{colors.velvet-gold}"
    textColor: "{colors.velvet-ground}"
    rounded: "{rounded.velvet-btn}"
    padding: "0 24px"
    height: "48px"
  velvet-button-buy-hover:
    backgroundColor: "{colors.velvet-gold-light}"
  velvet-button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.velvet-ink}"
    rounded: "{rounded.velvet-btn}"
    padding: "0 30px"
    height: "54px"
  flash-button-buy:
    backgroundColor: "{colors.flash-crimson}"
    textColor: "{colors.flash-crimson-ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  flash-button-buy-hover:
    backgroundColor: "{colors.flash-crimson-deep}"
  flash-button-line:
    backgroundColor: "transparent"
    textColor: "{colors.flash-ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  flor-button-buy:
    backgroundColor: "{colors.flor-rose}"
    textColor: "{colors.flor-ground}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  flor-button-buy-hover:
    backgroundColor: "{colors.flor-rose-hover}"
  flor-button-buy-on-rose:
    backgroundColor: "{colors.flor-gold}"
    textColor: "{colors.flor-ink}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "56px"
  flor-button-outline-light:
    backgroundColor: "transparent"
    textColor: "{colors.flor-ground}"
    rounded: "{rounded.pill}"
    padding: "0 32px"
    height: "56px"
---

# Design System: Fortabella

## Overview

**Creative North Star: "The Logo Sets the Room"**

Fortabella's supplied logo (cream blackletter with a gilded bevel, crimson wild roses with gold centres, olive leaves, a gold diamond between the two halves of the motto) is the one ornate object in every direction. Each direction builds a room around it: a blush boutique (Rosa y Oro), a black velvet jewellery box (Terciopelo), a tattoo flash sheet (Flash Sheet), a field of crimson petals (Flor Fuerte). The shop underneath is one system: same header, product card, filters, product page, quantity stepper, cart drawer and footer, written once in `shared/css/core.css` and `shared/js/store.js`, and fed by one data file, `shared/data/catalog.js`.

The project currently holds all four directions because the client has not chosen yet. A future build extends exactly one of them. Read the Shared sections first, then the block for the chosen direction, and ignore the other three. Never mix directions: the token names are shared, but each direction's values, shapes and buy colour belong to that direction alone.

Density is boutique, not marketplace: large display type, generous section padding (roughly 72px to 150px vertically), four-up product grids on desktop and two-up on phones. The primary visitor arrives from Instagram on a phone, so every interactive target is at least 44px tall.

**Key Characteristics:**
- One shared structural system (`core.css` + `store.js`) with four token sets, each in its direction's `theme.css`.
- The client logo is used exactly as supplied, never recoloured or redrawn.
- The motto always appears in both languages, joined by the logo's gold diamond.
- One filled colour means "buy" in each direction; every other button is outlined or ghosted.
- Sticker art and prices are labelled samples until the client supplies real ones.
- Fully bilingual: every UI string lives in EN and ES in `store.js`; sticker phrases stay in their original language.

## Colors

Every direction draws its palette from the logo itself: crimson from the roses, gold from the bevel and diamond, olive from the leaves, cream from the lettering, near-black from the outline.

### Shared token contract
Each `theme.css` sets the same custom properties, and components read only these: `--ground` (page), `--surface` and `--surface-2` (card wells and hover), `--ink` and `--ink-soft` (text), `--accent` / `--accent-hover` / `--accent-ink` (the buy colour), `--gold` (the logo diamond and small accents), `--sticker-edge` (stand-in sticker die-cut shadow), `--hover-tint`, `--focus`, `--head-bg` / `--head-ink`, `--foot-bg` / `--foot-ink`, `--cart-bg`. Sections that change ground (a wine, cream, black or rose field) re-scope `--ink-soft`, `--sticker-edge` and `--focus` locally instead of hard-coding colours on children.

### Direction 1: Rosa y Oro (blush boutique)
- **Primary, Rosa Crimson** (rosa-crimson; hover rosa-crimson-deep): every add-to-cart and the pack buy. The only filled colour on the page.
- **Secondary, Wine** (rosa-wine): the one dark field, used once, for the pack section.
- **Tertiary, Diamond Gold** (rosa-gold): the gem in the motto, the small diamond before each card's category, the "added" state on the wine field.
- **Neutral:** Blush ground (rosa-ground) for the page and header; Shell cream (rosa-surface) for niches, the featured case and the footer; Petal (rosa-surface-2) for hover; Bordeaux Ink (rosa-ink) for text; Mauve Ink (rosa-ink-soft) for secondary text.

### Direction 2: Terciopelo (black velvet)
- **Primary, Velvet Gold** (velvet-gold; hover velvet-gold-light): the buy colour everywhere in this world, plus prices, the cart count, active filter chips, focus rings and text selection.
- **Secondary, Cream Card** (velvet-cream with velvet-cream-ink): the one light field, the pack section.
- **Neutral:** Black Velvet (velvet-ground), Velvet Lining (velvet-surface, also the cart drawer), Plush (velvet-surface-2, cart foot and qty), Deep Footer (velvet-footer); Cream Ink (velvet-ink) and Champagne (velvet-ink-soft) for text.
- **Retained token, Velvet Crimson** (velvet-crimson): still set as `--accent` (caret colour, focus inside the cream pack) but never used as a fill since the review moved buying to gold.

### Direction 3: Flash Sheet (tattoo flash)
- **Primary, Flash Crimson** (flash-crimson; hover flash-crimson-deep): buy buttons and prices.
- **Secondary, Tattoo Ink** (flash-ink): all linework, the active chip, the one black pack field.
- **Tertiary:** Old Gold (flash-gold) for the pack title on black and the "=" in the glossary; Leaf Olive (flash-olive) for the "added" state.
- **Neutral:** Sheet Paper (flash-ground), Aged Paper (flash-surface), Kraft (flash-surface-2), Faded Ink (flash-ink-soft).

### Direction 4: Flor Fuerte (crimson rose fields)
- **Primary, Rose** (flor-rose; hover flor-rose-hover): buy buttons on light grounds, the active chip, and the full-bleed hero and collections fields.
- **Secondary, Petal Gold** (flor-gold): the buy colour on rose fields, where a rose button would vanish; also the footer motto and second line of the statement.
- **Tertiary, Leaf Olive** (flor-olive): the "added" state on cards.
- **Neutral:** Cream (flor-ground), Blush (flor-surface, pack card and product well), Petal (flor-surface-2, hover), Rose Deep (flor-rose-deep), Black Rose (flor-ink, the statement band and the footer), Rose Ink (flor-ink-soft).

### Named Rules
**The One Buy Colour Rule.** Each direction has exactly one filled colour that means "add to cart": crimson in Rosa y Oro and Flash Sheet, gold in Terciopelo, rose in Flor Fuerte (gold only where the ground is itself rose). Secondary actions are outlined, ghosted or plain links. The "added" state swaps to a different fill (ink, olive or cream) so the buy colour never reads as a confirmation.

**The One Field Rule.** Each direction's home page carries one contrasting colour field and only one: wine in Rosa y Oro, cream in Terciopelo, black in Flash Sheet. Flor Fuerte is the exception by design: the rose field is its world (hero and collections), and its single contrasting band is the black statement.

## Typography

**Shared body:** each direction's text face at 17px / 1.55 (16px under 560px), weight 400; UI controls at 600; prices bold with tabular numerals. Display and body pairings by direction:

| Direction | Display | Body |
|---|---|---|
| Rosa y Oro | Bodoni Moda 500, -0.015em | Jost |
| Terciopelo | Marcellus 400, 0 tracking | Jost |
| Flash Sheet | Grenze Gotisch 700, line-height 0.95 | Archivo |
| Flor Fuerte | Gloock 400, -0.01em | Figtree |

Montserrat 800 and UnifrakturMaguntia are loaded on every page only for the stand-in sticker art drawn by `store.js`; they are not part of any direction's UI type and leave with the stand-in art.

**Character:** a high-contrast or inscriptional display face that echoes some quality of the logo (Didone elegance, Roman inscription, blackletter, soft Didone weight) over a plain geometric or grotesque sans that stays out of the way.

### Hierarchy
- **Display** (hero h1): sizes per direction in the frontmatter; max 13 to 15ch wide, balanced wrap.
- **Headline** (section titles): clamp(32px, 3.4vw, 52px) to clamp(36px, 4.2vw, 64px), line-height 1.02 to 1.05. Flash Sheet runs larger (glossary clamp(48px, 5.6vw, 88px); pack clamp(52px, 6vw, 96px)) because blackletter needs size to read.
- **Statement** (Terciopelo and Flor Fuerte vow band): up to clamp(48px, 7vw, 112px), line-height 0.98.
- **Shop and product titles:** clamp(40px, 5vw, 72px); Flash Sheet clamp(56px, 6.4vw, 100px).
- **Card name:** display face, 22px (Rosa, Terciopelo), 24px (Flor), 30px (Flash).
- **Lede / body:** 18px for section sub-copy, 17px body, max 34 to 56ch.
- **Small:** 14 to 15px for meta, crumbs, counts and cart notes, in `--ink-soft`.

### Named Rules
**The Sentence-Case Rule.** No uppercase tracked labels above headings. The only caps in the system are inside the logo artwork itself.

## Layout

A single centred column, max width 1360px, with a fluid gutter of clamp(16px, 3.2vw, 40px). The sticky header is 76px tall (64px under 560px) on a three-column grid: logo, centred nav, language and cart buttons. On the home page the nav logo is hidden until the hero logo scrolls away (`.past-hero`), so the large logo owns the first viewport.

Product grids are `auto-fill` with a 220px minimum and a clamp(16px, 2vw, 28px) gap; featured rows are fixed four-up on desktop, two-up under 960px, and every grid is two-up on phones. Sections alternate `--ground` and `--surface` backgrounds with vertical padding between clamp(64px, 7vw, 104px) and clamp(96px, 12vw, 180px). Two-column splits (story, pack, glossary head) collapse to one column between 860px and 1000px depending on direction. The product page is a 1.1fr / 1fr split that stacks under 860px.

Per-direction composition:
- **Rosa y Oro:** centred hero with the full logo lockup, then a surface-coloured featured case, a "shop by feeling" list of large category names with sticker art, a story collage, the wine pack field, and an Instagram close.
- **Terciopelo:** hero split 1.25fr / 0.85fr (logo and copy left, one sticker on a velvet cushion right), the collection on surface, a centred vow statement, collections as a quiet two-column list, the cream pack field.
- **Flash Sheet:** the hero is one bordered sheet split into intro and a four-column flash grid whose cells share rows through subgrid; then a bordered glossary list (art, name, "= meaning", price, add), the story, the black pack.
- **Flor Fuerte:** a full-viewport rose hero (min-height 100svh minus header) with the logo's rose turning behind one featured sticker, a one-large-plus-three favourites grid, the black vow band, collections as rotated stickers on rose, story with a rounded pack card.

## Elevation & Depth

The system is flat. Depth comes from tonal layering (ground, surface, surface-2) and, in Terciopelo, from photographic material plates. The only shadow is the cart drawer's (`-24px 0 60px rgba(0,0,0,0.18)`), because it is a real overlay above a dimmed backdrop. Sticker stand-ins get a soft die-cut halo from `--sticker-edge`, not a box shadow.

### Named Rules
**The Real Material Rule.** A material is either a real image or absent. Terciopelo's velvet is two generated photographic plates (`2-terciopelo/img/velvet-ground.webp` tiled at 512px behind the hero, `velvet-cushion.webp` behind every sticker, the charm, the product image, cart lines and collection art). Gradients, noise filters or shadows pretending to be velvet, paper, gold foil or tattoo ink are not used.

## Shapes

Shape carries each direction's identity as much as colour does:
- **Rosa y Oro:** pill buttons and chips (999px); sticker niches are arches (999px 999px 0 0) on cards and the product image; category rows hover with a left-rounded pill.
- **Terciopelo:** near-square buttons (2px); stickers sit on round velvet cushions (the cushion plate supplies the shape, the box itself is square).
- **Flash Sheet:** everything square (0). Linework is the shape language: 3px solid ink on cards, chips (2px), header, cart dividers and the glossary; 4px on the hero sheet and product image. The logo's own roses (`shared/brand/rose-small.webp`) are pinned to two corners of the sheet as flash ornaments, rotated 14deg and -18deg.
- **Flor Fuerte:** pill buttons; 28px card corners that morph to a full circle on hover (0.5s ease-out); the hero rose turns once every 90s.

Stickers are rotated a few degrees wherever they are laid out by hand (collages, flash cells, collections), between -10deg and 8deg, never on a regular grid of identical angles.

## Components

### Buttons
- **Shape:** per direction (pill, 2px, square, pill). Base height 48px, padding 0 24px, weight 600, 16px; hero and pack buttons grow to 54 to 56px tall with 30 to 32px padding; product-page add is 56px.
- **Buy:** the direction's buy colour (see The One Buy Colour Rule). Product page and pack always use `.btn--primary`; Terciopelo and Flor Fuerte override `.btn--primary` or use `.btn--gold` so it resolves to their buy colour.
- **Hover / active:** lift 1px on hover, press to scale 0.97 on active, background shifts to the `-hover` token; transitions 0.18 to 0.2s with `--ease-out` (cubic-bezier(0.16, 1, 0.3, 1)).
- **Secondary:** Rosa ghost (2px ink border, fills ink on hover); Terciopelo outline (1.5px cream at 50%, turns gold on hover); Flash line button (3px ink border, fills ink on hover); Flor outline-light on rose (2px cream border, fills cream on hover).
- **Added state:** the clicked add button swaps fill (Rosa ink, Terciopelo gold on cards and cream in the pack, Flash olive, Flor olive) and hides its icon.

### Chips (shop filters)
- **Style:** 44px tall, button radius, weight 600, 15px, with a count at 70% opacity.
- **State:** inactive on `--surface`; pressed (`aria-pressed="true"`) inverts to ink (Rosa, Flash), gold (Terciopelo) or rose (Flor). Flash chips carry a 2px ink border.

### Cards (product card)
- **Structure:** media well, name, meaning, price and category, add button; the whole card is one link via the name's stretched `::after`, with the add button raised above it.
- **Media well:** Rosa arch on surface (ground inside the featured case); Terciopelo velvet cushion plate; Flash 3px ink box with transparent well; Flor 28px corners morphing to a circle.
- **Hover:** sticker rotates -4deg and scales 1.04 on a spring (cubic-bezier(0.34, 1.56, 0.64, 1), 0.45s); Terciopelo lifts the sticker off the cushion instead.
- **Focus:** the card outlines (3px, `--focus`) when its name link is focused.

### Navigation
Sticky header on `--head-bg`; nav links weight 500 with a 2px underline that scales in from the left on hover and for the current page. Language and cart buttons are 44px tall, tinted on hover with `--hover-tint`; the cart count is a 24px badge in the buy colour that bumps on add. Under 560px button labels become screen-reader only. Flash Sheet adds a 3px bottom rule; Flor Fuerte's header sits on rose over the home hero and returns to cream once past it.

### Cart drawer
A native modal `<dialog>` docked right, min(440px, 100vw) wide and full height, sliding in over 0.42s and out over 0.22s, with a wine-tinted backdrop. Lines are an 84px art well plus name, price and quantity stepper; the foot holds the total, a sample-pricing note and the checkout hand-off. The cart persists in localStorage and falls back to memory in private mode.

### Quantity stepper
Pill (or square in Flash Sheet) on `--surface` with 40px round buttons; the large variant on the product page is 52 by 56px.

### Motto
Rendered by `store.js` as English, the gold diamond (a 0.55em square rotated 45deg in `--gold`), then Spanish, each with its `lang` attribute. It appears under the logo in the footer of every direction and in the Flash Sheet hero.

### Logo
- **Lockup with its own tagline** (`shared/brand/logo-lockup.webp`): only on light grounds; currently the Rosa y Oro hero.
- **Mark without tagline** (`logo-mark.webp`, `logo-mark-720.webp` in the header): every other placement, including all dark grounds and the footer; the motto is then set as live text beside or below it.
- **Rose cut-outs** (`rose.webp`, `rose-small.webp`): lifted from the logo, used only as ornament (Flash corners, Flor hero). The Flor hero rose is shown at its native 430px source width, no upscale.

## Do's and Don'ts

### Do:
- **Do** set colours only through the shared token names in the chosen direction's `theme.css`; re-scope `--ink-soft`, `--sticker-edge` and `--focus` on any section that changes ground.
- **Do** keep exactly one filled buy colour per direction, and give the "added" state a different fill.
- **Do** use the logo lockup with its own tagline only on light grounds; use the mark plus live motto text everywhere else.
- **Do** show the motto in both languages, joined by the gold diamond.
- **Do** add every new sticker, pack or category as an entry in `shared/data/catalog.js`; set `image` when real art arrives and the stand-in art disappears.
- **Do** keep "sample" labelling on prices and sticker art (footer note and cart note) until the client supplies real values.
- **Do** honour `prefers-reduced-motion`: the shared rule cuts every animation and transition, and the Terciopelo sway and Flor rose rotation stop.

### Don't:
- **Don't** recolour, redraw, crop the lettering of, or apply filters to the client logo.
- **Don't** fade or slide sections in one by one as they scroll into view; content is visible on load.
- **Don't** imitate materials (velvet, paper, foil, ink) with CSS gradients, noise or shadows; use a real image plate or nothing.
- **Don't** put small uppercase eyebrow labels above headings.
- **Don't** add a second filled button colour beside the buy colour in the same direction.
- **Don't** mix tokens, fonts or shapes from two directions in one build.
- **Don't** invent prices, reviews, testimonials or customer counts.
