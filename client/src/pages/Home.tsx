import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  BookOpen,
  Users,
  FileText,
  DollarSign,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, LAYERS, ECOSYSTEM_FLOW } from "@/lib/data";

const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/hero-main-hMaco5dy9HH8kgJnr57oRB.webp";

const RESEARCH_FINDINGS = [
  {
    stat: "42%",
    label: "of peer specialists report considering leaving within the first year",
    source: "Workforce retention research",
  },
  {
    stat: "5",
    label: "consistent barrier clusters appear across every study, every setting, every state",
    source: "Five structured literature reviews",
  },
  {
    stat: "0",
    label: "organizations in the research had a structured peer onboarding protocol at hire",
    source: "Onboarding and integration studies",
  },
];

const BARRIERS = [
  "Organizations hire peer specialists before establishing clear role definitions",
  "Supervisors are not trained to support peer workers and often undermine the model unintentionally",
  "Non-peer clinical staff do not understand the peer role, creating friction and cooptation",
  "There are no referral pathways into peer services, leaving peers idle or misassigned",
  "The first 90 days post-hire carry the highest burnout risk, and no structured onboarding exists",
];

const SERVICES = [
  {
    id: "consulting",
    label: "Stream 01",
    title: "Organizational Consulting",
    description:
      "Direct consulting engagements structured around specific, solvable problems. Readiness assessments, integration roadmaps, supervisor preparation, job description development, referral pathway design, and billing infrastructure.",
    cta: "See consulting services",
    href: "/services",
    icon: Users,
  },
  {
    id: "training",
    label: "Stream 02",
    title: "CEU-Approved Training",
    description:
      "Six training topics derived from the highest-need, lowest-supply skill gaps in the field. Supervising peer specialists, working alongside peers, boundary maintenance, burnout prevention, recovery-oriented systems, and FQHC integration.",
    cta: "View training topics",
    href: "/services#ceu",
    icon: BookOpen,
  },
  {
    id: "products",
    label: "Stream 03",
    title: "Digital Tools & Resources",
    description:
      "Downloadable guides, templates, and toolkits for organizations not yet ready for consulting. Serves as a funnel entry point and standalone revenue. Organized across four buyer layers.",
    cta: "Browse tools",
    href: "/shop",
    icon: FileText,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "We had peer specialists on staff for two years before we realized we had never actually integrated them. The readiness assessment was the first time anyone had named what was wrong.",
    name: "Clinical Director",
    org: "Community Mental Health Center, Virginia",
  },
  {
    quote:
      "Our supervisors wanted to support the peer staff. They just didn't know how. The training gave them a framework they could actually use.",
    name: "Program Director",
    org: "Substance Use Treatment Program, Maryland",
  },
  {
    quote:
      "The billing guide paid for itself in the first month. We had been leaving Medicaid reimbursement on the table because nobody had mapped the documentation requirements.",
    name: "Practice Manager",
    org: "FQHC, Maryland",
  },
];

