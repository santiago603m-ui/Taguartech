"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check } from "lucide-react";
import { services } from "@/data/services";

export default function ServicesClient() {
  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      {/* Hero */}
      <div className="bg-moss text-cream py-16 mb-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-earth font-semibold tracking-wider text-sm uppercase mb-3 block"
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
            className="text-[#F9F6F0]/70 max-w-xl mx-auto text-lg leading-relaxed"
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
                className="bg-white rounded-3xl p-8 md:p-10 border border-[#e0dcd3] shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#606C38]/10 text-[#606C38] flex items-center justify-center shrink-0">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-moss mb-2">{service.title}</h2>
                    <p className="text-moss/80 text-base leading-relaxed">{service.shortDescription}</p>
                  </div>
                </div>

                <p className="text-moss/70 leading-relaxed mb-8 text-base flex-1">
                  {service.fullDescription}
                </p>

                {/* Features */}
                <div className="bg-[#F9F6F0]/50 rounded-2xl p-6 mb-8">
                  <h3 className="text-sm font-bold text-moss/50 uppercase tracking-widest mb-4">Lo que incluye</h3>
                  <ul className="space-y-3">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3 text-moss/70 text-base">
                        <Check size={18} className="text-[#606C38] mt-1 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.actionHref === "/contacto" ? (
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                    className="w-full sm:w-auto text-center px-8 py-4 bg-moss text-cream font-bold rounded-full hover:bg-moss/90 transition-all shadow-md"
                  >
                    {service.action}
                  </button>
                ) : (
                  <Link
                    href={service.actionHref}
                    className="w-full sm:w-auto text-center px-8 py-4 bg-moss text-cream font-bold rounded-full hover:bg-moss/90 transition-all shadow-md"
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
          className="rounded-3xl overflow-hidden relative"
          style={{ background: "linear-gradient(135deg, #606C38 0%, #3E2723 100%)" }}
        >
          <div className="px-8 py-14 md:py-20 text-center text-white relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">¿No sabes por dónde empezar?</h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
              Cuéntanos tu idea o necesidad y te orientamos sin compromiso.
              Un artesano experto te ayudará a dar vida a tu proyecto.
            </p>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-[#3E2723] font-bold rounded-full hover:bg-[#F9F6F0] transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Hablar con un artesano
            </button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}


