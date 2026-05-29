"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesClient() {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-walnut to-espresso text-cream py-16 mb-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-amber font-semibold tracking-wider text-sm uppercase mb-3 block"
          >
            Lo que ofrecemos
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nuestros Servicios
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cream/60 max-w-xl mx-auto text-lg leading-relaxed"
          >
            Más allá de los objetos, ofrecemos experiencias artesanales que conectan
            con la naturaleza, el oficio y la belleza de lo hecho a mano.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-ivory rounded-3xl p-8 md:p-10 border border-sand/50 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-sienna/10 text-sienna flex items-center justify-center shrink-0">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-espresso mb-2">{service.title}</h2>
                    <p className="text-espresso/70 text-base leading-relaxed">{service.shortDescription}</p>
                  </div>
                </div>

                <p className="text-walnut/80 leading-relaxed mb-8 text-base flex-1">
                  {service.fullDescription}
                </p>

                {/* Features */}
                <div className="bg-cream/60 rounded-2xl p-6 mb-8">
                  <h3 className="text-sm font-bold text-espresso/50 uppercase tracking-widest mb-4">Lo que incluye</h3>
                  <ul className="space-y-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-walnut/80 text-base">
                        <Check size={18} className="text-sienna mt-1 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.actionHref === "/contacto" ? (
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                    className="w-full sm:w-auto text-center px-8 py-4 bg-espresso text-cream font-bold rounded-full hover:bg-walnut transition-all shadow-md"
                  >
                    {service.action}
                  </button>
                ) : (
                  <Link
                    href={service.actionHref}
                    className="w-full sm:w-auto text-center px-8 py-4 bg-espresso text-cream font-bold rounded-full hover:bg-walnut transition-all shadow-md"
                  >
                    {service.action}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden relative bg-gradient-to-br from-walnut to-espresso"
        >
          <div className="px-8 py-14 md:py-20 text-center text-white relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">¿No sabes por dónde empezar?</h2>
            <p className="text-white/60 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
              Cuéntanos tu idea o necesidad y te orientamos sin compromiso.
              Un artesano experto te ayudará a dar vida a tu proyecto.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-cream text-espresso font-bold rounded-full hover:bg-ivory transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Hablar con un artesano
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
