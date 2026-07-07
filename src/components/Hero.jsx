import { lazy, Suspense, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";
import TypedRoles from "./TypedRoles";
import { useIsMobile } from "../hooks/useIsMobile";

const HeroScene = lazy(() => import("../three/HeroScene"));

export default function Hero() {
  const isMobile = useIsMobile();
  const photoRef = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });

  function handlePointerMove(e) {
    const rect = photoRef.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <Suspense fallback={<div className="absolute inset-0 bg-void" />}>
        <HeroScene reduceEffects={isMobile} />
      </Suspense>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void" />

      {/* Animated Profile Picture */}
   <motion.div
  ref={photoRef}
  onPointerMove={handlePointerMove}
  onPointerLeave={handlePointerLeave}
  style={{ rotateX, rotateY, transformPerspective: 900 }}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
 className="absolute left-6 top-20 z-20 sm:left-10 sm:top-24 md:left-16 md:top-28 lg:left-24 lg:top-24"
>
  {/* Pulsing Glow */}
  <motion.div
    className="absolute -inset-6 rounded-full blur-2xl"
    style={{
      background:
        "radial-gradient(circle, var(--color-primary), var(--color-accent))",
    }}
    animate={{
      opacity: [0.35, 0.8, 0.35],
      scale: [1, 1.08, 1],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Floating Container */}
  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative"
  >
    {/* Outer Rotating Ring */}
    <motion.div
      className="absolute -inset-2 rounded-full"
      style={{
        background:
          "conic-gradient(from 0deg, var(--color-primary), var(--color-accent), var(--color-primary))",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Second Rotating Ring */}
    <motion.div
      className="absolute -inset-3 rounded-full opacity-60 blur-sm"
      style={{
        background:
          "conic-gradient(from 180deg, var(--color-accent), transparent, var(--color-primary))",
      }}
      animate={{ rotate: -360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />

    {/* Profile Image */}
    <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_0_40px_rgba(145,94,255,0.35)] sm:h-40 sm:w-40 md:h-52 md:w-52">
      <motion.img
        src="/uploads/sah-profile.jpg"
        alt="Sayyed Ahmed Hussain"
        className="h-full w-full object-cover"
        whileHover={{
          scale: 1.08,
        }}
        transition={{
          duration: 0.4,
        }}
      />
    </div>

    {/* Floating Status Badge */}
    <motion.div
      className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 backdrop-blur-md"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
        <span className="text-[10px] font-medium whitespace-nowrap text-white sm:text-xs">
          Available for Work
        </span>
      </div>
    </motion.div>
  </motion.div>
</motion.div>
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="eyebrow"
        >
          $ whoamiF
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
        >
          Hi, I'm <span className="text-gradient">Sayyed Ahmed Hussain</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-5 h-8 font-display text-xl text-muted sm:text-2xl"
        >
          <TypedRoles />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="mt-6 max-w-xl text-muted"
        >
          I design and ship reliable APIs and full-stack products on the MERN
          stack — from schema to deployment, with an eye for the details
          recruiters and teammates actually notice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="/resume.pdf"
            download
            data-cursor="hover"
            className="focus-ring group relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 font-mono text-sm font-semibold text-void"
          >
            <span className="relative z-10 flex items-center gap-2">
              <FiDownload /> Download Resume
            </span>
          </a>
          <a
            href="#projects"
            data-cursor="hover"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="focus-ring rounded-full border border-white/15 px-6 py-3 font-mono text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
          >
            View Projects
          </a>

          <div className="ml-1 flex items-center gap-3">
            <a
              href="https://github.com/sayyedahmedhussain"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="GitHub"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sayyed-ahmed-hussain-626914293/"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              aria-label="LinkedIn"
              className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-lg transition-colors hover:border-accent hover:text-accent"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
        }}
        data-cursor="hover"
        className="focus-ring absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-label="Scroll to About section"
      >
        <span className="font-mono text-[11px]">scroll</span>
        <FiArrowDown />
      </motion.a>
    </section>
  );
}