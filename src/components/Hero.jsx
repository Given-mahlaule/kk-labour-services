import Container from "./ui/Container";
import Button from "./ui/Button";
import { Users, Briefcase, Clock, ClipboardList } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative bg-slate-900 text-white">
      {/* Clean professional gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-slate-900"></div>
      
      <Container variant="wide" className="relative py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Column */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Empower Your 
              <span className="text-blue-400 block">Workforce Management</span>
              Today
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Comprehensive labour services and workforce solutions that streamline operations, 
              reduce costs, and drive business growth across all industries.
            </p>
            
            {/* Clean CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                href="#services"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Services
              </Button>
              <Button 
                href="#contact"
                className="border border-slate-300 text-slate-300 hover:bg-white hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Rotating Workforce Hub Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Workforce Management Hub */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
                {/* Central KK Logo */}
                <div className="relative z-10 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-2xl">KK</span>
                </div>
                
                {/* Orbiting Icons Container */}
                <div className="absolute inset-0 animate-slow-spin">
                  {/* Connection Ring */}
                  <div className="absolute inset-8 border-2 border-blue-400/30 rounded-full"></div>
                  
                  {/* Orbiting Service Icons */}
                  {/* People Icon - Top */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Briefcase Icon - Right */}
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Clock Icon - Bottom */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Clipboard Icon - Left */}
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <ClipboardList className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Background Effects */}
                <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-3xl"></div>
                <div className="absolute inset-12 bg-white/5 rounded-full blur-2xl"></div>
              </div>
              
              {/* Hub Description */}
              <div className="text-center mt-6">
                <h3 className="text-lg font-semibold text-white mb-2">Workforce Management Hub</h3>
                <p className="text-slate-300 text-sm">Connecting talent with opportunity</p>
              </div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
