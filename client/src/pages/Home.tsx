import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Download, Star, Leaf, Clock, Shield, Zap, Users, FileText, DollarSign, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, TESTIMONIALS, STATS, LAYERS, ECOSYSTEM_FLOW } from "@/lib/data";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/hero-main-hMaco5dy9HH8kgJnr57oRB.webp";

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 3);
  const layerIcons = [Users, FileText, DollarSign, TrendingUp];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-16 md:pt-18">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[88vh] items-center">
            {/* Left: Text */}
            <div className="py-16 lg:py-24 lg:pr-12">
              <div className="inline-flex items-center gap-2 bg-sage-light text-forest text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
                <Leaf className="w-3 h-3" />
                For Peer Recovery Specialists
              </div>
              <h1
                className="heading-display text-5xl md:text-6xl lg:text-7xl text-ink mb-6 leading-[1.05]"
              >
                Session materials,
                <br />
                <em className="text-forest not-italic">ready when you are.</em>
              </h1>
              <p className="text-base md:text-lg text-ink/60 leading-relaxed mb-8 max-w-md">
                Structured session plans, facilitator toolkits, and downloadable resources built specifically for peer support specialists and group facilitators.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded transition-all hover:bg-forest/90"
                >
                  Browse All Products
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 border border-border text-ink/70 font-medium px-6 py-3 rounded transition-all hover:border-forest hover:text-forest"
                >
                  <Download className="w-4 h-4" />
                  Free Resources
                </Link>
              </div>

              <div className="flex flex-col gap-2">
                {["Instant PDF download", "Built for peer support contexts", "Used by 2,400+ facilitators"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-ink/60">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block relative h-full min-h-[600px]">
              <div className="absolute inset-0 bg-linen">
                <img
                  src={HERO_IMG}
                  alt="Session planning workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/5" />
              </div>
              {/* Floating stat card */}
              <div className="absolute bottom-10 left-6 bg-white rounded-lg shadow-lg border border-border p-4 max-w-[200px]">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-clay text-clay" />)}
                </div>
                <p className="text-xs text-ink/70 leading-snug">"Ready in 10 minutes. Exactly what peer specialists need."</p>
                <p className="text-xs font-semibold text-ink mt-1.5">Darnell W., CPRS</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-linen border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
            {STATS.map((stat) => (
              <div key={stat.label} className="py-8 px-6 text-center">
                <div
                  className="text-3xl md:text-4xl font-semibold text-forest mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-ink/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS THIS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-4 block">What We Offer</span>
              <h2 className="heading-display text-4xl md:text-5xl text-ink mb-6">
                Everything you need to run a great session.
              </h2>
              <p className="text-base text-ink/60 leading-relaxed mb-8">
                Session Supply Co. creates structured, evidence-informed digital resources for peer recovery specialists and group facilitators. Every product is designed to reduce prep time and increase session quality — so you can focus on the people in the room.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Save Prep Time", desc: "Open a plan and be ready in minutes, not hours." },
                  { icon: Shield, title: "Evidence-Informed", desc: "Grounded in peer support best practices." },
                  { icon: Zap, title: "Instant Access", desc: "Download immediately after purchase." },
                  { icon: Leaf, title: "Peer-Centered", desc: "Written by and for peer support professionals." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-3">
                    <div className="w-8 h-8 rounded-md bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-forest" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink mb-0.5">{title}</div>
                      <div className="text-sm text-ink/55">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-linen">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/product-bundle-LeoWuer3eBvSsYYV58CRvo.webp"
                  alt="Peer support workbook bundle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-forest text-white rounded-lg p-4 shadow-lg">
                <div className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>180+</div>
                <div className="text-xs text-white/70">Pages of resources</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Products</span>
              <h2 className="heading-display text-4xl md:text-5xl text-ink">
                Ready-to-use resources
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest/80 transition-colors self-start md:self-auto"
            >
              View all products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">Testimonials</span>
            <h2 className="heading-display text-4xl md:text-5xl text-ink">
              Trusted by facilitators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-white border border-border rounded-lg p-7 flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-clay text-clay" />)}
                </div>
                <blockquote
                  className="text-lg text-ink/80 leading-relaxed italic flex-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink/50">{t.role} · {t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM LAYERS ── */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-sage mb-3 block">Product Ecosystem</span>
            <h2
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Built for every role in the program.
            </h2>
            <p className="text-white/50 text-sm max-w-xl leading-relaxed">
              Every product serves the same peer support program — but the buyer at each layer is different. Each product feeds the next.
            </p>
          </div>

          {/* Ecosystem flow */}
          <div className="flex flex-wrap items-center gap-2 mb-12">
            {ECOSYSTEM_FLOW.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-mono text-[10px] px-3 py-1.5 bg-white/8 rounded text-white/60 whitespace-nowrap">
                  {step}
                </span>
                {i < ECOSYSTEM_FLOW.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-sage flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Layer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAYERS.map((layer, i) => {
              const Icon = layerIcons[i];
              const layerProducts = PRODUCTS.filter(p => p.layer === layer.id);
              const liveCount = layerProducts.filter(p => p.live).length;
              return (
                <Link key={layer.id} href={`/shop#layer${layer.id}`}>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-5 hover:bg-white/8 hover:border-white/20 transition-all group h-full">
                    <div className="w-8 h-8 rounded-md bg-sage/20 flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-sage" />
                    </div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mb-1">Layer {layer.id}</p>
                    <h3
                      className="text-lg text-white mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {layer.shortLabel}
                    </h3>
                    <p className="text-xs text-white/50 leading-relaxed mb-4">{layer.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-white/30">{layerProducts.length} products</span>
                      {liveCount > 0 && (
                        <span className="font-mono text-[9px] text-sage">{liveCount} live</span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FREE RESOURCES CTA ── */}
      <section className="py-20 md:py-24 bg-forest">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Leaf className="w-8 h-8 text-white/30 mx-auto mb-5" />
            <h2
              className="text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Start with something free.
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Download a sample session plan, group agreement template, and icebreaker cards — no purchase required.
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 bg-white text-forest font-medium px-6 py-3 rounded transition-all hover:bg-white/90"
            >
              <Download className="w-4 h-4" />
              Browse Free Resources
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
