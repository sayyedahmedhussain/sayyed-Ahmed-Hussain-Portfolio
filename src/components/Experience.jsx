import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { experience } from "../data/experience";

const methodColor = {
  GET: "text-accent border-accent/40",
  POST: "text-primary-soft border-primary/40",
};

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section id="experience" className="relative py-28">
      <SectionHeading
        method="GET"
        path="/experience"
        title="How I got here"
        description="Read top to bottom like a request log — most recent first."
      />

      <div ref={containerRef} className="relative mx-auto mt-16 max-w-3xl px-6">
        <div className="absolute left-[27px] top-0 h-full w-px bg-white/10 sm:left-[35px]" />
        <motion.div
          style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
          className="absolute left-[27px] top-0 h-full w-px bg-gradient-to-b from-primary to-accent sm:left-[35px]"
        />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.05}>
              <div className="relative flex gap-6 pl-14 sm:gap-8 sm:pl-20">
                <span className="absolute left-[19px] top-1.5 h-4 w-4 rounded-full border-2 border-void bg-accent shadow-[0_0_12px_rgba(0,245,255,0.7)] sm:left-[27px]" />

                <div className="glass w-full rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2 font-mono text-[11px]">
                    <span className={`rounded border px-2 py-0.5 ${methodColor[item.method]}`}>
                      {item.method}
                    </span>
                    <span className="text-muted">{item.endpoint}</span>
                    <span className="ml-auto text-muted">{item.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.role}</h3>
                  <p className="font-mono text-xs text-primary-soft">{item.org}</p>
                  <p className="mt-2 text-sm text-muted">{item.summary}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
