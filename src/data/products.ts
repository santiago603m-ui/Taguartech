export type Product = {
  id: string;
  name: string;
  material: string;
  materialLabel: string;
  price: string;
  priceNum: number;
  badge?: string;
  image: string;
  gallery?: string[];
  description: string;
  shortDescription: string;
  details: string[];
  category: string;
};

export const products: Product[] = [
  {
    id: "ajedrez-tagua-madera",
    name: "Ajedrez Clásico con Cajonera",
    material: "Tagua y Madera",
    materialLabel: "Madera Noble y Tagua Natural",
    price: "$350.000",
    priceNum: 350000,
    badge: "Exclusivo",
    image: "/Assets/Coleccion/Ajedrez_Cajonera.jpg",
    description: "Elegante tablero de ajedrez fabricado en madera con una práctica cajonera integrada. Las 32 piezas están torneadas y talladas a mano en semilla de tagua, aprovechando el contraste natural de su corteza para diferenciar los bandos, creando una obra de arte interactiva.",
    shortDescription: "Tablero de madera con cajonera y piezas talladas a mano en tagua.",
    details: [
      "Material: Madera noble y semilla de tagua pura",
      "Diseño: Tablero con dos cajones de almacenamiento",
      "Piezas: 32 figuras talladas manualmente",
      "Acabado: Pulido natural que resalta la veta y corteza",
      "Uso: Juego de mesa clásico y pieza decorativa"
    ],
    category: "juegos"
  },
  {
    id: "bandeja-copas-rustica",
    name: "Bandeja Rústica con Copas",
    material: "Madera y Tagua",
    materialLabel: "Madera Orgánica y Tagua",
    price: "$120.000",
    priceNum: 120000,
    badge: "Artesanal",
    image: "/Assets/Inicio/Bandeja_Copas.jpg",
    description: "Bandeja tallada siguiendo la forma natural de la madera, elevada sobre resistentes soportes de semilla de tagua. Incluye un juego de delicadas copas o cuencos elaborados en la misma semilla, conservando detalles rústicos de la corteza original.",
    shortDescription: "Bandeja de madera orgánica con soportes y copas hechas de semilla de tagua.",
    details: [
      "Material: Madera natural y semillas de tagua",
      "Acabado: Suave al tacto con retención de corteza decorativa",
      "Diseño: Orgánico e irregular, respetando la forma del árbol",
      "Uso: Elemento decorativo o de servicio de mesa",
      "Peso: Ligero y resistente"
    ],
    category: "utensilio"
  },
  {
    id: "escultura-colibri-vuelo",
    name: "Escultura de Colibrí en Vuelo",
    material: "Tagua",
    materialLabel: "Marfil Vegetal (Tagua)",
    price: "$95.000",
    priceNum: 95000,
    badge: "Detallado",
    image: "/Assets/Coleccion/Colibri_Dos_Costados.jpg",
    description: "Fina escultura de un colibrí capturado en pleno vuelo, tallada completamente a mano. Destacan los precisos micro-detalles texturizados en el plumaje de sus alas y cuerpo, demostrando un alto nivel de maestría artesanal sobre una pieza continua.",
    shortDescription: "Colibrí tallado a mano en tagua pura con detalles finos en el plumaje.",
    details: [
      "Material: 100% Semilla de tagua pura",
      "Técnica: Tallado manual con micro-texturizado",
      "Dimensiones: Pieza pequeña y de alta precisión",
      "Uso: Decorativo o pieza de colección",
      "Acabado: Blanco natural pulido"
    ],
    category: "decoracion"
  },
  {
    id: "colibri-orquidea-tagua",
    name: "Colibrí Libando Orquídea",
    material: "Tagua",
    materialLabel: "Tagua Integral",
    price: "$185.000",
    priceNum: 185000,
    badge: "Obra de Arte",
    image: "/Assets/Coleccion/Colibri_Orquidea.jpg",
    description: "Composición magistral que representa la interacción de la fauna y flora local. Un colibrí finamente tallado se suspende alimentándose de una orquídea detallada. Toda la estructura reposa de forma equilibrada sobre una base firme de semillas de tagua en su estado crudo.",
    shortDescription: "Composición escultórica de colibrí y orquídea sobre base de tagua rústica.",
    details: [
      "Material: Tagua pura tallada y semillas crudas enteras",
      "Estructura: Ensamblaje delicado de flora y fauna",
      "Estabilidad: Base pesada de semillas sin pelar",
      "Uso: Escultura de exhibición central",
      "Mantenimiento: Limpieza en seco con paño suave"
    ],
    category: "decoracion"
  },
  {
    id: "escultura-orquidea",
    name: "Orquídea Silvestre en Tagua",
    material: "Tagua",
    materialLabel: "Marfil Vegetal",
    price: "$110.000",
    priceNum: 110000,
    badge: "Elegante",
    image: "/Assets/Coleccion/Orquidea_Dos_Costados.jpg",
    description: "Hermosa representación de una orquídea esculpida meticulosamente. El tallo largo y las hojas abiertas exhiben la suavidad del material pulido, montado sobre una sólida base conformada por nueces de tagua que conservan su corteza moteada característica.",
    shortDescription: "Escultura botánica de orquídea con pétalos detallados sobre base rústica.",
    details: [
      "Material: Tagua (marfil vegetal) procesada y al natural",
      "Técnica: Ensamblaje y tallado de precisión botánica",
      "Acabado: Contraste entre pulido suave y corteza rugosa",
      "Uso: Decoración de interiores",
      "Diseño: Estilizado y vertical"
    ],
    category: "decoracion"
  },
  {
    id: "busto-rostro-tagua",
    name: "Busto Retrato Clásico",
    material: "Tagua",
    materialLabel: "Tagua Esculpida a Mano",
    price: "$220.000",
    priceNum: 220000,
    badge: "Personalizado",
    image: "/Assets/Coleccion/Rostro_Mano.jpg",
    description: "Impresionante busto tallado que muestra las facciones de un rostro humano con sorprendente nivel de realismo y expresividad. El rostro, completamente pulido, emerge y se funde suavemente con la base de la semilla, conservando su textura natural oscura para un contraste artístico imponente.",
    shortDescription: "Retrato humano tallado meticulosamente, conservando la corteza en la base.",
    details: [
      "Material: Semilla de tagua de gran calibre",
      "Técnica: Escultura de retrato minuciosa",
      "Acabado: Transición de marfil liso a corteza moteada",
      "Uso: Arte de autor, coleccionismo",
      "Exhibición: Base plana natural para fácil apoyo"
    ],
    category: "arte"
  },
  {
    id: "micro-rostro-perfil",
    name: "Micro-escultura de Perfil",
    material: "Tagua",
    materialLabel: "Tagua Fina",
    price: "$150.000",
    priceNum: 150000,
    badge: "Miniatura",
    image: "/Assets/Coleccion/Tagua_Carita.jpg",
    description: "Delicada micro-escultura del perfil de un rostro humano trabajada en una pequeña fracción de semilla de tagua. Las proporciones exactas y el increíble nivel de detalle en tan poco espacio exigen el uso de lentes de aumento, convirtiéndola en una verdadera joya del tallado.",
    shortDescription: "Micro-escultura de perfil humano trabajada con altísima precisión geométrica.",
    details: [
      "Material: Fragmento selecto de semilla de tagua",
      "Técnica: Micro-tallado de alta precisión",
      "Complejidad: Exige herramientas miniatura y lentes de aumento",
      "Uso: Pieza de colección fina",
      "Tamaño: Miniatura extrema"
    ],
    category: "arte"
  }
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByMaterial(material: string | "Todos"): Product[] {
  if (material === "Todos") return products;
  return products.filter((p) => p.material === material);
}

export const featuredProducts = products.filter((p) =>
  ["ajedrez-tagua-madera", "colibri-orquidea-tagua", "busto-rostro-tagua", "escultura-colibri-vuelo"].includes(p.id)
);
