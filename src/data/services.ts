import { Store, GraduationCap, Users, Brush, Truck, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  action: string;
  actionHref: string;
  color: string;
  features: string[];
  faq?: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    id: "tienda",
    title: "Tienda Artesanal",
    shortDescription:
      "Explora nuestra colección curada de joyas, utensilios y esculturas hechas a mano por maestros artesanos.",
    fullDescription:
      "Nuestra tienda es una ventana al mundo de la artesanía orgánica. Cada pieza que encontrarás ha pasado por un riguroso proceso de selección: desde la elección de la materia prima hasta el acabado final. No vendemos objetos; ofrecemos historias talladas en tagua, madera y hueso. Cada compra apoya directamente a los artesanos locales y a la preservación de técnicas ancestrales.",
    icon: Store,
    action: "Ver Catálogo",
    actionHref: "/productos",
    color: "bg-[#FAF9F6]",
    features: [
      "Piezas 100% únicas — nunca dos iguales",
      "Materiales orgánicos de origen responsable",
      "Certificado de autenticidad con cada pieza",
      "Empaque ecológico con materiales reciclados",
      "Envío a todo el país en 3–7 días hábiles",
    ],
    faq: [
      {
        question: "¿Puedo personalizar una pieza?",
        answer:
          "Sí. Contáctanos por WhatsApp o correo con tu idea y un artesano te asesorará sobre posibilidades, tiempos y costos.",
      },
      {
        question: "¿Hacen envíos internacionales?",
        answer:
          "Por el momento solo enviamos dentro del país. Para pedidos internacionales, escríbenos y evaluamos opciones.",
      },
      {
        question: "¿Las piezas tienen garantía?",
        answer:
          "Garantizamos la calidad artesanal de cada pieza. Si presentas algún defecto de fabricación en los primeros 30 días, te lo cambiamos.",
      },
    ],
  },
  {
    id: "cursos",
    title: "Cursos y Talleres",
    shortDescription:
      "Aprende el arte del tallado y el manejo de materiales orgánicos con nuestros expertos en el oficio.",
    fullDescription:
      "Nuestros talleres son espacios de aprendizaje práctico donde cualquier persona —sin importar su experiencia— puede sumergirse en el mundo del tallado artesanal. Trabajamos con grupos pequeños para garantizar atención personalizada. Ofrecemos cursos intensivos de fin de semana y talleres regulares entre semana. Al finalizar, te llevas la pieza que creaste con tus propias manos.",
    icon: GraduationCap,
    action: "Consultar Fechas",
    actionHref: "/contacto",
    color: "bg-white",
    features: [
      "Grupos máximo de 8 personas",
      "Materiales incluidos en el precio",
      "Sin experiencia previa necesaria",
      "Certificado de participación",
      "Te llevas tu pieza al finalizar",
    ],
    faq: [
      {
        question: "¿Qué incluye el taller?",
        answer:
          "Materiales, herramientas, guía del artesano durante toda la sesión y un refrigerio. Tú solo traes ganas de aprender.",
      },
      {
        question: "¿Cuánto dura cada taller?",
        answer:
          "Los talleres introductorios duran 4 horas. Los cursos completos se desarrollan en 3 sesiones de 4 horas cada una.",
      },
      {
        question: "¿Hacen talleres para empresas o grupos?",
        answer:
          "Sí, ofrecemos experiencias de team building y talleres corporativos. Contáctanos para personalizar la experiencia.",
      },
    ],
  },
  {
    id: "asesoria",
    title: "Diseño a Medida",
    shortDescription:
      "Asesoría personalizada para crear piezas únicas adaptadas a tus necesidades o proyectos de diseño interior.",
    fullDescription:
      "El servicio de diseño a medida es para quienes buscan algo más allá de lo que hay en el catálogo. Trabajamos contigo desde el concepto inicial hasta la pieza terminada: te asesoramos sobre materiales, formas, funciones y acabados. Ideal para regalos corporativos únicos, piezas de colección, elementos de decoración interior o proyectos de arquitectura que buscan integrar lo artesanal.",
    icon: Users,
    action: "Agendar Cita",
    actionHref: "/contacto",
    color: "bg-[#FAF9F6]",
    features: [
      "Consulta inicial sin costo",
      "Boceto y propuesta antes de iniciar",
      "Seguimiento de proceso con fotos",
      "Posibilidad de visita al taller",
      "Piezas para proyectos arquitectónicos",
    ],
    faq: [
      {
        question: "¿Cuánto tarda una pieza a medida?",
        answer:
          "Depende de la complejidad. Piezas simples tardan 1–2 semanas; proyectos complejos pueden tomar hasta 2 meses.",
      },
      {
        question: "¿Puedo incluir mi propio diseño o logo?",
        answer:
          "Sí. Podemos grabar logos, iniciales o diseños personalizados en las piezas. Comparte el arte y lo evaluamos.",
      },
    ],
  },
  {
    id: "acabados",
    title: "Acabados y Restauración",
    shortDescription:
      "Devolvemos la vida a piezas artesanales antiguas o dañadas con técnicas de restauración especializadas.",
    fullDescription:
      "¿Tienes una pieza artesanal que perdió su brillo o sufrió algún daño? Nuestro servicio de acabados y restauración evalúa el estado de la pieza y aplica el tratamiento adecuado: re-pulido, re-encerado, reparación de grietas o reconstrucción parcial. También ofrecemos renovación de acabados para piezas de madera del hogar como mesas, sillas y marcos.",
    icon: Brush,
    action: "Consultar",
    actionHref: "/contacto",
    color: "bg-white",
    features: [
      "Diagnóstico gratuito en tienda",
      "Re-pulido y re-encerado de madera",
      "Restauración de tagua y hueso",
      "Reparación de grietas y fracturas",
      "Garantía de 6 meses post-restauración",
    ],
  },
  {
    id: "envio",
    title: "Envío Seguro",
    shortDescription:
      "Empacamos cada pieza con cuidado extremo para que llegue perfecta a donde estés en el país.",
    fullDescription:
      "Sabemos que las piezas artesanales son frágiles y valiosas. Por eso desarrollamos un sistema de empaque especial con materiales reciclados que protege la pieza durante el transporte. Trabajamos con transportadoras de confianza y hacemos seguimiento de cada envío. Para piezas de alto valor, ofrecemos seguro de transporte opcional.",
    icon: Truck,
    action: "Ver Detalles",
    actionHref: "/contacto",
    color: "bg-[#FAF9F6]",
    features: [
      "Empaque artesanal en materiales reciclados",
      "Número de rastreo en cada pedido",
      "Seguro de transporte disponible",
      "Entrega en 3–7 días hábiles en todo el país",
      "Retiro en tienda sin costo",
    ],
  },
  {
    id: "suscripcion",
    title: "Club Artesano",
    shortDescription:
      "Suscríbete y recibe cada mes una pieza artesanal exclusiva con historia y proceso incluidos.",
    fullDescription:
      "El Club Artesano es nuestra suscripción mensual. Cada mes recibirás una pieza artesanal seleccionada por nuestro equipo, acompañada de una tarjeta que cuenta la historia del material, la técnica usada y el artesano que la creó. Las piezas del Club son exclusivas y no se venden en el catálogo regular. Es el regalo perfecto para quien ama el diseño artesanal.",
    icon: Star,
    action: "Suscribirse",
    actionHref: "/contacto",
    color: "bg-white",
    features: [
      "Pieza exclusiva cada mes (no disponible en tienda)",
      "Tarjeta con historia del artesano",
      "Descuento del 15% en compras de tienda",
      "Acceso preferencial a nuevas colecciones",
      "Cancelación en cualquier momento",
    ],
  },
];
