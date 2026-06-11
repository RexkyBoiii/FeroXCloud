import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickGlow from "@/components/ClickGlow";

const FAQS = [
  {
    category: "Platform",
    q: "What programming languages are supported?",
    a: "FeroX Cloud supports any language with a package manager: Node.js, Python, Rust, Go, Ruby, Java, and more. If it runs in a container, it runs on FeroX.",
  },
  {
    category: "Reliability",
    q: "What happens if my bot crashes?",
    a: "Our watchdog process detects crashes within seconds and automatically restarts your bot. You get a Slack or Discord notification, and the incident is logged in your dashboard.",
  },
  {
    category: "Networking",
    q: "Can I use a custom domain?",
    a: "Yes — on Pro and Scale plans you can point any domain to your bot's web endpoints. We provision SSL automatically via Let's Encrypt.",
  },
  {
    category: "Data",
    q: "Do you support databases?",
    a: "Yes. You can connect to any external database, or provision a managed PostgreSQL or Redis instance directly from your FeroX dashboard.",
  },
  {
    category: "Billing",
    q: "How does billing work?",
    a: "Starter is forever free. Pro and Scale are billed monthly or annually. Annual billing saves you 20%. You can upgrade, downgrade, or cancel any time — no lock-in.",
  },
  {
    category: "Billing",
    q: "Is there a free trial for paid plans?",
    a: "Every new account gets a 14-day Pro trial — no credit card required. If you're happy, you can subscribe. If not, you automatically roll back to Starter.",
  },
  {
    category: "Platform",
    q: "How do I migrate from another host?",
    a: "We have migration guides for all major hosts including Railway, Heroku, DigitalOcean, and bare VPS. Most migrations take under 15 minutes with no downtime.",
  },
  {
    category: "Security",
    q: "How is my bot's code protected?",
    a: "Your code is stored encrypted at rest and never shared. Each bot runs in an isolated container with no access to other customers' resources.",
  },
  {
    category: "Reliability",
    q: "What regions do you offer?",
    a: "We currently offer hosting in US East, US West, Europe (Frankfurt), and Asia Pacific (Singapore). More regions are coming in Q3 2026.",
  },
  {
    category: "Platform",
    q: "Can I run multiple bots under one account?",
    a: "Yes. Starter supports 1 bot, Pro supports 5, and Scale supports unlimited bots — all managed from a single unified dashboard.",
  },
];

const CATEGORIES = ["All", "Platform", "Reliability", "Networking", "Data", "Billing", "Security"];

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function FaqPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? FAQS : FAQS.filter((f) => f.category === activeCategory);

  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden">
      <ClickGlow />
      <Navbar />

      <main className="pt-32 pb-20">

        {/* ── HEADER ─────────────────────────────────────── */}
        <div className="px-6 max-w-3xl mx-auto mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 font-medium uppercase tracking-widest mb-6"
          >
            FAQ
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Common questions.<br />
            <span className="text-white/30">Honest answers.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/40 max-w-md mx-auto leading-relaxed"
          >
            Everything you need to know about FeroX Cloud. Can't find the answer? Join our Discord server.
          </motion.p>
        </div>

        {/* ── CATEGORY FILTER ─────────────────────────────── */}
        <div className="px-6 max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap gap-2 justify-center"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  activeCategory === cat ? "text-white" : "text-white/40 hover:text-white glass"
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="cat-active"
                    className="absolute inset-0 rounded-xl bg-white/15 border border-white/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* ── FAQ LIST ────────────────────────────────────── */}
        <div className="px-6 max-w-3xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-2"
            >
              {filtered.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  <motion.button
                    whileHover={{ borderColor: "rgba(255,255,255,0.18)" }}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full glass-card rounded-2xl px-6 py-5 text-left transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="text-[10px] font-semibold text-white/25 uppercase tracking-widest px-2 py-0.5 rounded-md bg-white/5 shrink-0 hidden sm:block">
                          {faq.category}
                        </span>
                        <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-[15px] font-medium text-white leading-snug">
                          {faq.q}
                        </span>
                      </div>
                      <motion.div
                        animate={{ rotate: openFaq === i ? 45 : 0 }}
                        transition={{ duration: 0.22 }}
                        className="w-7 h-7 rounded-lg bg-white/8 flex items-center justify-center text-white/50 shrink-0"
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-white/45 leading-relaxed mt-4 pr-12">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ── CONTACT CTA ─────────────────────────────────── */}
        <div className="px-6 max-w-3xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
              className="glass-card rounded-3xl p-10 md:p-14 text-center"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/8 flex items-center justify-center mx-auto mb-5">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-3">
                Still have questions?
              </h2>
              <p className="text-white/40 max-w-xs mx-auto mb-7 leading-relaxed text-sm">
                Join our Discord server and get a response from the team within hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  Join Discord
                </motion.a>
                <motion.a
                  href="mailto:hello@ferox.cloud"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 glass rounded-xl px-6 py-3 text-white/60 hover:text-white font-medium text-sm transition-colors"
                >
                  Email Support
                </motion.a>
              </div>
            </motion.div>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
