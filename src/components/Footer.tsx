import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#3E2723] text-[#F9F6F0] py-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center gap-6 ">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-widest text-white uppercase"
        >
          TAGUARTE-CH
        </Link>

        {/* Tagline */}
        <p className="text-[#F9F6F0]/60 text-sm text-center max-w-xs">
          Artesanía premium con materiales orgánicos. Tradición y diseño contemporáneo.
        </p>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Link
            href="#"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#606C38] transition-colors duration-300"
          >
            <Instagram size={17} />
          </Link>
          <Link
            href="#"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#606C38] transition-colors duration-300"
          >
            <Facebook size={17} />
          </Link>
          <Link
            href="#"
            aria-label="Twitter"
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#606C38] transition-colors duration-300"
          >
            <Twitter size={17} />
          </Link>
        </div>

        {/* Divider */}
        <div className="w-full max-w-xs h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-[#F9F6F0]/40">
          <p>© {new Date().getFullYear()} Taguarte-CH. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
