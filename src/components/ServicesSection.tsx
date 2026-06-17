"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

const services = [
  {
    id: "tienda",
    title: "Tienda Artesanal",
    description:
      "Explora nuestra colección curada de joyas, utensilios y esculturas hechas a mano por maestros artesanos.",
    image: "/Assets/Inicio/Bandeja_Copas.jpg",
    action: "Ver Catálogo",
    href: "/productos",
  },
  {
    id: "cursos",
    title: "Cursos y Talleres",
    description:
      "Aprende el arte del tallado y el manejo de materiales orgánicos con nuestros expertos en el oficio.",
    image: "/Assets/Nosotros/Imagen_Corpo_2.jpg",
    action: "Consultar Fechas",
    href: "/contacto",
  },
  {
    id: "asesoria",
    title: "Diseño a Medida",
    description:
      "Asesoría personalizada para crear piezas únicas adaptadas a tus necesidades o proyectos de diseño interior.",
    image: "/Assets/Servicios/Hector_trabajo.jpg",
    action: "Agendar Cita",
    href: "/contacto",
  },
];

export function ServicesSection() {
  return (
    <section id="servicios" className="relative py-16">
      {/* Smooth gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-sand/30 to-ivory/50" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-sienna font-semibold tracking-wider text-sm uppercase mb-2 block">
              Nuestros Servicios
            </span>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-espresso"
            >
              Más allá del objeto
            </motion.h2>
          </div>
          <Link
            href="/servicios"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-espresso text-espresso rounded-full hover:bg-espresso hover:text-cream transition-colors"
          >
            Ver todos los servicios
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {services.map((service, index) => {
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-sand/40 group overflow-hidden"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso/5 group-hover:bg-transparent transition-colors duration-300 " />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-espresso mb-3">{service.title}</h3>
                  <p className="text-walnut/80 mb-8 leading-relaxed">{service.description}</p>
                  {service.href === "/contacto" ? (
                    <button
                      onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                      className="flex items-center text-sienna font-medium group-hover:text-terracotta transition-colors"
                    >
                      {service.action}
                    </button>
                  ) : (
                    <Link
                      href={service.href}
                      className="flex items-center text-sienna font-medium group-hover:text-terracotta transition-colors"
                    >
                      {service.action}
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
