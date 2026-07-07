export const skillGroups = [
  {
    label: "Runtime & Backend",
    skills: [
      { name: "Node.js", level: 92 },
      { name: "Express", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "JWT / Auth", level: 85 },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "MongoDB", level: 88 },
      { name: "Mongoose", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    label: "Frontend",
    skills: [
      { name: "React", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 82 },
    ],
  },
  {
    label: "Tooling & Ops",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Render", level: 78 },
      { name: "Vercel", level: 80 },
    ],
  },
];

// Flat list used for the floating skill field in the hero/skills section.
export const floatingSkills = skillGroups.flatMap((g) => g.skills.map((s) => s.name));
