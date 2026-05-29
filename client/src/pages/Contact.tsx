import { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    role: "",
    email: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setSubmitted(true);
    toast.success("Message received. We'll be in touch within 2 business days.");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-14 bg-linen border-b border-border">
        <div className="container">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-4 block">
            Contact
          </span>
          <h1
            className="text-5xl md:text-6xl text-ink mb-4 leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Start the conversation.
          </h1>
          <p className="text-base text-ink/55 max-w-xl leading-relaxed">
            Most engagements begin with a 30-minute discovery call. No pitch — just a conversation about where your program is and whether there's a fit.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2
                  className="text-2xl text-ink mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  What to expect.
                </h2>
                <ul className="space-y-4">
                  {[
                    { icon: Clock, title: "Response within 2 business days", desc: "Every inquiry gets a personal response, not an automated sequence." },
                    { icon: Mail, title: "info@recoverysystemsgroup.com", desc: "Direct email if you prefer." },
                    { icon: MapPin, title: "Licensed in Virginia and Maryland", desc: "Remote engagements available nationally." },
                  ].map(({ icon: Icon, title, desc }) => (
                    <li key={title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-sm bg-sage-light flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4 text-forest" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">{title}</p>
                        <p className="text-xs text-ink/50 mt-0.5">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-ink rounded-sm p-6">
                <p
                  className="text-white text-lg italic leading-snug mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  "Peer support doesn't fail organizations. Organizations fail peer specialists."
                </p>
                <p className="font-mono text-[9px] uppercase tracking-widest text-white/30">
                  Recovery Systems Group
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-sage-light border border-sage/30 rounded-sm p-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <h3
                    className="text-2xl text-ink mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    Message received.
                  </h3>
                  <p className="text-sm text-ink/60">
                    We'll be in touch within 2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest placeholder:text-ink/25"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest placeholder:text-ink/25"
                        placeholder="jane@organization.org"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                        Organization
                      </label>
                      <input
                        type="text"
                        value={form.org}
                        onChange={(e) => setForm({ ...form, org: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest placeholder:text-ink/25"
                        placeholder="Your organization name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                        Your Role
                      </label>
                      <input
                        type="text"
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest placeholder:text-ink/25"
                        placeholder="Clinical Director, Program Manager…"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                      What are you interested in?
                    </label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest text-ink/70"
                    >
                      <option value="">Select an option</option>
                      <option value="consulting">Organizational Consulting</option>
                      <option value="ceu">CEU Training (waitlist)</option>
                      <option value="readiness">Readiness Assessment</option>
                      <option value="billing">Billing Infrastructure</option>
                      <option value="products">Digital Tools / Products</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest text-ink/40 mb-1.5">
                      Tell us about your situation *
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2.5 text-sm border border-border rounded-sm bg-white focus:outline-none focus:border-forest placeholder:text-ink/25 resize-none"
                      placeholder="Where is your program right now? What's working, what isn't? What do you need help with?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-forest text-white font-medium px-7 py-3 rounded-sm hover:bg-forest/90 transition-all text-sm"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-xs text-ink/35 mt-2">
                    We respond to every inquiry personally within 2 business days.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
