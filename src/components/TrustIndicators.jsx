import Container from "./ui/Container";
import { Shield, Award, Users, Clock } from "lucide-react";

function TrustBadge({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[var(--surface)] p-6 shadow-xl hover-lift group animate-fade-in-up">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-[var(--bg-primary)]" />
      </div>
      <div>
        <h3 className="font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">{title}</h3>
        <p className="text-sm text-[var(--text-secondary)]">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label, description }) {
  return (
    <div className="text-center group hover-lift">
      <div className="text-4xl font-black text-gradient-accent group-hover:scale-110 transition-transform duration-300">{number}</div>
      <div className="mt-2 text-sm font-bold text-[var(--text-primary)]">{label}</div>
      <div className="mt-1 text-xs text-[var(--text-muted)]">{description}</div>
    </div>
  );
}

export default function TrustIndicators() {
  const badges = [
    {
      icon: Shield,
      title: "Fully Licensed",
      description: "Compliant with all SA labour legislation"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "Registered labour broker with proven track record"
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Dedicated professionals with industry expertise"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock workforce management"
    }
  ];

  return (
    <section className="bg-[var(--bg-primary)] py-20 lg:py-28 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[var(--accent)]/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-[var(--brand)]/10 blur-3xl animate-pulse stagger-2"></div>
      </div>
      
      <Container variant="wide" className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-black tracking-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-gradient-accent">businesses</span> across Gauteng
            </h2>
            <p className="mt-6 text-lg text-[var(--text-secondary)]">
              Our commitment to excellence, compliance, and client satisfaction has established us as a leading labour brokerage partner.
            </p>
            <div className="mt-10 grid gap-6">
              {badges.map((badge, index) => (
                <div key={badge.title} className={`stagger-${index + 1}`}>
                  <TrustBadge {...badge} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-[var(--surface)] to-[var(--surface-light)] p-10 shadow-2xl ring-1 ring-white/10 animate-slide-in-right">
            <h3 className="text-center text-2xl font-bold text-[var(--text-primary)]">Our Impact</h3>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <StatCard 
                number="500+" 
                label="Placements" 
                description="Successful workforce deployments"
              />
              <StatCard 
                number="50+" 
                label="Clients" 
                description="Businesses served across sectors"
              />
              <StatCard 
                number="24hrs" 
                label="Response Time" 
                description="Average deployment speed"
              />
              <StatCard 
                number="100%" 
                label="Compliance" 
                description="Legal adherence rate"
              />
            </div>
            
            <div className="mt-10 rounded-2xl bg-gradient-to-r from-[var(--accent)]/10 to-[var(--brand)]/10 p-8 text-center border border-[var(--accent)]/20">
              <h4 className="text-lg font-bold text-[var(--text-primary)]">Ready to scale your workforce?</h4>
              <p className="mt-3 text-[var(--text-secondary)]">Join our growing list of satisfied clients</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}