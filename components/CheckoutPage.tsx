"use client";

import Link from "next/link";
import { useState } from "react";
import { useStore } from "../lib/StoreContext";

export default function CheckoutPage() {
  const { storeReady, cartProducts, cartCount, clearCart } = useStore();
  const [submitted, setSubmitted] = useState(false);
  const total = cartProducts.reduce((sum, product) => sum + product.lineTotal, 0);

  if (!storeReady) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--theme-bg)] px-5 text-center text-[var(--theme-text)]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Pharaoh atelier</p>
          <p className="mt-5 font-display text-3xl text-[var(--theme-heading)]">Preparing your checkout.</p>
          <p className="mt-3 text-[var(--theme-muted)]">Restoring your collection…</p>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--theme-bg)] px-5 text-center text-[var(--theme-text)]">
        <div className="max-w-lg">
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Request received</p>
          <h1 className="mt-5 font-display text-5xl text-[var(--theme-text)]">Thank you.</h1>
          <p className="mt-5 text-lg leading-8 text-[var(--theme-muted)]">Your order request has been recorded for this experience. The atelier will follow up with the final delivery details.</p>
          <Link href="/shop" className="mt-8 inline-block border border-[var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Return to shop</Link>
        </div>
      </main>
    );
  }

  if (cartProducts.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[var(--theme-bg)] px-5 text-center text-[var(--theme-text)]">
        <div><p className="font-display text-3xl text-[var(--theme-heading)]">Your cart is empty.</p><p className="mt-3 text-[var(--theme-muted)]">Choose a treasure before starting checkout.</p><Link href="/shop" className="mt-7 inline-block border border-[var(--gold)] px-6 py-3 text-xs uppercase tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Browse the shop</Link></div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[var(--theme-bg)] px-5 py-8 text-[var(--theme-text)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <Link href="/shop" className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] hover:text-[var(--gold-bright)]">← Back to shop</Link>
        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_380px]">
          <section>
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Pharaoh atelier</p>
            <h1 className="mt-4 font-display text-5xl text-[var(--theme-text)]">Checkout</h1>
            <form className="mt-10 space-y-5" onSubmit={(event) => { event.preventDefault(); clearCart(); setSubmitted(true); }}>
              <label className="block text-sm text-[var(--theme-muted)]">Full name<input required name="name" className="mt-2 w-full border border-[var(--theme-border)] bg-[var(--theme-input)] px-4 py-3 text-[var(--theme-text)] outline-none focus:border-[var(--gold)]" /></label>
              <label className="block text-sm text-[var(--theme-muted)]">Email<input required type="email" name="email" className="mt-2 w-full border border-[var(--theme-border)] bg-[var(--theme-input)] px-4 py-3 text-[var(--theme-text)] outline-none focus:border-[var(--gold)]" /></label>
              <label className="block text-sm text-[var(--theme-muted)]">Delivery country<input required name="country" className="mt-2 w-full border border-[var(--theme-border)] bg-[var(--theme-input)] px-4 py-3 text-[var(--theme-text)] outline-none focus:border-[var(--gold)]" /></label>
              <button type="submit" className="w-full bg-[var(--gold-bright)] px-7 py-4 text-sm tracking-[0.2em] text-[var(--theme-inverse)] hover:bg-[var(--gold)]">SUBMIT ORDER REQUEST</button>
            </form>
          </section>
          <aside className="h-fit border border-[var(--theme-border)] bg-[var(--theme-panel)] p-6">
            <h2 className="font-display text-2xl text-[var(--theme-heading)]">Order summary</h2>
            <p className="mt-2 text-xs text-[var(--theme-muted)]">{cartCount} {cartCount === 1 ? "item" : "items"}</p>
            <div className="mt-6 divide-y divide-[var(--theme-border)]">
              {cartProducts.map((product) => <div key={product.id} className="flex justify-between gap-4 py-4 text-sm"><span>{product.name} × {product.quantity}</span><span className="text-[var(--gold)]">${product.lineTotal.toFixed(2)}</span></div>)}
            </div>
            <div className="mt-5 flex justify-between border-t border-[var(--theme-border)] pt-5 text-lg"><span>Total</span><span className="text-[var(--gold)]">${total.toFixed(2)}</span></div>
          </aside>
        </div>
      </div>
    </main>
  );
}
