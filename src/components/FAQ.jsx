import { useState } from "react";
import Container from "./ui/Container";
import { ChevronDown, ChevronUp } from "lucide-react";

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border border-[var(--border-light)] rounded-lg bg-white">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        onClick={onToggle}
      >
        <span className="font-semibold text-[var(--text-dark)]">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-[var(--primary-blue)]" />
        ) : (
          <ChevronDown className="h-5 w-5 text-[var(--primary-blue)]" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-[var(--text-muted-dark)] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does the platform help with compliance?",
      answer: "Our tools monitor labour regulations continuously, alerting you to any changes. We provide automated compliance checks, documentation management, and ensure your workforce management practices adhere to all South African labour laws."
    },
    {
      question: "Is there customer support available?",
      answer: "Absolutely! Our support team is available 24/7 to assist you with any questions or issues. We provide phone, email, and live chat support to ensure you get help when you need it."
    },
    {
      question: "What kind of onboarding assistance do you offer?",
      answer: "We provide a comprehensive guide and live support to ensure a smooth setup experience. Our onboarding specialists will walk you through the platform, help configure your settings, and provide training for your team."
    },
    {
      question: "How quickly can I start using the platform?",
      answer: "You can get started immediately after signing up. Our platform is designed for quick deployment, and most clients are fully operational within 24-48 hours with our guided setup process."
    },
    {
      question: "What industries do you serve?",
      answer: "We specialize in logistics, manufacturing, construction, and project-based businesses across Gauteng. Our flexible platform adapts to various industry requirements and workforce needs."
    }
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28">
      <Container variant="wide">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--text-dark)] sm:text-5xl mb-4">
            Frequent <span className="text-[var(--primary-blue)]">Questions</span>
          </h2>
          <p className="text-xl text-[var(--text-muted-dark)]">
            Get answers to common questions about our workforce management platform
          </p>
        </div>
        
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-[var(--primary-blue)]/10 rounded-lg p-8 border border-[var(--primary-blue)]/20">
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-4">Still have questions?</h3>
            <p className="text-[var(--text-muted-dark)] mb-6">
              Our team is here to help you find the perfect workforce management solution.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center bg-[var(--primary-blue)] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[var(--primary-blue)]/90 transition-all duration-200"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}