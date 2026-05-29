import { Link } from "wouter";
import { Mail, Linkedin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white/10 flex items-center justify-center rounded-sm flex-shrink-0">
                <span
                  className="text-white text-xs font-semibold"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px" }}
                >
                  RSG
                </span>
              </div>
              <div>
                <span className="text-white font-medium text-[14px] block" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Recovery Systems Group
                </span>
                <span className="text-white/35 text-[10px] tracking-wide">
                  Evidence-based consulting
                </span>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-5">
              Organizational consulting, CEU training, and digital tools for behavioral health organizations, FQHCs, and primary care practices integrating peer recovery support services.
            </p>
            <p
              className="text-white/80 text-base italic leading-snug mb-6 max-w-sm"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              "Peer support works. Most organizations aren't ready for it."
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@recoverysystemsgroup.com"
                className="w-8 h-8 rounded-sm bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-white/70" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-sm bg-white/8 flex items-center justify-center hover:bg-white/15 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-white/70" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="text-white text-[10px] font-semibold mb-4 uppercase tracking-widest font-mono">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Organizational Consulting</Link></li>
              <li><Link href="/services#ceu" className="hover:text-white transition-colors">CEU Training</Link></li>
              <li><Link href="/services#readiness" className="hover:text-white transition-colors">Readiness Assessment</Link></li>
              <li><Link href="/services#supervisor" className="hover:text-white transition-colors">Supervisor Preparation</Link></li>
              <li><Link href="/services#billing" className="hover:text-white transition-colors">Billing Infrastructure</Link></li>
            </ul>
          </div>

          {/* Tools + Company */}
          <div className="md:col-span-2">
            <h4 className="text-white text-[10px] font-semibold mb-4 uppercase tracking-widest font-mono">Tools</h4>
            <ul className="space-y-2.5 text-sm mb-8">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Library</Link></li>
            </ul>
            <h4 className="text-white text-[10px] font-semibold mb-4 uppercase tracking-widest font-mono">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* CTA */}
          <div className="md:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-lg p-5">
              <p
                className="text-white text-base mb-3 leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
              >
                Ready to talk?
              </p>
              <p className="text-xs text-white/45 leading-relaxed mb-4">
                Most engagements start with a 30-minute call. No pitch, just a conversation about where your program is.
              </p>
              <Link
                href="/contact"
                className="flex items-center gap-1.5 text-sage text-xs font-medium hover:text-white transition-colors"
              >
                Get in touch <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30 font-mono">
          <p>© {new Date().getFullYear()} Recovery Systems Group. All rights reserved.</p>
          <p>Licensed in Virginia and Maryland · CPRS-founded</p>
        </div>
      </div>
    </footer>
  );
}
