"use client";

import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  MapPin,
  X,
} from "lucide-react";
import { useState } from "react";

type Collection = {
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  accent: string;
};

const collections: Collection[] = [
  {
    title: "Pharaoh Bust",
    eyebrow: "Icons of a timeless civilization",
    description: "Sculptural forms, reimagined for a modern home.",
    image: "/images/pharaoh-bust.png",
    accent: "01",
  },
  {
    title: "Nile Jewelry",
    eyebrow: "Inspired by the land of life",
    description: "Lapis, gold, and symbols that travel with you.",
    image: "/images/nile-jewelry.png",
    accent: "02",
  },
  {
    title: "Papyrus Art",
    eyebrow: "Ancient stories, artfully preserved",
    description: "Hand-finished pieces that make history tangible.",
    image: "/images/papyrus-art.png",
    accent: "03",
  },
  {
    title: "Desert Spices",
    eyebrow: "Flavours from Egypt's golden lands",
    description: "A sensory archive of colour, warmth, and ritual.",
    image: "/images/desert-spices.png",
    accent: "04",
  },
];

export default function PharaohHome() {
  const [activeCollection, setActiveCollection] = useState<Collection | null>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  }

  return (
    <main className="overflow-hidden bg-[var(--surface)] text-[var(--ink)]">
      <section id="home" className="relative isolate min-h-[720px] overflow-hidden bg-[#15120f] text-white sm:min-h-[780px]">
        <Image
          src="/images/hero.png"
          alt="A golden-hour view of the Nile and the pyramids with a pharaoh bust"
          fill
          priority
          className="object-cover object-[62%_center]"
          sizes="100vw"
        />
        <div className="hero-vignette absolute inset-0" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1400px] items-center px-6 pb-10 pt-10 sm:min-h-[780px] sm:pt-12 lg:px-12 lg:pb-20 lg:pt-16">
          <div className="max-w-[680px]">
            <p className="mb-6 flex items-center gap-4 text-[0.64rem] font-semibold uppercase tracking-[0.38em] text-[#e4bd76] sm:text-xs">
              <span className="h-px w-10 bg-[#e4bd76]" />
              A modern archive of Egypt
            </p>
            <h1 className="hero-copy max-w-[720px] font-display text-[3.7rem] leading-[0.95] text-[#f8efdf] sm:text-[5.6rem] lg:text-[7.1rem]">
              Discover
              <br />
              <em className="font-normal text-[#efc97f]">Egypt&apos;s</em> heritage.
            </h1>
            <p className="mt-8 max-w-[520px] text-base leading-7 text-white/74 sm:text-lg">
              Timeless treasures, handcrafted in Egypt — selected for a life well lived and a story worth keeping.
            </p>
            <a href="#collections" className="mt-9 inline-flex items-center gap-6 border border-[#e4bd76] bg-[#e4bd76] px-6 py-4 text-[0.69rem] font-bold uppercase tracking-[0.24em] text-[#17130e] transition-all hover:bg-[#f2cc83] sm:px-8">
              Explore collection
              <ArrowRight size={18} strokeWidth={1.5} />
            </a>
          </div>

          <div className="absolute bottom-8 left-6 right-6 flex items-end justify-between border-t border-white/20 pt-4 text-[0.6rem] uppercase tracking-[0.22em] text-white/60 lg:left-12 lg:right-12">
            <div className="flex items-center gap-4">
              <ArrowDownRight size={17} strokeWidth={1} />
              <span>Scroll to discover</span>
            </div>
            <div className="hidden items-center gap-6 sm:flex">
              <span>01 / 04</span>
              <span className="h-px w-16 bg-white/30"><span className="block h-px w-1/4 bg-[#e4bd76]" /></span>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-12">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-luxury text-[var(--gold)]">Curated for the curious</p>
            <div className="flex items-center gap-5">
              <h2 className="font-display text-4xl sm:text-5xl">Featured collections</h2>
              <span className="hidden h-px w-20 bg-[var(--gold)] sm:block" />
            </div>
          </div>
          <button onClick={() => setActiveCollection(collections[0])} className="group hidden items-center gap-3 text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)] sm:flex">
            View all <ArrowRight className="transition-transform group-hover:translate-x-1" size={17} strokeWidth={1.4} />
          </button>
        </div>

        <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {collections.map((collection) => (
            <article key={collection.title} className="group">
              <button onClick={() => setActiveCollection(collection)} className="image-zoom relative block aspect-[0.95] w-full overflow-hidden bg-[var(--surface-alt)] text-left">
                <Image src={collection.image} alt={collection.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/55 to-transparent px-5 pb-4 pt-12 text-white">
                  <span className="text-[0.62rem] uppercase tracking-[0.2em]">Collection {collection.accent}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/50 transition-colors group-hover:border-[#f2cc83] group-hover:bg-[#f2cc83] group-hover:text-[#17130e]"><ArrowUpRight size={15} strokeWidth={1.3} /></span>
                </div>
              </button>
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-[1.48rem]">{collection.title}</h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-6 text-[var(--ink-muted)]">{collection.eyebrow}</p>
                </div>
                <ArrowRight className="mt-2 shrink-0 text-[var(--gold)]" size={18} strokeWidth={1.25} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="relative bg-[var(--surface-alt)]">
        <div className="mx-auto grid max-w-[1400px] items-stretch lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[440px] overflow-hidden sm:min-h-[560px]">
            <Image src="/images/papyrus-art.png" alt="Detail of painted Egyptian papyrus" fill className="object-cover object-[center_58%] grayscale-[12%]" sizes="(max-width: 1024px) 100vw, 55vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-black/5" />
            <div className="absolute bottom-6 left-6 border border-white/35 px-4 py-3 text-[0.6rem] uppercase tracking-[0.2em] text-white sm:bottom-10 sm:left-10">Made in Egypt · Since 2011</div>
          </div>
          <div className="flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-20 lg:py-20">
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-luxury text-[var(--gold)]">Our story</p>
            <h2 className="max-w-[480px] font-display text-4xl leading-[1.08] sm:text-5xl">Where the past becomes part of your everyday.</h2>
            <p className="mt-7 max-w-[480px] text-[0.97rem] leading-8 text-[var(--ink-muted)]">Pharaoh is a love letter to the makers, symbols, and rituals that have shaped Egypt for millennia. We partner with contemporary artisans to turn that inheritance into objects of quiet wonder.</p>
            <a href="/our-story" className="reveal-line mt-9 w-fit text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--gold)]">Read our story</a>
          </div>
        </div>
      </section>

      <section id="visit" className="mx-auto max-w-[1400px] px-6 py-20 sm:py-28 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="mb-5 text-[0.65rem] font-semibold uppercase tracking-luxury text-[var(--gold)]">Visit the house</p>
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">A little piece of Egypt, waiting for you.</h2>
            <p className="mt-6 max-w-[420px] text-sm leading-7 text-[var(--ink-muted)]">Step into our Cairo atelier or find a selection of Pharaoh pieces at our seasonal gallery in Zamalek.</p>
            <div className="mt-8 flex items-start gap-4 text-sm text-[var(--ink-muted)]">
              <MapPin size={18} className="mt-0.5 text-[var(--gold)]" strokeWidth={1.3} />
              <span>18 Brazil Street, Zamalek<br />Cairo, Egypt</span>
            </div>
          </div>
          <div className="relative min-h-[330px] overflow-hidden bg-[#1b1712] p-6 text-white sm:min-h-[380px] sm:p-10">
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 18% 35%, rgba(228,189,118,.8) 0 1px, transparent 1.5px), radial-gradient(circle at 66% 68%, rgba(228,189,118,.5) 0 1px, transparent 1.5px)", backgroundSize: "42px 42px, 67px 67px" }} />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between text-[0.62rem] uppercase tracking-[0.22em] text-white/60"><span>Cairo · 30°N</span><span>Open map <ArrowUpRight size={14} className="ml-1 inline" /></span></div>
              <div>
                <div className="mb-7 font-display text-6xl text-[#e4bd76] sm:text-8xl">خ</div>
                <p className="max-w-[280px] font-display text-2xl leading-tight sm:text-3xl">Come for the story.<br /><em className="font-normal text-[#e4bd76]">Stay for the details.</em></p>
              </div>
              <div className="flex items-center justify-between border-t border-white/20 pt-4 text-[0.62rem] uppercase tracking-[0.18em] text-white/60"><span>Mon — Sat</span><span>10:00 — 19:00</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-elevated)]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-7 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <div>
            <p className="text-[0.65rem] font-semibold uppercase tracking-luxury text-[var(--gold)]">Letters from the Nile</p>
            <h2 className="mt-3 font-display text-3xl">Be the first to know.</h2>
            <p className="mt-2 text-sm text-[var(--ink-muted)]">New collections, artisan stories, and considered things.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex w-full max-w-[460px] border-b border-[var(--ink)]/40 pb-2">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={subscribed ? "You're on the list — thank you." : "Your email address"} disabled={subscribed} className="min-w-0 flex-1 bg-transparent py-2 text-sm text-[var(--ink)] outline-none placeholder:text-[var(--ink-muted)] disabled:opacity-100" required />
            <button type="submit" disabled={subscribed} className="flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[var(--gold)] disabled:opacity-70">{subscribed ? "Joined" : "Subscribe"} <ArrowRight size={17} strokeWidth={1.4} /></button>
          </form>
        </div>
      </section>

      {activeCollection && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm" onClick={() => setActiveCollection(null)}>
          <div className="grid max-h-[90vh] w-full max-w-3xl overflow-hidden bg-[var(--surface-elevated)] shadow-2xl sm:grid-cols-2" onClick={(event) => event.stopPropagation()}>
            <div className="relative min-h-[290px] sm:min-h-[460px]"><Image src={activeCollection.image} alt={activeCollection.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" /></div>
            <div className="flex flex-col justify-between p-7 sm:p-10"><div><div className="flex items-start justify-between"><p className="text-[0.62rem] font-semibold uppercase tracking-luxury text-[var(--gold)]">Collection {activeCollection.accent}</p><button aria-label="Close collection" onClick={() => setActiveCollection(null)} className="text-[var(--ink-muted)]"><X size={20} /></button></div><h3 className="mt-8 font-display text-4xl">{activeCollection.title}</h3><p className="mt-5 text-sm leading-7 text-[var(--ink-muted)]">{activeCollection.description} Each piece is selected for its material character, cultural resonance, and ability to bring a little more wonder into the everyday.</p></div><a href="/shop" onClick={() => setActiveCollection(null)} className="mt-10 flex items-center justify-between border border-[var(--gold)] bg-[var(--gold)] px-5 py-4 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#17130e] hover:bg-[var(--gold-bright)]">Browse the shop <ArrowRight size={17} /></a></div>
          </div>
        </div>
      )}
    </main>
  );
}
