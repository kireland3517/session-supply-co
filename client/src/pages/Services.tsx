import { Link } from "wouter";
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  FileText,
  ChevronRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CONSULTING_SERVICES = [
  {
    id: "readiness",
    title: "Organizational Readiness Assessment",
    description:
      "Evaluates culture, role clarity, supervisor capacity, and policy infrastructure before or after peer hiring. Produces a written assessment with prioritized recommendations.",
    barrier: "No recovery-oriented culture · No implementation framework",
  },
  {
    id: "roadmap",
    title: "PRSS Integration Roadmap",
    description:
      "Builds a phased implementation plan with clear milestones, role definitions, referral pathways, and onboarding protocols. Designed to be handed off to program staff.",
    barrier: "No implementation framework · No referral pathways",
  },
  {
    id: "supervisor",
    title: "Supervisor Preparation Consulting",
    description:
      "Prepares non-peer supervisors to support, evaluate, and retain peer staff. Addresses the single most cited fixable gap across all research.",
    barrier: "Supervisors not prepared · High early burnout rate",
  },
  {
    id: "jobdesc",
    title: "Job Description & Scope-of-Practice Development",
    description:
      "Creates compliant, evidence-based job descriptions and scope boundaries. Reduces role confusion and cooptation before it starts.",
    barrier: "Unclear job descriptions · Role cooptation",
  },
  {
    id: "referral",
    title: "Referral Pathway Development",
    description:
      "Maps internal referral workflows so peers receive appropriate, timely referrals. Addresses the idle-peer problem that accelerates burnout.",
    barrier: "No referral pathways · Peers idle or misassigned",
  },
  {
    id: "fqhc",
    title: "FQHC & Primary Care Integration",
    description:
      "Specialty track for medical settings integrating peers into clinical workflows. Addresses the specific documentation, supervision, and culture barriers in primary care.",
    barrier: "FQHC integration barriers · Medicaid billing gaps",
  },
  {
    id: "billing",
    title: "Billing Infrastructure Consulting",
    description:
      "Structures peer roles and documentation for Medicaid reimbursement in Virginia and Maryland. Recovers revenue that organizations are currently leaving on the table.",
    barrier: "Medicaid billing gaps · Documentation failures",
  },
];

