import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import FloatingSkillsField from "./FloatingSkillsField";
import SkillBar from "./SkillBar";
import { skillGroups } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <SectionHeading
        method="GET"
        path="/skills"
        title="The stack I build with"
        description="Everything below gets used together — not a list of every tool I've touched once."
      />

      <div className="mx-auto mt-14 max-w-6xl px-6">
        <Reveal>
          <FloatingSkillsField />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6">
                <p className="eyebrow">{group.label}</p>
                <div className="mt-5 space-y-4">
                  {group.skills.map((skill) => (
                    <SkillBar key={skill.name} {...skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
