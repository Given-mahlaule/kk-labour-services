/**
 * Heading component for consistent typography and spacing.
 * level: 1..3 maps to visual sizes; tag adjustable via as.
 */
export function Heading({ level = 2, children, className = "" }) {
  const styles = {
    1: "text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight",
    2: "text-4xl sm:text-5xl font-black tracking-tight",
    3: "text-2xl sm:text-3xl font-bold tracking-tight",
  };
  return <h2 className={`${styles[level] || styles[2]} text-[var(--ink)] ${className}`}>{children}</h2>;
}

export function Subheading({ children, className = "" }) {
  return <p className={`mt-4 text-[var(--muted)] max-w-prose ${className}`}>{children}</p>;
}
