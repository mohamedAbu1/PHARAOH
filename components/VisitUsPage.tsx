import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";

const directionsUrl = "https://www.google.com/maps/search/?api=1&query=Khan+el-Khalili%2C+Cairo%2C+Egypt";

function StoreDetail({ icon: Icon, children }: { icon: typeof MapPin; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 text-[var(--theme-text)]">
      <Icon size={24} strokeWidth={1.45} className="mt-0.5 shrink-0 text-[#b17e2e]" />
      <div className="min-w-0 font-display text-[1.06rem] leading-7 sm:text-[1.13rem]">{children}</div>
    </div>
  );
}

function CairoMap() {
  return (
    <div className="relative mt-5 h-[222px] overflow-hidden border border-[#ded5c5] bg-[#ece8df]" aria-label="Map showing the store in Khan el-Khalili, Cairo">
      <svg viewBox="0 0 560 290" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M28 272C118 220 116 169 168 128c43-34 83-41 139-50 57-9 123-19 226-68" fill="none" stroke="#d7d2c8" strokeWidth="10" />
        <path d="M-20 238C95 224 134 190 193 156c62-36 126-61 216-88 48-15 94-27 171-35" fill="none" stroke="#faf8f2" strokeWidth="16" />
        <path d="M-24 225C88 211 130 180 190 145c69-39 135-62 224-87 51-15 94-26 174-35" fill="none" stroke="#c8dce0" strokeWidth="26" />
        <path d="M58 20 128 84l61 22 74 57 73 13 112 78" fill="none" stroke="#d1cbc0" strokeWidth="7" />
        <path d="M208-5c33 45 55 84 59 129 5 46-2 98-34 170" fill="none" stroke="#d6d0c5" strokeWidth="6" />
        <path d="M374 10c-35 51-44 87-39 123 5 43 25 79 76 135" fill="none" stroke="#d9d3c9" strokeWidth="5" />
        <path d="M438 42 409 92l-7 71 40 70" fill="none" stroke="#fbfaf5" strokeWidth="9" />
        <path d="M12 92 86 116l68-8 54-42 87 15 83-35 86 8" fill="none" stroke="#fbfaf5" strokeWidth="7" />
        <path d="M30 32 78 60m81 131 45 42m109-80 53 12m-4 54 36 36" fill="none" stroke="#d2cdc2" strokeWidth="3" />
      </svg>
      <div className="absolute left-[7%] top-[59%] text-[10px] font-semibold uppercase tracking-[0.18em] text-[#34312d]">The<br />Nile</div>
      <div className="absolute left-[42%] top-[54%] text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-[#34312d]">Khan el-Khalili</div>
      <div className="absolute right-[7%] top-[17%] text-[9px] font-semibold uppercase tracking-[0.1em] text-[#34312d]">Al-Azhar Mosque</div>
      <div className="absolute bottom-[8%] right-[8%] text-[9px] font-semibold uppercase tracking-[0.1em] text-[#34312d]">Cairo Citadel</div>
      <div className="absolute left-[48%] top-[47%] flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#a7782d] bg-[#c99a4b] text-[#201a12] shadow-lg">
        <MapPin size={16} strokeWidth={1.8} />
      </div>
    </div>
  );
}

export default function VisitUsPage() {
  return (
    <main className="bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="relative isolate overflow-hidden border-b border-[var(--theme-border)] bg-[var(--visit-banner)] px-5 py-6 text-center sm:py-7">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-20" aria-hidden="true">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(176,132,55,0.2),transparent_62%)]" />
          <div className="absolute -inset-x-20 top-0 h-full bg-[repeating-linear-gradient(90deg,transparent_0,transparent_52px,rgba(171,127,52,0.2)_53px,transparent_54px),repeating-linear-gradient(0deg,transparent_0,transparent_42px,rgba(171,127,52,0.15)_43px,transparent_44px)]" />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden whitespace-nowrap font-display text-[8rem] tracking-[0.45em] text-[#a57a33]">𓂀 𓋹 𓆣 𓂀</div>
        </div>
        <p className="relative text-[0.64rem] uppercase tracking-[0.34em] text-[#c6a160]">A journey beyond souvenirs</p>
        <h1 className="relative mt-2 font-display text-3xl uppercase tracking-[0.08em] text-[var(--visit-banner-text)] sm:text-5xl">Visit us in Egypt</h1>
        <div className="relative mx-auto mt-3 flex w-[13rem] items-center justify-center gap-3 text-[#c39a51]" aria-hidden="true">
          <span className="h-px flex-1 bg-[#9e793f]" />
          <span className="font-display text-2xl leading-none">𓋹</span>
          <span className="h-px flex-1 bg-[#9e793f]" />
        </div>
      </section>

      <section className="mx-auto max-w-[1400px]">
        <div className="grid overflow-hidden border border-[#2f332f] shadow-[0_26px_80px_rgba(0,0,0,0.34)] lg:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.9fr)]">
          <div className="relative min-h-[470px] bg-[var(--theme-panel-alt)] sm:min-h-[610px] lg:min-h-[690px]">
            <Image src="/images/visit-store.png" alt="Warmly lit Pharaoh flagship store in Cairo" fill priority sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover object-center" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" />
          </div>

          <aside className="bg-[var(--theme-panel)] px-7 py-9 text-[var(--theme-text)] sm:px-10 sm:py-11 lg:px-11 lg:py-10">
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-[#aa7a30]">The flagship</p>
            <h2 className="mt-2 font-display text-3xl leading-tight text-[var(--theme-text)] sm:text-[2.15rem]">Cairo Flagship Store</h2>
            <div className="mt-7 space-y-5">
              <StoreDetail icon={MapPin}>Khan el-Khalili, Cairo, Egypt</StoreDetail>
              <span className="block h-px w-7 bg-[#bd914d]" />
              <StoreDetail icon={Clock3}>Open daily 10:00 AM – 10:00 PM</StoreDetail>
              <StoreDetail icon={Phone}><a href="tel:+20224567890" className="transition-colors hover:text-[#9d6d23]">+20 2 2456 7890</a></StoreDetail>
              <StoreDetail icon={Mail}><a href="mailto:hello@pharaoh.com" className="transition-colors hover:text-[#9d6d23]">hello@pharaoh.com</a></StoreDetail>
            </div>
            <a href={directionsUrl} target="_blank" rel="noreferrer" className="mt-8 flex items-center justify-center gap-4 bg-gradient-to-r from-[#d3a75c] to-[#b9893d] px-5 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#21170b] shadow-[0_8px_18px_rgba(106,76,31,0.18)] transition hover:from-[#e3ba72] hover:to-[#c99b4d]">
              Get directions <ArrowRight size={17} strokeWidth={1.7} />
            </a>
            <CairoMap />
            <p className="mt-4 text-center text-[0.62rem] uppercase tracking-[0.16em] text-[#887b6b]">A short walk from Al-Azhar Mosque</p>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-16 text-center sm:px-8 lg:px-12">
        <p className="mx-auto max-w-2xl font-display text-2xl leading-relaxed text-[var(--gold)] sm:text-3xl">Come for the story. Stay for the details.</p>
        <Link href="/shop" className="mt-6 inline-flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--gold)] transition hover:text-[var(--gold-bright)]">Continue to the shop <ArrowRight size={15} /></Link>
      </section>
    </main>
  );
}
