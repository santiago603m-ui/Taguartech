"use client";

import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Colección", href: "/productos" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled || isMobileMenuOpen
          ? "backdrop-blur-xl bg-cream/80 shadow-[0_8px_32px_rgba(58,34,24,0.06)] border-b border-sand/60 py-3"
          : "bg-transparent py-5"
      } ${!isScrolled && !isMobileMenuOpen ? "bg-transparent md:bg-transparent" : ""}`}
    >

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-xl md:text-2xl font-bold text-espresso tracking-wider">
            TAGUARTE-CH
          </Link>
        </div>


        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-sienna border-b-2 border-sienna pb-0.5"
                    : "text-walnut hover:text-sienna"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-walnut hover:text-sienna transition-colors"
            aria-label="Menú"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-cream border-b border-sand/40 shadow-lg"
        >
          <div className="px-6 py-4 flex flex-col space-y-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-base font-medium text-walnut hover:text-sienna transition-colors py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
