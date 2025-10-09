import { Linkedin, Facebook, Twitter } from "lucide-react";
import Container from "../ui/Container";

export default function TopBar() {
  return (
    <div className="bg-[var(--bg-primary)] text-[var(--text-secondary)]">
      <Container variant="wide" className="flex items-center justify-end py-3">
        <div className="flex items-center gap-4">
          <a className="hover:text-[var(--text-white)] transition-colors duration-200" href="#" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" strokeWidth={2} />
          </a>
          <a className="hover:text-[var(--text-white)] transition-colors duration-200" href="#" aria-label="Facebook">
            <Facebook className="h-4 w-4" strokeWidth={2} />
          </a>
          <a className="hover:text-[var(--text-white)] transition-colors duration-200" href="#" aria-label="Twitter">
            <Twitter className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </Container>
    </div>
  );
}
