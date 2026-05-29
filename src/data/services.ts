import { Brush, Leaf, Utensils } from "lucide-react";
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
};

export const services: Service[] = [
  {
    id: "taller-madera",
    title: "Taller de Talla en Madera",
    shortDescription:
      "Aprende técnicas de talla en alto y bajo relieve sobre madera utilizando navaja, guiado por un maestro artesano.",
    fullDescription:
      "Sumérgete en el oficio tradicional de la talla en madera en este taller teórico-práctico de 3 horas. Guiado por Héctor Daniel Cortés Pirazán, Maestro de Maestros con más de 38 años de experiencia en oficios tradicionales. Aprenderás las técnicas fundamentales de relieve utilizando herramientas tradicionales. Una experiencia inmersiva en las artesanías chiquinquireñas dentro de las instalaciones de Casa Loma.",
    icon: Brush,
    action: "Reservar Cupo",
    actionHref: "https://wa.me/573057041605",
    color: "bg-[#FAF9F6]",
    features: [
      "Duración de 3 horas en jornada AM (9:30 a 12:30)",
      "Insumos, materiales y herramientas proporcionados",
      "Incluye Coffee Break y Almuerzo",
      "Guía experta del Maestro Héctor Daniel Cortés",
      "Tarifas preferenciales para grupos (Desde $70.000 c/u)",
    ],
  },
  {
    id: "taller-tagua",
    title: "Taller de Escultura en Semilla de Tagua",
    shortDescription:
      "Descubre el arte de esculpir en la semilla de tagua (marfil vegetal) con el único escultor de esta semilla en el país.",
    fullDescription:
      "Conoce los secretos del 'marfil vegetal' en este exclusivo taller teórico-práctico de 3 horas. Bajo la instrucción de Héctor Daniel Cortés Pirazán, reconocido como el único escultor en tagua de Colombia, aprenderás las técnicas delicadas de escultura sobre esta semilla usando navaja. Una oportunidad única para conectar con este material orgánico e histórico.",
    icon: Leaf,
    action: "Reservar Cupo",
    actionHref: "https://wa.me/573057041605",
    color: "bg-white",
    features: [
      "Duración de 3 horas en jornada AM (9:30 a 12:30)",
      "Semillas de tagua y navajas incluidas",
      "Incluye Coffee Break y Almuerzo",
      "Instrucción por el único escultor en Tagua del país",
      "Inversión individual $120.000 (Descuentos grupales aplicables)",
    ],
  },
  {
    id: "taller-cocina",
    title: "Taller de Cocina Ancestral",
    shortDescription:
      "Cocine y deguste un menú gourmet de 3 tiempos con productos regionales típicos bajo la guía de Josefina García.",
    fullDescription:
      "Disfruta de la experiencia 'Culinaria Josefina y su Ambrosía' en un taller teórico-práctico de 3 horas. Josefina García, Cake-Artist y galardonada investigadora de la cocina ancestral boyacense (reconocida en el Festival Internacional de la Cultura Campesina de Tunja), te guiará en la preparación de un menú de 3 tiempos: entrante, primer plato y postre. ¡Cocine y deguste la tradición!",
    icon: Utensils,
    action: "Reservar Cupo",
    actionHref: "https://wa.me/573057041605",
    color: "bg-[#FAF9F6]",
    features: [
      "Duración de 3 horas en jornada AM (9:30 a 12:30)",
      "Menú gourmet en 3 tiempos con productos regionales",
      "Metodología práctica: 'Cocine y deguste'",
      "Incluye todos los insumos alimenticios y herramientas",
      "Guiado por investigadora galardonada de Boyacá",
    ],
  },
];
