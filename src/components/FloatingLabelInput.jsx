export default function FloatingLabelInput({
  id,
  label,
  type = "text",
  as = "input",
  value,
  onChange,
  error,
  rows,
}) {
  const Component = as;

  return (
    <div className="relative">
      <Component
        id={id}
        name={id}
        type={as === "input" ? type : undefined}
        rows={as === "textarea" ? rows || 5 : undefined}
        value={value}
        onChange={onChange}
        placeholder=" "
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`focus-ring peer w-full resize-none rounded-xl border bg-white/[0.03] px-4 pb-2.5 pt-5 text-sm text-white outline-none transition-colors placeholder:text-transparent ${
          error ? "border-red-400/60" : "border-white/10 focus:border-accent/60"
        }`}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-3.5 font-mono text-xs text-muted transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-accent peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
      >
        {label}
      </label>
      {error && (
        <p id={`${id}-error`} className="mt-1.5 font-mono text-[11px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
