import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickGlow from "@/components/ClickGlow";

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Instant Git Deploys",
    desc: "Push to GitHub or GitLab and your bot is live within 30 seconds. Rolling restarts mean zero downtime during updates.",
    tag: "CI/CD",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Auto-Scaling",
    desc: "Traffic spike? We scale your containers automatically. No manual intervention, no rate limits, no downtime.",
    tag: "Infrastructure",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Real-Time Logs",
    desc: "Stream your bot's logs live in your dashboard. Search, filter, and download historical logs from any deployment.",
    tag: "Monitoring",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "DDoS Protection",
    desc: "Enterprise-grade layer 7 DDoS mitigation on every plan. Your bot stays online no matter what.",
    tag: "Security",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "99.9% Uptime SLA",
    desc: "Our infrastructure is built on redundant clusters across multiple regions. We back our uptime with a real SLA.",
    tag: "Reliability",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Connect your repo", desc: "Link your GitHub, GitLab, or Bitbucket repository. We detect your runtime automatically — no config files needed." },
  { step: "02", title: "Configure your bot", desc: "Set your environment variables, choose your plan, and pick a region. Takes under two minutes." },
  { step: "03", title: "Deploy in seconds", desc: "Click deploy. We build, containerize, and launch your bot. You get a live URL and real-time logs instantly." },
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

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

export default function FeaturesPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden">
      <ClickGlow />
      <Navbar />

      <main className="pt-32 pb-20">

        {/* ── HEADER ─────────────────────────────────────── */}
        <div className="px-6 max-w-6xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 font-medium uppercase tracking-widest mb-6"
          >
            Features
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4"
          >
            Everything your bot needs.<br />
            <span className="text-white/30">Nothing it doesn&apos;t.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-white/40 text-base md:text-lg max-w-xl leading-relaxed"
          >
            Built for Discord bot developers. We handle the infrastructure so you can focus on building.
          </motion.p>
        </div>

        {/* ── FEATURES GRID (5 cards, 3+2 layout) ─────────── */}
        <div className="px-6 max-w-6xl mx-auto mb-28">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
          >
            {/* Top row — 3 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              {FEATURES.slice(0, 3).map((f) => (
                <motion.div
                  key={f.title}
                  variants={cardVariant}
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card rounded-2xl p-6 flex flex-col group cursor-default"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 group-hover:bg-white/14 group-hover:text-white/80 transition-all duration-300">
                      {f.icon}
                    </div>
                    <span className="text-[10px] font-semibold text-white/25 uppercase tracking-widest px-2 py-1 rounded-lg bg-white/5">
                      {f.tag}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-[15px] text-white mb-2 leading-snug">{f.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom row — 2 wider cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.slice(3, 5).map((f) => (
                <motion.div
                  key={f.title}
                  variants={cardVariant}
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card rounded-2xl p-7 flex flex-col sm:flex-row gap-6 group cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/8 flex items-center justify-center text-white/60 group-hover:bg-white/14 group-hover:text-white/80 transition-all duration-300 shrink-0">
                    {f.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-[15px] text-white leading-snug">{f.title}</h3>
                      <span className="text-[10px] font-semibold text-white/25 uppercase tracking-widest px-2 py-0.5 rounded-lg bg-white/5 shrink-0">{f.tag}</span>
                    </div>
                    <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── HOW IT WORKS ────────────────────────────────── */}
        <div className="px-6 max-w-5xl mx-auto mb-20">
          <FadeIn className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 font-medium uppercase tracking-widest mb-5">
              How it works
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-tight text-white">
              From zero to live in minutes.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+2px)] right-[calc(16.67%+2px)] h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            {HOW_IT_WORKS.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.13}>
                <motion.div
                  whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.15)" }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="glass-card rounded-2xl p-7 relative cursor-default"
                >
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-5xl font-bold text-white/8 mb-6 leading-none select-none">{s.step}</div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-semibold text-white text-lg mb-3">{s.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="px-6 max-w-4xl mx-auto">
          <FadeIn>
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
              className="glass-card rounded-3xl p-12 md:p-20 text-center"
            >
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Ready to deploy?
              </h2>
              <p className="text-white/40 max-w-xs mx-auto mb-8 leading-relaxed">
                Start free. Your first bot goes live in under a minute.
              </p>
              <motion.a
                href="/pricing"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors text-sm"
              >
                View Pricing
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </motion.div>
          </FadeIn>
        </div>

      </main>

      <Footer />
    </div>
  );
}
