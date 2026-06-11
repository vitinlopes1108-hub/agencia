import { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import Navbar from "./components/Navbar";
import NarrativeNavigator from "./components/NarrativeNavigator";
import Hero from "./components/Hero";
import PainPoints from "./components/PainPoints";
import Services from "./components/Services";
import AutomationShowcase from "./components/AutomationShowcase";
import RoiCalculator from "./components/RoiCalculator";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [showToast, setShowToast] = useState(false);
  const [showFloatBtn, setShowFloatBtn] = useState(false);

  // Monitor scroll height to trigger floating contact trigger
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setShowFloatBtn(true);
      } else {
        setShowFloatBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenForm = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSuccessForm = () => {
    setShowToast(true);
    // Dismiss toast after 7s
    setTimeout(() => {
      setShowToast(false);
    }, 7000);
  };

  return (
    <div className="bg-white min-h-screen text-gray-950 overflow-x-hidden selection:bg-brand-primary selection:text-white">
      {/* Floating Header */}
      <Navbar onOpenForm={handleOpenForm} />

      {/* Narrative Storytelling HUD Map Progress Indicator */}
      <NarrativeNavigator />

      {/* Main content elements */}
      <main>
        {/* Hero Section */}
        <Hero onOpenForm={handleOpenForm} />

        {/* Storytelling stage 1: Problema (The Silent Leaks) */}
        <PainPoints />

        {/* Dynamic Services Bento-Grid Section */}
        <Services />

        {/* Animated flow-life cycle automation simulation */}
        <AutomationShowcase />

        {/* ROAS & Conversion ROI Slider Calculator */}
        <RoiCalculator />

        {/* Chronological Escalation Methodology timelines */}
        <Methodology />

        {/* Real Performance Evidence & Reviews test cases */}
        <Testimonials />

        {/* Lead qualifier / strategy call conversational booking form */}
        <ContactForm onSuccess={handleSuccessForm} />

        {/* Intuitive FAQs list accordions */}
        <Faq />
      </main>

      {/* Structured Agency footer credentials */}
      <Footer />

      {/* FLOATING ACTION BOTTOM CORNER TELEMETRY TRIGGER */}
      {showFloatBtn && (
        <button
          id="floating-cta"
          onClick={handleOpenForm}
          className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-primary text-white font-bold text-xs sm:text-sm px-5 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 animate-bounce cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>Fazer Meu Diagnóstico Grátis</span>
        </button>
      )}

      {/* TOAST SUCCESS NOTIFIER POP-UP ON REPORT GENERATION */}
      {showToast && (
        <div
          id="toast-success"
          className="fixed top-24 right-4 sm:right-6 z-50 max-w-sm w-full bg-white border border-gray-150 rounded-2xl p-4 shadow-xl flex items-start space-x-3.5 animate-bounce animate-duration-500"
        >
          <div className="p-1.5 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="flex-grow">
            <h5 className="text-xs font-bold font-display text-gray-900">Relatório Compilado!</h5>
            <p className="text-[10px] text-gray-550 leading-normal mt-0.5">
              Clique no botão verde de WhatsApp na caixa abaixo para enviar suas respostas diretamente aos estrategistas Assessoria Skale e reservar sua data gratuita de reunião!
            </p>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-gray-400 hover:text-gray-800 transition cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
