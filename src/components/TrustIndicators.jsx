import Container from "./ui/Container";
import { Shield, Award, Users, Clock } from "lucide-react";

function TrustBadge({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-600 bg-slate-700/50 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 group-hover:bg-blue-500 transition-colors duration-300">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors">{title}</h3>
        <p className="text-sm text-slate-300">{description}</p>
      </div>
    </div>
  );
}

function StatCard({ number, label, description }) {
  return (
    <div className="text-center group">
      <div className="text-4xl font-black text-white group-hover:text-blue-300 transition-colors duration-300">{number}</div>
      <div className="mt-2 text-sm font-bold text-white">{label}</div>
      <div className="mt-1 text-xs text-slate-400">{description}</div>
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
    <section className="bg-slate-900 py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-blue-500 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-orange-500 blur-3xl"></div>
      </div>
      
      <Container variant="wide" className="relative">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Trusted by <span className="text-blue-400">businesses</span> across Gauteng
            </h2>
            <p className="mt-6 text-lg text-slate-300">
              Our commitment to excellence, compliance, and client satisfaction has established us as a leading labour brokerage partner.
            </p>
            <div className="mt-10 grid gap-6">
              {badges.map((badge) => (
                <TrustBadge key={badge.title} {...badge} />
              ))}
            </div>
          </div>
          
          <div className="rounded-3xl bg-slate-800/80 backdrop-blur-sm p-10 shadow-2xl ring-1 ring-slate-600 border border-slate-700">
            <h3 className="text-center text-2xl font-bold text-white">Our Impact</h3>
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
            
            <div className="mt-10 rounded-2xl bg-blue-900/30 p-8 text-center border border-blue-700/50">
              <h4 className="text-lg font-bold text-white">Ready to scale your workforce?</h4>
              <p className="mt-3 text-slate-300">Join our growing list of satisfied clients</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}