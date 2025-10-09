export default function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--brand)]/10 px-3 py-1 text-xs font-medium text-[var(--brand)] ring-1 ring-inset ring-[var(--brand)]/20">
      {children}
    </span>
  );
}
