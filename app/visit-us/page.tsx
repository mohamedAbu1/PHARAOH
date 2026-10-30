import type { Metadata } from "next";
import VisitUsPage from "../../components/VisitUsPage";

export const metadata: Metadata = {
  title: "Visit Us in Egypt — Pharaoh",
  description: "Visit the Pharaoh Cairo flagship store in Khan el-Khalili.",
};

export default function VisitUsRoute() {
  return <VisitUsPage />;
}
