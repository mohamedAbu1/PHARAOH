import type { Metadata } from "next";
import OurStoryPage from "../../components/OurStoryPage";

export const metadata: Metadata = {
  title: "Our Story — Pharaoh",
  description: "Discover the people, heritage, and timeless craft behind Pharaoh.",
};

export default function OurStoryRoute() {
  return <OurStoryPage />;
}
