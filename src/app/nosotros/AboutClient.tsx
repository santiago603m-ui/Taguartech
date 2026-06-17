"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Leaf, Hammer, Heart, Award } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Origen Responsable",
    desc: "Cada material es seleccionado con conciencia ambiental. Trabajamos con materias primas de fuentes sostenibles y rescatamos maderas de árboles caídos naturalmente.",
  },
  {
    icon: Hammer,
    title: "Oficio Ancestral",
    desc: "Preservamos técnicas de tallado transmitidas de generación en generación. Nuestros artesanos son maestros con décadas de experiencia en el oficio.",
  },
  {
    icon: Heart,
    title: "Hecho con Alma",
    desc: "Cada pieza lleva la huella de las manos que la crearon. No hay moldes, no hay series industriales: solo el diálogo entre el artesano y el material.",
  },
  {
    icon: Award,
    title: "Calidad sin Compromiso",
    desc: "Inspeccionamos cada pieza antes de que salga del taller. Si no cumple nuestros estándares, vuelve al banco de trabajo hasta que esté perfecta.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Selección de Materia Prima",
    desc: "Recorremos bosques y comunidades para encontrar las mejores semillas de tagua, maderas nobles y huesos de origen natural.",
    image: "/Assets/Nosotros/Materiales_Juntos.png",
  },
  {
    step: "02",
    title: "Diseño y Boceto",
    desc: "Cada pieza nace como un dibujo a mano. El artesano traza la forma que siente en el material antes de poner una herramienta sobre él.",
    image: "/Assets/Nosotros/Escultura_Gato.jpg",
  },
  {
    step: "03",
    title: "Tallado Artesanal",
    desc: "Con gubias, formones y lijas progresivas, el artesano da forma a la pieza respetando las vetas y texturas naturales del material.",
    image: "/Assets/Nosotros/Nosotros_Imagen_2.jpg",
  },
  {
    step: "04",
    title: "Acabado y Entrega",
    desc: "Pulido, encerado y control de calidad final. La pieza se empaca en materiales reciclados y viaja hacia su nuevo hogar.",
    image: "/Assets/Nosotros/Escultura_Gato.jpg",
  },
];

const stats = [
  { num: "12+", label: "Años de oficio" },
  { num: "500+", label: "Piezas creadas" },
  { num: "3", label: "Materiales propios" },
  { num: "100%", label: "Hecho a mano" },
];

export default function AboutClient() {
  return (
    <div className="pt-28 bg-cream min-h-screen">

      {/* Hero */}
      <section className="py-16 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-sienna font-semibold tracking-wider text-sm uppercase mb-3 block">
              Nuestra Historia
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-espresso mb-6 leading-tight">
              El Arte de la<br />Materia Natural
            </h1>
            <p className="text-espresso/80 text-lg leading-relaxed mb-6">
              TAGUARTE-CH nació de la convicción de que los materiales orgánicos —la tagua,
              la madera, el hueso— merecen ser tratados con el mismo respeto que la piedra
              o el metal precioso. Somos un taller artesanal fundado con la misión de
              preservar técnicas ancestrales y conectarlas con el diseño contemporáneo.
            </p>
            <p className="text-espresso/60 leading-relaxed">
              Cada pieza que sale de nuestro taller es el resultado de horas de trabajo
              silencioso, de escuchar al material, de respetar sus vetas, sus imperfecciones
              y su historia. Creemos que la imperfección es la firma de lo auténtico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[480px] relative bg-espresso/10">

              {/* --- INICIO DEL CAMBIO --- */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/Assets/Hector_Trabajo.mp4" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
              </video>
              {/* --- FIN DEL CAMBIO --- */}

              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
            </div>
            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-10 md:-bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-2 z-10 border border-sand/40"
            >
              {stats.map((s) => (
                <div key={s.num} className="text-center">
                  <p className="text-sienna font-bold text-xl md:text-2xl">{s.num}</p>
                  <p className="text-espresso/60 text-[10px] md:text-xs uppercase tracking-wider leading-tight">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-cream via-ivory to-cream mt-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-sienna font-semibold tracking-wider text-sm uppercase mb-2 block">Lo que nos guía</span>
            <h2 className="text-3xl md:text-4xl font-bold text-espresso">Nuestros Valores</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="bg-white/70 backdrop-blur-sm border border-sand/40 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-sienna/10 text-sienna flex items-center justify-center mb-6">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bold text-espresso mb-3">{v.title}</h3>
                  <p className="text-walnut text-base leading-relaxed">{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-cream via-sand/20 to-ivory">
        <div className="container mx-auto px-6 md:px-12 ">
          <div className="text-center mb-16">
            <span className="text-sienna font-semibold tracking-wider text-sm uppercase mb-2 block">Cómo trabajamos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-espresso">Nuestro Proceso</h2>
          </div>
        </div>
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          {processSteps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden border border-sand/40 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="w-full sm:w-40 h-48 sm:h-auto shrink-0 overflow-hidden relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sienna font-bold text-4xl leading-none mb-3">{step.step}</span>
                <h3 className="text-xl font-bold text-espresso mb-3">{step.title}</h3>
                <p className="text-walnut text-base leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="pb-16 container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-br from-espresso to-walnut text-cream p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Conoce nuestra colección</h2>
          <p className="text-cream/60 mb-8 max-w-md mx-auto">
            Descubre las piezas que nacen de este proceso y lleva a casa un objeto con historia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/productos"
              className="px-8 py-4 bg-sienna text-white font-bold rounded-full hover:bg-terracotta transition-all shadow-lg">
              Ver Colección
            </Link>
            <button onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
              className="px-8 py-4 border-2 border-cream/30 text-white font-bold rounded-full hover:bg-cream/10 transition-all ">
              Contactar
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
