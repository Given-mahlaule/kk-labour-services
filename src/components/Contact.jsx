import Container from "./ui/Container";
import Tag from "./ui/Tag";
import Button from "./ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";

function Field({ label, textarea, className = "", ...props }) {
  const Comp = textarea ? "textarea" : "input";
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-medium text-[var(--text-dark)]">{label}</label>
      <Comp 
        className="w-full rounded-md border-2 border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-500 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200 hover:border-gray-400" 
        {...props} 
      />
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[var(--bg-primary)] py-20 lg:py-28">
      <Container variant="wide">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-[var(--accent)] tracking-wide uppercase mb-4">
            Contact Information
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-white)] sm:text-5xl mb-6">
            Discuss your workforce requirements
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
            Our team is available to discuss your labour brokerage needs and explain how our services can support your business operations across Gauteng.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Methods - Left Side */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                  <Phone className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-white">Call us directly</div>
                  <div className="text-slate-300 text-sm">081 729 7875</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                  <Mail className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-white">Email us</div>
                  <div className="text-slate-300 text-sm">info@kklabourservices.co.za</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 hover:bg-white/15 hover:border-blue-400/50 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                  <MapPin className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <div className="font-bold text-white">Gauteng office</div>
                  <div className="text-slate-300 text-sm">Covering all Gauteng areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-[var(--bg-white)] border border-[var(--border)] rounded-lg p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-2">Enquiry Form</h3>
              <p className="text-[var(--gray-dark)] mb-6">Please provide details about your workforce requirements</p>
              
              <form className="grid gap-4 sm:grid-cols-2">
                <Field label="Company Name" placeholder="Your company" />
                <Field label="Contact Person" placeholder="Your full name" />
                <Field type="email" label="Email" placeholder="you@company.co.za" className="sm:col-span-2" />
                <Field label="Phone" placeholder="081 000 0000" />
                <Field label="Workers Needed" placeholder="e.g. 15 general workers" />
                <Field textarea rows={4} label="Requirements" placeholder="Describe your workforce needs..." className="sm:col-span-2" />
                
                <div className="sm:col-span-2">
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit enquiry
                  </button>
                  <p className="mt-3 text-sm text-gray-600">We aim to respond to all enquiries within 24 hours</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
