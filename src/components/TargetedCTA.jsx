import Container from "./ui/Container";
import Button from "./ui/Button";
import { ArrowRight, Building2, Truck, Factory } from "lucide-react";

function ClientCard({ icon: Icon, title, description, audience, ctaText }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand)]/10">
        <Icon className="h-7 w-7 text-[var(--brand)]" />
      </div>
      <h3 className="text-xl font-bold text-[var(--ink)]">{title}</h3>
      <p className="mt-3 text-[var(--muted)]">{description}</p>
      <div className="mt-4 text-sm font-medium text-[var(--brand)]">{audience}</div>
      <div className="mt-6">
        <Button href="#contact" variant="ghost" size="sm" icon={ArrowRight}>
          {ctaText}
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition group-hover:ring-slate-300" />
    </div>
  );
}

export default function TargetedCTA() {
  const clientSegments = [
    {
      icon: Building2,
      title: "Small to Medium Enterprises",
      description: "Flexible workforce solutions that scale with your business growth. From temporary staffing to complete payroll administration.",
      audience: "Perfect for: Growing businesses, seasonal operations",
      ctaText: "Get SME solutions"
    },
    {
      icon: Truck,
      title: "Logistics & Warehousing",
      description: "Rapid deployment of skilled workers for peak periods, inventory management, and distribution operations.",
      audience: "Perfect for: Distribution centers, freight companies",
      ctaText: "Scale logistics team"
    },
    {
      icon: Factory,
      title: "Manufacturing Operations",
      description: "Skilled and unskilled workers for production lines, quality control, and seasonal manufacturing demands.",
      audience: "Perfect for: Production facilities, project-based manufacturing",
      ctaText: "Boost production capacity"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black tracking-tight text-[var(--ink)] sm:text-4xl">
            Tailored solutions for every industry
          </h2>
          <p className="mt-4 text-lg text-[var(--muted)]">
            Whether you're a growing SME or an established enterprise, we have the workforce solutions to match your specific needs.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {clientSegments.map((segment) => (
            <ClientCard key={segment.title} {...segment} />
          ))}
        </div>
        
        <div className="mt-16 rounded-3xl bg-[var(--brand)] p-8 text-center text-white lg:p-12">
          <h3 className="text-2xl font-bold">Not sure which solution fits your needs?</h3>
          <p className="mt-3 text-lg opacity-90">
            Our workforce specialists will assess your requirements and recommend the perfect solution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all duration-200">
              Schedule consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="tel:+27817297875" className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition-all duration-200">
              Call us now
            </a>
          </div>
          <div className="mt-6 text-sm opacity-75">
            Free consultation • No obligation • Response within 24 hours
          </div>
        </div>
      </Container>
    </section>
  );
}