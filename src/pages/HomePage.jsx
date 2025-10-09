import Hero from "../components/Hero";
import LogosStrip from "../components/LogosStrip";
import Services from "../components/Services";
import TrustIndicators from "../components/TrustIndicators";
import About from "../components/About";
import Process from "../components/Process";
import TargetedCTA from "../components/TargetedCTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <LogosStrip />
      <div id="services">
        <Services />
      </div>
      <TrustIndicators />
      <div id="about">
        <About />
      </div>
      <Process />
      <TargetedCTA />
      <Testimonials />
      <FAQ />
      <CTA />
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}