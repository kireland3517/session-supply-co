import { Link } from "wouter";
import { Download, FileText, ArrowRight } from "lucide-react";

interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  price: number;
  originalPrice: number | null;
  badge: string | null;
  shortDescription: string;
  image: string;
  pages: number;
  format: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg border border-border overflow-hidden card-hover flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-linen">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded ${
              product.badge === "Best Value"
                ? "bg-forest text-white"
                : product.badge === "Sale"
                ? "bg-clay text-white"
                : "bg-ink text-white"
            }`}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-sage uppercase tracking-wider">{product.category}</span>
          <div className="flex items-center gap-1 text-xs text-ink/50">
            <FileText className="w-3 h-3" />
            <span>{product.pages}pp · {product.format}</span>
          </div>
        </div>

        <h3
          className="text-xl font-semibold text-ink mb-2 leading-snug"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {product.name}
        </h3>
        <p className="text-sm text-ink/60 leading-relaxed mb-4 flex-1">{product.shortDescription}</p>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-ink">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-ink/40 line-through">${product.originalPrice}</span>
            )}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest/80 transition-colors group/link"
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
