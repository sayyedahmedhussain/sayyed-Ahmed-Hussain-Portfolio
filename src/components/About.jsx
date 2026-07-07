import { lazy, Suspense } from "react";
import { FiServer, FiDatabase, FiLayout, FiUploadCloud } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import Counter from "./Counter";

const RotatingShape = lazy(() => import("../three/RotatingShape"));

const stats = [
  { to: 6, suffix: "", label: "Products shipped" },
  { to: 30, suffix: "+", label: "APIs built & maintained" },
  { to: 1, suffix: "yr", label: "Building on Node.js" },
  { to: 100, suffix: "%", label: "Uptime I actually mean" },
];

const focusAreas = [
  {
    icon: FiServer,
    title: "Backend",
    body: "Express APIs organized by domain, built to stay readable as they grow.",
  },
  {
    icon: FiDatabase,
    title: "Database",
    body: "MongoDB schema design that balances flexibility with fast, predictable queries.",
  },
  {
    icon: FiLayout,
    title: "Frontend",
    body: "React interfaces that consume those APIs cleanly, without leaking backend detail.",
  },
  {
    icon: FiUploadCloud,
    title: "Deployment",
    body: "CI pipelines and containerized deploys so shipping is routine, not risky.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <SectionHeading method="GET" path="/about" title="A backend developer who finishes the frontend too" />

      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-muted">
            I'm Sayyed Ahmed Hussain — a MERN stack developer who starts most projects from the
            database up. I like APIs that are boring in the best way: predictable,
            well-documented, and easy for the next engineer to pick up.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Outside of client work, I build small tools for myself and open-source
            them when they turn out useful for other people too — that's where most
            of the projects below came from.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <Counter to={s.to} suffix={s.suffix} />
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative h-72 sm:h-96">
          <Suspense fallback={null}>
            <RotatingShape className="absolute inset-0" />
          </Suspense>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {focusAreas.map((area, i) => (
          <Reveal key={area.title} delay={i * 0.08}>
            <div className="glass group relative h-full rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1">
              <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 blur transition-opacity duration-300 group-hover:opacity-20 group-hover:from-primary group-hover:to-accent" />
              <area.icon className="text-2xl text-accent" />
              <h3 className="mt-4 font-display text-lg font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm text-muted">{area.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
