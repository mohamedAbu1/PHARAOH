import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = { title: "Contact the Atelier — Pharaoh" };

export default function ContactPage() {
  return <InfoPage eyebrow="The atelier" title="Contact the atelier" intro="Tell us what you are looking for and the Pharaoh team can guide you to the right collection."><section id="social" className="scroll-mt-8"><h2 className="font-display text-2xl text-[var(--theme-heading)]">Start with a visit</h2><p className="mt-3 leading-7">Find the Cairo flagship details on our <a href="/visit-us" className="text-[var(--gold)] underline decoration-[var(--gold)]/50 underline-offset-4 hover:text-[var(--gold-bright)]">Visit Us</a> page, then reach out if you would like help planning your stop.</p></section><p>Social profiles will be connected here when the official Pharaoh channels are ready.</p></InfoPage>;
}
