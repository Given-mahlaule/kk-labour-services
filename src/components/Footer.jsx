import Container from "./ui/Container";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container variant="wide" className="grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <a href="#home" className="text-2xl font-black tracking-tight text-slate-900">
            KK <span className="text-blue-600">Labour Services</span>
          </a>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Your trusted partner for flexible, compliant workforce solutions across Gauteng. 
            Building stronger businesses through quality staffing.
          </p>
        </div>
        
        <div>
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Quick Links</div>
          <ul className="space-y-3">
            <li><a className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group" href="#about">
              <span className="w-1 h-1 bg-blue-600 rounded-full mr-3"></span>
              About Us
            </a></li>
            <li><a className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group" href="#services">
              <span className="w-1 h-1 bg-blue-600 rounded-full mr-3"></span>
              Our Services
            </a></li>
            <li><a className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group" href="#process">
              <span className="w-1 h-1 bg-blue-600 rounded-full mr-3"></span>
              How We Work
            </a></li>
            <li><a className="text-slate-600 hover:text-slate-900 transition-colors duration-200 flex items-center group" href="#contact">
              <span className="w-1 h-1 bg-blue-600 rounded-full mr-3"></span>
              Contact Us
            </a></li>
          </ul>
        </div>
        
        <div>
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Our Services</div>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center">
              <div className="w-1 h-1 bg-blue-600 rounded-full mr-3"></div>
              Temporary Staffing
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-blue-600 rounded-full mr-3"></div>
              Permanent Placement
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-blue-600 rounded-full mr-3"></div>
              Compliance Advisory
            </li>
            <li className="flex items-center">
              <div className="w-1 h-1 bg-blue-600 rounded-full mr-3"></div>
              Payroll & Administration
            </li>
          </ul>
        </div>
        
        <div>
          <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-4">Get In Touch</div>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Call us</div>
                <div className="font-medium">081 729 7875</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600 hover:text-slate-900 transition-colors duration-200 cursor-pointer group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors duration-200">
                <Mail className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Email us</div>
                <div className="font-medium">tmkhosa@gmail.com</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                <MapPin className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-slate-500">Location</div>
                <div className="font-medium">Heatherdale AH, Pretoria</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <div className="border-t border-slate-100">
        <Container variant="wide" className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <div className="flex items-center gap-4">
            <p className="text-slate-500">© {new Date().getFullYear()} KK Labour Services. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <span className="text-sm">Trusted workforce solutions since 2020</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
