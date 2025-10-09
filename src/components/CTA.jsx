import Container from "./ui/Container";
import Button from "./ui/Button";
import { CheckCircle2 } from "lucide-react";

export default function CTA() {
  const points = [
    "Temporary & permanent staffing",
    "Onboarding, payroll & admin",
    "Documented SLAs & reporting",
  ];
  return (
    <section className="bg-[var(--bg-primary)] py-20 lg:py-28">
      <Container variant="wide">
        <div className="grid items-center gap-12 rounded-lg bg-[var(--accent)] p-8 text-white sm:p-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Professional workforce management solutions</h2>
            <p className="text-xl text-white/90 mb-8">Learn how our labour brokerage services can support your business operations with flexible, compliant workforce solutions.</p>
            <div className="flex gap-4">
              <a href="#contact" className="inline-flex items-center bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg">
                Get information
              </a>
            </div>
          </div>
          <div className="rounded-lg border-2 border-white/20 bg-white/10 p-8 backdrop-blur">
            <ul className="space-y-4 text-lg">
              {points.map((i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="mt-1 h-6 w-6 text-white" strokeWidth={2} /> 
                  <span className="text-white font-medium">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
