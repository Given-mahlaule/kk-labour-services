import Container from "../components/ui/Container";
import { Heading } from "../components/ui/Heading";
import { Briefcase, Clock, Users } from "lucide-react";

export default function CareersPage() {
  return (
    <section className="bg-[var(--bg-primary)] py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
            <Briefcase className="h-8 w-8" strokeWidth={2} />
          </div>
          
          <Heading level={1} className="mb-6">
            Careers at KK Labour Services
          </Heading>
          
          <p className="text-xl text-[var(--text-secondary)] mb-8">
            Join our team and be part of a growing workforce solutions company
          </p>
          
          <div className="bg-[var(--bg-secondary)] rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-[var(--text-primary)]">
              Applications Portal
            </h2>
            <p className="text-[var(--text-secondary)] mb-6">
              This is our applications portal where you can explore career opportunities with us.
            </p>
            
            <div className="inline-flex items-center gap-2 bg-[var(--accent)] text-white px-6 py-3 rounded-lg">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Page Under Construction</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <Users className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="font-semibold mb-2">Join Our Team</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Be part of a dynamic workforce solutions company
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <Briefcase className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="font-semibold mb-2">Career Growth</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Opportunities for professional development and advancement
              </p>
            </div>
            
            <div className="bg-[var(--bg-secondary)] p-6 rounded-lg">
              <Clock className="h-8 w-8 text-[var(--accent)] mb-4" />
              <h3 className="font-semibold mb-2">Coming Soon</h3>
              <p className="text-[var(--text-secondary)] text-sm">
                Full application portal launching soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}