export default function Home() {
  const featured = PRODUCTS.filter((p) => p.featured).slice(0, 3);
  const layerIcons = [Users, FileText, DollarSign, TrendingUp];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-16 md:pt-[72px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[92vh]">
          {/* Left: Text */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-28 max-w-2xl mx-auto lg:mx-0 lg:max-w-none">
            <div className="inline-flex items-center gap-2 border border-border text-ink/50 text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-sm mb-8 self-start">
              Evidence-Based Consulting · VA &amp; MD · CPRS-Founded
            </div>

            {/* Thesis sequence */}
            <h1
              className="text-5xl md:text-6xl lg:text-[64px] text-ink leading-[1.05] mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Peer support works.
              <br />
              <em className="text-forest">Most organizations</em>
              <br />
              aren't ready for it.
            </h1>

            <p className="text-base md:text-lg text-ink/55 leading-relaxed mb-4 max-w-lg">
              Recovery Systems Group provides the organizational infrastructure that makes peer integration actually work — for behavioral health organizations, FQHCs, and primary care practices.
            </p>
            <p className="text-sm text-ink/40 leading-relaxed mb-10 max-w-lg italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Grounded in five structured literature reviews covering peer specialist supervision, role clarity, scope of practice, workforce retention, burnout, and FQHC integration.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded-sm transition-all hover:bg-forest/90"
              >
                See How We Work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 border border-border text-ink/60 font-medium px-6 py-3 rounded-sm transition-all hover:border-forest hover:text-forest"
              >
                <Download className="w-4 h-4" />
                Free Resources
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Consulting, training, and digital tools — one firm",
                "Licensed in Virginia and Maryland",
                "Services derived directly from peer-reviewed research",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-ink/50">
                  <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-linen">
              <img
                src={HERO_IMG}
                alt="Peer support program planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
            </div>
            {/* Floating quote card */}
            <div className="absolute bottom-12 left-8 bg-white rounded-lg shadow-lg border border-border p-5 max-w-[260px]">
              <p
                className="text-sm text-ink/80 leading-snug italic mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Peer support doesn't fail organizations. Organizations fail peer specialists."
              </p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-ink/40">
                Recovery Systems Group
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-sage mb-4 block">
                What the Research Shows
              </span>
              <h2
                className="text-4xl md:text-5xl text-white mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                The same five barriers appear in every study. Every setting. Every state.
              </h2>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
                Five structured literature reviews covering peer specialist supervision, role clarity, scope of practice, workforce retention, burnout, and FQHC integration produced consistent findings. The problem is documented, widespread, and not going away.
              </p>
              <ul className="space-y-3 mb-10">
                {BARRIERS.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="font-mono text-[9px] text-sage mt-1 flex-shrink-0">0{i + 1}</span>
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sage text-sm font-medium hover:text-white transition-colors"
              >
                Read the research foundation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Research stats */}
            <div className="space-y-4">
              {RESEARCH_FINDINGS.map((f, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/8 transition-colors"
                >
                  <div
                    className="text-5xl text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {f.stat}
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed mb-2">{f.label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-white/25">{f.source}</p>
                </div>
              ))}

              <div className="bg-sage/15 border border-sage/25 rounded-lg p-6">
                <p
                  className="text-white text-lg italic leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "The workforce is ready. Is your organization?"
                </p>
                <Link
                  href="/services#readiness"
                  className="inline-flex items-center gap-1.5 text-sage text-xs font-mono uppercase tracking-wider mt-4 hover:text-white transition-colors"
                >
                  Take the readiness assessment <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE STREAMS ── */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container">
          <div className="mb-14">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">
              How We Work
            </span>
            <h2
              className="text-4xl md:text-5xl text-ink mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Three ways to work with us.
            </h2>
            <p className="text-sm text-ink/50 max-w-xl leading-relaxed">
              Every service is derived from the same research base and mapped to specific, documented barriers. We don't sell philosophy. We sell operational fixes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.id}
                  className="bg-white border border-border rounded-sm p-7 flex flex-col gap-4 hover:shadow-md transition-all"
                >
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-3">{s.label}</p>
                    <div className="w-9 h-9 rounded-sm bg-sage-light flex items-center justify-center mb-4">
                      <Icon className="w-4.5 h-4.5 text-forest" />
                    </div>
                    <h3
                      className="text-2xl text-ink mb-3 leading-snug"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-sm text-ink/55 leading-relaxed flex-1">{s.description}</p>
                  </div>
                  <Link
                    href={s.href}
                    className="inline-flex items-center gap-1.5 text-forest text-sm font-medium mt-auto hover:gap-2 transition-all"
                  >
                    {s.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED TOOLS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">
                Digital Tools
              </span>
              <h2
                className="text-4xl md:text-5xl text-ink"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Not ready for consulting?
                <br />
                <span className="text-forest">Start here.</span>
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest/80 transition-colors self-start md:self-auto"
            >
              View all {PRODUCTS.length} products <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ECOSYSTEM LAYERS ── */}
      <section className="py-20 md:py-28 bg-linen border-y border-border">
        <div className="container">
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">
              Product Ecosystem
            </span>
            <h2
              className="text-4xl md:text-5xl text-ink mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              Built for every role in the program.
            </h2>
            <p className="text-sm text-ink/50 max-w-xl leading-relaxed">
              An org leader buys the decision framework. They realize they need help. They hire us to consult. Their supervisors attend our CEU training. Their peer specialists buy the documentation templates. Each product feeds the next.
            </p>
          </div>

          {/* Ecosystem flow */}
          <div className="flex flex-wrap items-center gap-2 mb-10">
            {ECOSYSTEM_FLOW.map((step, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="font-mono text-[10px] px-3 py-1.5 bg-white border border-border rounded-sm text-ink/50 whitespace-nowrap">
                  {step}
                </span>
                {i < ECOSYSTEM_FLOW.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-ink/25 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Layer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LAYERS.map((layer, i) => {
              const Icon = layerIcons[i];
              const layerProducts = PRODUCTS.filter((p) => p.layer === layer.id);
              const liveCount = layerProducts.filter((p) => p.live).length;
              return (
                <Link key={layer.id} href={`/shop#layer${layer.id}`}>
                  <div className="bg-white border border-border rounded-sm p-5 hover:shadow-md hover:-translate-y-0.5 transition-all group h-full flex flex-col">
                    <div className="w-8 h-8 rounded-sm bg-sage-light flex items-center justify-center mb-4">
                      <Icon className="w-4 h-4 text-forest" />
                    </div>
                    <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-1">
                      Layer {layer.id}
                    </p>
                    <h3
                      className="text-lg text-ink mb-2"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {layer.shortLabel}
                    </h3>
                    <p className="text-xs text-ink/50 leading-relaxed mb-4 flex-1">
                      {layer.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-ink/30">
                        {layerProducts.length} products
                      </span>
                      {liveCount > 0 && (
                        <span className="font-mono text-[9px] text-forest">
                          {liveCount} live
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="mb-14">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">
              From the Field
            </span>
            <h2
              className="text-4xl md:text-5xl text-ink"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              What organizations say.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-linen border border-border rounded-sm p-7 flex flex-col gap-5"
              >
                <blockquote
                  className="text-lg text-ink/80 leading-relaxed italic flex-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "{t.quote}"
                </blockquote>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink/45 mt-0.5">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTING CTA ── */}
      <section className="py-20 md:py-24 bg-forest">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-4 block">
                Start the Conversation
              </span>
              <h2
                className="text-4xl md:text-5xl text-white mb-4 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Most engagements start with a 30-minute call.
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-md">
                No pitch. Just a conversation about where your program is, what the research says about your specific barriers, and whether there's a fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-forest font-medium px-6 py-3 rounded-sm transition-all hover:bg-white/90"
                >
                  Schedule a Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 font-medium px-6 py-3 rounded-sm transition-all hover:border-white/50 hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  Free Resources First
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: "Organizational Readiness Assessment", desc: "Before or after peer hiring" },
                { label: "PRSS Integration Roadmap", desc: "Phased implementation with clear milestones" },
                { label: "Supervisor Preparation", desc: "For non-peer supervisors" },
                { label: "Billing Infrastructure Consulting", desc: "Medicaid reimbursement in VA and MD" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-white/8 border border-white/10 rounded-sm px-4 py-3"
                >
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-white/45 text-xs mt-0.5">{item.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/30 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
