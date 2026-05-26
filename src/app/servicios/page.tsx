import { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Servicios | Taguarte-CH",
  description: "Desde el tallado a medida hasta talleres artesanales, ofrecemos servicios que celebran el oficio y la naturaleza.",
};

export default function Page() {
  return <ServicesClient />;
}
