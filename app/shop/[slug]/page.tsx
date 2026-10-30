import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailPage from "../../../components/ProductDetailPage";
import { products } from "../../../lib/shopCatalog";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.id === params.slug);
  return {
    title: product ? `${product.name} — Pharaoh` : "Product — Pharaoh",
    description: product?.description,
  };
}

export default function ProductRoute({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.id === params.slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
