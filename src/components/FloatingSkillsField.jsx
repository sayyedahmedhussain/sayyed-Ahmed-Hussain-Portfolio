import { useMemo } from "react";
import { motion } from "framer-motion";
import { floatingSkills } from "../data/skills";

// Deterministic pseudo-random layout so badges don't overlap awkwardly
// and don't reshuffle on every render.
function layoutFor(index, total) {
  const cols = 5;
  const row = Math.floor(index / cols);
  const col = index % cols;
  const jitterX = ((index * 37) % 10) - 5;
  const jitterY = ((index * 53) % 10) - 5;
  return {
    left: `${(col / (cols - 1)) * 88 + jitterX * 0.4 + 2}%`,
    top: `${(row / Math.max(1, Math.floor(total / cols))) * 88 + jitterY * 0.4 + 2}%`,
    delay: (index % 6) * 0.3,
    duration: 5 + (index % 4),
  };
}

export default function FloatingSkillsField() {
  const items = useMemo(
    () => floatingSkills.map((name, i) => ({ name, ...layoutFor(i, floatingSkills.length) })),
    []
  );

  return (
    <div className="relative h-[340px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] sm:h-[420px]" aria-hidden="true">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(145,94,255,0.15),transparent_55%),radial-gradient(circle_at_70%_80%,rgba(0,245,255,0.12),transparent_55%)]" />
      {items.map((item) => (
        <motion.div
          key={item.name}
          className="group absolute"
          style={{ left: item.left, top: item.top }}
          animate={{ y: [0, -14, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            data-cursor="hover"
            className="glass cursor-default rounded-full px-4 py-2 font-mono text-xs text-white/80 transition-all duration-300 hover:scale-110 hover:border-accent/60 hover:text-accent hover:shadow-[0_0_24px_rgba(0,245,255,0.35)]"
          >
            {item.name}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
