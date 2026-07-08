import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 1400;

    let frame;
    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        frame = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 250);
      }
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence onExitComplete={onFinish}>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="status"
          aria-live="polite"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(145,94,255,0.18),transparent_60%)]" />

          <motion.div
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-30 blur-md" />
            <span className="relative font-display text-2xl font-bold text-gradient">SAH</span>
          </motion.div>

          <p className="eyebrow mt-6">GET /portfolio</p>

          <div className="mt-4 h-[2px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 font-mono text-xs text-muted">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
