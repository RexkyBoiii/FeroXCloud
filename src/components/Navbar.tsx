import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  function getActive() {
    if (location === "/features") return "Features";
    if (location === "/pricing") return "Pricing";
    if (location === "/faq") return "FAQ";
    return "Home";
  }

  const active = getActive();

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="glass w-full max-w-4xl flex items-center justify-between rounded-2xl px-4 py-2.5"
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 shrink-0">
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.93 }}
            className="w-8 h-8 rounded-xl overflow-hidden shrink-0"
          >
            <img
              src="https://cdn.discordapp.com/attachments/1487438660352606288/1514449567859343492/IMG_20260611_073141.png?ex=6a2b6892&is=6a2a1712&hm=81f45df6b96b3272b076c6374c837423a2247cf08e005b2b89cb0a3c649a2122"
              alt="FeroX Cloud"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-[15px] tracking-tight text-white">FeroX Cloud</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-4 py-1.5 rounded-xl text-sm font-medium transition-colors duration-200 ${
                active === link.label ? "text-white" : "text-white/45 hover:text-white hover:bg-white/5"
              }`}
            >
              {active === link.label && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-xl bg-white/10"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.18, duration: 0.38 }}
                />
              )}
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center">
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 bg-white text-black text-sm font-semibold px-4 py-2 rounded-xl hover:bg-white/90 transition-colors"
          >
            Get Started
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </motion.a>
        </div>

        {/* Hamburger */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 inset-x-4 glass rounded-2xl p-5 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className={`py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                  active === link.label ? "bg-white/10 text-white" : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </motion.a>
            ))}
            <div className="border-t border-white/10 mt-3 pt-3">
              <a href="/pricing" className="block w-full bg-white text-black font-semibold text-sm py-3 rounded-xl text-center hover:bg-white/90 transition-colors">
                Get Started Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
