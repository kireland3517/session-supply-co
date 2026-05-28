import { useState, useRef } from "react";
import { ArrowRight, Search, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, LAYERS, STATUS_CONFIG, ECOSYSTEM_FLOW, type ProductStatus } from "@/lib/data";

const ALL_STATUSES: { value: ProductStatus | "all"; label: string }[] = [
  { value: "all", label: "All Products" },
  { value: "live", label: "Live Now" },
  { value: "immediate", label: "Build Next" },
  { value: "near", label: "Near-term" },
  { value: "longer", label: "Longer-term" },
  { value: "future", label: "Future" },
];

export default function Shop() {
  const [activeLayer, setActiveLayer] = useState<number | "all">("all");
  const [activeStatus, setActiveStatus] = useState<ProductStatus | "all">("all");
  const [search, setSearch] = useState("");
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const layerRefs = useRef<Record<number, HTMLElement | null>>({});

  const scrollToLayer = (layerId: number) => {
    setActiveLayer(layerId);
    setActiveStatus("all");
    setSearch("");
    setTimeout(() => {
      layerRefs.current[layerId]?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const filtered = PRODUCTS.filter((p) => {
    const matchLayer = activeLayer === "all" || p.layer === activeLayer;
    const matchStatus = activeStatus === "all" || p.status === activeStatus;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      p.category.toLowerCase().includes(search.toLowerCase());
    return matchLayer && matchStatus && matchSearch;
  });

  // Group filtered products by layer for display
  const layersToShow =
    activeLayer === "all"
      ? LAYERS
      : LAYERS.filter((l) => l.id === activeLayer);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-10 bg-linen border-b border-border">
        <div className="container">
          <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">
            Product Ecosystem
          </span>
          <h1
            className="text-5xl md:text-6xl text-ink mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            All Products
          </h1>
          <p className="text-sm text-ink/55 max-w-xl leading-relaxed">
            A full-stack toolkit for peer support programs — from the session room to the billing office. Every product is a standalone asset. Every product feeds the next one.
          </p>
          <div className="flex flex-wrap gap-6 mt-5 text-xs font-mono text-ink/50">
            <span>Products planned: <strong className="text-forest">16</strong></span>
            <span>Currently live: <strong className="text-forest">2</strong></span>
            <span>Layers: <strong className="text-forest">4</strong></span>
          </div>
        </div>
      </section>

      {/* Sticky Layer Nav */}
      <nav className="sticky top-[64px] z-30 bg-ink border-b border-white/10">
        <div className="container">
          <div className="flex items-center gap-1 py-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => { setActiveLayer("all"); setActiveStatus("all"); setSearch(""); }}
              className={`flex-shrink-0 font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm border transition-all ${
                activeLayer === "all"
                  ? "bg-sage text-white border-sage"
                  : "border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
              }`}
            >
              All Layers
            </button>
            {LAYERS.map((layer) => (
              <button
                key={layer.id}
                onClick={() => scrollToLayer(layer.id)}
                className={`flex-shrink-0 font-mono text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-sm border transition-all ${
                  activeLayer === layer.id
                    ? "bg-sage text-white border-sage"
                    : "border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
                }`}
              >
                Layer {layer.id} — {layer.shortLabel}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <div className="container py-10">
        {/* Legend + Search Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          {/* Status Legend */}
          <div className="flex flex-wrap gap-3">
            {ALL_STATUSES.filter(s => s.value !== "all").map((s) => {
              const cfg = STATUS_CONFIG[s.value as ProductStatus];
              return (
                <button
                  key={s.value}
                  onClick={() => setActiveStatus(activeStatus === s.value ? "all" : s.value as ProductStatus)}
                  className={`flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wide transition-all px-2 py-1 rounded border ${
                    activeStatus === s.value
                      ? "border-ink/30 bg-ink/5"
                      : "border-transparent hover:border-ink/15"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: cfg.dot }}
                  />
                  <span className="text-ink/60">{s.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ink/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products…"
              className="w-full pl-9 pr-4 py-2 text-sm border border-border rounded bg-linen/50 focus:outline-none focus:border-sage placeholder:text-ink/30"
            />
          </div>
        </div>

        {/* Ecosystem Logic Block */}
        <div className="mb-10 bg-ink rounded-lg overflow-hidden">
          <button
            onClick={() => setEcosystemOpen(!ecosystemOpen)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span
              className="text-lg text-sage"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}
            >
              The ecosystem logic
            </span>
            <ChevronDown
              className={`w-4 h-4 text-white/40 transition-transform ${ecosystemOpen ? "rotate-180" : ""}`}
            />
          </button>
          {ecosystemOpen && (
            <div className="px-6 pb-6 border-t border-white/10">
              <p className="text-sm text-white/60 leading-relaxed mt-4 max-w-2xl">
                Every product in this line serves the same program — a peer support program at a small or mid-size organization. The buyer at each layer is different, but the program is the same. A peer specialist buys session tools. Their coordinator sees the tools and buys the pipeline fix. The coordinator shows the billing guide to the ED. The ED buys the sustainability toolkit. Each product feeds the next.
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-4">
                {ECOSYSTEM_FLOW.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="font-mono text-[10px] px-2.5 py-1 bg-white/8 rounded text-white/70 whitespace-nowrap">
                      {step}
                    </span>
                    {i < ECOSYSTEM_FLOW.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-sage flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Search Results Mode */}
        {(search || activeStatus !== "all") && (
          <div className="mb-8">
            <p className="text-sm text-ink/50 mb-6">
              {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
              {search ? ` for "${search}"` : ""}
              {activeStatus !== "all" ? ` · ${STATUS_CONFIG[activeStatus].label}` : ""}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filtered.length === 0 && (
              <div className="text-center py-16 text-ink/40">
                <p className="text-sm">No products match your filters.</p>
                <button
                  onClick={() => { setSearch(""); setActiveStatus("all"); }}
                  className="mt-3 text-xs text-forest underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Layer-by-Layer View */}
        {!search && activeStatus === "all" && (
          <div className="space-y-14">
            {layersToShow.map((layer) => {
              const layerProducts = PRODUCTS.filter((p) => p.layer === layer.id);
              return (
                <section
                  key={layer.id}
                  id={`layer${layer.id}`}
                  ref={(el) => { layerRefs.current[layer.id] = el; }}
                  className="scroll-mt-28"
                >
                  {/* Layer Header */}
                  <div className="flex items-start gap-5 pb-4 mb-6 border-b-2 border-ink">
                    <span className="font-mono text-xs text-ink/40 pt-1 min-w-[24px]">
                      0{layer.id}
                    </span>
                    <div>
                      <h2
                        className="text-2xl text-ink mb-1"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                      >
                        {layer.shortLabel === "Peer Specialist"
                          ? "For the Peer Specialist"
                          : layer.shortLabel === "Coordinator"
                          ? "For the Coordinator"
                          : layer.shortLabel === "Billing"
                          ? "For the Billing and Compliance Layer"
                          : "For Program Leadership"}
                      </h2>
                      <p className="text-sm text-ink/55 max-w-xl">{layer.description}</p>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/35 mt-1.5">
                        Primary buyer: {layer.buyer}
                      </p>
                    </div>
                  </div>

                  {/* Product Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {layerProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* Summary Table */}
        {activeLayer === "all" && !search && activeStatus === "all" && (
          <section id="summary" className="mt-16 pt-10 border-t border-border scroll-mt-28">
            <h2
              className="text-2xl text-ink mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Full Product Line Summary
            </h2>
            <div className="overflow-x-auto rounded-lg border border-border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-linen border-b border-border">
                    <th className="font-mono text-[9px] uppercase tracking-widest text-ink/40 text-left px-4 py-3">Product</th>
                    <th className="font-mono text-[9px] uppercase tracking-widest text-ink/40 text-left px-4 py-3 hidden md:table-cell">Layer</th>
                    <th className="font-mono text-[9px] uppercase tracking-widest text-ink/40 text-left px-4 py-3">Status</th>
                    <th className="font-mono text-[9px] uppercase tracking-widest text-ink/40 text-left px-4 py-3">Price</th>
                    <th className="font-mono text-[9px] uppercase tracking-widest text-ink/40 text-left px-4 py-3 hidden lg:table-cell">Format</th>
                  </tr>
                </thead>
                <tbody>
                  {PRODUCTS.map((p, i) => {
                    const cfg = STATUS_CONFIG[p.status];
                    return (
                      <tr
                        key={p.id}
                        className={`border-b border-border hover:bg-linen/50 transition-colors ${
                          p.status === "live" ? "bg-sage-light/30" : ""
                        }`}
                      >
                        <td className="px-4 py-3">
                          <Link href={`/products/${p.slug}`} className="font-medium text-ink hover:text-forest transition-colors">
                            {p.name}
                          </Link>
                        </td>
                        <td className="px-4 py-3 text-ink/50 hidden md:table-cell text-xs">{p.layerLabel}</td>
                        <td className="px-4 py-3">
                          <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded ${cfg.bg} ${cfg.color}`}>
                            {cfg.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 font-mono text-xs text-ink/60">{p.price}</td>
                        <td className="px-4 py-3 text-xs text-ink/40 italic hidden lg:table-cell">{p.format}</td>
                      </tr>
                    );
                  })}
                  {/* Totals row */}
                  <tr className="bg-sage-light/50">
                    <td className="px-4 py-3 font-mono text-xs font-semibold text-forest" colSpan={2}>
                      {PRODUCTS.length} Products Total
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-forest hidden md:table-cell">
                      {PRODUCTS.filter(p => p.live).length} Live Now
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-forest">
                      $17 – $497
                    </td>
                    <td className="hidden lg:table-cell" />
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  );
}

// Inline product card for this page
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const cfg = STATUS_CONFIG[product.status];
  const statusColors: Record<string, string> = {
    live: "border-t-forest",
    immediate: "border-t-clay",
    near: "border-t-slate-brand",
    longer: "border-t-[#3C3489]",
    future: "border-t-[#2D3A4A]",
  };

  return (
    <Link href={product.live ? `/products/${product.slug}` : "#"}>
      <div
        className={`bg-white border border-border rounded-sm p-5 flex flex-col gap-3 relative overflow-hidden transition-all hover:shadow-md hover:-translate-y-0.5 border-t-[3px] ${statusColors[product.status]} cursor-pointer h-full`}
        onClick={!product.live ? (e) => e.preventDefault() : undefined}
      >
        {/* Status + Price */}
        <div className="flex items-center justify-between">
          <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm ${cfg.bg} ${cfg.color}`}>
            {cfg.label}
          </span>
          <span className="font-mono text-xs text-ink/50">{product.price}</span>
        </div>

        {/* Subtitle */}
        <p className="font-mono text-[10px] uppercase tracking-widest text-ink/35">
          {product.subtitle}
        </p>

        {/* Name */}
        <h3
          className="text-lg text-ink leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-xs text-ink/55 leading-relaxed flex-1">{product.description}</p>

        {/* Format */}
        <p className="text-xs text-ink/35 italic">{product.format}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[9px] px-2 py-0.5 bg-linen border border-border rounded-sm text-ink/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {product.live && (
          <div className="pt-2 mt-1 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-wider text-forest flex items-center gap-1">
              View Product <ArrowRight className="w-3 h-3" />
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
