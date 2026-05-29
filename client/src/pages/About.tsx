import { Link } from "wouter";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/about-hero-He5PqVXoP2vmHpZ9NuQzfH.webp";

const RESEARCH_PILLARS = [
  {
    num: "01",
    title: "Peer Specialist Supervision",
    desc: "What supervisors need to know, and why most don't have it. The single most cited fixable gap across all research.",
  },
  {
    num: "02",
    title: "Role Clarity & Scope of Practice",
    desc: "How unclear job descriptions and scope boundaries create cooptation, friction, and early burnout.",
  },
  {
    num: "03",
    title: "Workforce Retention & Burnout",
    desc: "Why 42% of peer specialists consider leaving within the first year — and what organizations can do about it.",
  },
  {
    num: "04",
    title: "FQHC & Primary Care Integration",
    desc: "The specific barriers in medical settings: clinical workflow integration, Medicaid documentation, and peer role definition.",
  },
  {
    num: "05",
    title: "Organizational Readiness",
    desc: "The distinction between peer presence and peer integration — and why organizations can employ peer specialists and still fail at integration entirely.",
  },
];

const CREDENTIALS = [
  "Certified Peer Recovery Specialist (CPRS), licensed in Virginia and Maryland",
  "Direct field experience in peer support and recovery systems",
  "Existing relationships with organizations in the target market",
  "Five structured academic literature reviews covering the core barriers to peer integration",
  "Services derived from peer-reviewed research, not opinion",
];

const DIFFERENTIATORS = [
  {
    title: "Specialist, not generalist",
    desc: "Most peer support consulting comes from large HR firms or training-only vendors. We specialize in peer integration infrastructure — nothing else.",
  },
  {
    title: "Research-grounded",
    desc: "Every service is mapped to a specific, documented barrier from the peer integration literature. That's a credibility argument that holds up with clinical directors and grant reviewers.",
  },
  {
    title: "Lived experience + credentials",
    desc: "The CPRS credential and direct field experience are not replicable by generalist consultants. We understand the work from inside the room.",
  },
  {
    title: "Implementation, not just assessment",
    desc: "We don't produce slide decks that sit on a shelf. Deliverables are handed off in formats your team can actually use.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end pb-16 border-b border-border">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
                About
              </span>
              <h1
                className="text-5xl md:text-6xl text-ink mb-5 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                The organizational infrastructure partner for peer integration.
              </h1>
              <p className="text-base text-ink/55 leading-relaxed mb-6">
                Recovery Systems Group is an evidence-based consulting firm specializing in the integration of peer recovery support services into behavioral health organizations, FQHCs, and primary care practices.
              </p>
              <p
                className="text-xl text-ink/80 italic leading-snug border-l-2 border-forest pl-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                "Organizations do not fail peer support. They fail to prepare for it."
              </p>
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-linen">
              <img
                src={ABOUT_IMG}
                alt="Recovery Systems Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Thesis */}
      <section className="py-20 md:py-28 bg-linen">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
                The Thesis
              </span>
              <h2
                className="text-4xl md:text-5xl text-ink mb-6 leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Peer support works. Most organizations aren't ready for it.
              </h2>
              <p className="text-base text-ink/60 leading-relaxed mb-5">
                The Medicaid reimbursement expansion created a financial incentive to hire peer specialists. Organizations hired them. The organizational infrastructure — supervision models, role clarity, referral pathways, recovery-oriented culture — did not scale with the workforce.
              </p>
              <p className="text-base text-ink/60 leading-relaxed mb-5">
                The research is consistent across every study, every setting, every state. The same five barrier clusters appear. The same outcomes follow. Peer specialists burn out. Programs underperform. Organizations blame the model.
              </p>
              <p className="text-base text-ink/60 leading-relaxed mb-8">
                The model isn't the problem. The preparation is.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 text-forest text-sm font-medium hover:gap-2 transition-all"
              >
                See how we address each barrier <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-4">
              {RESEARCH_PILLARS.map((pillar) => (
                <div
                  key={pillar.num}
                  className="bg-white border border-border rounded-sm p-5 flex gap-4"
                >
                  <span className="font-mono text-[10px] text-ink/25 pt-0.5 flex-shrink-0">
                    {pillar.num}
                  </span>
                  <div>
                    <h3
                      className="text-base text-ink mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-ink/55 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
              The Founder
            </span>
            <h2
              className="text-4xl md:text-5xl text-ink mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              The credential set that makes this credible.
            </h2>
            <p className="text-base text-ink/60 leading-relaxed mb-6">
              Recovery Systems Group was founded by a Certified Peer Recovery Specialist (CPRS) licensed in Virginia and Maryland. The combination of lived experience, professional certification, field relationships, and an evidence-based methodology is the credential set that makes this business credible to clinical directors, program directors, and grant reviewers.
            </p>
            <p className="text-base text-ink/60 leading-relaxed mb-8">
              The research foundation — five structured academic literature reviews — is not a marketing claim. It's the actual basis for every service we offer. Buyers can ask what the research says about any specific barrier we address. We can tell them.
            </p>
            <ul className="space-y-3 mb-8">
              {CREDENTIALS.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink/65">
                  <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="container">
          <div className="mb-12">
            <span className="text-[10px] font-mono uppercase tracking-widest text-sage mb-4 block">
              Competitive Position
            </span>
            <h2
              className="text-4xl md:text-5xl text-white mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
            >
              What we are. What we aren't.
            </h2>
            <p className="text-sm text-white/45 max-w-xl leading-relaxed">
              Most peer support consulting in the market comes from large generalist HR firms, state-level technical assistance providers with limited bandwidth, or training-only vendors who don't offer implementation support. We occupy a specific position none of those cover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-sm p-6 hover:bg-white/8 transition-colors"
              >
                <h3
                  className="text-xl text-white mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {d.title}
                </h3>
                <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-forest">
        <div className="container max-w-2xl text-center">
          <h2
            className="text-4xl md:text-5xl text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Ready to talk?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Start with a 30-minute discovery call. No pitch — just a conversation about where your program is.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-forest font-medium px-6 py-3 rounded-sm hover:bg-white/90 transition-all"
            >
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/80 font-medium px-6 py-3 rounded-sm hover:border-white/50 hover:text-white transition-all"
            >
              See All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
