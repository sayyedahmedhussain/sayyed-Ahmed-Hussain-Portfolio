import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

export default function ProjectCard({ project, onOpenDetails }) {
  const cardRef = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  function handlePointerMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="group relative w-full shrink-0 select-none"
    >
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(320px circle at ${glowX} ${glowY}, rgba(0,245,255,0.25), transparent 60%)`,
        }}
      />
      <div className="glass relative overflow-hidden rounded-3xl border border-white/10 transition-colors duration-300 group-hover:border-accent/40">
        <div className="relative h-52 overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-transparent" />
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"
            transition={{ duration: 0.9, ease: "easeInOut" }}
          />
        </div>

        <div className="p-6" style={{ transform: "translateZ(30px)" }}>
          <p className="eyebrow">{project.tagline}</p>
          <h3 className="mt-2 font-display text-xl font-semibold">{project.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm text-muted">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] text-white/70">
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              type="button"
              data-cursor="hover"
              onClick={() => onOpenDetails(project)}
              className="focus-ring flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 font-mono text-xs font-medium transition-colors hover:bg-white/15"
            >
              View Details <FiArrowUpRight />
            </button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label={`${project.name} on GitHub`}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label={`${project.name} live demo`}
              className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-accent hover:text-accent"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
