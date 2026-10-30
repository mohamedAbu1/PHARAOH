"use client";

import Image from "next/image";
import {
  ChevronDown,
  Heart,
  RotateCcw,
  SlidersHorizontal,
  Star,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "../lib/StoreContext";
import { CATEGORIES, MATERIALS, products, type Category, type Material, type Product } from "../lib/shopCatalog";

type SortOption = "featured" | "low" | "high";

function DecorativeRule() {
  return (
    <div className="mx-auto flex items-center justify-center gap-2 text-[var(--gold)]" aria-hidden="true">
      <span className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--gold)]" />
      <span className="relative flex h-7 w-9 items-center justify-center">
        <span className="absolute h-3 w-3 rotate-45 border border-[var(--gold)]" />
        <span className="absolute h-5 w-5 rounded-[50%] border-x border-[var(--gold)]" />
      </span>
      <span className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--gold)]" />
    </div>
  );
}

function FiltersPanel({
  selectedCategories,
  selectedMaterials,
  maxPrice,
  inStockOnly,
  onCategoryChange,
  onMaterialChange,
  onPriceChange,
  onStockChange,
  onReset,
  onClose,
}: {
  selectedCategories: Category[];
  selectedMaterials: Material[];
  maxPrice: number;
  inStockOnly: boolean;
  onCategoryChange: (category: Category) => void;
  onMaterialChange: (material: Material) => void;
  onPriceChange: (price: number) => void;
  onStockChange: (value: boolean) => void;
  onReset: () => void;
  onClose?: () => void;
}) {
  const allSelected = selectedCategories.length === 0;

  return (
    <div className="border border-[var(--theme-border)] bg-[var(--theme-panel)] p-5 shadow-2xl shadow-black/20 backdrop-blur-md">
      <div className="mb-5 flex items-center justify-between border-b border-[var(--theme-border)] pb-4">
        <h2 className="font-display text-[1.05rem] tracking-[0.14em] text-[var(--theme-text)]">FILTERS</h2>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onReset}
            className="text-xs text-[var(--theme-muted)] transition-colors hover:text-[var(--gold)]"
          >
            Reset All
          </button>
          {onClose ? (
            <button type="button" onClick={onClose} aria-label="Close filters" className="text-[var(--theme-text)]">
              <X size={19} />
            </button>
          ) : null}
        </div>
      </div>

      <FilterHeading>Category</FilterHeading>
      <div className="space-y-3">
        <CheckRow label="All" checked={allSelected} onChange={onReset} />
        {CATEGORIES.map((category) => (
          <CheckRow
            key={category}
            label={category}
            checked={selectedCategories.includes(category)}
            onChange={() => onCategoryChange(category)}
          />
        ))}
      </div>

      <FilterHeading>Price Range</FilterHeading>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm text-[var(--theme-muted)]">
          <span>$0</span>
          <span>${maxPrice.toLocaleString()}+</span>
        </div>
        <input
          aria-label="Maximum price"
          type="range"
          min="0"
          max="1000"
          step="10"
          value={maxPrice}
          onChange={(event) => onPriceChange(Number(event.target.value))}
          className="h-1.5 w-full cursor-pointer accent-[#d8aa56]"
        />
        <div className="flex justify-between text-[10px] uppercase tracking-[0.16em] text-[var(--theme-muted)]">
          <span>Budget</span>
          <span>Collector</span>
        </div>
      </div>

      <FilterHeading>Material</FilterHeading>
      <div className="space-y-3">
        {MATERIALS.map((material) => (
          <CheckRow
            key={material}
            label={material}
            checked={selectedMaterials.includes(material)}
            onChange={() => onMaterialChange(material)}
          />
        ))}
      </div>

      <FilterHeading>Availability</FilterHeading>
      <CheckRow label="In Stock Only" checked={inStockOnly} onChange={() => onStockChange(!inStockOnly)} />
    </div>
  );
}

function FilterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 mt-6 border-t border-[var(--theme-border)] pt-5 text-xs uppercase tracking-[0.18em] text-[var(--theme-heading)]">{children}</h3>;
}

function CheckRow({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-3 text-sm text-[var(--theme-muted)] transition-colors hover:text-[var(--theme-text)]">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />
      <span className="flex h-[18px] w-[18px] items-center justify-center border border-[var(--theme-border)] bg-[var(--theme-control)] text-[var(--theme-inverse)] transition peer-checked:border-[var(--gold)] peer-checked:bg-[var(--gold)]">
        {checked ? <span className="text-sm font-bold leading-none">✓</span> : null}
      </span>
      <span>{label}</span>
    </label>
  );
}

