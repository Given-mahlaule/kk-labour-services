export default function Button({ children, href = "#", variant = "primary", className = "", icon: Icon }) {
  const base =
    "group inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:pointer-events-none";
  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow",
    ghost:
      "text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus-visible:bg-[var(--accent)]",
    subtle:
      "bg-white text-[var(--ink)] border border-[var(--border-strong)] hover:border-[var(--accent)] hover:bg-[var(--accent)]/5",
    outline:
      "border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
  };
  return (
    <a href={href} className={`${base} ${variants[variant] || variants.primary} ${className}`}>
      {children}
      {Icon && <Icon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />}
    </a>
  );
}
