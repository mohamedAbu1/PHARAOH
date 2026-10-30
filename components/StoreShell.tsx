"use client";

import type { ReactNode } from "react";
import { StoreProvider } from "../lib/StoreContext";
import { SiteFooter, SiteHeader } from "./SiteChrome";
import { AccountPanel, CartDrawer, SearchOverlay } from "./StoreOverlays";

export default function StoreShell({ children }: { children: ReactNode }) {
  return (
    <StoreProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
      <CartDrawer />
      <SearchOverlay />
      <AccountPanel />
    </StoreProvider>
  );
}
