// Recovery Systems Group — Product Line
// Three org-buyer products organized by organizational problem, not buyer role.

export type ProductStatus = "available" | "coming-soon" | "placeholder";

export interface ProductModule {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  status: ProductStatus;
  price: string;
  priceNumeric: number | null;
  audience: string;
  problem: string;
  solution: string;
  description: string;
  format: string;
  deliverables: string[];
  modules: ProductModule[];
  outcomes: string[];
  image: string;
  accentColor: string;
  featured: boolean;
  funnelPosition: 1 | 2 | 3; // 1 = entry, 2 = mid, 3 = deep
}

const SESSION_PLAN_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/product-session-plan-HVeNvvfS25AK7s4MmaP6SK.webp";
const TOOLKIT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/product-toolkit-WYxcmf7NF4UVFnhqjR7wXd.webp";
const BUNDLE_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/product-bundle-LeoWuer3eBvSsYYV58CRvo.webp";

export const PRODUCTS: Product[] = [
  {
    id: "recovery-ready-assessment",
    slug: "recovery-ready-assessment",
    name: "Recovery-Ready Workplace Assessment",
    tagline: "Find out if your organization is actually ready to employ peer specialists effectively.",
    status: "placeholder",
    price: "$97",
    priceNumeric: 97,
    audience: "Clinical directors, program directors, executive directors",
    problem: "Organizations hire peer specialists before they have the infrastructure to support them. The result is predictable: role confusion, burnout, underperformance, and turnover. Most organizations don't know what they're missing until a peer specialist leaves.",
    solution: "A structured diagnostic that evaluates your organization across five readiness domains — culture, role clarity, supervision, referral pathways, and billing infrastructure — and produces a prioritized gap report.",
    description: "The Recovery-Ready Workplace Assessment is a structured organizational diagnostic. You answer questions about your current state across five domains. You get a score, a gap analysis, and a prioritized list of what to fix first. It tells you whether you're ready to hire, whether you're ready to scale, or whether you need to fix the foundation before either.",
    format: "Interactive web tool — 15–20 minutes to complete, instant gap report",
    deliverables: [
      "Scored readiness profile across 5 domains",
      "Prioritized gap report with specific recommendations",
      "Benchmark comparison against research-documented standards",
      "Action checklist organized by urgency",
      "PDF export of your full report",
    ],
    modules: [
      { title: "Domain 1: Organizational Culture", description: "Recovery orientation, leadership buy-in, and peer specialist integration into the clinical team." },
      { title: "Domain 2: Role Clarity & Scope", description: "Job description quality, scope-of-practice boundaries, and cooptation risk." },
      { title: "Domain 3: Supervision Infrastructure", description: "Supervisor preparation, meeting structure, and peer-specific supervision competencies." },
      { title: "Domain 4: Referral Pathways", description: "How peers receive referrals, what happens when they don't, and idle-peer risk." },
      { title: "Domain 5: Billing & Documentation", description: "Medicaid documentation readiness, encounter record systems, and reimbursement capture." },
    ],
    outcomes: [
      "Know exactly where your gaps are before they become turnover",
      "Prioritized action list — not a generic checklist",
      "Evidence-based benchmarks from the peer integration research",
      "Entry point to consulting if you need implementation support",
    ],
    image: BUNDLE_IMG,
    accentColor: "clay",
    featured: true,
    funnelPosition: 1,
  },
  {
    id: "peer-supervisor-toolkit",
    slug: "peer-supervisor-toolkit",
    name: "Peer Supervisor Toolkit",
    tagline: "For the people supervising peer specialists who were never trained to do it.",
    status: "coming-soon",
    price: "$147",
    priceNumeric: 147,
    audience: "Program supervisors, clinical supervisors, team leads managing peer specialists",
    problem: "Supervisors of peer specialists are almost universally unprepared for the role. They were trained to supervise clinicians, not peer workers. The result is supervision that undermines the peer model, creates role confusion, and accelerates burnout — even when the supervisor has good intentions.",
    solution: "A practical toolkit that gives supervisors the frameworks, templates, and conversation guides they need to support peer specialists effectively — without requiring a full training program.",
    description: "The Peer Supervisor Toolkit is a working document set for supervisors who are managing peer specialists right now. It covers the specific competencies the research identifies as missing: how to supervise without clinicalizing, how to monitor for burnout without pathologizing, how to handle scope-of-practice issues, and how to run a supervision meeting that actually supports peer work.",
    format: "PDF toolkit + editable templates (Google Docs/Word)",
    deliverables: [
      "Peer Supervision Framework (12-page guide)",
      "Weekly supervision meeting template",
      "Burnout monitoring checklist (for supervisors, not peers)",
      "Scope-of-practice conversation guide",
      "Peer role orientation guide for clinical staff",
      "90-day check-in protocol for new peer hires",
    ],
    modules: [
      { title: "Understanding the Peer Role", description: "What makes peer support different from clinical services, and why standard clinical supervision undermines it." },
      { title: "Supervision Structure", description: "How to structure supervision meetings, what to cover, and how often — based on what the research says works." },
      { title: "Burnout Monitoring", description: "How to identify early burnout signals in peer specialists and what to do about them before they become turnover." },
      { title: "Scope & Boundary Management", description: "How to handle scope creep, cooptation, and dual-relationship issues without criminalizing the peer role." },
      { title: "Team Integration", description: "How to position peer specialists with the clinical team and reduce friction from non-peer staff." },
    ],
    outcomes: [
      "Supervisors who know what they're doing — not just well-meaning",
      "Reduced early turnover from supervision failures",
      "Consistent supervision structure across the program",
      "Peer specialists who feel supported, not managed",
    ],
    image: TOOLKIT_IMG,
    accentColor: "sage",
    featured: true,
    funnelPosition: 2,
  },
  {
    id: "peer-workforce-operating-system",
    slug: "peer-workforce-operating-system",
    name: "Peer Workforce Operating System",
    tagline: "The complete operational infrastructure for organizations that employ peer specialists.",
    status: "coming-soon",
    price: "$297",
    priceNumeric: 297,
    audience: "Program directors, clinical directors, operations leads at behavioral health organizations and FQHCs",
    problem: "Most organizations that employ peer specialists built their infrastructure ad hoc — a job description copied from another org, a supervision model borrowed from clinical staff, a documentation system that doesn't match Medicaid requirements. The result is a program that works despite its infrastructure, not because of it.",
    solution: "A complete, research-grounded operating system for peer specialist programs — SOPs, role definitions, onboarding protocols, supervision frameworks, documentation templates, and referral pathway tools. Built to be implemented, not just read.",
    description: "The Peer Workforce Operating System is the document set your program should have had before you hired your first peer specialist. It covers every operational layer: how to define the role, how to onboard the person, how to supervise the work, how to document for Medicaid, and how to build the referral pathways that make peer services actually reach clients. Every document is editable, evidence-grounded, and designed to be handed to your team.",
    format: "Complete document kit — PDF guides + editable templates (Google Docs/Word/Sheets)",
    deliverables: [
      "Peer Specialist Role Definition Framework",
      "Job description template (Medicaid-compliant)",
      "30/60/90-day onboarding protocol",
      "Standard Operating Procedures (SOPs) — 6 core processes",
      "Referral pathway design template",
      "Documentation templates (progress notes, encounter records, session logs)",
      "Medicaid billing readiness checklist",
      "Recovery-oriented culture self-assessment",
      "Staff orientation guide for non-peer clinical team",
    ],
    modules: [
      { title: "Role Definition & Job Description", description: "Evidence-based role boundaries, scope-of-practice framework, and a compliant job description template you can adapt." },
      { title: "Onboarding Protocol", description: "30/60/90-day onboarding structure that addresses the first-90-days burnout risk documented in the research." },
      { title: "Standard Operating Procedures", description: "Six core SOPs covering referral intake, session documentation, incident response, supervision, peer-to-peer handoffs, and program exit." },
      { title: "Documentation & Billing Infrastructure", description: "Templates and checklists for Medicaid-compliant documentation in Virginia and Maryland." },
      { title: "Referral Pathway Design", description: "Tools for mapping internal referral workflows so peers receive appropriate, timely referrals — and aren't left idle." },
      { title: "Team Integration", description: "Orientation materials for clinical staff who work alongside peer specialists." },
    ],
    outcomes: [
      "A program that runs on infrastructure, not institutional memory",
      "Reduced onboarding time and early turnover",
      "Medicaid-compliant documentation from day one",
      "Clear role boundaries that reduce cooptation and burnout",
      "A foundation that makes consulting and training more effective",
    ],
    image: SESSION_PLAN_IMG,
    accentColor: "forest",
    featured: true,
    funnelPosition: 3,
  },
];

