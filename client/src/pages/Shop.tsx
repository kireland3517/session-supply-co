import { Link } from "wouter";
import { ArrowRight, Clock, CheckCircle2, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, FUNNEL_LOGIC, type Product } from "@/lib/data";
import { toast } from "sonner";

function StatusBadge({ status }: { status: Product["status"] }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-forest bg-sage-light px-2.5 py-1 rounded-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-forest inline-block" />
        Available Now
      </span>
    );
  }
  if (status === "coming-soon") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-clay bg-clay/10 px-2.5 py-1 rounded-sm">
        <Clock className="w-3 h-3" />
        Coming Soon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-100 px-2.5 py-1 rounded-sm">
      <Zap className="w-3 h-3" />
      Interactive Tool — In Development
    </span>
  );
}

function ProductCard({ product }: { product: Product }) {
  const handleNotify = () => {
    toast.success("You're on the list. We'll email you when it's ready.");
  };

  const accentBorder =
    product.accentColor === "clay"
      ? "border-t-clay"
      : product.accentColor === "sage"
      ? "border-t-sage"
      : "border-t-forest";

  return (
    <div className={`bg-white border border-border border-t-2 ${accentBorder} rounded-sm flex flex-col hover:shadow-md transition-all`}>
      <div className="aspect-[16/9] overflow-hidden bg-linen">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-7 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between gap-3">
          <StatusBadge status={product.status} />
          <span className="text-2xl text-ink font-semibold flex-shrink-0" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            {product.price}
          </span>
        </div>
        <div>
          <h3 className="text-2xl text-ink mb-2 leading-snug" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            {product.name}
          </h3>
          <p className="text-sm text-ink/55 leading-relaxed">{product.tagline}</p>
        </div>
        <div className="border-t border-border pt-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-ink/30 mb-2">Audience</p>
          <p className="text-xs text-ink/55 leading-relaxed">{product.audience}</p>
        </div>
        <div className="space-y-1.5">
          {product.outcomes.slice(0, 3).map((outcome, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-ink/60">
              <CheckCircle2 className="w-3.5 h-3.5 text-sage flex-shrink-0 mt-0.5" />
              {outcome}
            </div>
          ))}
        </div>
        <div className="mt-auto pt-2">
          {product.status === "available" ? (
            <Link href={`/products/${product.slug}`} className="w-full flex items-center justify-center gap-2 bg-forest text-white font-medium py-3 rounded-sm hover:bg-forest/90 transition-all text-sm">
              View & Purchase <ArrowRight className="w-4 h-4" />
            </Link>
          ) : product.status === "placeholder" ? (
            <div className="space-y-2">
              <button onClick={handleNotify} className="w-full flex items-center justify-center gap-2 bg-clay text-white font-medium py-3 rounded-sm hover:bg-clay/90 transition-all text-sm">
                Notify Me When Live <ArrowRight className="w-4 h-4" />
              </button>
              <Link href={`/products/${product.slug}`} className="w-full flex items-center justify-center gap-2 border border-border text-ink/60 font-medium py-2.5 rounded-sm hover:border-ink/30 hover:text-ink transition-all text-sm">
                Preview Details
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              <button onClick={handleNotify} className="w-full flex items-center justify-center gap-2 bg-ink text-white font-medium py-3 rounded-sm hover:bg-ink/90 transition-all text-sm">
                Notify Me When Ready <ArrowRight className="w-4 h-4" />
              </button>
              <Link href={`/products/${product.slug}`} className="w-full flex items-center justify-center gap-2 border border-border text-ink/60 font-medium py-2.5 rounded-sm hover:border-ink/30 hover:text-ink transition-all text-sm">
                Preview Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Shop() {
  const sorted = [...PRODUCTS].sort((a, b) => a.funnelPosition - b.funnelPosition);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-14 bg-linen border-b border-border">
        <div className="container">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
            Tools & Resources
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <div>
              <h1 className="text-5xl md:text-6xl text-ink mb-4 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Three products.
                <br />
                One problem.
              </h1>
              <p className="text-base text-ink/55 leading-relaxed max-w-lg">
                Every product addresses a specific, research-documented barrier to peer specialist integration. Start with the Assessment. Build from there.
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink/30 mb-3">How the products connect</p>
              {FUNNEL_LOGIC.map((step) => (
                <div key={step.step} className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-ink/30 w-4 flex-shrink-0">{step.step}</span>
                  <div className="flex-1 flex items-center gap-2 bg-white border border-border rounded-sm px-3 py-2">
                    <span className="text-xs font-medium text-ink">{step.product}</span>
                    <span className="text-[10px] text-ink/35 ml-auto font-mono">→ {step.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Funnel explainer */}
      <section className="py-16 md:py-20 bg-ink">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage mb-4 block">The Logic</span>
              <h2 className="text-4xl md:text-5xl text-white mb-5 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Products are an entry point, not an endpoint.
              </h2>
              <p className="text-white/55 text-base leading-relaxed mb-6">
                An org leader buys the Assessment. They see their gaps in writing. They buy the Supervisor Toolkit to address the most common one. They implement the Operating System to fix the infrastructure. When they need a partner to build alongside them, they hire us to consult.
              </p>
              <p className="text-white/55 text-base leading-relaxed">
                Every product is designed to be immediately useful on its own — and to make the next step obvious.
              </p>
            </div>
            <div className="space-y-3">
              {FUNNEL_LOGIC.map((step) => (
                <div key={step.step} className="bg-white/5 border border-white/10 rounded-sm p-5 hover:bg-white/8 transition-colors">
                  <div className="flex items-start gap-4">
                    <span className="font-mono text-[10px] text-white/25 mt-0.5 flex-shrink-0">0{step.step}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-white text-sm font-medium">{step.product}</p>
                        <span className="font-mono text-[9px] text-sage uppercase tracking-widest">{step.role}</span>
                      </div>
                      <p className="text-white/45 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Free library CTA */}
      <section className="py-14 md:py-16 bg-linen border-t border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl text-ink mb-2" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                Not ready to buy? Start with the free library.
              </h2>
              <p className="text-sm text-ink/55 max-w-lg">
                Free checklists, guides, and reference sheets — no purchase required. Includes a free preview of the Assessment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/resources" className="inline-flex items-center gap-2 border border-border text-ink/70 font-medium px-5 py-2.5 rounded-sm hover:border-forest hover:text-forest transition-all text-sm">
                Browse Free Resources <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-forest text-white font-medium px-5 py-2.5 rounded-sm hover:bg-forest/90 transition-all text-sm">
                Talk to Us First <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
