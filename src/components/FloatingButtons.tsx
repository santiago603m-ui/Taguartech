"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { MessageCircle, Mail, X, Send } from "lucide-react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "1234567890";
const GMAIL_ADDRESS = "santiago603m@gmail.com";

export function FloatingButtons() {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    descripcion: "",
  });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsModalOpen(true);
    window.addEventListener("open-email-modal", handleOpenModal);
    return () => window.removeEventListener("open-email-modal", handleOpenModal);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hola%20TAGUARTE-CH%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20sus%20productos.`;

  const buttons = [
    {
      label: "WhatsApp",
      href: whatsappUrl,
      bg: "bg-[#BC6C25]",
      hoverBg: "hover:bg-[#a55c1e]",
      onClick: undefined,
      icon: (
        // WhatsApp SVG icon
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: undefined,
      onClick: () => setIsModalOpen(true),
      bg: "bg-[#5D4037]",
      hoverBg: "hover:bg-[#4a332c]",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${GMAIL_ADDRESS}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: "Nuevo mensaje desde la página web de TAGUARTECH",
          _template: "table",
          Nombres: formData.nombres,
          Apellidos: formData.apellidos,
          Correo_Remitente: formData.correo,
          Mensaje: formData.descripcion,
        }),
      });

      if (response.ok) {
        setIsSending(false);
        setIsModalOpen(false);
        toast.success("¡Correo enviado correctamente!", {
          description: `Nos pondremos en contacto contigo pronto.`,
        });
        setFormData({ nombres: "", apellidos: "", correo: "", descripcion: "" });
        setOpen(false);
      } else {
        throw new Error("Error en la respuesta del servidor");
      }
    } catch (error) {
      console.error(error);
      setIsSending(false);
      toast.error("Error al enviar el correo", {
        description: "Por favor, inténtalo de nuevo más tarde o revisa tu conexión.",
      });
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {/* Expandable contact buttons */}
        <AnimatePresence>
          {open &&
            buttons.map((btn, i) => (
              <motion.button
                key={btn.label}
                onClick={() => {
                  if (btn.onClick) {
                    btn.onClick();
                  } else if (btn.href) {
                    window.open(btn.href, "_blank", "noopener,noreferrer");
                  }
                }}
                initial={{ opacity: 0, y: 16, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.85 }}
                transition={{ delay: i * 0.06, duration: 0.22, ease: "easeOut" }}
                className={`flex items-center gap-2 ${btn.bg} ${btn.hoverBg} text-white px-4 py-2.5 rounded-full shadow-lg transition-colors duration-200 cursor-pointer`}
              >
                {btn.icon}
                <span className="text-sm font-medium whitespace-nowrap">{btn.label}</span>
              </motion.button>
            ))}
        </AnimatePresence>

        {/* Main toggle button */}
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          whileTap={{ scale: 0.92 }}
          className="w-14 h-14 rounded-full bg-[#3E2723] hover:bg-[#2a1a17] text-white shadow-xl flex items-center justify-center transition-colors duration-300 focus:outline-none"
          aria-label="Contactar"
        >
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {open ? <X size={22} /> : <MessageCircle size={22} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-lg bg-white rounded-3xl shadow-2xl z-50 p-6 md:p-8 overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-[#3E2723]">Envíanos un correo</h3>
                  <p className="text-sm text-[#5D4037] mt-1">
                    Destino: <span className="font-semibold text-[#BC6C25]">{GMAIL_ADDRESS}</span>
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleEmailSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-1.5">Nombres</label>
                    <input
                      required
                      name="nombres"
                      value={formData.nombres}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#5D4037]/15 text-[#3E2723] text-sm focus:outline-none focus:border-[#BC6C25] focus:ring-1 focus:ring-[#BC6C25] transition-all"
                      placeholder="Tus nombres"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3E2723] mb-1.5">Apellidos</label>
                    <input
                      required
                      name="apellidos"
                      value={formData.apellidos}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#5D4037]/15 text-[#3E2723] text-sm focus:outline-none focus:border-[#BC6C25] focus:ring-1 focus:ring-[#BC6C25] transition-all"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3E2723] mb-1.5">Correo Electrónico</label>
                  <input
                    required
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#5D4037]/15 text-[#3E2723] text-sm focus:outline-none focus:border-[#BC6C25] focus:ring-1 focus:ring-[#BC6C25] transition-all"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#3E2723] mb-1.5">¿Qué necesitas?</label>
                  <textarea
                    required
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-[#F9F6F0] border border-[#5D4037]/15 text-[#3E2723] text-sm focus:outline-none focus:border-[#BC6C25] focus:ring-1 focus:ring-[#BC6C25] transition-all resize-none"
                    placeholder="Describe tu consulta, idea o pieza que te interesa..."
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#BC6C25] hover:bg-[#a55c1e] text-white font-semibold rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSending ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send size={18} />
                        Enviar Correo
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
