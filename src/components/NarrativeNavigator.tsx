import React, { useState, useEffect } from "react";
import { HelpCircle, Sparkles, TrendingUp, ShieldCheck, PhoneCall, ArrowRight } from "lucide-react";

interface Step {
  id: string;
  label: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
  sectionId: string;
}

export default function NarrativeNavigator() {
  const [activeStep, setActiveStep] = useState<string>("problema");
  const [percentPlayed, setPercentPlayed] = useState<number>(0);

  const steps: Step[] = [
    {
      id: "problema",
      label: "01. PROBLEMA",
      sub: "Gargalo Comercial",
      icon: HelpCircle,
      sectionId: "inicio",
    },
    {
      id: "oportunidade",
      label: "02. OPORTUNIDADE",
      sub: "Funil & Automações",
      icon: Sparkles,
      sectionId: "servicos",
    },
    {
      id: "estrategia",
      label: "03. ESTRATÉGIA",
      sub: "Calcular ROAS",
      icon: TrendingUp,
      sectionId: "calculadora",
    },
    {
      id: "crescimento",
      label: "04. CRESCIMENTO",
      sub: "Cronograma & Cases",
      icon: ShieldCheck,
      sectionId: "metodo",
    },
    {
      id: "resultado",
      label: "05. RESULTADO",
      sub: "Gerar Diagnóstico",
      icon: PhoneCall,
      sectionId: "contato",
    },
  ];

  useEffect(() => {
    // Scroll progress handler
    const handleScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setPercentPlayed(Math.min(100, Math.round((window.scrollY / totalHeight) * 100)));
      }

      // Check current section active in view
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const step of steps) {
        const el = document.getElementById(step.sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveStep(step.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollProgress, { passive: true });
    // Run once initially
    handleScrollProgress();

    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top sticky progress ribbon (thin line under navbar) */}
      <div className="fixed top-[64px] left-0 right-0 h-[2.5px] bg-slate-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary transition-all duration-300"
          style={{ width: `${percentPlayed}%` }}
        />
      </div>

      {/* Floating Left Narrative Storytelling HUD Map (Visible only on XL screens) */}
      <div className="fixed top-28 left-4 xl:left-8 z-40 hidden xl:flex flex-col space-y-5 bg-white/70 backdrop-blur-xl border border-gray-150 p-5 rounded-2xl shadow-xl w-64 transition-all duration-300">
        <div className="space-y-1">
          <span className="text-[10px] font-black tracking-widest text-[#94a3b8] block">NARRATIVA COMERCIAL</span>
          <p className="text-xs font-black text-gray-900 flex items-center space-x-1.5">
            <span>Metodologia Skale</span>
            <span className="text-xs text-brand-primary">✦</span>
          </p>
        </div>

        {/* List of steps */}
        <div className="relative border-l border-slate-100 pl-4 space-y-4">
          {/* Active indicator line */}
          <div 
            className="absolute left-0 w-[2px] bg-brand-primary transition-all duration-300"
            style={{ 
              height: "28px", 
              top: `${steps.findIndex(s => s.id === activeStep) * 44 + 4}px` 
            }}
          />

          {steps.map((step) => {
            const Icon = step.icon;
            const isCurrent = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => handleNavigate(step.sectionId)}
                className="w-full text-left flex items-start space-x-3 transition-all duration-300 group focus:outline-none cursor-pointer"
              >
                <div 
                  className={`p-1.5 rounded-lg transition-all duration-300 flex-shrink-0 ${
                    isCurrent 
                      ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20 scale-105" 
                      : "bg-slate-50 text-gray-400 group-hover:text-brand-primary group-hover:bg-brand-primary/5"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                </div>
                <div className="space-y-0.5">
                  <span 
                    className={`block font-display text-[9px] font-black tracking-widest transition-colors ${
                      isCurrent ? "text-brand-primary" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {step.label}
                  </span>
                  <span 
                    className={`block text-xs font-bold transition-colors ${
                      isCurrent ? "text-gray-900" : "text-gray-500 group-hover:text-gray-800"
                    }`}
                  >
                    {step.sub}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Small Callout HUD */}
        <div className="pt-2 border-t border-slate-100">
          <button 
            onClick={() => handleNavigate("contato")}
            className="w-full text-[10px] font-extrabold text-brand-primary hover:text-brand-secondary flex items-center justify-between transition-colors cursor-pointer group"
          >
            <span>Diagnóstico Online</span>
            <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
}
