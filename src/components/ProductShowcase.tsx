"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { featuredProducts } from "@/data/products";

export function ProductShowcase() {
  const router = useRouter();

  return (
    <section id="coleccion" className="py-16 bg-[#FAEDCD]">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-14">
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold text-title mb-4"
            >
              Vitrina Destacada
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-title/70"
            >
              Cada pieza de nuestra colección lleva consigo horas de dedicación
              y el alma de quien la esculpió.
            </motion.p>
          </div>
          <Link
            href="/productos"
            className="hidden md:inline-flex items-center gap-2 px-6 py-3 border border-title text-title rounded-full hover:bg-title hover:text-white transition-colors mt-6 md:mt-0"
          >
            Ver toda la colección
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => router.push(`/producto/${product.id}`)}
              className="group relative aspect-[3/4] sm:aspect-auto sm:h-[480px] md:h-[440px] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-earth/20"
            >
              {/* Background Image */}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />


              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0e0a]/80 via-[#1a0e0a]/20 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-[#3E2723]"
                    style={{
                      background: "rgba(249,246,240,0.82)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.5)",
                    }}
                  >
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Bottom glass info panel */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 p-5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  borderTop: "1px solid rgba(255,255,255,0.22)",
                }}
              >
                <p className="text-[#f0c990] text-xs font-medium uppercase tracking-widest mb-1">
                  {product.material}
                </p>
                <div className="flex items-end justify-between">
                  <h3 className="text-white font-bold text-lg leading-tight">{product.name}</h3>
                  <span
                    className="text-sm font-semibold px-2.5 py-1 rounded-lg ml-3 whitespace-nowrap text-white"
                    style={{
                      background: "rgba(188,108,37,0.75)",
                      backdropFilter: "blur(6px)",
                      WebkitBackdropFilter: "blur(6px)",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                  >
                    {product.price}
                  </span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 px-6 py-3 border border-title text-title rounded-full hover:bg-title hover:text-white transition-colors w-full justify-center"
          >
            Ver toda la colección
          </Link>
        </div>
      </div>
    </section>
  );
}
