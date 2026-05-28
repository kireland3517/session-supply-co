import { useParams, Link } from "wouter";
import { CheckCircle2, Download, FileText, Star, Shield, RefreshCw, Zap, ChevronDown, ChevronUp, ArrowRight, Tag } from "lucide-react";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, STATUS_CONFIG } from "@/lib/data";
import { toast } from "sonner";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);
  const related = PRODUCTS.filter(
    (p) => p.slug !== slug && (p.layer === product?.layer || p.featured)
  ).slice(0, 3);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Navbar />
        <div className="text-center">
          <p className="text-ink/50 mb-4">Product not found.</p>
          <Link href="/shop" className="text-forest underline text-sm">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const cfg = STATUS_CONFIG[product.status];

  const faqs = [
    {
      q: "What format are the files?",
      a: `This product is delivered as: ${product.format}. All files are ready to use immediately after download.`,
    },
    {
      q: "How do I receive my download?",
      a: "After purchase you'll receive an email with a secure download link. Files are also available in your account dashboard.",
    },
    {
      q: "Can I print these materials?",
      a: "Yes — all materials are designed to be printed or used digitally. They're formatted for standard 8.5×11 paper.",
    },
    {
      q: "Are these evidence-based?",
      a: "Yes. All session plans and resources are grounded in peer support best practices, motivational interviewing, and trauma-informed care principles.",
    },
    {
      q: "Can I use these with my whole team?",
      a: "Single-user licenses cover one practitioner. Team and organizational licenses are available — contact us for pricing.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-xs text-ink/40">
            <Link href="/" className="hover:text-ink transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-ink transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-ink/60 truncate max-w-[200px]">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-14 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Image */}
            <div className="space-y-4">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-linen">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Trust badges */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Zap, label: "Instant Download" },
                  { icon: Shield, label: "Secure Purchase" },
                  { icon: RefreshCw, label: "Free Updates" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 bg-linen rounded-md py-3 px-2 text-center"
                  >
                    <Icon className="w-4 h-4 text-forest" />
                    <span className="text-xs text-ink/60 font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Info */}
            <div>
              {/* Layer + Status */}
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span className="text-xs font-mono uppercase tracking-widest text-ink/40">
                  Layer {product.layer} — {product.layerLabel}
                </span>
                <span className="text-ink/20">·</span>
                <span
                  className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm ${cfg.bg} ${cfg.color}`}
                >
                  {cfg.label}
                </span>
              </div>

              {/* Subtitle */}
              <p className="font-mono text-[10px] uppercase tracking-widest text-ink/35 mb-2">
                {product.subtitle}
              </p>

              <h1
                className="text-4xl md:text-5xl text-ink mb-4 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                {product.name}
              </h1>

              {/* Stars */}
              {product.live && (
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-clay text-clay" />
                    ))}
                  </div>
                  <span className="text-sm text-ink/50">4.9 · 48 reviews</span>
                </div>
              )}

              <p className="text-base text-ink/65 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-4 text-sm text-ink/50 mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  <span>{product.format}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{product.category}</span>
                </div>
              </div>

              {/* What's included */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-ink uppercase tracking-widest mb-4">
                  What's Included
                </h3>
                <ul className="space-y-2.5">
                  {product.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-ink/70"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <h3 className="text-xs font-semibold text-ink uppercase tracking-widest mb-3">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-sage-light text-forest px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="bg-linen rounded-lg p-5">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span
                        className="text-3xl font-semibold text-ink"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {product.price}
                      </span>
                    </div>
                    <p className="text-xs text-ink/50 mt-0.5">
                      One-time purchase · Instant access
                    </p>
                  </div>
                  {product.live ? (
                    <button
                      onClick={() =>
                        toast.success("Added to cart! Checkout coming soon.")
                      }
                      className="flex items-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded transition-all hover:bg-forest/90 whitespace-nowrap"
                    >
                      <Download className="w-4 h-4" />
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        toast.info("This product is coming soon. Join the waitlist!")
                      }
                      className="flex items-center gap-2 bg-ink/10 text-ink/60 font-medium px-6 py-3 rounded transition-all hover:bg-ink/15 whitespace-nowrap"
                    >
                      Notify Me
                    </button>
                  )}
                </div>
                {!product.live && (
                  <p className="text-xs text-ink/40 italic">
                    This product is currently in development. Enter your email to be notified when it launches.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-linen border-t border-border">
        <div className="container max-w-2xl">
          <h2
            className="text-3xl text-ink mb-8"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-lg border border-border overflow-hidden"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-semibold text-ink">{faq.q}</span>
                  {faqOpen === i ? (
                    <ChevronUp className="w-4 h-4 text-ink/40 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-ink/40 flex-shrink-0" />
                  )}
                </button>
                {faqOpen === i && (
                  <div className="px-5 pb-5 text-sm text-ink/60 leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container">
            <h2
              className="text-3xl text-ink mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => {
                const rcfg = STATUS_CONFIG[p.status];
                const statusColors: Record<string, string> = {
                  live: "border-t-forest",
                  immediate: "border-t-clay",
                  near: "border-t-slate-brand",
                  longer: "border-t-[#3C3489]",
                  future: "border-t-[#2D3A4A]",
                };
                return (
                  <Link key={p.id} href={p.live ? `/products/${p.slug}` : "#"}>
                    <div
                      className={`bg-white border border-border rounded-sm p-5 flex flex-col gap-3 border-t-[3px] ${statusColors[p.status]} hover:shadow-md transition-all`}
                    >
                      <span
                        className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm self-start ${rcfg.bg} ${rcfg.color}`}
                      >
                        {rcfg.label}
                      </span>
                      <h3
                        className="text-base text-ink leading-snug"
                        style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                      >
                        {p.name}
                      </h3>
                      <p className="text-xs text-ink/55 leading-relaxed">{p.shortDescription}</p>
                      <p className="font-mono text-xs text-ink/40 mt-auto">{p.price}</p>
                      {p.live && (
                        <span className="font-mono text-[10px] uppercase tracking-wider text-forest flex items-center gap-1">
                          View <ArrowRight className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
