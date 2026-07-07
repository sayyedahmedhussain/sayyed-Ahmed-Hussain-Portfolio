import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: a small dot that follows the mouse instantly, and a
 * larger ring that trails behind with easing. Elements can opt in to
 * the "hover" (magnetic) state by adding data-cursor="hover".
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHover, setIsHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: pos.x, y: pos.y };

    function handleMove(e) {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setIsVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target;
      setIsHover(Boolean(target.closest?.('[data-cursor="hover"]')));
    }

    let raf;
    function animateRing() {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animateRing);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    raf = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] hidden md:block"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-100"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border transition-[width,height,border-color,background-color] duration-200 ease-out"
        style={{
          width: isHover ? 56 : 32,
          height: isHover ? 56 : 32,
          borderColor: isHover ? "var(--color-accent)" : "rgba(255,255,255,0.4)",
          backgroundColor: isHover ? "rgba(0,245,255,0.08)" : "transparent",
        }}
      />
    </div>
  );
}
