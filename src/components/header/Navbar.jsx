import { useState } from "react";
import { Menu, X, Linkedin, Facebook, Twitter } from "lucide-react";
import Container from "../ui/Container";
import logoJpg from '../../assets/logo.jpg';
import { handleCareersClick } from "../../utils/navigation";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Careers", href: "#", isExternal: true, onClick: handleCareersClick },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black border-b border-gray-800">
      {/* Social Media Bar */}
      <div className="bg-black">
        <Container variant="wide" className="flex items-center justify-end py-1">
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition-colors duration-200 text-gray-400" href="#" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" strokeWidth={2} />
            </a>
            <a className="hover:text-white transition-colors duration-200 text-gray-400" href="#" aria-label="Facebook">
              <Facebook className="h-4 w-4" strokeWidth={2} />
            </a>
            <a className="hover:text-white transition-colors duration-200 text-gray-400" href="#" aria-label="Twitter">
              <Twitter className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </Container>
      </div>
      
      {/* Main Navigation */}
      <Container variant="wide" className="flex h-20 items-center justify-between">
        
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img 
            src={logoJpg} 
            alt="KK Labour Services" 
            className="h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            item.isExternal ? (
              <button 
                key={item.label} 
                onClick={item.onClick}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            )
          ))}
          
          {/* CTA Button */}
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Get Quote
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden border-t border-gray-800 bg-black">
          <Container variant="wide" className="py-4">
            <nav className="flex flex-col gap-4">
              {NAV.map((item) => (
                item.isExternal ? (
                  <button 
                    key={item.label} 
                    onClick={(e) => {
                      item.onClick(e);
                      setOpen(false);
                    }}
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <a 
                    key={item.label} 
                    href={item.href} 
                    className="text-base font-medium text-gray-300 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              <a 
                href="#contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors mt-2"
                onClick={() => setOpen(false)}
              >
                Get Quote
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
