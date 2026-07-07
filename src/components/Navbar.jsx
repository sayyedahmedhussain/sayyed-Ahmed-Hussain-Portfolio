import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "experience", href: "#experience" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  function handleClick(e, href) {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          data-cursor="hover"
          className="focus-ring relative rounded-full border border-white/10 px-4 py-2 font-display text-sm font-semibold"
          style={{
            background: scrolled ? "rgba(5,8,22,0.6)" : "transparent",
            backdropFilter: scrolled ? "blur(16px)" : "none",
          }}
        >
          <span className="text-gradient">S</span>AH
          {scrolled && (
            <span className="pointer-events-none absolute inset-0 rounded-full border border-transparent [background:linear-gradient(90deg,#915eff,#00f5ff)_border-box] opacity-20" />
          )}
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full border border-white/10 px-2 py-2 font-mono text-xs md:flex ${
            scrolled ? "glass" : "bg-white/[0.03] backdrop-blur-md"
          }`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-cursor="hover"
              onClick={(e) => handleClick(e, link.href)}
              className="focus-ring relative rounded-full px-4 py-2 text-muted transition-colors hover:text-white"
            >
              {active === link.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 rounded-full bg-white/8"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          onClick={(e) => handleClick(e, "#contact")}
          data-cursor="hover"
          className="focus-ring hidden rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 font-mono text-xs font-semibold text-void md:block"
        >
          POST /contact
        </a>

        <button
          className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-[1.5px] w-5 bg-white transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="glass mx-4 mt-3 flex flex-col rounded-2xl p-2 font-mono text-sm md:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="focus-ring rounded-xl px-4 py-3 text-muted hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
