export type Product = {
  id: string;
  name: string;
  material: "Tagua" | "Madera" | "Hueso";
  materialLabel: string;
  price: string;
  priceNum: number;
  badge?: string;
  image: string;
  gallery?: string[];
  description: string;
  shortDescription: string;
  details: string[];
  category: "joyeria" | "decoracion" | "utensilio" | "escultura";
};

export const products: Product[] = [
  // ── TAGUA ──────────────────────────────────────────────
  {
    id: "collar-origen",
    name: "Collar Origen",
    material: "Tagua",
    materialLabel: "Tagua y Plata 925",
    price: "$120.000",
    priceNum: 120000,
    badge: "Artesanal",
    image:
      "/Assets/Tagua_Catira.jpeg",
    description:
      "El Collar Origen nace de la unión perfecta entre la tagua —el marfil vegetal de nuestros bosques húmedos— y el brillo eterno de la plata 925. Cada semilla es seleccionada a mano y tallada por nuestros artesanos, revelando una textura única que ninguna pieza puede replicar. Es joyería viva, cargada de historia natural.",
    shortDescription: "Semillas de tagua talladas a mano engarzadas en plata 925.",
    details: [
      "Material: Tagua natural + Plata 925",
      "Longitud: 45 cm con extensor",
      "Acabado: Pulido natural y encerado",
      "Cierre: Mosquetón en plata",
      "Pieza única — no se repite",
    ],
    category: "joyeria",
  },
  {
    id: "aretes-luna",
    name: "Aretes Luna",
    material: "Tagua",
    materialLabel: "Tagua Natural",
    price: "$65.000",
    priceNum: 65000,
    badge: "Nuevo",
    image:
      "/Assets/Colibri_Dos_Costados.jpg",
    description:
      "Aretes de tagua tallada en forma de luna creciente. Ligeros como una pluma, ideales para el uso diario. Cada par proviene de una semilla diferente, por lo que el tono y la veta varían levemente, haciendo de cada conjunto una pieza irrepetible.",
    shortDescription: "Forma de luna creciente en tagua pulida, ligeros y únicos.",
    details: [
      "Material: Tagua pulida al natural",
      "Dimensión: 3.5 cm de largo",
      "Gancho: Acero inoxidable hipoalergénico",
      "Peso: menos de 5 g por par",
      "Tono crema a marfil (varía por semilla)",
    ],
    category: "joyeria",
  },
  {
    id: "pulsera-bosque",
    name: "Pulsera Bosque",
    material: "Tagua",
    materialLabel: "Tagua Teñida Natural",
    price: "$45.000",
    priceNum: 45000,
    badge: "Artesanal",
    image:
      "/Assets/Orquidea_Dos_Costados.jpg",
    description:
      "Pulsera de cuentas de tagua teñidas con pigmentos naturales derivados de plantas y minerales de la región. Cada cuenta es pulida individualmente antes de ser ensamblada. Los tonos tierra evocan el suelo del bosque y la riqueza mineral de nuestra tierra.",
    shortDescription: "Cuentas de tagua teñidas con pigmentos naturales de la región.",
    details: [
      "Material: Tagua + pigmentos naturales",
      "Circunferencia: 18-20 cm ajustable",
      "Hilo: Nailon encerado resistente",
      "Colores: Tierras, verdes y ocres",
      "Resistente al agua",
    ],
    category: "joyeria",
  },

  // ── MADERA ─────────────────────────────────────────────
  {
    id: "cuenco-raices",
    name: "Cuenco Raíces",
    material: "Madera",
    materialLabel: "Madera Noble Rescatada",
    price: "$185.000",
    priceNum: 185000,
    badge: "Único",
    image:
      "/Assets/Cuadro.jpeg",
    description:
      "Cuenco tallado a mano desde un solo bloque de madera noble rescatada de troncos caídos en bosques locales. La forma orgánica sigue las vetas naturales de la madera, creando un objeto funcional y escultórico al mismo tiempo. Acabado con aceite de linaza puro, seguro para alimentos.",
    shortDescription: "Cuenco de un solo bloque, siguiendo las vetas naturales de la madera.",
    details: [
      "Material: Madera noble rescatada (nogal o cedro)",
      "Diámetro: aprox. 22–28 cm (varía por pieza)",
      "Acabado: Aceite de linaza puro — apto para alimentos",
      "Uso: Decorativo o funcional (frutas, pan)",
      "Peso: 400–600 g según bloque",
    ],
    category: "utensilio",
  },
  {
    id: "escultura-silvestre",
    name: "Escultura Silvestre",
    material: "Madera",
    materialLabel: "Madera Tallada a Mano",
    price: "$350.000",
    priceNum: 350000,
    badge: "Edición Limitada",
    image:
      "/Assets/Talleres_3.png",
    description:
      "Escultura figurativa inspirada en la fauna local, tallada directamente sobre un tronco de madera con herramientas de gubia y formón. Cada pieza requiere entre 40 y 80 horas de trabajo artesanal. Es una obra de arte destinada a ser el punto focal de cualquier espacio interior.",
    shortDescription: "Escultura figurativa tallada en madera, entre 40–80 horas de trabajo.",
    details: [
      "Material: Tronco de madera dura (acacia o roble)",
      "Dimensiones: 30–50 cm de alto (varía por obra)",
      "Acabado: Cera natural de abejas",
      "Firmada por el artesano",
      "Edición limitada — 3 unidades",
    ],
    category: "escultura",
  },
  {
    id: "bandeja-natural",
    name: "Bandeja Natural",
    material: "Madera",
    materialLabel: "Madera de Guayacán",
    price: "$210.000",
    priceNum: 210000,
    badge: "Nuevo",
    image:
      "/Assets/Bandeja_Copas.jpg",
    description:
      "Bandeja rectangular tallada en madera de guayacán, una de las maderas más nobles y resistentes de la región. Las asas están integradas al cuerpo de la pieza, talladas en la misma tabla. Perfecta para servir o como elemento decorativo en la mesa.",
    shortDescription: "Bandeja de guayacán con asas integradas, resistente y elegante.",
    details: [
      "Material: Madera de guayacán",
      "Medidas: 40 × 20 cm aprox.",
      "Acabado: Aceite mineral food-safe",
      "Peso: 700 g aprox.",
      "Apta para servir alimentos secos",
    ],
    category: "utensilio",
  },
  {
    id: "lampara-raiz",
    name: "Lámpara Raíz",
    material: "Madera",
    materialLabel: "Raíz de Árbol Natural",
    price: "$480.000",
    priceNum: 480000,
    badge: "Artesanal",
    image:
      "/Assets/Imagen_Corpo.jpeg",
    description:
      "Lámpara de mesa fabricada sobre una raíz de árbol seleccionada por su forma orgánica y volumen escultórico. La instalación eléctrica es completamente segura con cable textil y portalámparas de cerámica. Un objeto que fusiona la naturaleza bruta con el diseño de interiores contemporáneo.",
    shortDescription: "Raíz natural convertida en lámpara de mesa con cable textil.",
    details: [
      "Base: Raíz de árbol seca y tratada",
      "Cable: Textil trenzado 1.8 m",
      "Portalámparas: Cerámica E27",
      "Altura total: 40–60 cm (varía por raíz)",
      "Incluye bombilla LED cálida 6W",
    ],
    category: "decoracion",
  },

  // ── HUESO ──────────────────────────────────────────────
  {
    id: "anillo-ancestral",
    name: "Anillo Ancestral",
    material: "Hueso",
    materialLabel: "Hueso y Ébano",
    price: "$95.000",
    priceNum: 95000,
    badge: "Nuevo",
    image:
      "/Assets/Imagen_Corpo_2.jpeg",
    description:
      "Anillo con incrustación de ébano sobre base de hueso natural, pulido a mano con papel de lija progresivo hasta alcanzar un acabado casi espejado. La combinación de dos materiales orgánicos crea un contraste visual poderoso entre el blanco nacarado del hueso y el negro profundo del ébano.",
    shortDescription: "Incrustación de ébano en hueso natural, pulido a espejo.",
    details: [
      "Material: Hueso natural + ébano",
      "Tallas disponibles: 6 a 12 US",
      "Acabado: Pulido con cera de carnauba",
      "Ancho de banda: 8 mm",
      "Solicitar talla al comprar",
    ],
    category: "joyeria",
  },
  {
    id: "colgante-luna-hueso",
    name: "Colgante Tierra",
    material: "Hueso",
    materialLabel: "Hueso Tallado",
    price: "$75.000",
    priceNum: 75000,
    badge: "Artesanal",
    image:
      "/Assets/Imagen_Corpo_3.jpg",
    description:
      "Colgante tallado en hueso con motivos geométricos inspirados en la iconografía precolombina de la región. El grabado es realizado a mano con buril de precisión, creando relieves finos y texturas que cambian con la luz. Viene en cordón de cuero natural ajustable.",
    shortDescription: "Motivos geométricos precolombinos grabados a buril sobre hueso.",
    details: [
      "Material: Hueso natural tratado",
      "Dimensión: 3.5 × 2 cm",
      "Cordón: Cuero natural ajustable hasta 60 cm",
      "Grabado: Buril manual",
      "Sin pigmentos ni tintes artificiales",
    ],
    category: "joyeria",
  },
  {
    id: "set-dominoes",
    name: "Set Dominó Artesanal",
    material: "Hueso",
    materialLabel: "Hueso y Madera de Bambú",
    price: "$280.000",
    priceNum: 280000,
    badge: "Edición Limitada",
    image:
      "/Assets/Ajedrez_Cajonera.jpg",
    description:
      "Set completo de 28 fichas de dominó elaboradas en hueso natural sobre base de bambú, siguiendo la tradición de los dominós de marfil y ébano europeos del siglo XVIII. Los puntos están grabados con láser de precisión y rellenados con pigmento natural negro. Presentado en caja de madera con cierre imantado.",
    shortDescription: "28 fichas de dominó en hueso y bambú, presentadas en caja de madera.",
    details: [
      "28 fichas: hueso natural + base de bambú",
      "Puntos: grabado láser con pigmento negro natural",
      "Caja: Madera con cierre imantado y forro en gamuza",
      "Dimensión de ficha: 4.5 × 2.2 cm",
      "Peso total del set: 650 g aprox.",
    ],
    category: "utensilio",
  },
  {
    id: "figura-pajaro",
    name: "Figura Pájaro Libre",
    material: "Hueso",
    materialLabel: "Hueso Tallado a Mano",
    price: "$130.000",
    priceNum: 130000,
    badge: "Artesanal",
    image:
      "/Assets/Colibri_Orquidea.jpg",
    description:
      "Figura de pájaro en vuelo tallada en hueso, capturando el movimiento y la ligereza del ave en un material que paradójicamente evoca solidez y permanencia. La tensión entre peso y vuelo es el corazón conceptual de esta pieza. Ideal como objeto de escritorio o estante.",
    shortDescription: "Pájaro en vuelo tallado en hueso, movimiento y ligereza capturados.",
    details: [
      "Material: Hueso natural tallado",
      "Dimensión: 12 × 8 cm aprox.",
      "Acabado: Cera natural",
      "Base: Incluida en madera de teca",
      "Firmada por el artesano",
    ],
    category: "escultura",
  },
  {
    id: "mango-cuchillo",
    name: "Mango Sierra",
    material: "Hueso",
    materialLabel: "Hueso y Acero Inox.",
    price: "$160.000",
    priceNum: 160000,
    badge: "Nuevo",
    image:
      "/Assets/Info.jpg",
    description:
      "Cuchillo de cocina con hoja de acero inoxidable forjado y mango tallado en hueso natural. El mango presenta acanaladuras ergonómicas talladas a mano que facilitan el agarre y mejoran el control durante el corte. Una pieza donde la funcionalidad culinaria se eleva a categoría de objeto de diseño.",
    shortDescription: "Hoja forjada en acero inox con mango de hueso acanalado.",
    details: [
      "Hoja: Acero inoxidable 440C, 15 cm",
      "Mango: Hueso natural con acanaladuras manuales",
      "Remaches: Latón",
      "Largo total: 27 cm",
      "Incluye funda de cuero natural",
    ],
    category: "utensilio",
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByMaterial(material: Product["material"] | "Todos"): Product[] {
  if (material === "Todos") return products;
  return products.filter((p) => p.material === material);
}

export const featuredProducts = products.filter((p) =>
  ["collar-origen", "cuenco-raices", "escultura-silvestre", "anillo-ancestral"].includes(p.id)
);
