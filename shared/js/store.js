/*
  Fortabella shop engine — shared by every demo.
  Reads window.FORTABELLA (shared/data/catalog.js), renders product grids,
  the shop page, product pages and the cart, and handles EN/ES.

  Page hooks (all optional):
    <body data-demo="rosa" data-page="home|shop|product">
    <div data-site-header></div> <div data-site-footer></div>
    <ul data-products data-filter="featured|all|<category>" data-limit="4" data-heading="h3"></ul>
    <ul data-categories></ul>
    <main data-shop>  /  <main data-product>
    [data-i18n="key"]  [data-i18n-aria="key"]  [data-reveal]
    [data-hero] (home: the nav logo appears once the hero scrolls away)
*/
(function () {
  "use strict";

  var CAT = window.FORTABELLA;
  var BASE = (function () {
    var s = document.currentScript && document.currentScript.src;
    return s ? s.replace(/js\/store\.js.*$/, "") : "../shared/";
  })();
  var body = document.body;
  var DEMO = body.getAttribute("data-demo") || "demo";
  var PAGE = body.getAttribute("data-page") || "";
  var CART_KEY = "fortabella:cart:" + DEMO;
  var LANG_KEY = "fortabella:lang";

  document.documentElement.classList.add("js");

  /* ---------- strings ---------- */
  var STRINGS = {
    en: {
      "skip": "Skip to content",
      "nav.home": "Fortabella home",
      "nav.shop": "Shop",
      "nav.story": "Our story",
      "nav.cart": "Cart",
      "nav.main": "Main",
      "lang.switch": "Español",
      "lang.aria": "Ver el sitio en español",
      "add": "Add to cart",
      "added": "Added",
      "add.aria": "Add {name} to cart",
      "announce.added": "{name} added to your cart",
      "cart.title": "Your cart",
      "cart.empty": "Your cart is empty.",
      "cart.emptyCta": "Find your sticker",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Checkout",
      "cart.note": "Shipping and taxes are added at checkout.",
      "cart.close": "Close cart",
      "cart.remove": "Remove",
      "cart.dec": "One less {name}",
      "cart.inc": "One more {name}",
      "cart.pending": "Checkout connects when the shop launches. Your cart is saved on this device.",
      "cart.open": "Open cart, {n} items",
      "shop.title": "All stickers",
      "shop.lede": "Pick a feeling, find your sticker. Every design is made for women who train.",
      "shop.filter": "Filter by collection",
      "shop.all": "All",
      "shop.count.one": "1 sticker",
      "shop.count.many": "{n} stickers",
      "shop.empty": "Nothing here yet. New designs are on the way.",
      "shop.showAll": "Show all stickers",
      "product.means": "Means",
      "product.version": "Choose your version",
      "ver.en": "English version",
      "ver.es": "Spanish version",
      "verbtn.en": "English",
      "verbtn.es": "Español",
      "product.size": "Size",
      "product.finish": "Finish",
      "product.qty": "Quantity",
      "product.includes": "In this pack",
      "product.related": "Pairs well with",
      "product.notFound": "We couldn't find that sticker.",
      "product.back": "Back to the shop",
      "product.crumbs": "Breadcrumb",
      "foot.nav": "Footer",
      "foot.owned": "Latina-owned, bilingual, made for women who train.",
      "foot.demo": "Demo design. Prices are samples.",
      "foot.follow": "Follow @fortabellastickers",
      "motto.en": "Strength is beauty",
      "motto.es": "La fortaleza es belleza"
    },
    es: {
      "skip": "Saltar al contenido",
      "nav.home": "Inicio de Fortabella",
      "nav.shop": "Tienda",
      "nav.story": "Nosotras",
      "nav.cart": "Carrito",
      "nav.main": "Principal",
      "lang.switch": "English",
      "lang.aria": "View the site in English",
      "add": "Agregar",
      "added": "Listo",
      "add.aria": "Agregar {name} al carrito",
      "announce.added": "{name} se agregó a tu carrito",
      "cart.title": "Tu carrito",
      "cart.empty": "Tu carrito está vacío.",
      "cart.emptyCta": "Encuentra tu sticker",
      "cart.subtotal": "Subtotal",
      "cart.checkout": "Pagar",
      "cart.note": "El envío y los impuestos se suman al pagar.",
      "cart.close": "Cerrar carrito",
      "cart.remove": "Quitar",
      "cart.dec": "Uno menos de {name}",
      "cart.inc": "Uno más de {name}",
      "cart.pending": "El pago se conecta cuando abra la tienda. Tu carrito queda guardado en este dispositivo.",
      "cart.open": "Abrir carrito, {n} artículos",
      "shop.title": "Todos los stickers",
      "shop.lede": "Elige un sentimiento, encuentra tu sticker. Cada diseño está hecho para mujeres que entrenan.",
      "shop.filter": "Filtrar por colección",
      "shop.all": "Todos",
      "shop.count.one": "1 sticker",
      "shop.count.many": "{n} stickers",
      "shop.empty": "Todavía no hay nada aquí. Vienen diseños nuevos.",
      "shop.showAll": "Ver todos los stickers",
      "product.means": "Significa",
      "product.version": "Elige tu versión",
      "ver.en": "Versión en inglés",
      "ver.es": "Versión en español",
      "verbtn.en": "English",
      "verbtn.es": "Español",
      "product.size": "Tamaño",
      "product.finish": "Acabado",
      "product.qty": "Cantidad",
      "product.includes": "Incluye",
      "product.related": "Combina con",
      "product.notFound": "No encontramos ese sticker.",
      "product.back": "Volver a la tienda",
      "product.crumbs": "Ruta",
      "foot.nav": "Pie de página",
      "foot.owned": "De una Latina, bilingüe, hecho para mujeres que entrenan.",
      "foot.demo": "Diseño de muestra. Los precios son ejemplos.",
      "foot.follow": "Síguenos @fortabellastickers",
      "motto.en": "Strength is beauty",
      "motto.es": "La fortaleza es belleza"
    }
  };
  // Page-specific copy, declared inline as window.PAGE_COPY = { en: {...}, es: {...} }
  if (window.PAGE_COPY) {
    ["en", "es"].forEach(function (l) {
      var src = window.PAGE_COPY[l] || {};
      Object.keys(src).forEach(function (k) { STRINGS[l][k] = src[k]; });
    });
  }

  var lang = read(LANG_KEY) || ((navigator.language || "en").toLowerCase().indexOf("es") === 0 ? "es" : "en");
  if (lang !== "en" && lang !== "es") lang = "en";

  function t(key, vars) {
    var s = (STRINGS[lang] && STRINGS[lang][key]) || STRINGS.en[key] || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  function L(field) {
    if (field == null) return "";
    if (typeof field === "string" || typeof field === "number") return String(field);
    return field[lang] || field.en || "";
  }
  function money(n) {
    try {
      return new Intl.NumberFormat(lang === "es" ? "es-US" : "en-US", { style: "currency", currency: CAT.currency || "USD" }).format(n);
    } catch (e) { return "$" + n.toFixed(2); }
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function read(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function write(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode: cart lives in memory */ } }

  function byId(id) { for (var i = 0; i < CAT.products.length; i++) if (CAT.products[i].id === id) return CAT.products[i]; return null; }
  function catById(id) { for (var i = 0; i < CAT.categories.length; i++) if (CAT.categories[i].id === id) return CAT.categories[i]; return null; }
  function qs(name) { var m = new RegExp("[?&]" + name + "=([^&]*)").exec(location.search); return m ? decodeURIComponent(m[1]) : ""; }

  /* ---------- versions (bilingual designs sold as EN or ES) ---------- */
  function verOf(p, v) {
    var vs = p.versions; if (!vs || !vs.length) return null;
    var i;
    if (v) for (i = 0; i < vs.length; i++) if (vs[i].id === v) return vs[i];
    for (i = 0; i < vs.length; i++) if (vs[i].id === lang) return vs[i];
    return vs[0];
  }
  function defVer(p) { var x = verOf(p); return x ? x.id : ""; }
  function nameOf(p, v) { var x = v ? verOf(p, v) : null; return x ? L(x.name) : L(p.name); }
  // a version's meaning is its translation: an English design shown to an English reader gets its Spanish twin, and vice versa
  function meaningOf(p, v) {
    var x = v ? verOf(p, v) : null;
    if (!x || !x.meaning) return L(p.meaning);
    var key = x.id === lang ? (lang === "en" ? "es" : "en") : lang;
    return x.meaning[key] || L(x.meaning);
  }
  function imgOf(p, v) { var x = verOf(p, v); if (x && x.image) return x.image; return p.image ? L(p.image) : ""; }

  /* ---------- icons (one stroke family) ---------- */
  var ICON = {
    bag: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 8h14l-1.2 12.2a1 1 0 0 1-1 .8H7.2a1 1 0 0 1-1-.8z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/></svg>',
    plus: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14"/></svg>',
    close: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    check: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
    arrow: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    globe: '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="8.5"/><path d="M3.5 12h17M12 3.5c2.6 2.4 3.8 5.3 3.8 8.5s-1.2 6.1-3.8 8.5c-2.6-2.4-3.8-5.3-3.8-8.5S9.4 5.9 12 3.5z"/></svg>'
  };
  function gem() { return '<span class="gem" aria-hidden="true"></span>'; }
  function motto() {
    return '<span class="motto"><span lang="en">' + t("motto.en") + '</span>' + gem() + '<span lang="es">' + t("motto.es") + '</span></span>';
  }

  /* ---------- sticker art (stand-in until real files arrive) ---------- */
  var SHAPES = {
    circle: function (a) { return '<circle cx="120" cy="120" r="100" ' + a + '/>'; },
    arch:   function (a) { return '<path d="M34 214V112a86 86 0 0 1 172 0v102z" ' + a + '/>'; },
    pill:   function (a) { return '<rect x="14" y="62" width="212" height="116" rx="58" ' + a + '/>'; },
    shield: function (a) { return '<path d="M120 20l90 30v66c0 56-38 90-90 106-52-16-90-50-90-106V50z" ' + a + '/>'; },
    heart:  function (a) { return '<path d="M120 212C46 164 18 124 18 84c0-34 26-58 56-58 22 0 38 12 46 30 8-18 24-30 46-30 30 0 56 24 56 58 0 40-28 80-102 128z" ' + a + '/>'; }
  };
  var MAXW = { circle: 164, arch: 150, pill: 186, shield: 140, heart: 132 };
  var CENTER = { circle: 120, arch: 136, pill: 120, shield: 112, heart: 108 };

  function motifSVG(kind, cx, y, ink) {
    if (kind === "rose") {
      var p = "";
      for (var i = 0; i < 5; i++) p += '<ellipse cx="' + cx + '" cy="' + (y - 8) + '" rx="6.5" ry="9" transform="rotate(' + (i * 72) + ' ' + cx + ' ' + y + ')" fill="' + ink + '"/>';
      return p + '<circle cx="' + cx + '" cy="' + y + '" r="5" fill="#F2B51C"/>';
    }
    if (kind === "diamond") return '<path d="M' + cx + ' ' + (y - 11) + 'l9 11-9 11-9-11z" fill="#F2B51C"/>';
    if (kind === "sparkle") return '<path d="M' + cx + ' ' + (y - 12) + 'c1.6 7 4 9.4 11 11-7 1.6-9.4 4-11 11-1.6-7-4-9.4-11-11 7-1.6 9.4-4 11-11z" fill="' + ink + '"/>';
    if (kind === "dumbbell") return '<g fill="' + ink + '"><rect x="' + (cx - 18) + '" y="' + (y - 2) + '" width="36" height="4" rx="2"/><rect x="' + (cx - 26) + '" y="' + (y - 10) + '" width="7" height="20" rx="2"/><rect x="' + (cx + 19) + '" y="' + (y - 10) + '" width="7" height="20" rx="2"/></g>';
    return "";
  }

  function stickerInner(p) {
    var a = p.art || {};
    if (a.shape === "pack") {
      var kids = (p.includes || []).map(byId).filter(Boolean);
      var pos = [[-6, 10, -9, 132], [96, 4, 8, 124], [44, 96, -2, 136]];
      if (kids.length > 3) pos = [[-4, 0, -8, 124], [112, -2, 7, 124], [-6, 112, 5, 124], [114, 112, -6, 124]];
      return kids.slice(0, 4).map(function (k, i) {
        var q = pos[i], src = imgOf(k);
        var inner = src
          ? '<image href="' + esc(src) + '" x="' + q[0] + '" y="' + q[1] + '" width="' + q[3] + '" height="' + q[3] + '" preserveAspectRatio="xMidYMid meet"/>'
          : '<svg x="' + q[0] + '" y="' + q[1] + '" width="' + q[3] + '" height="' + q[3] + '" viewBox="0 0 240 240">' + stickerInner(k) + "</svg>";
        return '<g transform="rotate(' + q[2] + ' ' + (q[0] + q[3] / 2) + ' ' + (q[1] + q[3] / 2) + ')">' + inner + "</g>";
      }).join("");
    }
    var shape = SHAPES[a.shape] ? a.shape : "circle";
    var join = 'stroke-linejoin="round"';
    var out = SHAPES[shape]('fill="var(--sticker-edge, rgba(20,10,10,.14))" stroke="var(--sticker-edge, rgba(20,10,10,.14))" stroke-width="22" ' + join);
    out += SHAPES[shape]('fill="#fff" stroke="#fff" stroke-width="18" ' + join);
    out += SHAPES[shape]('fill="' + a.bg + '"');
    var lines = a.lines || [];
    var motifH = a.motif && a.motif !== "none" ? 34 : 0;
    var textH = 0;
    lines.forEach(function (l) { textH += l[1] * 1.04; });
    var y = CENTER[shape] - (textH + motifH) / 2;
    var cx = 120;
    var txt = "";
    lines.forEach(function (l) {
      var family = l[2] === "sans" ? "'Montserrat', 'Arial', sans-serif" : "'UnifrakturMaguntia', 'Old English Text MT', serif";
      var weight = l[2] === "sans" ? 800 : 400;
      var est = l[0].length * l[1] * (l[2] === "sans" ? 0.74 : 0.5);
      var fit = est > MAXW[shape] ? ' textLength="' + MAXW[shape] + '" lengthAdjust="spacingAndGlyphs"' : "";
      y += l[1] * 0.86;
      txt += '<text x="' + cx + '" y="' + y.toFixed(1) + '" text-anchor="middle" font-family="' + family + '" font-weight="' + weight + '" font-size="' + l[1] + '" fill="' + a.ink + '"' + fit + ">" + esc(l[0]) + "</text>";
      y += l[1] * 0.18;
    });
    if (motifH) txt += motifSVG(a.motif, cx, y + 22, a.ink);
    return out + txt;
  }
  function art(p, cls, v) {
    var src = imgOf(p, v);
    if (src) return '<img class="sticker ' + (cls || "") + '" src="' + esc(src) + '" alt="' + esc(nameOf(p, v || defVer(p))) + ' sticker" loading="lazy" decoding="async">';
    return '<svg class="sticker ' + (cls || "") + '" viewBox="0 0 240 240" role="img" aria-label="' + esc(L(p.name)) + '">' + stickerInner(p) + "</svg>";
  }

  /* ---------- cart ---------- */
  var cart = (function () { try { return JSON.parse(read(CART_KEY)) || []; } catch (e) { return []; } })();
  cart = cart.filter(function (it) { return byId(it.id) && it.qty > 0; });
  // a cart line is one product in one version; key = "id|version"
  function keyOf(it) { return it.id + "|" + (it.v || ""); }
  function lineByKey(k) { return cart.filter(function (x) { return keyOf(x) === k; })[0]; }
  function saveCart() { write(CART_KEY, JSON.stringify(cart)); renderCartCount(); renderCart(); }
  function cartCount() { return cart.reduce(function (n, it) { return n + it.qty; }, 0); }
  function cartTotal() { return cart.reduce(function (n, it) { var p = byId(it.id); return n + (p ? p.price * it.qty : 0); }, 0); }
  function addToCart(id, qty, v) {
    qty = qty || 1;
    var p = byId(id);
    v = p.versions ? (v || defVer(p)) : "";
    var it = lineByKey(id + "|" + v);
    if (it) it.qty = Math.min(99, it.qty + qty); else cart.push({ id: id, v: v, qty: qty });
    saveCart();
    announce(t("announce.added", { name: nameOf(p, v) }));
    document.querySelectorAll("[data-cart-count]").forEach(function (el) {
      el.classList.remove("bump"); void el.offsetWidth; el.classList.add("bump");
    });
  }
  function setQty(k, qty) {
    cart = cart.map(function (x) { if (keyOf(x) === k) x.qty = Math.max(0, Math.min(99, qty)); return x; }).filter(function (x) { return x.qty > 0; });
    saveCart();
  }

  var live;
  function announce(msg) {
    if (!live) { live = document.createElement("p"); live.className = "sr-only"; live.setAttribute("aria-live", "polite"); body.appendChild(live); }
    live.textContent = ""; setTimeout(function () { live.textContent = msg; }, 40);
  }

  /* ---------- chrome: header, footer, cart dialog ---------- */
  function headerHTML() {
    return '<a class="skip" href="#main">' + t("skip") + "</a>" +
      '<header class="site-head"><div class="site-head__inner">' +
      '<a class="brand" href="index.html" aria-label="' + t("nav.home") + '"><img src="' + BASE + 'brand/wordmark-720.webp" alt="" width="720" height="240"></a>' +
      '<nav class="site-nav" aria-label="' + t("nav.main") + '"><ul>' +
      '<li><a href="shop.html"' + (PAGE === "shop" || PAGE === "product" ? ' aria-current="page"' : "") + ">" + t("nav.shop") + "</a></li>" +
      '<li><a href="index.html#story">' + t("nav.story") + "</a></li></ul></nav>" +
      '<div class="site-head__actions">' +
      '<button class="lang-btn" type="button" data-lang-toggle aria-label="' + t("lang.aria") + '" lang="' + (lang === "en" ? "es" : "en") + '">' + ICON.globe + "<span>" + t("lang.switch") + "</span></button>" +
      '<button class="cart-btn" type="button" data-cart-open aria-label="' + t("cart.open", { n: cartCount() }) + '">' + ICON.bag + '<span class="cart-btn__label">' + t("nav.cart") + '</span><span class="cart-btn__count" data-cart-count>' + cartCount() + "</span></button>" +
      "</div></div></header>";
  }
  function footerHTML() {
    return '<footer class="site-foot"><div class="site-foot__inner">' +
      '<a class="site-foot__brand" href="index.html" aria-label="' + t("nav.home") + '"><img src="' + BASE + 'brand/logo-mark.webp" alt="" width="1526" height="792" loading="lazy"></a>' +
      '<p class="site-foot__motto">' + motto() + "</p>" +
      '<nav class="site-foot__nav" aria-label="' + t("foot.nav") + '"><ul>' +
      '<li><a href="shop.html">' + t("nav.shop") + "</a></li>" +
      '<li><a href="index.html#story">' + t("nav.story") + "</a></li>" +
      '<li><a href="' + CAT.instagram + '" rel="noopener" target="_blank">' + t("foot.follow") + "</a></li></ul></nav>" +
      '<p class="site-foot__small">© ' + new Date().getFullYear() + " Fortabella. " + t("foot.owned") + "</p>" +
      '<p class="site-foot__small">' + t("foot.demo") + "</p>" +
      "</div></footer>";
  }
  function cartDialogHTML() {
    return '<dialog class="cart" aria-labelledby="cart-title"><div class="cart__panel">' +
      '<div class="cart__head"><h2 id="cart-title" class="cart__title">' + t("cart.title") + '</h2>' +
      '<button class="icon-btn" type="button" data-cart-close aria-label="' + t("cart.close") + '">' + ICON.close + "</button></div>" +
      '<div class="cart__body" data-cart-body></div></div></dialog>';
  }

  function renderChrome() {
    var h = document.querySelector("[data-site-header]");
    if (h) h.innerHTML = headerHTML();
    var f = document.querySelector("[data-site-footer]");
    if (f) f.innerHTML = footerHTML();
    var old = document.querySelector("dialog.cart");
    var wasOpen = old && old.open;
    if (old) old.remove();
    body.insertAdjacentHTML("beforeend", cartDialogHTML());
    renderCart();
    if (wasOpen) openCart();
    document.querySelectorAll("[data-motto]").forEach(function (el) { el.innerHTML = motto(); });
  }
  function renderCartCount() {
    document.querySelectorAll("[data-cart-count]").forEach(function (el) { el.textContent = cartCount(); });
    document.querySelectorAll("[data-cart-open]").forEach(function (el) {
      el.setAttribute("aria-label", t("cart.open", { n: cartCount() }));
      el.classList.toggle("has-items", cartCount() > 0);
    });
  }
  function renderCart() {
    var el = document.querySelector("[data-cart-body]");
    if (!el) return;
    if (!cart.length) {
      el.innerHTML = '<div class="cart__empty"><p>' + t("cart.empty") + '</p><a class="btn btn--primary" href="shop.html">' + t("cart.emptyCta") + "</a></div>";
      return;
    }
    var rows = cart.map(function (it) {
      var p = byId(it.id), n = esc(nameOf(p, it.v)), k = esc(keyOf(it));
      var href = "product.html?id=" + p.id + (it.v ? "&amp;v=" + it.v : "");
      return '<li class="cart-line">' +
        '<a class="cart-line__art" href="' + href + '" tabindex="-1" aria-hidden="true">' + art(p, "", it.v) + "</a>" +
        '<div class="cart-line__info"><a class="cart-line__name" href="' + href + '">' + n + "</a>" +
        (it.v ? '<span class="cart-line__ver">' + t("ver." + it.v) + "</span>" : "") +
        '<span class="cart-line__price">' + money(p.price * it.qty) + "</span>" +
        '<div class="cart-line__row"><div class="qty" role="group" aria-label="' + t("product.qty") + '">' +
        '<button type="button" data-line-dec="' + k + '" aria-label="' + t("cart.dec", { name: n }) + '">' + ICON.minus + "</button>" +
        "<output>" + it.qty + "</output>" +
        '<button type="button" data-line-inc="' + k + '" aria-label="' + t("cart.inc", { name: n }) + '">' + ICON.plus + "</button></div>" +
        '<button class="text-btn" type="button" data-line-remove="' + k + '">' + t("cart.remove") + "</button></div></div></li>";
    }).join("");
    el.innerHTML = '<ul class="cart__lines">' + rows + "</ul>" +
      '<div class="cart__foot"><p class="cart__total"><span>' + t("cart.subtotal") + "</span><strong>" + money(cartTotal()) + "</strong></p>" +
      '<p class="cart__note">' + t("cart.note") + "</p>" +
      '<button class="btn btn--primary btn--block" type="button" data-checkout>' + t("cart.checkout") + " " + ICON.arrow + "</button>" +
      '<p class="cart__pending" data-checkout-msg hidden>' + t("cart.pending") + "</p></div>";
  }
  function openCart() {
    var d = document.querySelector("dialog.cart");
    if (!d) return;
    if (typeof d.showModal === "function") { if (!d.open) d.showModal(); } else d.setAttribute("open", "");
    body.classList.add("cart-open");
  }
  function closeCart() {
    var d = document.querySelector("dialog.cart");
    if (!d) return;
    d.classList.add("is-closing");
    setTimeout(function () { d.classList.remove("is-closing"); if (d.close) d.close(); else d.removeAttribute("open"); body.classList.remove("cart-open"); }, 220);
  }

  /* ---------- product grids ---------- */
  // v: render one specific version as its own card (split grids); otherwise the product in the visitor's language
  function cardHTML(p, h, v) {
    h = h || "h3";
    var ver = v || defVer(p);
    var href = "product.html?id=" + encodeURIComponent(p.id) + (v ? "&amp;v=" + v : ""), n = esc(nameOf(p, v || ver));
    var cat = catById(p.category);
    return '<li class="p-card" data-id="' + p.id + '" data-cat="' + p.category + '">' +
      '<a class="p-card__media" href="' + href + '" tabindex="-1" aria-hidden="true">' + art(p, "", ver) + "</a>" +
      '<div class="p-card__info">' +
      "<" + h + ' class="p-card__name"><a href="' + href + '">' + n + "</a></" + h + ">" +
      '<p class="p-card__meaning">' + esc(v ? meaningOf(p, v) : L(p.meaning)) + "</p>" +
      '<p class="p-card__meta"><span class="p-card__price">' + money(p.price) + '</span><span class="p-card__cat">' + esc(cat ? L(cat.name) : "") + "</span></p>" +
      "</div>" +
      '<button class="btn p-card__add" type="button" data-add="' + p.id + '"' + (ver ? ' data-ver="' + ver + '"' : "") + ' aria-label="' + t("add.aria", { name: n }) + '">' + ICON.plus + '<span>' + t("add") + "</span></button></li>";
  }
  function cardsHTML(list, h, split) {
    return list.map(function (p) {
      if (split && p.versions) return p.versions.map(function (x) { return cardHTML(p, h, x.id); }).join("");
      return cardHTML(p, h);
    }).join("");
  }
  function pick(filter, limit, exclude) {
    var list = CAT.products.filter(function (p) {
      if (exclude && exclude.indexOf(p.id) > -1) return false;
      if (!filter || filter === "all") return true;
      if (filter === "featured") return p.featured;
      if (filter.indexOf(",") > -1) return filter.split(",").indexOf(p.id) > -1;
      return p.category === filter;
    });
    return limit ? list.slice(0, limit) : list;
  }
  function renderGrids() {
    document.querySelectorAll("[data-products]").forEach(function (ul) {
      // data-split: show each EN/ES version as its own card (flash sheet, glossary, collection grid)
      var list = pick(ul.getAttribute("data-filter"), 0);
      var html = cardsHTML(list, ul.getAttribute("data-heading"), ul.hasAttribute("data-split"));
      var limit = +ul.getAttribute("data-limit") || 0;
      if (limit) { var tmp = document.createElement("ul"); tmp.innerHTML = html; html = Array.prototype.slice.call(tmp.children, 0, limit).map(function (li) { return li.outerHTML; }).join(""); }
      ul.innerHTML = html;
    });
    // <div data-art="id,id,id"> renders those stickers' art; <span data-price="id"> their price; [data-name="id"] its name
    document.querySelectorAll("[data-art]").forEach(function (el) {
      el.innerHTML = el.getAttribute("data-art").split(",").map(byId).filter(Boolean).map(function (p) { return art(p); }).join("");
    });
    document.querySelectorAll("[data-name]").forEach(function (el) {
      var p = byId(el.getAttribute("data-name")); if (p) el.textContent = L(p.name);
    });
    document.querySelectorAll("[data-add]:not(.p-card__add)").forEach(function (el) {
      var p = byId(el.getAttribute("data-add")); if (p && p.versions) el.setAttribute("data-ver", defVer(p));
    });
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var p = byId(el.getAttribute("data-price")); if (p) el.textContent = money(p.price);
    });
    document.querySelectorAll("[data-categories]").forEach(function (ul) {
      ul.innerHTML = CAT.categories.map(function (c) {
        var items = pick(c.id), first = items[0];
        if (!items.length) return "";
        return '<li class="cat"><a class="cat__link" href="shop.html?cat=' + c.id + '">' +
          '<span class="cat__name">' + esc(L(c.name)) + '</span><span class="cat__count">' + items.length + "</span>" +
          (first ? '<span class="cat__art" aria-hidden="true">' + art(first) + "</span>" : "") + "</a></li>";
      }).join("");
    });
  }

  /* ---------- shop page ---------- */
  var shopCat = "all";
  function renderShop() {
    var main = document.querySelector("[data-shop]");
    if (!main) return;
    var wanted = qs("cat");
    if (wanted && catById(wanted)) shopCat = wanted;
    var cats = [{ id: "all", name: { en: STRINGS.en["shop.all"], es: STRINGS.es["shop.all"] } }].concat(CAT.categories.filter(function (c) { return pick(c.id).length; }));
    var list = pick(shopCat);
    var current = catById(shopCat);
    main.innerHTML =
      '<section class="shop" aria-labelledby="shop-title"><div class="shop__head">' +
      '<h1 id="shop-title" class="shop__title">' + (current ? esc(L(current.name)) : t("shop.title")) + "</h1>" +
      '<p class="shop__lede">' + t("shop.lede") + "</p></div>" +
      '<div class="shop__bar"><div class="filters" role="group" aria-label="' + t("shop.filter") + '">' +
      cats.map(function (c) {
        return '<button type="button" class="chip" data-cat-btn="' + c.id + '" aria-pressed="' + (c.id === shopCat) + '">' + esc(L(c.name)) +
          ' <span class="chip__n">' + pick(c.id).length + "</span></button>";
      }).join("") + "</div>" +
      '<p class="shop__count" aria-live="polite">' + (list.length === 1 ? t("shop.count.one") : t("shop.count.many", { n: list.length })) + "</p></div>" +
      (list.length
        ? '<ul class="grid grid--shop">' + cardsHTML(list, "h2", false) + "</ul>"
        : '<div class="shop__empty"><p>' + t("shop.empty") + '</p><button type="button" class="btn" data-cat-btn="all">' + t("shop.showAll") + "</button></div>") +
      "</section>";
  }

  /* ---------- product page ---------- */
  var pdpQty = 1, pdpVer = "";
  function renderProduct() {
    var main = document.querySelector("[data-product]");
    if (!main) return;
    var p = byId(qs("id")) || null;
    if (!p) {
      main.innerHTML = '<section class="pdp pdp--missing"><h1 class="pdp__name">' + t("product.notFound") + '</h1><a class="btn btn--primary" href="shop.html">' + t("product.back") + "</a></section>";
      return;
    }
    var hasVer = function (id) { return p.versions.some(function (x) { return x.id === id; }); };
    if (p.versions && !hasVer(pdpVer)) pdpVer = hasVer(qs("v")) ? qs("v") : defVer(p);
    var vid = p.versions ? pdpVer : "";
    document.title = nameOf(p, vid) + " · Fortabella";
    var cat = catById(p.category), n = esc(nameOf(p, vid));
    var verPicker = p.versions
      ? '<div class="versions"><p class="versions__label" id="ver-label">' + t("product.version") + '</p><div class="filters versions__opts" role="group" aria-labelledby="ver-label">' +
        p.versions.map(function (x) { return '<button type="button" class="chip" data-ver-btn="' + x.id + '" aria-pressed="' + (x.id === vid) + '">' + t("verbtn." + x.id) + "</button>"; }).join("") + "</div></div>"
      : "";
    var specs = p.specs || {};
    var includes = (p.includes || []).map(byId).filter(Boolean);
    main.innerHTML =
      '<nav class="crumbs" aria-label="' + t("product.crumbs") + '"><ol>' +
      '<li><a href="shop.html">' + t("nav.shop") + "</a></li>" +
      (cat ? '<li><a href="shop.html?cat=' + cat.id + '">' + esc(L(cat.name)) + "</a></li>" : "") +
      '<li><span aria-current="page">' + n + "</span></li></ol></nav>" +
      '<article class="pdp"><div class="pdp__media">' + art(p, "sticker--hero", vid) + "</div>" +
      '<div class="pdp__info"><h1 class="pdp__name">' + n + "</h1>" +
      '<p class="pdp__meaning"><span>' + t("product.means") + "</span> " + esc(meaningOf(p, vid)) + "</p>" +
      '<p class="pdp__price">' + money(p.price) + "</p>" +
      '<p class="pdp__desc">' + esc(L(p.description)) + "</p>" +
      (includes.length ? '<div class="pdp__includes"><h2 class="pdp__sub">' + t("product.includes") + '</h2><ul>' +
        includes.map(function (k) { return '<li><a href="product.html?id=' + k.id + '"><span class="pdp__mini" aria-hidden="true">' + art(k) + "</span>" + esc(L(k.name)) + "</a></li>"; }).join("") + "</ul></div>" : "") +
      '<dl class="pdp__specs">' +
      (specs.size ? "<div><dt>" + t("product.size") + "</dt><dd>" + esc(L(specs.size)) + "</dd></div>" : "") +
      (specs.finish ? "<div><dt>" + t("product.finish") + "</dt><dd>" + esc(L(specs.finish)) + "</dd></div>" : "") + "</dl>" +
      verPicker +
      '<div class="pdp__buy"><div class="qty qty--lg" role="group" aria-label="' + t("product.qty") + '">' +
      '<button type="button" data-pdp-dec aria-label="' + t("cart.dec", { name: n }) + '">' + ICON.minus + "</button>" +
      "<output data-pdp-qty>" + pdpQty + "</output>" +
      '<button type="button" data-pdp-inc aria-label="' + t("cart.inc", { name: n }) + '">' + ICON.plus + "</button></div>" +
      '<button class="btn btn--primary pdp__add" type="button" data-add="' + p.id + '"' + (vid ? ' data-ver="' + vid + '"' : "") + ' data-add-qty aria-label="' + t("add.aria", { name: n }) + '">' + ICON.bag + "<span>" + t("add") + " · " + money(p.price) + "</span></button></div>" +
      "</div></article>" +
      '<section class="related" aria-labelledby="related-title"><h2 id="related-title" class="related__title">' + t("product.related") + "</h2>" +
      '<ul class="grid grid--related">' + pick("all", 0, [p.id]).filter(function (x) { return x.category !== "packs"; }).slice(0, 4).map(function (x) { return cardHTML(x, "h3"); }).join("") + "</ul></section>";
  }

  /* ---------- i18n ---------- */
  function applyI18n() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.setAttribute("alt", t(el.getAttribute("data-i18n-alt"))); });
  }
  function renderAll() {
    applyI18n();
    renderChrome();
    renderGrids();
    renderShop();
    renderProduct();
    renderCartCount();
    observeReveals();
    heroWatch();
  }
  function setLang(l) {
    lang = l; write(LANG_KEY, l);
    var y = window.scrollY;
    renderAll();
    window.scrollTo(0, y);
    var btn = document.querySelector("[data-lang-toggle]");
    if (btn) btn.focus();
  }

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var el;
    if ((el = e.target.closest("[data-add]"))) {
      var qty = el.hasAttribute("data-add-qty") ? pdpQty : 1;
      addToCart(el.getAttribute("data-add"), qty, el.getAttribute("data-ver") || "");
      el.classList.add("is-added");
      var span = el.querySelector("span");
      var label = span ? span.textContent : "";
      if (span) span.textContent = t("added");
      clearTimeout(el._t);
      el._t = setTimeout(function () { el.classList.remove("is-added"); if (span) span.textContent = label; }, 1600);
      return;
    }
    if (e.target.closest("[data-cart-open]")) { openCart(); return; }
    if (e.target.closest("[data-cart-close]")) { closeCart(); return; }
    if ((el = e.target.closest("[data-line-inc]"))) { var a = el.getAttribute("data-line-inc"); setQty(a, lineByKey(a).qty + 1); focusAfter("[data-line-inc='" + a + "']"); return; }
    if ((el = e.target.closest("[data-line-dec]"))) { var b = el.getAttribute("data-line-dec"); setQty(b, lineByKey(b).qty - 1); focusAfter("[data-line-dec='" + b + "']", "[data-cart-close]"); return; }
    if ((el = e.target.closest("[data-ver-btn]"))) {
      pdpVer = el.getAttribute("data-ver-btn");
      var pid = qs("id");
      history.replaceState(null, "", location.pathname + "?id=" + encodeURIComponent(pid) + "&v=" + pdpVer);
      renderProduct(); syncPdp();
      var vb = document.querySelector('[data-ver-btn="' + pdpVer + '"]'); if (vb) vb.focus();
      return;
    }
    if ((el = e.target.closest("[data-line-remove]"))) { setQty(el.getAttribute("data-line-remove"), 0); focusAfter("[data-cart-close]"); return; }
    if (e.target.closest("[data-checkout]")) {
      if (CAT.checkoutUrl) { location.href = CAT.checkoutUrl; return; }
      var m = document.querySelector("[data-checkout-msg]"); if (m) m.hidden = false; return;
    }
    if (e.target.closest("[data-lang-toggle]")) { setLang(lang === "en" ? "es" : "en"); return; }
    if ((el = e.target.closest("[data-cat-btn]"))) {
      shopCat = el.getAttribute("data-cat-btn");
      var url = shopCat === "all" ? location.pathname : location.pathname + "?cat=" + shopCat;
      history.replaceState(null, "", url);
      renderShop();
      var again = document.querySelector('[data-cat-btn="' + shopCat + '"]');
      if (again) again.focus();
      return;
    }
    if (e.target.closest("[data-pdp-inc]")) { pdpQty = Math.min(99, pdpQty + 1); syncPdp(); return; }
    if (e.target.closest("[data-pdp-dec]")) { pdpQty = Math.max(1, pdpQty - 1); syncPdp(); return; }
    var d = document.querySelector("dialog.cart");
    if (d && e.target === d) closeCart(); // backdrop click
  });
  document.addEventListener("cancel", function (e) {
    if (e.target.matches && e.target.matches("dialog.cart")) { e.preventDefault(); closeCart(); }
  }, true);
  function focusAfter(sel, fallback) {
    var el = document.querySelector(sel) || (fallback && document.querySelector(fallback));
    if (el) el.focus();
  }
  function syncPdp() { var o = document.querySelector("[data-pdp-qty]"); if (o) o.textContent = pdpQty; }

  /* ---------- reveals & hero watch ---------- */
  var io;
  function observeReveals() {
    var els = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    io = io || new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }
  var heroIO;
  function heroWatch() {
    var hero = document.querySelector("[data-hero]");
    if (!hero) { body.classList.add("past-hero"); return; }
    if (!("IntersectionObserver" in window)) { body.classList.add("past-hero"); return; }
    if (heroIO) heroIO.disconnect();
    heroIO = new IntersectionObserver(function (entries) {
      body.classList.toggle("past-hero", !entries[0].isIntersecting);
    }, { rootMargin: "-80px 0px 0px 0px", threshold: 0 });
    var mark = hero.querySelector("[data-hero-logo]") || hero;
    heroIO.observe(mark);
  }

  renderAll();
  window.Fortabella = { art: art, byId: byId, t: t, lang: function () { return lang; }, money: money };
})();
