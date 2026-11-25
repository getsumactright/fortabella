/*
  Fortabella catalog — the one file to edit when the shop grows.

  Add a sticker: copy one product block, give it a new unique `id`, put its
  image in shared/products/, and it appears on every demo (shop grid,
  filters, product page, cart).
  Bilingual designs: list both under `versions` (id "en" / "es"). Shoppers
  pick a version on the product page; the site's language picks the default.
  Add a category: add it to `categories`, then use its id on products.

  SAMPLE DATA: prices, sizes, finishes and descriptions are placeholders so
  the demos can be judged at full density. Confirm every one with the client
  before launch. The sticker images are the client's real designs.
*/
window.FORTABELLA = {
  currency: "USD",
  // Paste a Stripe Payment Link, Shopify checkout or Snipcart URL here at launch.
  checkoutUrl: "",
  instagram: "https://www.instagram.com/fortabellastickers",

  categories: [
    { id: "glam",  name: { en: "Gym & glam",          es: "Gym y glamour" } },
    { id: "vida",  name: { en: "Coffee & companions", es: "Cafecito y compañía" } },
    { id: "packs", name: { en: "Packs",               es: "Paquetes" } }
  ],

  products: [
    {
      id: "lifting-and-lashes",
      name: { en: "Lifting and Lashes", es: "Pesas y Pestañas" },
      meaning: { en: "In English or en español", es: "En español o in English" },
      category: "glam",
      price: 4.5,
      featured: true,
      versions: [
        { id: "en", name: "Lifting and Lashes", meaning: { en: "Lifting and lashes", es: "Pesas y pestañas" }, image: "../shared/products/lifting-and-lashes-en.webp" },
        { id: "es", name: "Pesas y Pestañas", meaning: { en: "Weights and lashes", es: "Pesas y pestañas" }, image: "../shared/products/lifting-and-lashes-es.webp" }
      ],
      description: {
        en: "Chrome Old English lettering, a loaded barbell and long lashes, finished with a rose. For the woman who never skips leg day or mascara.",
        es: "Letras góticas en cromo, una barra con discos y pestañas largas, con una rosa. Para la que nunca falta al gym ni al rímel."
      },
      specs: { size: "3 x 2 in", finish: { en: "Waterproof vinyl", es: "Vinil a prueba de agua" } }
    },
    {
      id: "cafecito-y-kettlebells",
      name: { en: "Cafecito y Kettlebells", es: "Cafecito y Kettlebells" },
      meaning: { en: "Coffee and kettlebells", es: "Café y pesas rusas" },
      category: "vida",
      price: 4.5,
      featured: true,
      image: "../shared/products/cafecito-y-kettlebells.webp",
      description: {
        en: "A painted cafecito cup between two 50 lb kettlebells, with roses. For the morning ritual before the workout.",
        es: "Una tacita de cafecito pintada entre dos pesas rusas de 50 lb, con flores. Para el ritual de la mañana antes de entrenar."
      },
      specs: { size: "3 in", finish: { en: "Waterproof vinyl", es: "Vinil a prueba de agua" } }
    },
    {
      id: "pets-and-heavy-sets",
      name: { en: "I Love Pets and Heavy Sets", es: "Patitas y Pesas" },
      meaning: { en: "In English or en español", es: "En español o in English" },
      category: "vida",
      price: 4.5,
      featured: true,
      versions: [
        { id: "en", name: "I Love Pets and Heavy Sets", meaning: { en: "I love pets and heavy sets", es: "Amo a mis mascotas y las series pesadas" }, image: "../shared/products/pets-and-heavy-sets-en.webp" },
        { id: "es", name: "Patitas y Pesas", meaning: { en: "Little paws and weights", es: "Patitas y pesas" }, image: "../shared/products/pets-and-heavy-sets-es.webp" }
      ],
      description: {
        en: "Two dogs and two cats resting on a barbell, framed in red roses. For every lifter whose best training partner has four legs.",
        es: "Dos perritos y dos gatitos sobre una barra, entre rosas rojas. Para quien entrena con su mejor compañía de cuatro patas."
      },
      specs: { size: "3 in", finish: { en: "Waterproof vinyl", es: "Vinil a prueba de agua" } }
    },
    {
      id: "lipstick-and-lifting",
      name: { en: "I Love Lipstick and Lifting", es: "Amo el Labial y Levantar Pesas" },
      meaning: { en: "In English or en español", es: "En español o in English" },
      category: "glam",
      price: 4.5,
      featured: true,
      versions: [
        { id: "en", name: "I Love Lipstick and Lifting", meaning: { en: "I love lipstick and lifting", es: "Amo el labial y levantar pesas" }, image: "../shared/products/lipstick-and-lifting-en.webp" },
        { id: "es", name: "Amo el Labial y Levantar Pesas", meaning: { en: "I love lipstick and lifting weights", es: "Amo el labial y levantar pesas" }, image: "../shared/products/lipstick-and-lifting-es.webp" }
      ],
      description: {
        en: "A red lipstick in a painted floral case beside a pair of 25 lb dumbbells. Glam and gains, both.",
        es: "Un labial rojo con estuche de flores junto a un par de mancuernas de 25 lb. Glamour y fuerza, las dos."
      },
      specs: { size: "3 in", finish: { en: "Waterproof vinyl", es: "Vinil a prueba de agua" } }
    },
    {
      id: "paquete-inicial",
      name: { en: "Starter Pack", es: "Paquete Inicial" },
      meaning: { en: "All four designs, one envelope", es: "Los cuatro diseños, un sobre" },
      category: "packs",
      price: 15,
      featured: false,
      includes: ["lifting-and-lashes", "cafecito-y-kettlebells", "pets-and-heavy-sets", "lipstick-and-lifting"],
      description: {
        en: "One of each design in one envelope, in the language you are shopping in. A first set for you, or a gift for your gym friend.",
        es: "Uno de cada diseño en un sobre, en el idioma en que compras. Tu primer set, o un regalo para tu amiga del gym."
      },
      specs: { size: { en: "4 stickers", es: "4 stickers" }, finish: { en: "Waterproof vinyl", es: "Vinil a prueba de agua" } },
      art: { shape: "pack" }
    }
  ]
};