export const FUNNEL_LOGIC = [
  {
    step: 1,
    product: "Recovery-Ready Workplace Assessment",
    slug: "recovery-ready-assessment",
    role: "Diagnose",
    desc: "Find out exactly where your gaps are. Takes 15 minutes. Produces a prioritized gap report.",
  },
  {
    step: 2,
    product: "Peer Supervisor Toolkit",
    slug: "peer-supervisor-toolkit",
    role: "Fix the supervision gap",
    desc: "The most common, most fixable failure point. Give your supervisors what they need.",
  },
  {
    step: 3,
    product: "Peer Workforce Operating System",
    slug: "peer-workforce-operating-system",
    role: "Build the infrastructure",
    desc: "The complete operational foundation. Implement once, run the program on it.",
  },
  {
    step: 4,
    product: "Consulting",
    slug: null,
    role: "Go deeper",
    desc: "When you need implementation support, custom work, or a partner to build alongside you.",
  },
];

export const FREE_RESOURCES = [
  {
    id: "readiness-checklist",
    title: "Organizational Readiness Checklist",
    description: "A 20-point checklist for assessing whether your organization is ready to hire peer specialists. Free preview of the full Assessment.",
    type: "PDF Checklist",
    gated: false,
    tags: ["readiness", "hiring", "leadership"],
  },
  {
    id: "supervisor-primer",
    title: "Supervising Peer Specialists: A Primer",
    description: "A 6-page introduction to peer-specific supervision — what's different, what the research says, and where most supervisors go wrong.",
    type: "PDF Guide",
    gated: false,
    tags: ["supervision", "training", "leadership"],
  },
  {
    id: "scope-of-practice",
    title: "Peer Specialist Scope of Practice Reference",
    description: "A one-page reference document covering scope boundaries, cooptation warning signs, and how to handle common scope questions.",
    type: "Reference Sheet",
    gated: false,
    tags: ["scope", "role clarity", "peer specialist"],
  },
  {
    id: "documentation-starter",
    title: "Medicaid Documentation Starter Kit",
    description: "Sample progress note format and encounter record template for peer specialists billing Medicaid in Virginia and Maryland.",
    type: "Template Kit",
    gated: true,
    tags: ["documentation", "Medicaid", "billing"],
  },
  {
    id: "burnout-signals",
    title: "Early Burnout Signals in Peer Specialists",
    description: "A research-grounded list of early burnout indicators specific to peer specialists, with supervisor response guidance.",
    type: "Reference Sheet",
    gated: true,
    tags: ["burnout", "supervision", "retention"],
  },
];
