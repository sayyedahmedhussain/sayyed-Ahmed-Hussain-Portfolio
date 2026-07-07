import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";

const archLabels = {
  backend: "Backend",
  frontend: "Frontend",
  database: "Database",
  authentication: "Authentication",
  deployment: "Deployment",
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} details`}
        >
          <motion.div
            className="absolute inset-0 bg-void/85 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="glass relative max-h-[86vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 p-0"
          >
            <button
              onClick={onClose}
              data-cursor="hover"
              aria-label="Close details"
              className="focus-ring absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-void/60 text-white backdrop-blur"
            >
              <FiX />
            </button>

            <div className="relative h-56 w-full overflow-hidden sm:h-72">
              <img src={project.image} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/40 to-transparent" />
            </div>

            <div className="p-6 sm:p-8">
              <p className="eyebrow">{project.tagline}</p>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">{project.name}</h3>
              <p className="mt-3 text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <p className="eyebrow">Features</p>
                <ul className="mt-3 space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm text-white/85">
                      <span className="mt-1 text-accent">▹</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <p className="eyebrow">Architecture</p>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {Object.entries(archLabels).map(([key, label]) => (
                    <div key={key} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="font-mono text-[11px] text-accent">{label}</p>
                      <p className="mt-1 text-sm text-white/80">{project.architecture[key]}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="focus-ring flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 font-mono text-xs font-semibold transition-colors hover:border-accent hover:text-accent"
                >
                  <FiGithub /> View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="hover"
                  className="focus-ring flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 font-mono text-xs font-semibold text-void"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
