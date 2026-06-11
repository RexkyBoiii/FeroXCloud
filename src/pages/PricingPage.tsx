import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickGlow from "@/components/ClickGlow";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Perfect for hobby projects and testing.",
    features: ["1 Bot Instance", "256 MB RAM", "Shared CPU", "Community Support", "1 GB Storage", "Git Deploy"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: { monthly: 9, annual: 7 },
    desc: "For developers who need reliability.",
    features: ["5 Bot Instances", "1 GB RAM", "Dedicated CPU", "Priority Support", "20 GB Storage", "Custom Domain", "Auto-Scaling", "99.9% SLA"],
    cta: "Get Pro",
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Scale",
    price: { monthly: 29, annual: 23 },
    desc: "For teams and high-traffic bots.",
    features: ["Unlimited Bots", "4 GB RAM", "Dedicated Resources", "24/7 Support", "100 GB Storage", "Advanced Analytics", "Team Access", "Custom SLA"],
    cta: "Get Scale",
    highlight: false,
  },
];

const COMPARE = [
  { feature: "Bot Instances", starter: "1", pro: "5", scale: "Unlimited" },
  { feature: "RAM", starter: "256 MB", pro: "1 GB", scale: "4 GB" },
  { feature: "CPU", starter: "Shared", pro: "Dedicated", scale: "Dedicated" },
  { feature: "Storage", starter: "1 GB", pro: "20 GB", scale: "100 GB" },
  { feature: "Custom Domain", starter: "—", pro: "✓", scale: "✓" },
  { feature: "Auto-Scaling", starter: "—", pro: "✓", scale: "✓" },
  { feature: "Daily Backups", starter: "—", pro: "✓", scale: "✓" },
  { feature: "Uptime SLA", starter: "—", pro: "99.9%", scale: "Custom" },
  { feature: "Support", starter: "Community", pro: "Priority", scale: "24/7" },
];

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

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden">
      <ClickGlow />
      <Navbar />

      <main className="pt-32 pb-20">

        {/* ── HEADER ─────────────────────────────────────── */}
        <div className="px-6 max-w-3xl mx-auto mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 font-medium uppercase tracking-widest mb-6"
          >
            Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Simple, honest pricing.<br />
            <span className="text-white/30">No surprises.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/40 max-w-md mx-auto leading-relaxed mb-8"
          >
            Start free and upgrade when you need to. Cancel any time, no lock-in.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="inline-flex items-center gap-1 glass rounded-2xl p-1.5"
          >
            <motion.button
              onClick={() => setAnnual(false)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all relative ${!annual ? "text-black" : "text-white/50 hover:text-white"}`}
            >
              {!annual && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-xl bg-white"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </motion.button>
            <motion.button
              onClick={() => setAnnual(true)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 relative ${annual ? "text-black" : "text-white/50 hover:text-white"}`}
            >
              {annual && (
                <motion.span
                  layoutId="billing-pill"
                  className="absolute inset-0 rounded-xl bg-white"
                  style={{ zIndex: 0 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.35 }}
                />
              )}
              <span className="relative z-10">Annual</span>
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full z-10 relative ${annual ? "bg-black/10 text-black" : "bg-emerald-500/20 text-emerald-400"}`}>
                -20%
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* ── PLAN CARDS ──────────────────────────────────── */}
        <div className="px-6 max-w-5xl mx-auto mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((plan, i) => (
              <FadeIn key={plan.name} delay={i * 0.1}>
                <motion.div
                  whileHover={plan.highlight ? {} : { y: -6, borderColor: "rgba(255,255,255,0.16)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`relative rounded-2xl p-7 h-full flex flex-col ${
                    plan.highlight
                      ? "bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.07)]"
                      : "glass-card"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-white text-[11px] font-semibold px-3 py-1 rounded-full whitespace-nowrap">
                      {plan.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <div
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      className={`text-xs font-bold uppercase tracking-widest mb-4 ${plan.highlight ? "text-black/40" : "text-white/30"}`}
                    >
                      {plan.name}
                    </div>
                    <div className="flex items-end gap-1 mb-2">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={annual ? "a" : "m"}
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.18 }}
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                          className="text-5xl font-bold tracking-tight leading-none"
                        >
                          {plan.price.monthly === 0 ? "Free" : `$${annual ? plan.price.annual : plan.price.monthly}`}
                        </motion.span>
                      </AnimatePresence>
                      {plan.price.monthly > 0 && (
                        <span className={`text-sm mb-1 ${plan.highlight ? "text-black/35" : "text-white/25"}`}>/mo</span>
                      )}
                    </div>
                    <p className={`text-sm leading-relaxed ${plan.highlight ? "text-black/50" : "text-white/35"}`}>{plan.desc}</p>
                  </div>

                  <ul className="flex-1 space-y-2.5 mb-7">
                    {plan.features.map((feat, fi) => (
                      <motion.li
                        key={feat}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: fi * 0.04 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? "bg-black/10" : "bg-white/10"}`}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className={plan.highlight ? "text-black/65" : "text-white/50"}>{feat}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                      plan.highlight
                        ? "bg-black text-white hover:bg-black/80"
                        : "bg-white/8 text-white hover:bg-white/14 border border-white/10"
                    }`}
                  >
                    {plan.cta}
                  </motion.button>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── COMPARISON TABLE ────────────────────────────── */}
        <div className="px-6 max-w-5xl mx-auto mb-20">
          <FadeIn className="mb-10 text-center">
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl md:text-3xl font-bold text-white">
              Compare plans
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 border-b border-white/[0.07]">
                <div className="p-5" />
                {["Starter", "Pro", "Scale"].map((h, i) => (
                  <div key={h} className={`p-5 text-center border-l border-white/[0.07] ${i === 1 ? "bg-white/[0.04]" : ""}`}>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className={`text-sm font-bold ${i === 1 ? "text-white" : "text-white/50"}`}>{h}</div>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {COMPARE.map((row, i) => (
                <motion.div
                  key={row.feature}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className={`grid grid-cols-4 border-b border-white/[0.04] last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.015]"}`}
                >
                  <div className="p-4 text-sm text-white/50 font-medium">{row.feature}</div>
                  {[row.starter, row.pro, row.scale].map((val, ci) => (
                    <div key={ci} className={`p-4 text-center text-sm border-l border-white/[0.04] ${ci === 1 ? "bg-white/[0.03] text-white font-medium" : "text-white/40"}`}>
                      {val}
                    </div>
                  ))}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── FAQ SNIPPET ─────────────────────────────────── */}
        <div className="px-6 max-w-5xl mx-auto mb-16">
          <FadeIn>
            <div className="glass-card rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Still have questions?
                </h2>
                <p className="text-white/40 text-sm leading-relaxed max-w-sm">
                  Check our FAQ or reach us on Discord — we reply within a few hours.
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <motion.a
                  href="/faq"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm"
                >
                  View FAQ
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 glass rounded-xl px-5 py-3 text-white/60 hover:text-white font-medium text-sm transition-colors"
                >
                  Discord
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
