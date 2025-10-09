import Container from "./ui/Container";
import { Building2, Shield, Users, TrendingUp } from "lucide-react";

export default function About() {
  const industries = [
    {
      icon: Building2,
      title: "Logistics & Warehousing",
      description: "Skilled workers for peak periods, inventory management, and distribution operations with rapid deployment capabilities."
    },
    {
      icon: TrendingUp, 
      title: "Manufacturing Operations",
      description: "Seasonal workforce solutions for production lines, quality control, and project-based manufacturing demands."
    },
    {
      icon: Users,
      title: "Project-Based Businesses", 
      description: "Flexible workforce packages that scale with your operational calendar and project requirements."
    }
  ];

  return (
    <section id="about" className="bg-[var(--bg-white)] py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="text-sm font-bold text-[var(--accent)] tracking-wide uppercase mb-4">
            About KK Labour Services
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-dark)] sm:text-5xl mb-6">
            Professional labour brokerage expertise across Gauteng
          </h2>
          <p className="text-lg text-[var(--gray-dark)] leading-relaxed">
            We are a licensed labour brokerage company specializing in workforce management, payroll administration, and compliance services. Our team of experienced professionals helps businesses maintain operational efficiency while ensuring full adherence to South African labour legislation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {industries.map((industry) => (
            <div key={industry.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                <industry.icon className="h-8 w-8" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-dark)] mb-4">{industry.title}</h3>
              <p className="text-[var(--gray-dark)] leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--bg-primary)] rounded-lg p-8 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
            <Shield className="h-8 w-8" strokeWidth={2} />
          </div>
          <h3 className="text-2xl font-bold text-[var(--text-white)] mb-4">Licensed & Compliant Operations</h3>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-2xl mx-auto">
            Our operations are fully licensed under South African labour legislation. We maintain strict compliance standards, provide regular updates on regulatory changes, and ensure all workforce deployments meet legal requirements.
          </p>
        </div>
      </Container>
    </section>
  );
}
