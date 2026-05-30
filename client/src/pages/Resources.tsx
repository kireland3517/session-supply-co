import { useState } from "react";
import { Download, FileText, Mail, CheckCircle2, Leaf, ArrowRight, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FREE_RESOURCES } from "@/lib/data";
import { toast } from "sonner";

export default function Resources() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleEmailDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast.success("Check your email — your download is on its way!");
  };

  const handleFreeDownload = (title: string) => {
    toast.success(`Downloading "${title}"…`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-28 pb-12 bg-linen border-b border-border">
        <div className="container">
          <span className="text-[10px] font-mono uppercase tracking-widest text-clay mb-3 block">Free Library</span>
          <h1
            className="text-5xl md:text-6xl text-ink mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Free Resources
          </h1>
          <p className="text-base text-ink/55 max-w-xl leading-relaxed">
            Sample tools, templates, and guides from Recovery Systems Group — free to download. Start here before you buy anything.
          </p>
        </div>
      </section>

      {/* Email Capture Banner */}
      {!submitted ? (
        <section className="py-10 bg-forest">
          <div className="container">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2
                  className="text-2xl font-semibold text-white mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Get the full free starter pack.
                </h2>
                <p className="text-white/60 text-sm">
                  A sample session plan, icebreaker cards, and a group agreement template — delivered to your inbox.
                </p>
              </div>
              <form onSubmit={handleEmailDownload} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 text-sm rounded bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
                />
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-white text-forest font-medium px-5 py-2.5 text-sm rounded hover:bg-white/90 transition-all whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Send My Pack
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-8 bg-forest">
          <div className="container">
            <div className="flex items-center gap-3 text-white">
              <CheckCircle2 className="w-5 h-5 text-sage" />
              <p className="text-sm">You're on the list! Check your inbox for your free starter pack.</p>
            </div>
          </div>
        </section>
      )}

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FREE_RESOURCES.map((resource) => (
              <div
                key={resource.id}
                className="bg-white border border-border rounded-lg p-6 flex flex-col gap-4 card-hover"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="w-10 h-10 rounded-md bg-sage-light flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-forest" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-linen text-ink/60 px-2.5 py-1 rounded-full font-medium">
                      {resource.type}
                    </span>
                    {resource.gated && (
                      <span className="text-xs bg-slate-light text-slate-brand px-2.5 py-1 rounded-full font-medium flex items-center gap-1">
                        <Lock className="w-2.5 h-2.5" />
                        Email required
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <h3
                    className="text-xl font-semibold text-ink mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {resource.title}
                  </h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{resource.description}</p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border mt-auto">
                  <div className="flex items-center gap-3 text-xs text-ink/40">
                    <span>{resource.type}</span>
                  </div>
                  {resource.gated ? (
                    <button
                      onClick={() => toast.info("Enter your email above to receive this resource.")}
                      className="flex items-center gap-1.5 text-sm font-medium text-slate-brand hover:text-slate-brand/80 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Get via Email
                    </button>
                  ) : (
                    <button
                      onClick={() => handleFreeDownload(resource.title)}
                      className="flex items-center gap-1.5 text-sm font-medium text-forest hover:text-forest/80 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Free Download
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 bg-linen border-t border-border">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <Leaf className="w-7 h-7 text-sage mx-auto mb-4" />
            <h2 className="heading-display text-3xl md:text-4xl text-ink mb-3">
              Ready for the full library?
            </h2>
            <p className="text-sm text-ink/55 leading-relaxed mb-6">
              Our paid products include complete session plan sets, comprehensive facilitator toolkits, and participant workbooks — everything you need for a full program.
            </p>
            <a
              href="/shop"
              className="inline-flex items-center gap-2 bg-forest text-white font-medium px-6 py-3 rounded hover:bg-forest/90 transition-all"
            >
              Browse All Products <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
