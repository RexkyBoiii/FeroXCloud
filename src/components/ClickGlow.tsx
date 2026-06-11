import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Glow {
  id: number;
  x: number;
  y: number;
}

export default function ClickGlow() {
  const [glows, setGlows] = useState<Glow[]>([]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const id = Date.now() + Math.random();
      setGlows((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setGlows((prev) => prev.filter((g) => g.id !== id));
      }, 900);
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <AnimatePresence>
        {glows.map((glow) => (
          <motion.div
            key={glow.id}
            initial={{ opacity: 0.15, scale: 0 }}
            animate={{ opacity: 0, scale: 3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "fixed",
              left: glow.x - 120,
              top: glow.y - 120,
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.06) 40%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
