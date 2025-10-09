import Container from "./ui/Container";
import { Quote } from "lucide-react";

function TestimonialCard({ quote, name, role }) {
  return (
    <div className="relative rounded-lg border-2 border-[var(--border)] bg-[var(--bg-white)] p-8 shadow-lg hover:border-[var(--accent)] transition-all duration-300">
      <Quote className="absolute right-6 top-6 h-8 w-8 text-[var(--accent)]/20" strokeWidth={2} />
      <p className="text-[var(--text-dark)] text-lg leading-relaxed mb-6">"{quote}"</p>
      <div className="text-lg font-bold text-[var(--text-dark)]">{name}</div>
      <div className="text-base text-[var(--gray-dark)] mt-1">{role}</div>
    </div>
  );
}

export default function Testimonials() {
  const data = [
    { quote: "KLS mobilised within a day and handled all onboarding and documentation.", name: "Operations Director", role: "Manufacturing" },
    { quote: "Professional partner—clear reporting and dependable attendance.", name: "Site Manager", role: "Construction" },
    { quote: "Reliable workforce solutions with excellent compliance standards.", name: "Project Manager", role: "Logistics" },
  ];
  return (
    <section id="testimonials" className="bg-[var(--bg-primary)] py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-white)] sm:text-5xl">What clients say</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </Container>
    </section>
  );
}
