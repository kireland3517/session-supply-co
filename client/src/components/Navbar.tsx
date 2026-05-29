import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/shop", label: "Tools & Resources" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Free Library" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Monogram mark */}
            <div className="w-8 h-8 bg-forest flex items-center justify-center flex-shrink-0 rounded-sm">
              <span
                className="text-white text-xs font-semibold tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "13px", letterSpacing: "0.02em" }}
              >
                RSG
              </span>
            </div>
            <div className="flex flex-col leading-none">
              <span
                className="text-ink font-medium tracking-tight text-[14px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Recovery Systems Group
              </span>
              <span className="text-ink/40 text-[10px] tracking-wide font-normal hidden sm:block">
                Evidence-based consulting
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location === link.href || location.startsWith(link.href + "/")
                    ? "text-forest"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-ink/60 hover:text-ink transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="flex items-center gap-1.5 bg-forest text-white text-sm font-medium px-4 py-2 rounded-sm transition-all duration-200 hover:bg-forest/90"
            >
              Work With Us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-ink/70 hover:text-ink transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 text-sm font-medium border-b border-border/50 transition-colors ${
                  location === link.href ? "text-forest" : "text-ink/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="py-3 text-sm font-medium border-b border-border/50 text-ink/70"
            >
              Contact
            </Link>
            <Link
              href="/services"
              className="mt-3 flex items-center justify-center gap-2 bg-forest text-white text-sm font-medium px-4 py-2.5 rounded-sm"
            >
              Work With Us
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
