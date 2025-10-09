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
    { 
      quote: "Fantastic tool for flexible workforce management! We've streamlined our entire hiring process.", 
      name: "Alex P.", 
      role: "Operations Manager" 
    },
    { 
      quote: "We've cut scheduling time in half. The automation features are incredible.", 
      name: "Sarah L.", 
      role: "HR Director" 
    },
    { 
      quote: "The compliance monitoring gives us peace of mind. No more worrying about regulations.", 
      name: "Michael R.", 
      role: "Facilities Manager" 
    },
  ];
  return (
    <section id="testimonials" className="bg-[var(--bg-primary)] py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-white)] sm:text-5xl">
            Trusted by <span className="text-[var(--primary-yellow)]">Industry Leaders</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] mt-4">
            See what our clients say about transforming their workforce management
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {data.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </Container>
    </section>
  );
}
