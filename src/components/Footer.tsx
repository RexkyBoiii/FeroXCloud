import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] px-6 py-14">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl overflow-hidden shrink-0">
                <img
                  src="https://cdn.discordapp.com/attachments/1487438660352606288/1514449567859343492/IMG_20260611_073141.png?ex=6a2b6892&is=6a2a1712&hm=81f45df6b96b3272b076c6374c837423a2247cf08e005b2b89cb0a3c649a2122"
                  alt="FeroX Cloud"
                  className="w-full h-full object-cover"
                />
              </div>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="font-bold text-white">FeroX Cloud</span>
            </div>
            <p className="text-sm text-white/35 max-w-xs leading-relaxed mb-5">
              The premier hosting platform for Discord bot developers. Built for reliability, designed for speed.
            </p>
            <div className="flex items-center gap-2">
              {[
                { label: "Twitter", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
                { label: "GitHub", path: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
                { label: "Discord", path: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" },
              ].map((s) => (
                <motion.a
                  key={s.label}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-8 h-8 rounded-xl glass flex items-center justify-center text-white/40 hover:text-white transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {[
            { heading: "Product", links: ["Features", "Pricing", "Changelog", "Status"] },
            { heading: "Resources", links: ["Documentation", "API Reference", "Blog", "Community"] },
            { heading: "Company", links: ["About", "Privacy Policy", "Terms of Service", "Contact"] },
          ].map((col) => (
            <div key={col.heading}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-sm font-semibold text-white mb-4">{col.heading}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/35 hover:text-white/70 transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/25">
          <p>© {new Date().getFullYear()} FeroX Cloud. All rights reserved.</p>
          <p>Built for developers, by developers.</p>
        </div>
      </div>
    </footer>
  );
}
