import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const milestones = [
  { title: "Ancient roots", copy: "A timeless civilization that inspires us.", image: "/images/hero.png" },
  { title: "Living traditions", copy: "Skills passed down through generations.", image: "/images/story-hero.png" },
  { title: "Modern creations", copy: "Heritage reimagined for today’s world.", image: "/images/pharaoh-bust.png" },
  { title: "A brighter tomorrow", copy: "Supporting people, preserving crafts, sharing Egypt with the world.", image: "/images/nile-jewelry.png" },
];

export default function OurStoryPage() {
  return (
    <main className="overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="relative isolate min-h-[470px] overflow-hidden border-b border-[var(--theme-border)] sm:min-h-[520px] lg:min-h-[560px]">
        <Image src="/images/story-hero.png" alt="Egyptian artisan painting a papyrus artwork by hand" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 -z-0 bg-[linear-gradient(90deg,rgba(6,7,7,0.98)_0%,rgba(6,7,7,0.91)_28%,rgba(6,7,7,0.44)_56%,rgba(6,7,7,0.02)_100%),linear-gradient(0deg,rgba(0,0,0,0.52),transparent_42%)]" />
        <div className="relative z-10 mx-auto flex min-h-[470px] max-w-[1400px] items-center px-7 py-14 sm:min-h-[520px] sm:px-12 lg:min-h-[560px] lg:px-24">
          <div className="relative max-w-[560px] pl-8 sm:pl-12">
            <div className="absolute bottom-1 left-0 top-1 w-px bg-[#d0a35d]" aria-hidden="true" />
            <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 font-display text-4xl text-[#d0a35d]" aria-hidden="true">𓋹</div>
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#c59a55]">People · Heritage · Timeless craft</p>
            <h1 className="mt-5 max-w-[540px] font-display text-5xl uppercase leading-[0.94] tracking-[0.04em] text-[#f4d9aa] sm:text-7xl">Crafted<br />with history</h1>
            <p className="mt-7 max-w-[430px] font-display text-lg leading-7 text-[#f1e8d8] sm:text-xl">We bring Egypt&apos;s stories into the world through authentic handcrafted treasures.</p>
            <span className="mt-7 block h-px w-16 bg-[#d0a35d]" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.72fr_1.32fr_0.42fr_1.32fr_0.72fr]">
        <div className="relative min-h-[250px] overflow-hidden border-b border-[var(--theme-border)] lg:min-h-[360px] lg:border-b-0 lg:border-r">
          <Image src="/images/hero.png" alt="Egyptian columns and sculpture at sunset" fill sizes="(max-width: 1024px) 100vw, 14vw" className="object-cover object-right" />
          <div className="absolute inset-0 bg-black/12" />
        </div>

        <article className="flex min-h-[360px] flex-col justify-center bg-[var(--theme-panel)] px-8 py-12 sm:px-12 lg:px-12">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#bc914f]">Rooted in a remarkable civilization</p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.05em] text-[var(--theme-heading)]">Our heritage</h2>
          <p className="mt-4 max-w-[420px] text-[0.96rem] leading-7 text-[var(--theme-muted)]">For thousands of years, Egypt has been a land of extraordinary culture, art and human ingenuity. Our collections are inspired by this rich legacy, reimagined for today.</p>
          <Link href="/#collections" className="mt-7 inline-flex w-fit items-center gap-5 border border-[var(--gold)] px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Explore our heritage <ArrowRight size={15} /></Link>
        </article>

        <div className="relative hidden overflow-hidden border-x border-[var(--theme-border)] bg-[var(--theme-panel-alt)] lg:block" aria-hidden="true">
          <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(196,151,77,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(196,151,77,0.2)_1px,transparent_1px)] [background-size:34px_34px]" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-12 font-display text-5xl text-[#b58a47]"><span>𓂀</span><span>𓋹</span><span>𓆣</span></div>
        </div>

        <article className="flex min-h-[360px] flex-col justify-center bg-[var(--theme-panel)] px-8 py-12 sm:px-12 lg:px-12">
          <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#bc914f]">Skilled hands · Timeless traditions</p>
          <h2 className="mt-4 font-display text-4xl uppercase tracking-[0.05em] text-[var(--theme-heading)]">The artisans</h2>
          <p className="mt-4 max-w-[420px] text-[0.96rem] leading-7 text-[var(--theme-muted)]">Our artisans carry forward generations of knowledge, using time-honored techniques to create unique pieces that connect the past with the present.</p>
          <Link href="/visit-us" className="mt-7 inline-flex w-fit items-center gap-5 border border-[var(--gold)] px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Meet the artisans <ArrowRight size={15} /></Link>
        </article>

        <div className="relative min-h-[250px] overflow-hidden border-t border-[var(--theme-border)] lg:min-h-[360px] lg:border-l lg:border-t-0">
          <Image src="/images/papyrus-art.png" alt="Hand-painted Egyptian papyrus artwork" fill sizes="(max-width: 1024px) 100vw, 14vw" className="object-cover" />
        </div>
      </section>

      <section className="relative bg-[var(--theme-panel-alt)] px-6 py-16 text-[var(--theme-text)] sm:px-10 sm:py-20 lg:px-20 lg:py-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-20 border-r border-[#d4c4a8] opacity-65 lg:block" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent 0, transparent 22px, rgba(166,126,62,.18) 23px), repeating-linear-gradient(90deg, transparent 0, transparent 22px, rgba(166,126,62,.12) 23px)" }} />
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.78fr_1.7fr] lg:items-center lg:gap-16">
          <div className="relative z-10 lg:pl-10">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-[#a7752f]">Authentic craft. A brighter tomorrow.</p>
            <h2 className="mt-3 font-display text-4xl uppercase tracking-[0.04em] text-[var(--theme-text)] sm:text-5xl">Made in Egypt</h2>
            <p className="mt-5 max-w-[400px] text-[0.96rem] leading-7 text-[var(--theme-muted)]">Every piece we offer is thoughtfully made in Egypt, supporting local communities and helping traditional crafts thrive for future generations.</p>
            <Link href="/shop" className="mt-7 inline-flex items-center gap-5 border border-[var(--gold)] px-5 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--theme-text)] transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]">Our impact <ArrowRight size={15} /></Link>
          </div>

          <div className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div className="absolute left-[10%] right-[10%] top-[57px] hidden h-px bg-[#b89a6c] lg:block" />
            {milestones.map((milestone, index) => (
              <div key={milestone.title} className="relative z-10 text-center">
                <div className="mx-auto flex h-[116px] w-[116px] items-center justify-center rounded-full border-4 border-[var(--theme-panel-alt)] bg-[#c79b58] shadow-[0_0_0_1px_#b89a6c]">
                  <Image src={milestone.image} alt="" width={112} height={112} className="h-full w-full rounded-full object-cover" />
                </div>
                <div className="mx-auto mt-5 flex items-center justify-center gap-3 text-[#98703a]" aria-hidden="true"><span className="h-px w-7 bg-[#b89a6c]" /><span className="text-xl">{index === 0 ? "✦" : index === 1 ? "𓋹" : index === 2 ? "⌘" : "≈"}</span><span className="h-px w-7 bg-[#b89a6c]" /></div>
                <h3 className="mt-3 font-display text-[0.83rem] font-bold uppercase tracking-[0.1em] text-[var(--theme-text)]">{milestone.title}</h3>
                <p className="mx-auto mt-2 max-w-[170px] text-sm leading-5 text-[var(--theme-muted)]">{milestone.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--theme-bg)] px-6 py-16 text-center">
        <p className="font-display text-2xl text-[var(--gold)] sm:text-3xl">A living story, made to be carried forward.</p>
        <Link href="/shop" className="mt-6 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--gold)] transition hover:text-[var(--gold-bright)]">Discover the collection <ArrowRight size={15} /></Link>
      </section>
    </main>
  );
}
