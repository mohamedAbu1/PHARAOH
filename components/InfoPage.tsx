import Link from "next/link";

export default function InfoPage({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--theme-bg)] px-5 py-8 text-[var(--theme-text)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-xs uppercase tracking-[0.18em] text-[var(--gold)] hover:text-[var(--gold-bright)]">← Pharaoh home</Link>
        <p className="mt-16 text-xs uppercase tracking-[0.35em] text-[var(--gold)] sm:mt-20">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl text-[var(--theme-text)]">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--theme-muted)]">{intro}</p>
        <div className="mt-10 space-y-8 border-t border-[var(--theme-border)] pt-8 text-[var(--theme-muted)]">{children}</div>
        <div className="mt-12 flex flex-wrap gap-4 border-t border-[var(--theme-border)] pt-8 text-xs uppercase tracking-[0.16em]">
          <Link href="/shop" className="border border-[var(--gold)] px-5 py-3 text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Browse the shop</Link>
          <Link href="/visit-us" className="border border-[var(--theme-border)] px-5 py-3 text-[var(--theme-text)] hover:border-[var(--gold)]">Visit the atelier</Link>
        </div>
      </div>
    </main>
  );
}
