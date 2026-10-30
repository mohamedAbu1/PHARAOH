import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = { title: "FAQ — Pharaoh" };

export default function FaqPage() {
  return <InfoPage eyebrow="Customer care" title="Frequently asked questions" intro="A few quick answers for exploring the Pharaoh bazaar."><div><h2 className="font-display text-2xl text-[var(--theme-heading)]">How do I place an order?</h2><p className="mt-3 leading-7">Add your treasures to the cart, open checkout, and submit the order request with your delivery details.</p></div><div><h2 className="font-display text-2xl text-[var(--theme-heading)]">Can I change the quantity?</h2><p className="mt-3 leading-7">Yes. Use the plus and minus controls inside the cart before opening checkout.</p></div><div><h2 className="font-display text-2xl text-[var(--theme-heading)]">Where can I ask about shipping?</h2><p className="mt-3 leading-7">Use the atelier visit section for the latest guidance on a specific treasure and destination.</p></div></InfoPage>;
}
