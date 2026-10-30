"use client";

import Image from "next/image";
import { ArrowRight, Minus, Plus, Search, ShoppingCart, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { products } from "../lib/shopCatalog";
import { useStore } from "../lib/StoreContext";

function matchingProducts(query: string) {
  const normalizedQuery = query.trim().toLowerCase();
  if (!normalizedQuery) return [];

  return products.filter((product) =>
    [product.name, product.category, product.material, product.description].some((field) => field.toLowerCase().includes(normalizedQuery)),
  );
}

export function SearchOverlay() {
  const { searchOpen, closeSearch } = useStore();
  const [query, setQuery] = useState("");
  const results = useMemo(() => matchingProducts(query), [query]);

  useEffect(() => {
    if (searchOpen) setQuery("");
  }, [searchOpen]);

  if (!searchOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] bg-black/75 px-5 pt-24 backdrop-blur-sm" onClick={closeSearch}>
      <div className="mx-auto w-full max-w-2xl border border-[var(--theme-border)] bg-[var(--theme-panel)] p-6 text-[var(--theme-text)] shadow-2xl sm:p-8" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between">
          <p className="font-display text-xl text-[var(--theme-heading)]">Search the bazaar</p>
          <button type="button" onClick={closeSearch} aria-label="Close search" className="text-[var(--theme-text)]"><X size={20} /></button>
        </div>
        <label className="mt-6 flex items-center gap-3 border-b border-[var(--theme-border)] pb-3 text-[var(--gold)]">
          <Search size={20} />
          <input
            autoFocus
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search treasures..."
            aria-label="Search treasures"
            className="w-full bg-transparent text-lg text-[var(--theme-text)] outline-none placeholder:text-[var(--theme-muted)]"
          />
        </label>

        <div className="mt-5">
          {!query.trim() ? <p className="text-sm text-[var(--theme-muted)]">Search by product, category, material, or story.</p> : null}
          {query.trim() && results.length === 0 ? <p className="text-sm text-[var(--theme-muted)]">No treasures match “{query}”.</p> : null}
          {results.length > 0 ? (
            <div className="divide-y divide-[var(--theme-border)] border-y border-[var(--theme-border)]">
              {results.map((product) => (
                <a key={product.id} href={`/shop/${product.id}`} onClick={closeSearch} className="flex items-center gap-4 py-3 transition hover:text-[var(--gold-bright)]">
                  <div className="relative h-14 w-16 shrink-0 overflow-hidden border border-[var(--theme-border)]"><Image src={product.image} alt={product.name} fill sizes="64px" className="object-cover" /></div>
                  <span className="flex-1"><span className="block font-display text-lg">{product.name}</span><span className="text-xs text-[var(--theme-muted)]">{product.category} · ${product.price.toFixed(2)}</span></span>
                  <ArrowRight size={16} />
                </a>
              ))}
              <a href={`/shop?search=${encodeURIComponent(query.trim())}`} onClick={closeSearch} className="flex items-center justify-center gap-2 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">View all results <ArrowRight size={14} /></a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AccountPanel() {
  const { accountOpen, closeAccount } = useStore();
  if (!accountOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] flex items-start justify-end bg-black/60 px-5 pt-24" onClick={closeAccount}>
      <div className="w-full max-w-xs border border-[var(--theme-border)] bg-[var(--theme-panel)] p-6 text-[var(--theme-text)] shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between"><p className="font-display text-xl text-[var(--theme-heading)]">Your account</p><button type="button" onClick={closeAccount} aria-label="Close account" className="text-[var(--theme-text)]"><X size={18} /></button></div>
        <p className="mt-4 text-sm leading-6 text-[var(--theme-muted)]">Sign in to save your favorite artifacts and track your orders.</p>
        <a href="/shop" onClick={closeAccount} className="mt-5 block w-full border border-[var(--gold)] py-3 text-center text-xs tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">CONTINUE SHOPPING</a>
      </div>
    </div>
  );
}

export function CartDrawer() {
  const { cartOpen, closeCart, cartProducts, cartCount, updateCartQuantity, removeFromCart } = useStore();
  if (!cartOpen) return null;

  const total = cartProducts.reduce((sum, product) => sum + product.lineTotal, 0);

  return (
    <div className="fixed inset-0 z-[70] flex justify-end bg-black/65" onClick={closeCart}>
      <div className="h-full w-full max-w-md overflow-y-auto border-l border-[var(--theme-border)] bg-[var(--theme-panel)] p-6 text-[var(--theme-text)] shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-5"><div><p className="font-display text-2xl text-[var(--theme-heading)]">Your cart</p><p className="mt-1 text-xs text-[var(--theme-muted)]">{cartCount} {cartCount === 1 ? "item" : "items"}</p></div><button type="button" onClick={closeCart} aria-label="Close cart" className="text-[var(--theme-text)]"><X size={20} /></button></div>
        {cartProducts.length > 0 ? (
          <div className="divide-y divide-[var(--theme-border)]">
            {cartProducts.map((product) => (
              <div key={product.id} className="flex gap-4 py-5">
                <div className="relative h-20 w-24 shrink-0 overflow-hidden border border-[var(--theme-border)]"><Image src={product.image} alt={product.name} fill sizes="96px" className="object-cover" /></div>
                <div className="min-w-0 flex-1"><div className="flex items-start justify-between gap-3"><p className="font-display text-lg text-[var(--theme-text)]">{product.name}</p><button type="button" onClick={() => removeFromCart(product.id)} aria-label={`Remove ${product.name} from cart`} className="text-xs text-[var(--theme-muted)] hover:text-[var(--gold)]">REMOVE</button></div><p className="mt-1 text-[var(--gold)]">${product.price.toFixed(2)} · ${product.lineTotal.toFixed(2)}</p><div className="mt-3 flex h-8 w-fit items-center border border-[var(--theme-border)]"><button type="button" onClick={() => updateCartQuantity(product.id, product.quantity - 1)} aria-label={`Decrease ${product.name} quantity`} className="flex h-full w-8 items-center justify-center hover:bg-[var(--theme-panel-alt)]"><Minus size={13} /></button><span className="w-8 text-center text-sm">{product.quantity}</span><button type="button" onClick={() => updateCartQuantity(product.id, product.quantity + 1)} aria-label={`Increase ${product.name} quantity`} className="flex h-full w-8 items-center justify-center hover:bg-[var(--theme-panel-alt)]"><Plus size={13} /></button></div></div>
              </div>
            ))}
            <div className="flex items-center justify-between pt-5 text-lg"><span>Total</span><span className="text-[var(--gold)]">${total.toFixed(2)}</span></div>
            <a href="/checkout" onClick={closeCart} className="mt-6 block w-full bg-[var(--gold)] py-3 text-center text-xs font-semibold tracking-[0.18em] text-[var(--theme-inverse)] hover:bg-[var(--gold-bright)]">CHECKOUT <ArrowRight size={15} className="ml-2 inline" /></a>
          </div>
        ) : (
          <div className="py-16 text-center"><ShoppingCart className="mx-auto text-[var(--gold)]" size={34} /><p className="mt-4 font-display text-xl text-[var(--theme-heading)]">Your cart is waiting.</p><p className="mt-2 text-sm text-[var(--theme-muted)]">Add a treasure to begin your collection.</p><a href="/shop" onClick={closeCart} className="mt-6 inline-block border border-[var(--gold)] px-5 py-2 text-xs tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">BROWSE SHOP</a></div>
        )}
      </div>
    </div>
  );
}
