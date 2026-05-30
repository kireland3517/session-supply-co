import { Link } from "wouter";
import { ArrowRight, Clock, Zap } from "lucide-react";
import { type Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

const ACCENT_BORDER: Record<string, string> = {
  clay: "border-t-clay",
  sage: "border-t-sage",
  forest: "border-t-forest",
};

export default function ProductCard({ product }: ProductCardProps) {
  const borderColor = ACCENT_BORDER[product.accentColor] ?? "border-t-forest";
  const isAvailable = product.status === "available";

  return (
    <Link href={`/products/${product.slug}`}>
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
          {product.status === "available" && (
            <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-forest text-white">
              Available Now
            </span>
          )}
          {product.status === "placeholder" && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-clay text-white">
              <Zap className="w-2.5 h-2.5" /> Interactive Tool
            </span>
          )}
          {product.status === "coming-soon" && (
            <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded-sm bg-ink/70 text-white">
              <Clock className="w-2.5 h-2.5" /> Coming Soon
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          {/* Step indicator */}
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-2">
            Step {product.funnelPosition} of 3
          </p>

          <h3
            className="text-xl text-ink mb-2 leading-snug"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            {product.name}
          </h3>
          <p className="text-sm text-ink/60 leading-relaxed mb-4 flex-1">
            {product.tagline}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
            <span className="font-mono text-sm font-medium text-ink/60">
              {product.price}
            </span>
            {isAvailable ? (
              <span className="flex items-center gap-1.5 text-sm font-medium text-forest group-hover:gap-2 transition-all">
                View Details
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            ) : (
              <span className="flex items-center gap-1.5 text-xs text-ink/40 font-mono uppercase tracking-wider group-hover:text-ink/60 transition-colors">
                Preview <ArrowRight className="w-3 h-3" />
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
