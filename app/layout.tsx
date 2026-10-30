import type { Metadata } from "next";
import "./globals.css";
import StoreShell from "../components/StoreShell";

export const metadata: Metadata = {
  title: "Pharaoh — Timeless treasures, handcrafted in Egypt",
  description:
    "A modern curation of Egyptian heritage, crafted for the world to keep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { const stored = localStorage.getItem("pharaoh-theme"); const dark = stored ? stored === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches; document.documentElement.classList.toggle("dark", dark); } catch (_) {} })();`,
          }}
        />
        <StoreShell>{children}</StoreShell>
      </body>
    </html>
  );
}
