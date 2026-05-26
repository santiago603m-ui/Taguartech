import { Metadata } from "next";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Nuestra Colección | Taguarte-CH",
  description: "Explora nuestra colección única de piezas talladas a mano en tagua, madera y hueso. Cada objeto es una obra de arte orgánica e irrepetible.",
};

export default function Page() {
  return <ProductsClient />;
}
