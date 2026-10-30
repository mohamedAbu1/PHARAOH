import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = { title: "Shipping & Returns — Pharaoh" };

export default function ShippingPage() {
  return <InfoPage eyebrow="Customer care" title="Shipping & returns" intro="We prepare each order with care. The atelier confirms delivery details and any return arrangements before an order is finalized."><p>For a shipping or returns question, start with the atelier visit section and include the product you are asking about.</p><p>Because each treasure can have different handling needs, the final delivery information is confirmed with your order request.</p></InfoPage>;
}
