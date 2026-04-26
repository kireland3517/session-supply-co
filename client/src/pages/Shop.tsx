import { useState } from "react";
import { SlidersHorizontal, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, CATEGORIES } from "@/lib/data";

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  }).sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-12 bg-linen border-b border-border">
        <div className="container">
          <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Shop</span>
          <h1 className="heading-display text-5xl md:text-6xl text-ink mb-3">
            All Products
          </h1>
          <p className="text-base text-ink/55 max-w-lg">
            Structured, ready-to-use digital resources for peer support specialists and group facilitators.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[64px] z-30 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1 flex-wrap">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 text-sm rounded-full transition-all font-medium ${
                    activeCategory === cat
                      ? "bg-forest text-white"
                      : "text-ink/60 hover:text-ink hover:bg-linen"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search + Sort */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-52">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink/40" />
                <input
                  type="text"
                  placeholder="Search products…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-sm border border-border rounded bg-white focus:outline-none focus:border-forest transition-colors"
                />
              </div>
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="w-3.5 h-3.5 text-ink/40" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="text-sm border border-border rounded px-2 py-1.5 bg-white focus:outline-none focus:border-forest text-ink/70"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-14 md:py-20">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-ink/40">
              <p className="text-lg">No products found.</p>
              <button
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                className="mt-3 text-sm text-forest underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-ink/40 mb-8">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-sage-light border-t border-border">
        <div className="container text-center">
          <h3 className="heading-display text-3xl text-ink mb-3">Not sure where to start?</h3>
          <p className="text-sm text-ink/55 mb-5">Try a free resource first — no email required for some downloads.</p>
          <a href="/resources" className="inline-flex items-center gap-2 text-forest text-sm font-medium border border-forest px-5 py-2.5 rounded hover:bg-forest hover:text-white transition-all">
            Browse Free Resources
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
