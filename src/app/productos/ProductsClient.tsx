"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";
import { products, getProductsByMaterial } from "@/data/products";
import type { Product } from "@/data/products";

type FilterType = "Todos" | "Tagua" | "Madera" | "Hueso";

const filters: FilterType[] = ["Todos", "Tagua", "Madera", "Hueso"];

const materialColors: Record<string, string> = {
  Tagua: "bg-[#f0e6d3] text-[#7a4f1e]",
  Madera: "bg-[#e8ddd0] text-[#5D4037]",
  Hueso: "bg-[#ede9e3] text-[#3E2723]",
};

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("Todos");
  const filtered = getProductsByMaterial(activeFilter);

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <span className="text-[#BC6C25] font-semibold tracking-wider text-sm uppercase mb-2 block">
            Vitrina Completa
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-moss mb-4">
            Nuestra Colección
          </h1>
          <p className="text-lg text-moss/70 max-w-xl leading-relaxed">
            Cada pieza es única, tallada a mano con materiales orgánicos de origen responsable.
            No existen dos iguales.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            <span className="flex items-center gap-1.5 text-moss/70 text-sm font-medium whitespace-nowrap mr-2">
              <Filter size={15} /> Filtrar:
            </span>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  activeFilter === f
                    ? "bg-moss text-cream shadow-md"
                    : "bg-white text-moss/70 border border-moss/20 hover:border-moss/40"
                }`}
              >
                {f}
                {f !== "Todos" && (
                  <span className="ml-1.5 opacity-60 text-xs">
                    ({products.filter((p) => p.material === f).length})
                  </span>
                )}
              </button>
            ))}
          </div>
          <span className="ml-auto text-moss/60 text-sm hidden sm:block">
            {filtered.length} {filtered.length === 1 ? "pieza" : "piezas"}
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filtered.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-moss text-cream p-8 md:p-14 flex flex-col lg:flex-row items-center lg:justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              ¿Buscas algo especial?
            </h2>
            <p className="text-[#F9F6F0]/70 text-lg">
              Diseñamos piezas a medida. Cuéntanos tu idea y un artesano te contactará para hacerla realidad.
            </p>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
            className="shrink-0 w-full sm:w-auto px-8 py-4 bg-earth text-cream font-bold rounded-full hover:bg-earth/90 transition-all shadow-lg hover:shadow-xl"
          >
            Solicitar pieza a medida
          </button>
        </motion.div>

      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="group relative rounded-2xl overflow-hidden border-2 border-earth/20 shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer bg-white"
    >
      <Link href={`/producto/${product.id}`} className="block">
        {/* Image */}
        <div className="relative h-[280px] overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3 z-10">
              <span
                className="text-xs font-semibold px-3 py-1 rounded-full text-[#3E2723]"
                style={{
                  background: "rgba(249,246,240,0.88)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                }}
              >
                {product.badge}
              </span>
            </div>
          )}


        </div>

        {/* Info */}
        <div className="p-5">
          <span
            className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${materialColors[product.material]}`}
          >
            {product.material}
          </span>
          <h3 className="text-moss font-bold text-lg mt-2 mb-1 leading-tight">
            {product.name}
          </h3>
          <p className="text-moss/70 text-sm mb-3 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-earth font-bold text-lg">{product.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
