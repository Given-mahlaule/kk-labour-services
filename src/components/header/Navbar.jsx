import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";

const NAV = [
  { label: "Home", href: "#home", isRoute: false },
  { label: "Services", href: "#services", isRoute: false },
  { label: "About", href: "#about", isRoute: false },
  { label: "Contact", href: "#contact", isRoute: false },
  { label: "Careers", href: "https://careers.kklabourservices.com", isExternal: true },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isOnLightBackground, setIsOnLightBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Get all sections with light backgrounds
      const lightSections = [
        document.getElementById('services'),
        document.getElementById('about'), 
        document.getElementById('process'),
        // Also check for any white background elements in contact section
        ...Array.from(document.querySelectorAll('.bg-\\[var\\(--bg-white\\)\\]')),
        ...Array.from(document.querySelectorAll('.bg-white'))
      ].filter(Boolean);
      
      let isOverLightSection = false;
      
      // Check if navbar is over any light background element
      for (const section of lightSections) {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if navbar (top 80px of viewport) overlaps with light section
        if (scrollY + 80 >= sectionTop && scrollY <= sectionBottom) {
          isOverLightSection = true;
          break;
        }
      }
      
      setIsOnLightBackground(isOverLightSection);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check initial position
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-40 border-b-2 transition-all duration-300 backdrop-blur ${
      isOnLightBackground 
        ? 'border-gray-200 bg-white/95 supports-[backdrop-filter]:bg-white/90' 
        : 'border-[var(--border)] bg-[var(--bg-primary)]/95 supports-[backdrop-filter]:bg-[var(--bg-primary)]/90'
    }`}>
      <Container variant="wide" className="flex h-16 items-center justify-between">
        <a href="#home" className={`text-xl font-black tracking-tight transition-colors duration-300 ${
          isOnLightBackground ? 'text-gray-900' : 'text-[var(--text-white)]'
        }`}>
          KK <span className="text-[var(--accent)]">Labour Services</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((n) => (
            n.isExternal ? (
              <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" className={`text-sm font-bold transition-colors duration-300 ${
                isOnLightBackground 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-white)]'
              }`}>
                {n.label}
              </a>
            ) : (
              <a key={n.label} href={n.href} className={`text-sm font-bold transition-colors duration-300 ${
                isOnLightBackground 
                  ? 'text-gray-600 hover:text-gray-900' 
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-white)]'
              }`}>
                {n.label}
              </a>
            )
          ))}
          <a href="#contact" className="ml-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold px-6 py-2 rounded-lg transition-all duration-300 inline-block">
            Contact
          </a>
        </nav>

        <button aria-label="Menu" className={`md:hidden transition-colors duration-300 ${
          isOnLightBackground ? 'text-gray-900' : 'text-[var(--text-white)]'
        }`} onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className={`border-t-2 md:hidden transition-all duration-300 ${
          isOnLightBackground 
            ? 'border-gray-200 bg-white' 
            : 'border-[var(--border)] bg-[var(--bg-primary)]'
        }`}>
          <Container variant="wide" className="flex flex-col py-4">
            {NAV.map((n) => (
              n.isExternal ? (
                <a key={n.label} href={n.href} target="_blank" rel="noopener noreferrer" className={`py-3 text-base font-semibold transition-colors duration-300 ${
                  isOnLightBackground 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-white)]'
                }`}>
                  {n.label}
                </a>
              ) : (
                <a key={n.label} href={n.href} className={`py-3 text-base font-semibold transition-colors duration-300 ${
                  isOnLightBackground 
                    ? 'text-gray-600 hover:text-gray-900' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-white)]'
                }`}>
                  {n.label}
                </a>
              )
            ))}
            <a href="#contact" className="mt-4 w-full justify-center bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold py-3 rounded-lg text-center block">
              Contact
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
