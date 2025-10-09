import Container from "./ui/Container";
import Tag from "./ui/Tag";
import { Users, Briefcase, Shield, TrendingUp, Calculator, Clock } from "lucide-react";

function Card({ title, icon: Icon, children }) {
  return (
    <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-blue-300 focus-within:border-blue-500">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 ring-1 ring-blue-100">
        <Icon className="h-6 w-6 text-blue-600" strokeWidth={2} />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{children}</p>
    </div>
  );
}

function MiniKey({ title, text }) {
  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-slate-900 mb-2">{title}</div>
      <div className="text-base text-slate-600">{text}</div>
    </div>
  );
}

export default function Services() {
  const items = [
    { 
      title: "Temporary Workforce Deployment", 
      icon: Users, 
      text: "Skilled and unskilled workers deployed within 24-48 hours. Perfect for logistics, warehousing, and seasonal manufacturing operations." 
    },
    { 
      title: "Permanent Staff Placement", 
      icon: Briefcase, 
      text: "Quality candidates screened and matched for long-term roles. Reduce hiring risk and time-to-fill with our proven recruitment process." 
    },
    { 
      title: "Compliance & Legal Advisory", 
      icon: Shield, 
      text: "Stay compliant with SA labour laws. Regular audits, documentation support, and proactive updates on regulatory changes." 
    },
    { 
      title: "Scalable Workforce Solutions", 
      icon: TrendingUp, 
      text: "Flexible workforce packages that scale with your operational demands. From project-based to seasonal scaling across Gauteng." 
    },
    { 
      title: "Payroll Administration", 
      icon: Calculator, 
      text: "Comprehensive payroll processing with statutory deductions. Accurate, timely payments with full compliance reporting." 
    },
    { 
      title: "24/7 Workforce Management", 
      icon: Clock, 
      text: "Continuous monitoring and support. Dedicated account managers ensure your workforce needs are met around the clock." 
    },
  ];

  return (
  <section id="services" className="bg-[var(--bg-white)] py-16 lg:py-24">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
            Complete workforce solutions
          </h2>
          <p className="mt-4 text-base text-[var(--muted)] leading-relaxed">
            From temporary staffing to full payroll administration, we manage the complexity so you can focus on core operations.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mb-12">
          {items.map((i) => (
            <Card key={i.title} title={i.title} icon={i.icon}>{i.text}</Card>
          ))}
        </div>
        <div className="grid gap-6 rounded-xl bg-[var(--bg-primary)]/95 p-8 sm:grid-cols-3 ring-1 ring-[var(--border)]">
          <MiniKey title="Rapid Deployment" text="24–48 hour workforce mobilisation with vetted candidates." />
          <MiniKey title="Dedicated Support" text="Account managers aligned to your operational cadence." />
          <MiniKey title="Flexible Pricing" text="Retainers, project-based & performance-aligned options." />
        </div>
      </Container>
    </section>
  );
}