function ProductCard({
  product,
  isWished,
  onAdd,
  onWish,
}: {
  product: Product;
  isWished: boolean;
  onAdd: () => void;
  onWish: () => void;
}) {
  return (
    <article className="group border border-[var(--theme-border)] bg-[var(--theme-panel)] shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-[var(--gold)]">
      <div className="relative aspect-[1.42] overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-panel-alt)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050809]/30 via-transparent to-transparent" />
        <a href={`/shop/${product.id}`} aria-label={`View ${product.name}`} className="absolute inset-0 z-0" />
        <button
          type="button"
          aria-label={isWished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          onClick={onWish}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center border backdrop-blur-sm transition ${
            isWished
              ? "border-[var(--gold)] bg-[var(--gold)] text-[var(--theme-inverse)]"
              : "border-[var(--gold)] bg-[var(--theme-control)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"
          }`}
        >
          <Heart size={17} fill={isWished ? "currentColor" : "none"} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-[1.08rem] text-[var(--theme-text)]"><a href={`/shop/${product.id}`} className="transition-colors hover:text-[var(--gold)]">{product.name}</a></h2>
            <p className="mt-1 text-lg text-[var(--gold)]">${product.price.toFixed(2)}</p>
          </div>
          <div className="mt-1 flex items-center gap-1 whitespace-nowrap text-[var(--gold)]" aria-label="5 out of 5 stars">
            <span className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={13} fill="currentColor" />
              ))}
            </span>
            <span className="text-[11px] text-[var(--theme-muted)]">({product.reviews})</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onAdd}
            className="flex-1 border border-[var(--gold)] px-3 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[var(--gold)] transition hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"
          >
            ADD TO CART
          </button>
          <button
            type="button"
            aria-label={isWished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
            onClick={onWish}
            className="flex h-10 w-11 items-center justify-center border border-[var(--theme-border)] text-[var(--gold)] transition hover:border-[var(--gold)] hover:bg-[var(--theme-panel-alt)]"
          >
            <Heart size={17} fill={isWished ? "currentColor" : "none"} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<Material[]>([]);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart, isWished, toggleWishlist } = useStore();

  useEffect(() => {
    if (typeof window === "undefined") return;
    setSearchQuery(new URLSearchParams(window.location.search).get("search") ?? "");
  }, []);

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const materialMatch = selectedMaterials.length === 0 || selectedMaterials.includes(product.material);
      const priceMatch = product.price <= maxPrice;
      const stockMatch = !inStockOnly || product.inStock !== false;
      const searchMatch = !searchQuery.trim() || [product.name, product.category, product.material, product.description].some((field) => field.toLowerCase().includes(searchQuery.trim().toLowerCase()));
      return categoryMatch && materialMatch && priceMatch && stockMatch && searchMatch;
    });

    if (sortOption === "low") return [...filtered].sort((a, b) => a.price - b.price);
    if (sortOption === "high") return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [inStockOnly, maxPrice, searchQuery, selectedCategories, selectedMaterials, sortOption]);

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setMaxPrice(1000);
    setInStockOnly(false);
    setSearchQuery("");
  };

  const toggleCategory = (category: Category) => {
    setSelectedCategories((current) =>
      current.includes(category) ? current.filter((item) => item !== category) : [...current, category],
    );
  };

  const toggleMaterial = (material: Material) => {
    setSelectedMaterials((current) =>
      current.includes(material) ? current.filter((item) => item !== material) : [...current, material],
    );
  };

  const tabValue = selectedCategories.length === 1 ? selectedCategories[0] : "All";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <section className="relative isolate min-h-0">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/shop/shop-ambient.png"
            alt="A candlelit Egyptian temple at dusk"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="shop-veil absolute inset-0 -z-10" />
        <div className="shop-side-veil absolute inset-0 -z-10" />

        <div className="mx-auto max-w-[1150px] px-5 pb-8 pt-10 text-center sm:pt-12 lg:pt-16">
          <p className="mb-5 text-[10px] uppercase tracking-[0.42em] text-[var(--gold)]">Curated in the land of eternity</p>
          <h1 className="font-display text-[2.8rem] uppercase tracking-[0.13em] text-[var(--theme-text)] drop-shadow-lg sm:text-5xl lg:text-6xl">Shop the Collection</h1>
          <div className="my-5"><DecorativeRule /></div>
          <p className="font-display text-lg text-[var(--theme-muted)] sm:text-xl">Authentic treasures inspired by ancient Egypt.</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["All", ...CATEGORIES].map((category) => {
              const isActive = tabValue === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategories(category === "All" ? [] : [category as Category])}
                    className={`min-w-[110px] border px-7 py-2.5 text-xs transition sm:min-w-[125px] ${isActive ? "border-[var(--gold)] bg-[var(--gold-bright)] text-[var(--theme-inverse)]" : "border-[var(--theme-border)] bg-[var(--theme-control)] text-[var(--theme-control-text)] hover:border-[var(--gold)] hover:text-[var(--gold)]"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid max-w-[1400px] gap-7 px-5 pb-12 lg:grid-cols-[250px_1fr] xl:gap-8">
          <aside className="hidden lg:block">
            <FiltersPanel
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
              maxPrice={maxPrice}
              inStockOnly={inStockOnly}
              onCategoryChange={toggleCategory}
              onMaterialChange={toggleMaterial}
              onPriceChange={setMaxPrice}
              onStockChange={setInStockOnly}
              onReset={resetFilters}
            />
          </aside>

          <section aria-label="Shop products">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--theme-muted)]">
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setFiltersOpen(true)} className="flex items-center gap-2 border border-[var(--theme-border)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--gold)] lg:hidden"><SlidersHorizontal size={15} /> Filters</button>
                <span>{visibleProducts.length} {visibleProducts.length === 1 ? "product" : "products"}</span>
                {searchQuery ? <button type="button" onClick={() => setSearchQuery("")} className="border border-[var(--theme-border)] px-2 py-1 text-xs text-[var(--gold)]">Search: {searchQuery} ×</button> : null}
              </div>
              <label className="flex items-center gap-2 border border-[var(--theme-border)] bg-[var(--theme-control)] px-3 py-2 text-sm text-[var(--theme-control-text)]">
                <span className="hidden sm:inline">Sort by:</span>
                <select value={sortOption} onChange={(event) => setSortOption(event.target.value as SortOption)} className="bg-transparent text-[var(--theme-control-text)] outline-none">
                  <option value="featured" className="bg-[var(--theme-control)]">Featured</option>
                  <option value="low" className="bg-[var(--theme-control)]">Price: Low to High</option>
                  <option value="high" className="bg-[var(--theme-control)]">Price: High to Low</option>
                </select>
                <ChevronDown size={15} className="pointer-events-none" />
              </label>
            </div>

            {visibleProducts.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {visibleProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    isWished={isWished(product.id)}
                    onAdd={() => addToCart(product.id)}
                    onWish={() => toggleWishlist(product.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[300px] flex-col items-center justify-center border border-dashed border-[var(--gold)] bg-[var(--theme-panel)] px-6 text-center">
                <p className="font-display text-2xl text-[var(--theme-heading)]">Nothing matches this selection.</p>
                <p className="mt-2 max-w-sm text-sm text-[var(--theme-muted)]">Reset the filters to rediscover the full collection.</p>
                <button type="button" onClick={resetFilters} className="mt-6 flex items-center gap-2 border border-[var(--gold)] px-5 py-2 text-xs tracking-[0.16em] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--theme-inverse)]"><RotateCcw size={14} /> RESET FILTERS</button>
              </div>
            )}
          </section>
        </div>
      </section>

      {filtersOpen ? (
        <div className="fixed inset-0 z-50 bg-black/75 p-4 lg:hidden" onClick={() => setFiltersOpen(false)}>
          <div className="mx-auto mt-6 max-h-[calc(100vh-3rem)] max-w-md overflow-y-auto" onClick={(event) => event.stopPropagation()}>
            <FiltersPanel
              selectedCategories={selectedCategories}
              selectedMaterials={selectedMaterials}
              maxPrice={maxPrice}
              inStockOnly={inStockOnly}
              onCategoryChange={toggleCategory}
              onMaterialChange={toggleMaterial}
              onPriceChange={setMaxPrice}
              onStockChange={setInStockOnly}
              onReset={resetFilters}
              onClose={() => setFiltersOpen(false)}
            />
          </div>
        </div>
      ) : null}

    </main>
  );
}
