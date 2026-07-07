import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative pt-24">
      <svg
        className="absolute -top-1 left-0 w-full text-panel"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          fill="currentColor"
          fillOpacity="0.5"
          d="M0,32 C240,80 480,0 720,24 C960,48 1200,96 1440,40 L1440,80 L0,80 Z"
        />
      </svg>

      <div className="relative bg-panel/60">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_50%_0%,rgba(145,94,255,0.18),transparent_70%)]" />

        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col items-center gap-6 text-center">
            <span className="font-display text-2xl font-bold">
              <span className="text-gradient">Sayyed </span>Ahmed Hussain
            </span>
            <p className="max-w-sm text-sm text-muted">
              Backend-leaning MERN developer, building APIs and products people
              can rely on.
            </p>

            <div className="flex gap-3">
              <a
                href="https://github.com/sayyedahmedhussain"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                aria-label="GitHub"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-accent hover:text-accent"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sayyed-ahmed-hussain-626914293/"
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                aria-label="LinkedIn"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-accent hover:text-accent"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:sayyedahmedhussain6@gmail.com"
                data-cursor="hover"
                aria-label="Email"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-colors hover:border-accent hover:text-accent"
              >
                <FiMail />
              </a>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row">
            <p className="font-mono">© {new Date().getFullYear()} Sayyed Ahmed Hussain. 200 OK.</p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-cursor="hover"
              aria-label="Back to top"
              className="focus-ring flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 font-mono transition-colors hover:border-accent hover:text-accent"
            >
              Back to top <FiArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
