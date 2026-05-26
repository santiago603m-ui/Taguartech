import { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Taguarte-CH",
  description: "Conoce la historia detrás de Taguarte-CH, nuestro compromiso con el origen responsable y el oficio ancestral del tallado natural.",
};

export default function Page() {
  return <AboutClient />;
}
