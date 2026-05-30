import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Zap, FileText, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS, FUNNEL_LOGIC, type Product } from "@/lib/data";
import { toast } from "sonner";

function StatusBadge({ status }: { status: Product["status"] }) {
  if (status === "available") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-forest bg-sage-light px-3 py-1.5 rounded-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-forest inline-block" />
        Available Now
      </span>
    );
  }
  if (status === "coming-soon") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-clay bg-clay/10 px-3 py-1.5 rounded-sm">
        <Clock className="w-3 h-3" />
        Coming Soon
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-slate-500 bg-slate-100 px-3 py-1.5 rounded-sm">
      <Zap className="w-3 h-3" />
      Interactive Tool — In Development
    </span>
  );
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  const handleNotify = () => {
    toast.success("You're on the list. We'll email you when it's ready.");
  };

  const handlePurchase = () => {
    toast.success("Purchase flow coming soon — contact us to get early access.");
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container py-40 text-center">
          <h1 className="text-3xl text-ink mb-4" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Product not found.
          </h1>
          <Link href="/shop" className="inline-flex items-center gap-2 text-forest text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to all products
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Next product in funnel
  const nextProduct = PRODUCTS.find((p) => p.funnelPosition === product.funnelPosition + 1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-20 pb-0 bg-linen border-b border-border">
        <div className="container py-4">
          <Link href="/shop" className="inline-flex items-center gap-1.5 text-xs text-ink/40 hover:text-ink transition-colors font-mono uppercase tracking-widest">
            <ArrowLeft className="w-3 h-3" /> All Products
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-linen pb-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-14 items-start">
            {/* Left: Info */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <StatusBadge status={product.status} />
                <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">
                  Step {product.funnelPosition} of 3
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl text-ink mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                {product.name}
              </h1>
              <p className="text-base text-ink/60 leading-relaxed mb-6">{product.tagline}</p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-4xl text-ink" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                  {product.price}
                </span>
                <div>
                  <p className="text-xs text-ink/40 font-mono uppercase tracking-widest">Format</p>
                  <p className="text-sm text-ink/60">{product.format}</p>
                </div>
              </div>

              {/* CTA */}
              {product.status === "available" ? (
                <div className="flex flex-col sm:flex-row gap-3">
                  <button onClick={handlePurchase} className="flex items-center justify-center gap-2 bg-forest text-white font-medium px-7 py-3.5 rounded-sm hover:bg-forest/90 transition-all">
                    Purchase — {product.price} <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/contact" className="flex items-center justify-center gap-2 border border-border text-ink/60 font-medium px-6 py-3.5 rounded-sm hover:border-forest hover:text-forest transition-all text-sm">
                    Questions? Talk to us
                  </Link>
                </div>
              ) : product.status === "placeholder" ? (
                <div className="space-y-3">
                  <div className="bg-clay/8 border border-clay/20 rounded-sm p-4 text-sm text-ink/70 leading-relaxed">
                    <strong className="text-clay">This is an interactive web tool currently in development.</strong> The Assessment will be available directly on this site — you'll answer questions, get a scored gap report, and receive a PDF export. Join the waitlist to be notified when it launches.
                  </div>
                  <button onClick={handleNotify} className="flex items-center gap-2 bg-clay text-white font-medium px-7 py-3.5 rounded-sm hover:bg-clay/90 transition-all">
                    Join the Waitlist <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-ink/5 border border-border rounded-sm p-4 text-sm text-ink/60 leading-relaxed">
                    This product is in development. Join the waitlist and we'll notify you when it's available.
                  </div>
                  <button onClick={handleNotify} className="flex items-center gap-2 bg-ink text-white font-medium px-7 py-3.5 rounded-sm hover:bg-ink/90 transition-all">
                    Join the Waitlist <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

            {/* Right: Image */}
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-white border border-border">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16 md:py-20 bg-ink">
        <div className="container max-w-3xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-sage mb-4 block">The Problem This Solves</span>
          <p className="text-xl md:text-2xl text-white leading-relaxed italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            "{product.problem}"
          </p>
        </div>
      </section>

      {/* What it is + Deliverables */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">What It Is</span>
              <h2 className="text-3xl text-ink mb-5" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                {product.solution}
              </h2>
              <p className="text-base text-ink/60 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">What's Included</span>
              <div className="space-y-2.5">
                {product.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-linen border border-border rounded-sm px-4 py-3">
                    <FileText className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-ink/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="py-16 md:py-20 bg-linen border-y border-border">
        <div className="container">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
            {product.status === "placeholder" ? "Assessment Domains" : "What's Covered"}
          </span>
          <h2 className="text-3xl text-ink mb-10" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            {product.modules.length} {product.status === "placeholder" ? "domains" : "sections"}, each addressing a documented failure point.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {product.modules.map((mod, i) => (
              <div key={i} className="bg-white border border-border rounded-sm p-5 flex flex-col gap-2">
                <span className="font-mono text-[9px] text-ink/25 uppercase tracking-widest">
                  {product.status === "placeholder" ? `Domain ${i + 1}` : `Section ${i + 1}`}
                </span>
                <h3 className="text-base text-ink" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                  {mod.title}
                </h3>
                <p className="text-xs text-ink/55 leading-relaxed">{mod.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">What You Walk Away With</span>
          <h2 className="text-3xl text-ink mb-8" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
            Specific outcomes, not general improvements.
          </h2>
          <div className="space-y-3">
            {product.outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-3 py-3 border-b border-border">
                <CheckCircle2 className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                <p className="text-base text-ink/70">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-14 bg-linen border-y border-border">
        <div className="container max-w-3xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">Who This Is For</span>
          <p className="text-base text-ink/70 leading-relaxed">{product.audience}</p>
        </div>
      </section>

      {/* Purchase CTA */}
      <section className="py-16 md:py-20 bg-forest">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl text-white mb-3 leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                {product.name}
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">{product.tagline}</p>
              <div className="flex items-center gap-4">
                <span className="text-4xl text-white" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                  {product.price}
                </span>
                <span className="text-white/40 text-sm">{product.format}</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              {product.status === "available" ? (
                <>
                  <button onClick={handlePurchase} className="flex items-center justify-center gap-2 bg-white text-forest font-medium px-7 py-4 rounded-sm hover:bg-white/90 transition-all">
                    Purchase — {product.price} <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/resources" className="flex items-center justify-center gap-2 border border-white/25 text-white/80 font-medium px-7 py-3.5 rounded-sm hover:border-white/50 hover:text-white transition-all text-sm">
                    <Download className="w-4 h-4" /> Try free resources first
                  </Link>
                </>
              ) : (
                <>
                  <button onClick={handleNotify} className="flex items-center justify-center gap-2 bg-white text-forest font-medium px-7 py-4 rounded-sm hover:bg-white/90 transition-all">
                    Join the Waitlist <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/contact" className="flex items-center justify-center gap-2 border border-white/25 text-white/80 font-medium px-7 py-3.5 rounded-sm hover:border-white/50 hover:text-white transition-all text-sm">
                    Talk to us about early access
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Next in funnel */}
      {nextProduct && (
        <section className="py-14 bg-linen border-t border-border">
          <div className="container">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink/30 mb-2 block">
                  Next Step in the Funnel
                </span>
                <h3 className="text-2xl text-ink mb-1" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}>
                  {nextProduct.name}
                </h3>
                <p className="text-sm text-ink/55">{nextProduct.tagline}</p>
              </div>
              <Link href={`/products/${nextProduct.slug}`} className="flex-shrink-0 inline-flex items-center gap-2 border border-border text-ink/60 font-medium px-5 py-2.5 rounded-sm hover:border-forest hover:text-forest transition-all text-sm">
                View Product <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Funnel context */}
      <section className="py-14 border-t border-border">
        <div className="container">
          <p className="text-[10px] font-mono uppercase tracking-widest text-ink/30 mb-6">Where This Fits in the Product Funnel</p>
          <div className="flex flex-col sm:flex-row gap-3">
            {FUNNEL_LOGIC.map((step) => {
              const isCurrent = step.product === product.name;
              return (
                <div
                  key={step.step}
                  className={`flex-1 border rounded-sm p-4 transition-all ${
                    isCurrent
                      ? "border-forest bg-sage-light"
                      : "border-border bg-white"
                  }`}
                >
                  <span className="font-mono text-[9px] text-ink/30 uppercase tracking-widest block mb-1">0{step.step}</span>
                  <p className={`text-sm font-medium mb-1 ${isCurrent ? "text-forest" : "text-ink"}`}>
                    {step.product}
                  </p>
                  <p className="text-xs text-ink/45">{step.role}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
