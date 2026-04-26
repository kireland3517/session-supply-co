import { Link } from "wouter";
import { Leaf, Heart, BookOpen, Users, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ABOUT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663238387586/cXnAV7oZ5pE2hpYoSqpMuM/about-hero-He5PqVXoP2vmHpZ9NuQzfH.webp";

const VALUES = [
  {
    icon: Heart,
    title: "Peer-Centered by Design",
    description: "Every resource is built with the realities of peer support work in mind — the time constraints, the emotional labor, the need for structure without rigidity.",
  },
  {
    icon: BookOpen,
    title: "Evidence-Informed",
    description: "Our materials draw from motivational interviewing, trauma-informed care, and peer support best practices. Not trendy frameworks — proven approaches.",
  },
  {
    icon: Users,
    title: "Community-Driven",
    description: "We work with practicing peer specialists and facilitators to test and refine every product before it's published. Real feedback from real practitioners.",
  },
  {
    icon: Leaf,
    title: "Intentional & Calm",
    description: "We believe good tools should reduce stress, not add to it. Our design philosophy prioritizes clarity, calm, and ease of use above all else.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-0">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-20">
            <div>
              <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-4 block">Our Story</span>
              <h1 className="heading-display text-5xl md:text-6xl text-ink mb-6 leading-tight">
                Built for the people doing the work.
              </h1>
              <p className="text-base text-ink/60 leading-relaxed mb-5">
                Session Supply Co. was created out of a simple frustration: peer support specialists spend too much time preparing and not enough time supporting. The materials that exist are either too clinical, too generic, or scattered across a dozen different sources.
              </p>
              <p className="text-base text-ink/60 leading-relaxed mb-8">
                We set out to build a focused, high-quality library of session resources — structured enough to be immediately useful, flexible enough to fit any group context.
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded transition-all hover:bg-forest/90"
              >
                Browse Our Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[3/2] rounded-lg overflow-hidden">
                <img
                  src={ABOUT_IMG}
                  alt="Peer support specialist at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-sage/30 rounded-lg -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-forest">
        <div className="container max-w-3xl text-center">
          <Leaf className="w-8 h-8 text-white/30 mx-auto mb-6" />
          <blockquote
            className="text-3xl md:text-4xl text-white font-medium leading-relaxed italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            "Our mission is to give peer support specialists more time in the room and less time at the desk."
          </blockquote>
          <p className="text-white/50 text-sm mt-5">— Session Supply Co.</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-3 block">What We Stand For</span>
            <h2 className="heading-display text-4xl md:text-5xl text-ink">Our values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-5 p-7 rounded-lg border border-border bg-white hover:border-sage transition-colors">
                <div className="w-10 h-10 rounded-md bg-sage-light flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3
                    className="text-xl font-semibold text-ink mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-16 md:py-20 bg-linen border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-clay uppercase tracking-widest mb-4 block">Who We Serve</span>
              <h2 className="heading-display text-4xl text-ink mb-5">
                Designed for peer specialists, facilitators, and coordinators.
              </h2>
              <p className="text-base text-ink/60 leading-relaxed mb-6">
                Our products are built for the professionals who run peer support groups, facilitate recovery circles, and coordinate behavioral health programs. You're time-constrained, you're practical, and you need materials that work the first time you use them.
              </p>
              <div className="space-y-3">
                {[
                  "Certified Peer Recovery Specialists (CPRS)",
                  "Behavioral health group facilitators",
                  "Program coordinators and supervisors",
                  "Recovery community organizations",
                  "Community mental health programs",
                ].map((role) => (
                  <div key={role} className="flex items-center gap-2.5 text-sm text-ink/70">
                    <div className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0" />
                    {role}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-border p-8">
              <h3
                className="text-2xl font-semibold text-ink mb-5"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Have a question or need something custom?
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed mb-6">
                We occasionally work with organizations on custom session plan packages. Reach out to discuss your program's needs.
              </p>
              <a
                href="mailto:hello@sessionsupply.co"
                className="inline-flex items-center gap-2 text-forest text-sm font-medium border border-forest px-5 py-2.5 rounded hover:bg-forest hover:text-white transition-all"
              >
                Get in Touch <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
