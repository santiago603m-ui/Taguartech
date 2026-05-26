"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Check } from "lucide-react";
import { getProductById, products } from "@/data/products";

const WHATSAPP_NUMBER = "573001234567";

const materialColors: Record<string, string> = {
  Tagua: "bg-[#f0e6d3] text-[#7a4f1e]",
  Madera: "bg-[#e8ddd0] text-[#5D4037]",
  Hueso: "bg-[#ede9e3] text-[#3E2723]",
};

const materialBgMap: Record<string, string> = {
  Tagua: "bg-[#fdf7f0]",
  Madera: "bg-[#f5ece3]",
  Hueso: "bg-[#f0ebe5]",
};

export default function ProductDetailClient({ id }: { id: string }) {
  const product = getProductById(id);

  if (!product) {
    return (
      <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-3xl font-bold text-moss mb-4">Pieza no encontrada</h1>
        <p className="text-[#5D4037] mb-8">Esta pieza no existe o fue removida del catálogo.</p>
        <Link href="/productos" className="px-6 py-3 bg-[#606C38] text-white rounded-full hover:bg-[#4e5a2d] transition-colors">
          Ver colección completa
        </Link>
      </div>
    );
  }

  const whatsappText = encodeURIComponent(
    `Hola TAGUARTE-CH, estoy interesado/a en la pieza *${product.name}* (${product.price}). ¿Está disponible?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
  const related = products.filter((p) => p.material === product.material && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-28 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-[#5D4037]/70 mb-8">
          <Link href="/" className="hover:text-[#606C38] transition-colors">Inicio</Link>
          <span className="text-[#5D4037]/50">/</span>
          <Link href="/productos" className="hover:text-[#606C38] transition-colors">Colección</Link>
          <span className="text-[#5D4037]/50">/</span>
          <span className="text-moss font-medium">{product.name}</span>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

          {/* Image */}
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className={`rounded-3xl overflow-hidden shadow-2xl ${materialBgMap[product.material]} p-4`}>
              <div className="relative w-full h-[420px] md:h-[520px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>
            {product.badge && (
              <div className="absolute top-8 left-8 z-10">
                <span className="text-sm font-semibold px-4 py-1.5 rounded-full text-[#3E2723]"
                  style={{ background: "rgba(249,246,240,0.92)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  {product.badge}
                </span>
              </div>
            )}
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="flex flex-col justify-center">
            <span className={`inline-flex w-fit text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 ${materialColors[product.material]}`}>
              {product.materialLabel}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-moss mb-3 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-earth">{product.price}</span>
              <span className="text-moss/60 text-sm">COP · Pieza única</span>
            </div>
            <p className="text-moss/80 leading-relaxed mb-8 text-base">{product.description}</p>

            {/* Specs */}
            <div className="bg-white rounded-2xl p-6 mb-8 border border-[#5D4037]/8">
              <h3 className="text-[#3E2723] font-bold mb-4 text-sm uppercase tracking-wider">Especificaciones</h3>
              <ul className="space-y-2.5">
                {product.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5D4037] text-sm">
                    <Check size={15} className="text-[#606C38] mt-0.5 shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2.5 px-6 py-4 bg-earth text-cream font-semibold rounded-full hover:bg-earth/90 transition-all shadow-md hover:shadow-lg">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consultar por WhatsApp
              </Link>
              <button onClick={() => window.dispatchEvent(new CustomEvent("open-email-modal"))}
                className="flex items-center justify-center gap-2 px-6 py-4 border-2 border-moss text-moss font-semibold rounded-full hover:bg-moss hover:text-cream transition-all">
                <MessageCircle size={18} />
                Escribir mensaje
              </button>
            </div>

            <Link href="/productos" className="mt-6 inline-flex items-center gap-2 text-[#5D4037]/60 hover:text-[#606C38] text-sm transition-colors">
              Volver a la colección
            </Link>
          </motion.div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-moss mb-8">Más piezas en {product.material}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel, i) => (
                <motion.div key={rel.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Link href={`/producto/${rel.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="h-48 overflow-hidden relative">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-[#5D4037] text-xs mb-1">{rel.materialLabel}</p>
                      <h3 className="text-[#3E2723] font-bold">{rel.name}</h3>
                      <p className="text-[#BC6C25] font-bold mt-1">{rel.price}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
