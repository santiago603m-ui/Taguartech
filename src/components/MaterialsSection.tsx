"use client";

import { motion } from "motion/react";
import Image from "next/image";

const materials = [
  {
    id: "tagua",
    title: "Tagua",
    description:
      "Conocida como el marfil vegetal. Semillas recolectadas a mano en los bosques húmedos, ofreciendo una textura suave y un pulido excepcional que respeta el medio ambiente.",
    image:
      "/Assets/Tagua_Catira.jpeg",
  },
  {
    id: "madera",
    title: "Maderas Nobles",
    description:
      "Maderas de origen sostenible y maderas rescatadas. Seleccionamos cuidadosamente piezas con vetas únicas que cuentan su propia historia a través de años de crecimiento.",
    image:
      "/Assets/Cuadro.jpeg",
  },
  {
    id: "hueso",
    title: "Hueso Tallado",
    description:
      "Una tradición milenaria reinterpretada. Transformamos subproductos naturales en obras de arte detalladas mediante técnicas de tallado de alta precisión.",
    image:
      "/Assets/Rostro_Mano.jpeg",
  },
];

export function MaterialsSection() {
  return (
    <section id="materias-primas" className="py-16 bg-[#FEFAE0]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-title mb-6"
          >
            La Esencia de Nuestra Tierra
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#5D4037]"
          >
            Honramos los materiales en su forma más pura. Cada pieza es un
            tributo a la naturaleza y al proceso artesanal, creando objetos con
            propósito y belleza atemporal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group flex flex-col bg-[#F9F6F0] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-earth/10"
            >
              <div className="h-64 sm:h-56 md:h-64 overflow-hidden relative">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3
                  className="text-xl md:text-2xl font-bold text-title mb-4"
                >
                  {material.title}
                </h3>
                <p className="text-title/70 text-base md:text-lg">
                  {material.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
