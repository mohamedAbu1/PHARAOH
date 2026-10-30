import type { Metadata } from "next";
import ShopPage from "../../components/ShopPage";

export const metadata: Metadata = {
  title: "Shop the Collection — Pharaoh",
  description:
    "Discover authentic Egyptian treasures, from sculpted icons to Nile-inspired jewelry.",
};

export default function ShopRoute() {
  return <ShopPage />;
}
