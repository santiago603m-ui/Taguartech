import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/index.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});



export const metadata: Metadata = {
  title: {
    default: "%s - Taguarte-CH",
    template: "%s",
  },
  description: "Expertos en soluciones tecnológicas innovadoras, desarrollo de software y servicios digitales de alta calidad.",
  icons: {
    icon: "/assets/Logo_Mano.png",
  },
  openGraph: {
    title: "Taguarte-CH",
    description: "Expertos en soluciones tecnológicas innovadoras.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        <div className="min-h-screen bg-[#F9F6F0] font-sans selection:bg-[#606C38]/20 selection:text-[#3E2723] ">
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingButtons />
          <Toaster position="top-center" richColors />
        </div>
      </body>
    </html>
  );
}