const CEU_TRAININGS = [
  {
    title: "Supervising Peer Support Specialists",
    audience: "For non-peer supervisors",
    description:
      "The single most cited fixable gap across all research. Gives supervisors a framework for supporting, evaluating, and retaining peer staff without undermining the model.",
    status: "In development",
  },
  {
    title: "Working Alongside Peers",
    audience: "For clinical staff",
    description:
      "Addresses cooptation, role confusion, and collaboration barriers. Designed for the clinical team members who work alongside peer specialists daily.",
    status: "In development",
  },
  {
    title: "Boundary Maintenance & Scope of Practice",
    audience: "For peer specialists",
    description:
      "Covers the specific boundary and scope challenges peer specialists face — including dual relationships, disclosure decisions, and scope drift.",
    status: "In development",
  },
  {
    title: "Burnout Prevention for Peer Specialists",
    audience: "For peer specialists",
    description:
      "Addresses the 42% considering-leaving statistic. Evidence-based strategies for sustainable peer work, including organizational and individual factors.",
    status: "In development",
  },
  {
    title: "Recovery-Oriented Systems for Behavioral Health Leaders",
    audience: "For program leadership",
    description:
      "Equips leaders to build and sustain a recovery-oriented organizational culture — the prerequisite for effective peer integration.",
    status: "In development",
  },
  {
    title: "Integrating Peer Services in Primary Care & FQHCs",
    audience: "For FQHC and primary care teams",
    description:
      "Specialty training for the unique barriers in medical settings: clinical workflow integration, documentation for Medicaid, and peer role definition in primary care.",
    status: "In development",
  },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "30 minutes. We talk about where your program is, what the research says about your specific barriers, and whether there's a fit.",
  },
  {
    num: "02",
    title: "Assessment",
    desc: "We evaluate your organization against the documented barrier clusters. This produces a written report with prioritized findings.",
  },
  {
    num: "03",
    title: "Engagement Design",
    desc: "We scope a time-limited engagement tied to specific deliverables. No open-ended retainers without clear outcomes.",
  },
  {
    num: "04",
    title: "Implementation",
    desc: "We do the work. Deliverables are handed off in formats your team can actually use — not slide decks that sit on a shelf.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page Header */}
      <section className="pt-28 pb-16 bg-ink">
        <div className="container">
          <span className="text-[10px] font-mono uppercase tracking-widest text-sage mb-4 block">
            How We Work
          </span>
          <h1
            className="text-5xl md:text-6xl text-white mb-5 leading-tight max-w-3xl"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Services derived from research, not opinion.
          </h1>
          <p className="text-base text-white/50 max-w-2xl leading-relaxed mb-8">
            Every service is mapped to a specific, documented barrier from the peer integration research. We don't sell philosophy. We sell operational fixes for problems that have been studied, named, and replicated across multiple states and settings.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-sage text-white font-medium px-6 py-3 rounded-sm hover:bg-sage/90 transition-all"
            >
              Schedule a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 font-medium px-6 py-3 rounded-sm hover:border-white/40 hover:text-white transition-all"
            >
              Read the research foundation
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-20 bg-linen border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="flex flex-col gap-3">
                <span className="font-mono text-[10px] text-ink/30 uppercase tracking-widest">
                  Step {step.num}
                </span>
                <h3
                  className="text-xl text-ink"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream 1: Consulting */}
      <section id="consulting" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="flex items-start gap-5 mb-12 pb-6 border-b-2 border-ink">
            <span className="font-mono text-xs text-ink/30 pt-1">01</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-sage-light flex items-center justify-center">
                  <Users className="w-4 h-4 text-forest" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  Stream 01
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl text-ink mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Organizational Consulting
              </h2>
              <p className="text-sm text-ink/50 max-w-2xl leading-relaxed">
                Direct consulting engagements with behavioral health organizations, FQHCs, and primary care practices. Engagements are structured, time-limited, and tied to specific deliverables. Primary buyers are clinical directors, program directors, and executive directors.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CONSULTING_SERVICES.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white border border-border rounded-sm p-6 flex flex-col gap-3 scroll-mt-24 hover:shadow-sm transition-all"
              >
                <h3
                  className="text-xl text-ink"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed flex-1">{service.description}</p>
                <div className="pt-3 border-t border-border">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30">
                    Addresses: {service.barrier}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-linen border border-border rounded-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p
                className="text-xl text-ink mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Pricing is project-based.
              </p>
              <p className="text-sm text-ink/50">
                Engagements are scoped after a discovery call. No hourly billing. No open-ended retainers without clear outcomes.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-forest text-white font-medium px-5 py-2.5 rounded-sm hover:bg-forest/90 transition-all text-sm"
            >
              Start with a call <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stream 2: CEU Training */}
      <section id="ceu" className="py-20 md:py-28 bg-linen scroll-mt-20">
        <div className="container">
          <div className="flex items-start gap-5 mb-12 pb-6 border-b-2 border-ink">
            <span className="font-mono text-xs text-ink/30 pt-1">02</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-sage-light flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-forest" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  Stream 02
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl text-ink mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                CEU-Approved Training
              </h2>
              <p className="text-sm text-ink/50 max-w-2xl leading-relaxed">
                Six training topics identified from research as the highest-need, lowest-supply skill gaps in the field. CEU approval pipeline is 60–120 days and runs parallel to consulting launch. Available per-seat or as site licenses.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CEU_TRAININGS.map((training, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-sm p-6 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink/30">
                    {training.audience}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-clay/70 bg-clay/8 px-2 py-0.5 rounded-sm flex-shrink-0">
                    {training.status}
                  </span>
                </div>
                <h3
                  className="text-lg text-ink leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {training.title}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed flex-1">{training.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-ink rounded-sm p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p
                className="text-xl text-white mb-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                CEU approval is in progress.
              </p>
              <p className="text-sm text-white/50">
                Join the waitlist to be notified when trainings are available for your organization.
              </p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-sage text-white font-medium px-5 py-2.5 rounded-sm hover:bg-sage/90 transition-all text-sm"
            >
              Join the waitlist <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stream 3: Digital Products */}
      <section id="products" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="flex items-start gap-5 mb-12 pb-6 border-b-2 border-ink">
            <span className="font-mono text-xs text-ink/30 pt-1">03</span>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-sm bg-sage-light flex items-center justify-center">
                  <FileText className="w-4 h-4 text-forest" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink/40">
                  Stream 03
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl text-ink mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Digital Tools & Resources
              </h2>
              <p className="text-sm text-ink/50 max-w-2xl leading-relaxed">
                Downloadable guides, templates, and toolkits for organizations not yet ready for consulting — or buyers who need an immediate operational fix. Organized across four buyer layers: peer specialists, coordinators, billing staff, and program leadership.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              {
                label: "Immediate value",
                title: "Lower barrier to entry",
                desc: "Products start at $17. Buyers who can't commit to consulting can still get an operational fix today.",
              },
              {
                label: "Funnel logic",
                title: "Products lead to consulting",
                desc: "An org leader buys the decision framework. They realize they need help. They hire us. Each product feeds the next.",
              },
              {
                label: "Standalone revenue",
                title: "No pipeline required",
                desc: "Digital products generate revenue without a consulting pipeline. Two products are live now. 14 more are in development.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-linen border border-border rounded-sm p-6">
                <p className="font-mono text-[9px] uppercase tracking-widest text-ink/30 mb-3">{item.label}</p>
                <h3
                  className="text-xl text-ink mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-ink/55 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded-sm hover:bg-forest/90 transition-all text-sm"
          >
            Browse all tools & resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 md:py-20 bg-linen border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
                Target Market
              </span>
              <h2
                className="text-3xl md:text-4xl text-ink mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Who we work with.
              </h2>
              <p className="text-sm text-ink/55 leading-relaxed mb-6">
                Primary buyers are decision-makers with budget authority who are close enough to peer integration problems to feel them directly. They are not buying philosophy. They are buying operational fixes.
              </p>
              <ul className="space-y-2.5">
                {[
                  "Clinical directors and program directors at behavioral health organizations",
                  "Executive directors at community mental health centers and recovery community organizations",
                  "Medical directors and practice managers at FQHCs",
                  "Integration leads at primary care practices adding behavioral health services",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink/65">
                    <CheckCircle2 className="w-4 h-4 text-sage flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              {[
                { org: "Behavioral health organizations", detail: "Community mental health centers, substance use treatment programs, recovery community organizations" },
                { org: "Federally Qualified Health Centers (FQHCs)", detail: "Integrating peer services into medical workflows" },
                { org: "Primary care practices", detail: "With behavioral health integration mandates or grants" },
                { org: "Hospital systems", detail: "With ED-based peer programs" },
                { org: "Criminal justice and reentry programs", detail: "Using peer support in reentry contexts" },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-border rounded-sm px-5 py-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-ink">{item.org}</p>
                    <p className="text-xs text-ink/45 mt-0.5">{item.detail}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-ink/20 flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-forest">
        <div className="container max-w-2xl text-center">
          <h2
            className="text-4xl md:text-5xl text-white mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            The workforce is ready.
            <br />
            Is your organization?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Start with a 30-minute discovery call. No pitch. Just a conversation about where your program is and what the research says about your specific barriers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-forest font-medium px-7 py-3.5 rounded-sm hover:bg-white/90 transition-all"
          >
            Schedule a Discovery Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
