import { Link } from "wouter";
import { Leaf, Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-white/80">
      <div className="container py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                <Leaf className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-white font-semibold text-[15px]" style={{ fontFamily: "'Inter', sans-serif" }}>
                Session Supply Co.
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Structured, ready-to-use session materials for peer recovery specialists and group facilitators. Built by practitioners, for practitioners.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Instagram className="w-3.5 h-3.5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="w-3.5 h-3.5 text-white" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/shop?category=Session Plans" className="hover:text-white transition-colors">Session Plans</Link></li>
              <li><Link href="/shop?category=Toolkits" className="hover:text-white transition-colors">Facilitator Toolkits</Link></li>
              <li><Link href="/shop?category=Bundles" className="hover:text-white transition-colors">Bundles</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Free Resources</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Session Supply Co. All rights reserved.</p>
          <p>Designed for peer recovery specialists everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
