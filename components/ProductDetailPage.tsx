"use client";

import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Gem,
  Heart,
  Maximize2,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  StarHalf,
  Truck,
  X,
} from "lucide-react";
import { useState } from "react";
import type { Product } from "../lib/shopCatalog";
import { useStore } from "../lib/StoreContext";

function ProductStars({ rating, reviews }: { rating: number; reviews: number }) {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 > 0;

  return (
    <div className="flex items-center gap-2 text-[var(--gold)]">
      <span className="flex gap-1" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= fullStars) return <Star key={star} size={18} fill="currentColor" />;
          if (star === fullStars + 1 && hasPartialStar) return <StarHalf key={star} size={18} fill="currentColor" />;
          return <Star key={star} size={18} />;
        })}
      </span>
      <span className="text-sm text-[var(--theme-muted)]">{rating.toFixed(1)} ({reviews} reviews)</span>
    </div>
  );
}

function TrustItem({ icon, title, copy }: { icon: React.ReactNode; title: string; copy: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[var(--gold)]">{icon}</span>
      <span className="leading-5">
        <span className="block text-sm text-[var(--theme-text)]">{title}</span>
        <span className="block text-xs text-[var(--theme-muted)]">{copy}</span>
      </span>
    </div>
  );
}

export default function ProductDetailPage({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const { addToCart, isWished, toggleWishlist } = useStore();

  const wished = isWished(product.id);

  const selectPrevious = () => setSelectedImage((current) => (current === 0 ? product.gallery.length - 1 : current - 1));
  const selectNext = () => setSelectedImage((current) => (current + 1) % product.gallery.length);

  return (
    <main className="min-h-screen bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-9">
        <nav className="flex flex-wrap items-center gap-2 py-5 text-sm text-[var(--theme-muted)]" aria-label="Breadcrumb">
          <a href="/" className="hover:text-[var(--gold)]">Home</a><span>›</span><a href="/shop" className="hover:text-[var(--gold)]">Shop</a><span>›</span><a href={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-[var(--gold)]">{product.category}</a><span>›</span><span className="text-[var(--theme-text)]">{product.name}</span>
        </nav>

        <div className="grid gap-9 pb-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(390px,.95fr)] lg:gap-12 xl:gap-16">
          <section aria-label={`${product.name} image gallery`} className="min-w-0">
            <div className="grid gap-4 sm:grid-cols-[112px_minmax(0,1fr)] lg:grid-cols-[135px_minmax(0,1fr)]">
              <div className="order-2 flex gap-3 overflow-x-auto sm:order-1 sm:flex-col">
                {product.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    aria-label={`Show ${["front", "left side", "back", "right side"][index]} view`}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-[94px] min-w-[88px] overflow-hidden border bg-[var(--theme-panel)] transition sm:h-[114px] sm:min-w-0 lg:h-[133px] ${selectedImage === index ? "border-2 border-[var(--gold)]" : "border-[var(--theme-border)] opacity-75 hover:border-[var(--gold)] hover:opacity-100"}`}
                  >
                    <Image src={image} alt={`${product.name} ${index + 1}`} fill priority={index === 0} sizes="140px" className="object-cover" />
                  </button>
                ))}
              </div>

              <div className="order-1 relative aspect-[1.03] min-h-[390px] overflow-hidden bg-[var(--theme-panel-alt)] sm:order-2 sm:aspect-[1.04] lg:min-h-[600px]">
                <Image src={product.gallery[selectedImage]} alt={`${product.name} selected view`} fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-white/[0.03]" />
                <button type="button" aria-label="Previous product image" onClick={selectPrevious} className="absolute left-5 top-1/2 flex h-11 w-11 items-center justify-center border border-[var(--gold-bright)] bg-[var(--theme-inverse)] text-[var(--theme-inverse-text)] backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"><ChevronLeft size={22} /></button>
                <button type="button" aria-label="Next product image" onClick={selectNext} className="absolute right-5 top-1/2 flex h-11 w-11 items-center justify-center border border-[var(--gold-bright)] bg-[var(--theme-inverse)] text-[var(--theme-inverse-text)] backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"><ChevronRight size={22} /></button>
                <button type="button" aria-label="Expand product image" onClick={() => setLightboxOpen(true)} className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center border border-[var(--gold)] bg-[var(--theme-inverse)] text-[var(--gold-bright)] backdrop-blur-sm transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"><Maximize2 size={17} /></button>
                <span className="absolute bottom-5 left-5 bg-[var(--theme-inverse)] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold-bright)] backdrop-blur-sm">{selectedImage + 1} / 4</span>
              </div>
            </div>
          </section>

          <section className="pt-2 lg:pt-5">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">{product.category}</p>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.08] text-[var(--theme-text)] sm:text-5xl lg:text-[3.3rem]">{product.name}</h1>
            <div className="mt-5"><ProductStars rating={product.rating} reviews={product.reviews} /></div>
            <p className="mt-5 font-display text-4xl text-[var(--theme-text)]">${product.price.toFixed(2)}</p>
            <div className="my-6 h-px bg-[var(--theme-border)]" />
            <p className="font-display text-xl leading-8 text-[var(--theme-muted)]">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex h-16 items-center border border-[var(--theme-border)] bg-[var(--theme-panel)]">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="flex h-full w-14 items-center justify-center text-[var(--theme-text)] transition hover:bg-[var(--theme-panel-alt)] hover:text-[var(--gold)]"><Minus size={18} /></button>
                <span className="flex w-9 justify-center font-display text-lg">{quantity}</span>
                <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((value) => value + 1)} className="flex h-full w-14 items-center justify-center text-[var(--theme-text)] transition hover:bg-[var(--theme-panel-alt)] hover:text-[var(--gold)]"><Plus size={18} /></button>
              </div>
              <button type="button" onClick={() => { addToCart(product.id, quantity); setAdded(true); }} className={`flex min-h-16 flex-1 items-center justify-center gap-4 px-7 text-sm tracking-[0.2em] transition ${added ? "bg-[var(--gold)] text-[var(--theme-inverse)]" : "bg-[var(--gold-bright)] text-[var(--theme-inverse)] hover:bg-[var(--gold)]"}`}>
                <ShoppingCart size={19} /> {added ? "ADDED TO CART" : "ADD TO CART"}
              </button>
            </div>
              <button type="button" onClick={() => toggleWishlist(product.id)} className={`mt-5 flex items-center gap-3 text-sm tracking-[0.08em] transition ${wished ? "text-[var(--gold)]" : "text-[var(--theme-muted)] hover:text-[var(--gold)]"}`}><Heart size={21} fill={wished ? "currentColor" : "none"} /> {wished ? "ADDED TO WISHLIST" : "ADD TO WISHLIST"}</button>

            <div className="mt-9">
              <h2 className="flex items-center gap-5 text-sm uppercase tracking-[0.28em] text-[var(--theme-heading)]">Details <span className="h-px w-12 bg-[var(--gold)]" /></h2>
              <dl className="mt-5 space-y-4 text-lg text-[var(--theme-muted)]">
                {product.details.map((detail) => <div key={detail.label} className="grid grid-cols-[135px_1fr] gap-4"><dt className="text-[var(--theme-muted)]">{detail.label}</dt><dd>{detail.value}</dd></div>)}
              </dl>
            </div>

            <div className="mt-8 grid gap-6 border-t border-[var(--theme-border)] pt-7 sm:grid-cols-3">
              <TrustItem icon={<ShieldCheck size={34} strokeWidth={1.4} />} title="Authentic Egyptian" copy="Craftsmanship" />
              <TrustItem icon={<Gem size={34} strokeWidth={1.4} />} title="Premium" copy="Quality" />
              <TrustItem icon={<Truck size={34} strokeWidth={1.4} />} title="Worldwide" copy="Shipping" />
            </div>
          </section>
        </div>
      </div>

      {lightboxOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5 backdrop-blur-sm" onClick={() => setLightboxOpen(false)}>
          <div className="relative h-[min(82vh,800px)] w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <Image src={product.gallery[selectedImage]} alt={`${product.name} enlarged`} fill sizes="90vw" className="object-contain" />
            <button type="button" aria-label="Close enlarged image" onClick={() => setLightboxOpen(false)} className="absolute right-0 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--theme-inverse)] text-[var(--gold-bright)]"><X size={19} /></button>
          </div>
        </div>
      ) : null}
    </main>
  );
}
