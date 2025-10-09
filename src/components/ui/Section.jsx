import Container from "./Container";

/**
 * Section wrapper centralizes vertical rhythm & width variants.
 * Props:
 *  - id: anchor id
 *  - variant: container width (default|wide|full)
 *  - bleed: optional background full-bleed styling via className
 *  - className: extra classes applied to inner Container
 *  - as: semantic element override (section/default)
 */
export default function Section({ id, children, variant = "wide", className = "", innerClass = "" }) {
  return (
    <section id={id} className={className}>
      <Container variant={variant} className={`py-section-sm md:py-section ${innerClass}`}>{children}</Container>
    </section>
  );
}
