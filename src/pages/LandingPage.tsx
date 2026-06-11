import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClickGlow from "@/components/ClickGlow";

const MARQUEE_ITEMS = [
  "5,000+ Developers",
  "10,000+ Bots Hosted",
  "99.9% Uptime SLA",
  "< 30s Deploy Time",
  "24/7 Live Support",
  "DDoS Protected",
  "Auto-Scaling",
  "Daily Backups",
];

function MagneticButton({ children, className = "", href }: { children: React.ReactNode; className?: string; href?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * 16);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * 16);
  }

  function onLeave() { x.set(0); y.set(0); }

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

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

const STATS_HERO = [
  { val: "10K+", label: "Bots Hosted" },
  { val: "99.9%", label: "Uptime" },
  { val: "30s", label: "Deploy Time" },
];

const STATS_PANEL = [
  { val: "10,000+", label: "Bots Hosted" },
  { val: "99.9%", label: "Uptime Average" },
  { val: "50ms", label: "Avg Latency" },
  { val: "5,200+", label: "Developers" },
];

const TESTIMONIALS = [
  { name: "Marcus Velholt", role: "Bot Developer · Guilded", avatar: "https://picsum.photos/seed/mv7312/64/64", quote: "Switched from a VPS nightmare to FeroX in 20 minutes. My bot's been running without a single hiccup for three months. The logs dashboard alone is worth it." },
  { name: "Priya Nadarajan", role: "Open Source Contributor", avatar: "https://picsum.photos/seed/pn4891/64/64", quote: "The 30-second deploy time is real. I push a fix, go make coffee, and it's live before I'm back. FeroX removed all the friction from my workflow." },
  { name: "Zeke Okafor", role: "Community Manager · 40K members", avatar: "https://picsum.photos/seed/zo6123/64/64", quote: "Our moderation bot handles 40,000 members with zero issues. Auto-scaling kicked in during a raid and we didn't notice a thing. That's what you pay for." },
];

export default function LandingPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0a0a0a] text-white overflow-x-hidden">
      <ClickGlow />
      <Navbar />

      <main>

        {/* ── HERO ───────────────────────────────────────── */}
        <section id="home" className="min-h-[100dvh] flex items-center pt-28 pb-20 px-6 max-w-6xl mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-sm text-white/70 mb-7"
              >
                <motion.span
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-2 h-2 rounded-full bg-emerald-400"
                />
                Now hosting 10,000+ Discord bots
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.07] text-white mb-6"
              >
                Host Your<br />
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }} className="text-white/35">
                  Discord Bot.
                </motion.span><br />
                Without the<br />
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.6 }} className="text-white/35">
                  Headaches.
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.18 }}
                className="text-base md:text-lg text-white/45 max-w-md mb-10 leading-relaxed"
              >
                Deploy in seconds. Scale automatically. Never touch a server again. FeroX Cloud is the platform serious bot developers use.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.26 }}
                className="flex flex-wrap items-center gap-3 mb-12"
              >
                <MagneticButton
                  href="/pricing"
                  className="flex items-center gap-2 bg-white text-black font-semibold text-sm px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
                >
                  Start Hosting Free
                  <div className="w-5 h-5 rounded-lg bg-black/10 flex items-center justify-center">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </MagneticButton>
                <motion.a
                  href="/features"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors px-4 py-3 rounded-xl hover:bg-white/5"
                >
                  View Features
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>

              {/* Stats Row */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.34 }}
                className="grid grid-cols-3 gap-3"
              >
                {STATS_HERO.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                    whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.2)" }}
                    className="glass rounded-2xl p-4 text-center cursor-default"
                  >
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-xl font-bold text-white">{s.val}</div>
                    <div className="text-xs text-white/40 mt-0.5 font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right – visual card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-full max-w-[380px] lg:max-w-[420px] shrink-0"
            >
              <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-75 translate-y-8 pointer-events-none" />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden aspect-square flex items-center justify-center shadow-2xl"
              >
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <motion.div
                  animate={{ rotate: [0, 3, -3, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-24 h-24 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(255,255,255,0.12)]"
                >
                  <img
                    src="https://cdn.discordapp.com/attachments/1497824946578264254/1497825045756641360/IMG_20260418_084051.png?ex=69fa2287&is=69f8d107&hm=066527a9e158555b3f4d00ccbd44e1719eabf05f8756259a6b12a25b478ac059&"
                    alt="FeroX Cloud"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12, y: -12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.06 }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-xl z-20 cursor-default"
              >
                <div className="text-[11px] text-white/45 font-medium mb-0.5">Deploy Time</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-bold text-white leading-none">28s</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -12, y: 12 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.85, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ scale: 1.06 }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-xl z-20 cursor-default"
              >
                <div className="text-[11px] text-white/45 font-medium mb-0.5">Uptime</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-bold text-emerald-400 leading-none">99.9%</div>
              </motion.div>
            </motion.div>

          </div>
        </section>

        {/* ── MARQUEE ─────────────────────────────────────── */}
        <div className="border-y border-white/[0.07] bg-white/[0.02] overflow-hidden py-4">
          <div className="flex animate-marquee w-max gap-10">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div key={i} className="flex items-center gap-10 shrink-0">
                <span className="text-sm font-semibold text-white/35 tracking-wide uppercase whitespace-nowrap">{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/15 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS PANEL ─────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6 max-w-6xl mx-auto">
          <FadeIn>
            <div className="glass-card rounded-3xl p-10 md:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                {STATS_PANEL.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-default"
                  >
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-4xl font-bold text-white mb-1.5">{s.val}</div>
                    <div className="text-sm text-white/35 font-medium">{s.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ── TESTIMONIALS ────────────────────────────────── */}
        <section className="py-10 md:py-20 px-6 max-w-5xl mx-auto">
          <FadeIn className="mb-14 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs text-white/50 font-medium uppercase tracking-widest mb-5">
              Testimonials
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Trusted by real developers.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6, borderColor: "rgba(255,255,255,0.18)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-card rounded-2xl p-6 h-full flex flex-col cursor-default"
                >
                  <div className="flex gap-0.5 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/60">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm text-white/55 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-xl object-cover" />
                    <div>
                      <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-sm font-semibold text-white">{t.name}</div>
                      <div className="text-xs text-white/35">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────── */}
        <section className="py-10 px-6 max-w-4xl mx-auto mb-16">
          <FadeIn>
            <motion.div
              whileHover={{ borderColor: "rgba(255,255,255,0.12)" }}
              className="glass-card rounded-3xl p-12 md:p-20 text-center"
            >
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
                Deploy your bot today.
              </h2>
              <p className="text-white/40 max-w-sm mx-auto mb-8 leading-relaxed">
                Start free. No credit card required. Your first bot is live in under a minute.
              </p>
              <MagneticButton
                href="/pricing"
                className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors text-sm"
              >
                View Plans
                <div className="w-6 h-6 rounded-xl bg-black/10 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </MagneticButton>
            </motion.div>
          </FadeIn>
        </section>

      </main>

      <Footer />
    </div>
  );
}
