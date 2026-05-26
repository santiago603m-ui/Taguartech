import { Hero } from "@/components/Hero";
import { MaterialsSection } from "@/components/MaterialsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inicio | Taguarte-CH",
  description: "Bienvenido a Taguarte-CH, líderes en innovación y tecnología. Descubre nuestros materiales, servicios y productos destacados.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <MaterialsSection />
      <ServicesSection />
      <ProductShowcase />
    </>
  );
}
