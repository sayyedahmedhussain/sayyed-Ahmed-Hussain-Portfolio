import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectsCarousel from "./ProjectsCarousel";
import ProjectModal from "./ProjectModal";
import { projects } from "../data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section id="projects" className="relative py-28">
      <SectionHeading
        method="GET"
        path="/projects"
        title="Four products, start to finish"
        description="Drag, scroll, or use the arrow keys — each card opens into the full build breakdown."
      />

      <div className="mx-auto mt-16 max-w-6xl px-6">
        <Reveal>
          <ProjectsCarousel projects={projects} onOpenDetails={setActive} />
        </Reveal>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  );
}
