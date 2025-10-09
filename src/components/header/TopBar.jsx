import { Linkedin, Facebook, Twitter } from "lucide-react";
import Container from "../ui/Container";

export default function TopBar() {
  return (
    <div className="bg-black text-gray-400">
      <Container variant="wide" className="flex items-center justify-end py-1">
        <div className="flex items-center gap-4">
          <a className="hover:text-white transition-colors duration-200" href="#" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" strokeWidth={2} />
          </a>
          <a className="hover:text-white transition-colors duration-200" href="#" aria-label="Facebook">
            <Facebook className="h-4 w-4" strokeWidth={2} />
          </a>
          <a className="hover:text-white transition-colors duration-200" href="#" aria-label="Twitter">
            <Twitter className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>
      </Container>
    </div>
  );
}
