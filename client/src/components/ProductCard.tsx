import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { type Product, STATUS_CONFIG } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

const STATUS_BORDER: Record<string, string> = {
  live: "border-t-forest",
  immediate: "border-t-clay",
  near: "border-t-slate-brand",
  longer: "border-t-[#3C3489]",
  future: "border-t-[#2D3A4A]",
};

export default function ProductCard({ product }: ProductCardProps) {
  const cfg = STATUS_CONFIG[product.status];
  const borderColor = STATUS_BORDER[product.status];

  return (
    <Link href={product.live ? `/products/${product.slug}` : "#"}>
      <div
        className={`group bg-white border border-border rounded-sm overflow-hidden flex flex-col h-full transition-all hover:shadow-md hover:-translate-y-0.5 border-t-[3px] ${borderColor}`}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-linen">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {product.live && (
            <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-forest text-white">
              Live Now
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Status + Layer */}
          <div className="flex items-center justify-between mb-2">
            <span className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm ${cfg.bg} ${cfg.color}`}>
              {cfg.label}
            </span>
            <span className="font-mono text-[9px] text-ink/35 uppercase tracking-wider">
              Layer {product.layer}
            </span>
          </div>

          {/* Subtitle */}
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink/35 mb-1.5">
            {product.subtitle}
          </p>

          <h3
            className="text-xl text-ink mb-2 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            {product.name}
          </h3>
          <p className="text-sm text-ink/60 leading-relaxed mb-4 flex-1">
            {product.shortDescription}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="font-mono text-sm font-medium text-ink/60">
              {product.price}
            </span>
            {product.live ? (
              <span className="flex items-center gap-1.5 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            ) : (
              <span className="text-xs text-ink/35 font-mono uppercase tracking-wider">
                Coming Soon
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
