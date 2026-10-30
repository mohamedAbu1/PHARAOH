import type { Metadata } from "next";
import CheckoutPage from "../../components/CheckoutPage";

export const metadata: Metadata = {
  title: "Checkout — Pharaoh",
  description: "Review your Pharaoh treasures and submit an order request.",
};

export default function CheckoutRoute() {
  return <CheckoutPage />;
}
