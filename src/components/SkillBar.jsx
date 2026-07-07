import { motion } from "framer-motion";

export default function SkillBar({ name, level }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="text-white/90">{name}</span>
        <span className="text-muted">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
