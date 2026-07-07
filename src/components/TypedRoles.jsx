import { useEffect, useState } from "react";

const roles = ["Backend Developer", "MERN Stack Developer", "Node.js Developer"];

export default function TypedRoles() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="font-mono text-accent">
      {text}
      <span className="animate-pulse-glow inline-block w-[2px] translate-y-[2px] bg-accent" style={{ height: "1em" }} aria-hidden="true" />
      <span className="sr-only">{roles[roleIndex]}</span>
    </span>
  );
}
