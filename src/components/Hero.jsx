import Tag from "./ui/Tag";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative bg-[var(--bg-primary)] overflow-hidden">
      {/* Single subtle background element */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-primary)] to-[var(--bg-secondary)]"></div>
      
      <Container variant="wide" className="relative py-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="text-sm font-semibold text-[var(--accent)] tracking-wide uppercase mb-6">
              Labour Brokerage • Gauteng
            </div>
            
            <h1 className="text-5xl font-bold leading-tight tracking-tight text-[var(--text-white)] sm:text-6xl lg:text-7xl mb-6">
              Professional workforce management for business growth
            </h1>
            
            <p className="text-xl leading-relaxed text-[var(--text-secondary)] max-w-2xl mb-10">
              We specialize in labour brokerage, payroll administration, and compliance management for logistics, manufacturing, and project-based businesses across Gauteng. Our experienced team handles the complexity of workforce management so you can focus on your core operations.
            </p>
            
            <div className="flex items-center gap-4">
              <Button 
                href="#services" 
                className="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg"
              >
                Our services
              </Button>
              <Button 
                href="#about" 
                variant="ghost" 
                className="border-2 border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-white)] hover:border-[var(--accent)] px-8 py-4 rounded-lg transition-all duration-300"
              >
                Learn more
              </Button>
            </div>
            
            {/* Professional credentials stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--text-white)] mb-1">Licensed</div>
                <div className="text-sm text-[var(--text-secondary)]">Labour broker</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--text-white)] mb-1">Compliant</div>
                <div className="text-sm text-[var(--text-secondary)]">SA labour laws</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[var(--text-white)] mb-1">Gauteng</div>
                <div className="text-sm text-[var(--text-secondary)]">Coverage</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:col-span-6 xl:col-span-7">
            <div className="aspect-[5/3] w-full overflow-hidden rounded-lg bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1800&auto=format&fit=crop')] bg-cover bg-center">
              {/* Simple overlay for contrast */}
              <div className="absolute inset-0 bg-[var(--bg-primary)]/20"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
