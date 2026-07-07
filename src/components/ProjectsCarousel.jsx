import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ProjectCard from "./ProjectCard";

export default function ProjectsCarousel({ projects, onOpenDetails }) {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const trackRef = useRef(null);
  const wheelLock = useRef(false);

  useEffect(() => {
    function updatePerView() {
      const w = window.innerWidth;
      setPerView(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    }
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - perView);

  function goTo(next) {
    if (next < 0) setIndex(maxIndex);
    else if (next > maxIndex) setIndex(0);
    else setIndex(next);
  }

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") goTo(index + 1);
    if (e.key === "ArrowLeft") goTo(index - 1);
  }

  function handleWheel(e) {
    if (Math.abs(e.deltaY) < 10) return;
    if (wheelLock.current) return;
    wheelLock.current = true;
    goTo(index + (e.deltaY > 0 ? 1 : -1));
    setTimeout(() => (wheelLock.current = false), 450);
  }

  const step = 100 / perView;

  return (
    <div
      className="relative"
      tabIndex={0}
      role="region"
      aria-label="Project carousel"
      onKeyDown={handleKeyDown}
      onWheel={handleWheel}
    >
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-6"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            if (info.offset.x < -60) goTo(index + 1);
            else if (info.offset.x > 60) goTo(index - 1);
          }}
          animate={{ x: `-${index * step}%` }}
          transition={{ type: "spring", stiffness: 260, damping: 32 }}
        >
          {projects.map((project) => (
            <div key={project.id} style={{ flex: `0 0 calc(${step}% - ${(6 * (perView - 1)) / perView}rem)` }}>
              <ProjectCard project={project} onOpenDetails={onOpenDetails} />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(index - 1)}
          data-cursor="hover"
          aria-label="Previous project"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
        >
          <FiChevronLeft />
        </button>

        <div className="flex items-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-gradient-to-r from-primary to-accent" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(index + 1)}
          data-cursor="hover"
          aria-label="Next project"
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
        >
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}
