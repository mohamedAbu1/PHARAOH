"use client";

import { Facebook, Instagram, Menu, Moon, Search, ShoppingCart, Sun, UserRound, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useStore } from "../lib/StoreContext";

function EyeMark() {
  return (
    <svg viewBox="0 0 78 38" aria-hidden="true" className="h-9 w-[4.4rem]">
      <path d="M8 19c11-11 21-14 31-14 12 0 22 4 31 14-9 10-19 14-31 14C29 33 19 29 8 19Z" fill="none" stroke="currentColor" strokeWidth="2.1" />
      <path d="M38 8c-7 3-10 7-10 11s3 8 10 11c7-3 10-7 10-11S45 11 38 8Z" fill="currentColor" opacity=".24" />
      <path d="M38 13c-3.7 0-6.7 2.7-6.7 6s3 6 6.7 6 6.7-2.7 6.7-6-3-6-6.7-6Z" fill="currentColor" />
      <path d="M6 18.5 1 13M7 22 2 28M70 18.5l7-5M69 22l7 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

const navItems = [
  ["HOME", "/"],
  ["SHOP", "/shop"],
  ["OUR STORY", "/our-story"],
  ["VISIT US", "/visit-us"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const { cartCount, openCart, openSearch, openAccount } = useStore();

  useEffect(() => {
    try {
      const storedTheme = window.localStorage.getItem("pharaoh-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(storedTheme ? storedTheme === "dark" : prefersDark);
    } catch {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (darkMode === null) return;
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      window.localStorage.setItem("pharaoh-theme", darkMode ? "dark" : "light");
    } catch {
      // Continue using the in-memory theme when storage is unavailable.
    }
  }, [darkMode]);

  return (
    <header className="relative z-40 border-b border-[var(--chrome-border)] bg-[var(--chrome-bg)] text-[var(--chrome-text)] shadow-2xl shadow-black/20 backdrop-blur-md">
      <div className="mx-auto flex min-h-[78px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <a href="/" className="flex shrink-0 items-center gap-3 text-[var(--chrome-brand)]" aria-label="Pharaoh home">
          <EyeMark />
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-[0.22em]">PHARAOH</span>
            <span className="mt-1 block text-center text-[8px] tracking-[0.22em] text-[var(--chrome-muted)]">EGYPTIAN TOURIST BAZAAR</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[12px] tracking-[0.13em] text-[var(--chrome-muted)] lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => {
            const active = (label === "HOME" && pathname === "/") ||
              (label === "SHOP" && pathname.startsWith("/shop")) ||
              (label === "OUR STORY" && pathname === "/our-story") ||
              (label === "VISIT US" && pathname === "/visit-us");
            return <a key={label} href={href} className={`relative py-5 transition-colors hover:text-[var(--gold-bright)] ${active ? "text-[var(--gold)] after:absolute after:bottom-2 after:left-1/2 after:h-px after:w-10 after:-translate-x-1/2 after:bg-[var(--gold)]" : ""}`}>{label}</a>;
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button type="button" aria-label="Search" onClick={openSearch} className="p-2 transition hover:text-[var(--gold-bright)]"><Search size={21} /></button>
          <span className="hidden h-6 w-px bg-[#667174] sm:block" />
          <button type="button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} disabled={darkMode === null} onClick={() => setDarkMode((value) => !value)} className="hidden p-2 transition hover:text-[var(--gold-bright)] sm:block disabled:opacity-50">{darkMode ? <Sun size={19} /> : <Moon size={19} />}</button>
          <button type="button" aria-label="Account" onClick={openAccount} className="hidden p-2 transition hover:text-[#e8bd67] sm:block"><UserRound size={21} /></button>
          <button type="button" aria-label="Cart" onClick={openCart} className="relative p-2 transition hover:text-[#e8bd67]">
            <ShoppingCart size={22} />
            {cartCount > 0 ? <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e0b45c] px-1 text-[10px] font-bold text-[#071013]">{cartCount}</span> : null}
          </button>
          <button type="button" aria-label="Open menu" onClick={() => setMobileMenuOpen((open) => !open)} className="p-2 lg:hidden"><Menu size={22} /></button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="border-t border-[var(--chrome-border)] bg-[var(--chrome-bg)] px-5 py-5 shadow-2xl lg:hidden">
          <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.16em] text-[var(--chrome-brand)]"><span>Explore Pharaoh</span><button type="button" aria-label="Close menu" onClick={() => setMobileMenuOpen(false)}><X size={19} /></button></div>
          <nav className="grid grid-cols-2 gap-4 text-xs tracking-[0.16em] text-[var(--chrome-text)]" aria-label="Mobile navigation">
            {navItems.map(([label, href]) => {
              const active = (label === "HOME" && pathname === "/") ||
                (label === "SHOP" && pathname.startsWith("/shop")) ||
                (label === "OUR STORY" && pathname === "/our-story") ||
                (label === "VISIT US" && pathname === "/visit-us");
              return <a key={label} href={href} onClick={() => setMobileMenuOpen(false)} className={active ? "text-[var(--gold)]" : ""}>{label}</a>;
            })}
          </nav>
          <button type="button" aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"} disabled={darkMode === null} onClick={() => setDarkMode((value) => !value)} className="mt-6 flex items-center gap-3 border-t border-[var(--chrome-border)] pt-4 text-xs uppercase tracking-[0.16em] text-[var(--chrome-muted)] disabled:opacity-50">
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
            {darkMode ? "Light mode" : "Dark mode"}
          </button>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-12">
        <div>
          <a href="/" className="inline-flex items-center gap-3 text-[var(--chrome-brand)]" aria-label="Pharaoh home"><EyeMark /><span className="font-display text-[1.35rem] tracking-[0.22em]">PHARAOH</span></a>
          <p className="mt-6 max-w-[240px] text-sm leading-6 text-[var(--theme-muted)]">Objects, stories, and rituals from the land of eternity.</p>
        </div>
        <div>
          <p className="mb-5 text-[0.62rem] uppercase tracking-[0.22em] text-[#e4bd76]">Explore</p>
          <div className="flex flex-col gap-3 text-sm"><a href="/shop" className="hover:text-[#f2cc83]">Shop</a><a href="/our-story" className="hover:text-[#f2cc83]">Our story</a><a href="/visit-us" className="hover:text-[#f2cc83]">Visit us</a></div>
        </div>
        <div>
          <p className="mb-5 text-[0.62rem] uppercase tracking-[0.22em] text-[#e4bd76]">Customer care</p>
          <div className="flex flex-col gap-3 text-sm"><a href="/shipping" className="hover:text-[#f2cc83]">Shipping & returns</a><a href="/contact" className="hover:text-[#f2cc83]">Contact atelier</a><a href="/faq" className="hover:text-[#f2cc83]">FAQ</a></div>
        </div>
        <div>
          <p className="mb-5 text-[0.62rem] uppercase tracking-[0.22em] text-[#e4bd76]">Follow the story</p>
          <div className="flex gap-4"><a aria-label="Instagram" href="/contact#social" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--theme-border)] hover:border-[#e4bd76] hover:text-[#e4bd76]"><Instagram size={15} strokeWidth={1.4} /></a><a aria-label="Facebook" href="/contact#social" className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--theme-border)] hover:border-[#e4bd76] hover:text-[#e4bd76]"><Facebook size={15} strokeWidth={1.4} /></a></div>
        </div>
      </div>
      <div className="border-t border-[var(--theme-border)]"><div className="mx-auto flex max-w-[1400px] flex-col gap-3 px-6 py-5 text-[0.6rem] uppercase tracking-[0.18em] text-[var(--theme-muted)] sm:flex-row sm:items-center sm:justify-between lg:px-12"><span>© 2026 Pharaoh. Made with reverence.</span><span>Privacy · Terms</span></div></div>
    </footer>
  );
}
