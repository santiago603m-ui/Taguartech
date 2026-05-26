import { Metadata } from "next";
import ProductDetailClient from "./ProductDetailClient";
import { getProductById, products } from "@/data/products";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Pieza no encontrada | Taguarte-CH",
    };
  }

  return {
    title: `${product.name} | Taguarte-CH`,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [product.image],
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <ProductDetailClient id={id} />;
}
