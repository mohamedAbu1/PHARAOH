"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { products, type Product } from "./shopCatalog";

type QuantityMap = Record<string, number>;

export type CartProduct = Product & {
  quantity: number;
  lineTotal: number;
};

type StoreContextValue = {
  storeReady: boolean;
  cartCount: number;
  cartProducts: CartProduct[];
  addToCart: (productId: string, quantity?: number) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  isWished: (productId: string) => boolean;
  toggleWishlist: (productId: string) => void;
  cartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  searchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  accountOpen: boolean;
  openAccount: () => void;
  closeAccount: () => void;
};

const StoreContext = createContext<StoreContextValue | null>(null);
const cartStorageKey = "pharaoh-cart";
const wishlistStorageKey = "pharaoh-wishlist";
const productIds = new Set(products.map((product) => product.id));

function sanitizeQuantityMap(value: unknown): QuantityMap {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.entries(value).reduce<QuantityMap>((result, [productId, quantity]) => {
    const normalizedQuantity = typeof quantity === "number" ? Math.floor(quantity) : 0;
    if (productIds.has(productId) && normalizedQuantity > 0) result[productId] = normalizedQuantity;
    return result;
  }, {});
}

function sanitizeWishlist(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((productId): productId is string => typeof productId === "string" && productIds.has(productId));
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [cartQuantities, setCartQuantities] = useState<QuantityMap>({});
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  useEffect(() => {
    try {
      const storedCart = window.localStorage.getItem(cartStorageKey);
      const storedWishlist = window.localStorage.getItem(wishlistStorageKey);
      if (storedCart) setCartQuantities(sanitizeQuantityMap(JSON.parse(storedCart)));
      if (storedWishlist) setWishlist(sanitizeWishlist(JSON.parse(storedWishlist)));
    } catch {
      try {
        window.localStorage.removeItem(cartStorageKey);
        window.localStorage.removeItem(wishlistStorageKey);
      } catch {
        // Continue with an empty in-memory store when storage is unavailable.
      }
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(cartStorageKey, JSON.stringify(cartQuantities));
    window.localStorage.setItem(wishlistStorageKey, JSON.stringify(wishlist));
  }, [cartQuantities, hydrated, wishlist]);

  const cartProducts = useMemo(
    () =>
      products.reduce<CartProduct[]>((result, product) => {
        const quantity = cartQuantities[product.id] ?? 0;
        if (quantity > 0) result.push({ ...product, quantity, lineTotal: product.price * quantity });
        return result;
      }, []),
    [cartQuantities],
  );

  const cartCount = useMemo(() => cartProducts.reduce((total, product) => total + product.quantity, 0), [cartProducts]);

  const addToCart = (productId: string, quantity = 1) => {
    if (!productIds.has(productId) || quantity <= 0) return;
    setCartQuantities((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + Math.floor(quantity),
    }));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (!productIds.has(productId)) return;
    const normalizedQuantity = Math.floor(quantity);
    setCartQuantities((current) => {
      if (normalizedQuantity <= 0) {
        const next = { ...current };
        delete next[productId];
        return next;
      }
      return { ...current, [productId]: normalizedQuantity };
    });
  };

  const removeFromCart = (productId: string) => updateCartQuantity(productId, 0);

  const toggleWishlist = (productId: string) => {
    if (!productIds.has(productId)) return;
    setWishlist((current) => (current.includes(productId) ? current.filter((id) => id !== productId) : [...current, productId]));
  };

  const value: StoreContextValue = {
    storeReady: hydrated,
    cartCount,
    cartProducts,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart: () => setCartQuantities({}),
    isWished: (productId) => wishlist.includes(productId),
    toggleWishlist,
    cartOpen,
    openCart: () => setCartOpen(true),
    closeCart: () => setCartOpen(false),
    searchOpen,
    openSearch: () => setSearchOpen(true),
    closeSearch: () => setSearchOpen(false),
    accountOpen,
    openAccount: () => setAccountOpen(true),
    closeAccount: () => setAccountOpen(false),
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) throw new Error("useStore must be used inside StoreProvider");
  return context;
}
