import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({ to, suffix = "", duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();

    let frame;
    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * to));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className="font-display text-4xl font-bold text-white sm:text-5xl">
      {value}
      <span className="text-gradient">{suffix}</span>
    </span>
  );
}
