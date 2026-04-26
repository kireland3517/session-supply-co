import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingBag, Leaf } from "lucide-react";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Free Resources" },
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
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-white"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
              <Leaf className="w-3.5 h-3.5 text-white" />
            </div>
            <span
              className="text-ink font-semibold tracking-tight text-[15px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Session Supply Co.
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location === link.href
                    ? "text-forest"
                    : "text-ink/60 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/shop"
              className="flex items-center gap-2 bg-forest text-white text-sm font-medium px-4 py-2 rounded transition-all duration-200 hover:bg-forest/90"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Browse Products
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
              href="/shop"
              className="mt-3 flex items-center justify-center gap-2 bg-forest text-white text-sm font-medium px-4 py-2.5 rounded"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Browse Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
