const snippets = [
  "app.use(express.json())",
  "router.post('/api/auth')",
  "await Model.findById(id)",
  "const token = jwt.sign(...)",
  "app.listen(PORT)",
  "mongoose.connect(uri)",
];

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-void" />
      <div className="animate-pulse-glow absolute -left-40 top-[20%] h-96 w-96 rounded-full bg-primary/20" />
      <div
        className="animate-pulse-glow absolute -right-40 top-[60%] h-96 w-96 rounded-full bg-accent/15"
        style={{ animationDelay: "1.5s" }}
      />

      {snippets.map((s, i) => (
        <span
          key={s}
          className="animate-float-slow absolute whitespace-nowrap font-mono text-[11px] text-white/[0.06]"
          style={{
            left: `${(i * 17 + 6) % 92}%`,
            top: `${(i * 29 + 10) % 90}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {s}
        </span>
      ))}
    </div>
  );
}
