import { motion } from "framer-motion";

export default function SectionHeading({ method = "GET", path, title, description }) {
  const methodColor =
    {
      GET: "text-accent",
      POST: "text-primary-soft",
      PUT: "text-white",
    }[method] || "text-accent";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-2xl text-center"
    >
      <p className="eyebrow flex items-center justify-center gap-2">
        <span className={methodColor}>{method}</span>
        <span className="text-muted">{path}</span>
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-muted">{description}</p>}
    </motion.div>
  );
}
