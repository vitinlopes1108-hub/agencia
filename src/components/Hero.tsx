import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles, Shield, UserCheck, Bot } from "lucide-react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

function AnimatedCounter({
  value,
  duration = 1800,
  prefix = "",
  suffix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(progress * value);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    const animId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animId);
  }, [value, duration]);

  const formatted = count.toFixed(decimals);
  
  // Format with Brazilian localized dot separators for thousands, and comma for decimals
  const parts = formatted.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const finalValue = parts.join(",");

  return (
    <span>
      {prefix}
      {finalValue}
      {suffix}
    </span>
  );
}

interface HeroProps {
  onOpenForm: () => void;
}

export default function Hero({ onOpenForm }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-brand-primary/10 blur-[120px] pointer-events-none animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-secondary/10 blur-[150px] pointer-events-none animate-pulse" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(26,109,217,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(26,109,217,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-brand-primary" />
              <span className="text-xs sm:text-sm font-semibold text-brand-primary tracking-wide uppercase">
                Assessoria e Escala Previsível
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight"
            >
              Multiplique as vendas da sua empresa com{" "}
              <span className="bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary bg-clip-text text-transparent">
                Tráfego Pago
              </span>{" "}
              e{" "}
              <span className="bg-gradient-to-r from-brand-secondary to-brand-primary bg-clip-text text-transparent">
                Automação Inteligente
              </span>
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Criamos estruturação de tráfego, automações personalizadas nos DMs
              e WhatsApp, campanhas otimizadas e funis de conversão de alta
              escala para transformar cliques em faturamento real.
            </motion.p>

            {/* Trust Bulletpoints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0 text-left"
            >
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-bold">Funis de Alta Conversão</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-bold font-display">Automações de Vendas robustas</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-bold">Otimização semanal minuciosa</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700">
                <CheckCircle2 className="h-5 w-5 text-brand-primary flex-shrink-0" />
                <span className="text-sm font-bold">Organização de Instagram & Criativos</span>
              </div>
            </motion.div>

            {/* Actions CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                id="hero-primary-cta"
                onClick={onOpenForm}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-base transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-brand-primary/20 cursor-pointer"
              >
                <span>Diagnóstico de Escala Grátis</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <a
                href="#calculadora"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white border border-gray-200 hover:border-brand-primary/40 text-gray-700 hover:text-brand-primary text-base font-semibold transition-all shadow-sm"
              >
                <span>Calcular Meu ROAS</span>
                <TrendingUp className="h-5 w-5 text-brand-primary" />
              </a>
            </motion.div>
          </div>

          {/* Interactive Visual Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            {/* Background glowing rings */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary opacity-20 blur-2xl pointer-events-none" />

            {/* Asymmetrical out-of-boundary details */}
            <div className="absolute -top-6 -left-4 z-20 bg-emerald-500 text-white font-mono text-[10px] font-black tracking-wider px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 border border-emerald-400 -rotate-2 select-none animate-bounce">
              <Sparkles className="h-3.5 w-3.5 text-emerald-100 animate-pulse" />
              <span>ROAS ATINGIDO: 8.9x</span>
            </div>

            <div className="absolute -bottom-6 -right-4 z-20 bg-gray-900 text-white font-mono text-[10px] font-black tracking-wider px-3.5 py-2 rounded-xl shadow-lg flex items-center space-x-1.5 border border-gray-800 rotate-2 select-none hover:scale-105 transition-transform duration-300">
              <Bot className="h-3.5 w-3.5 text-brand-secondary animate-pulse" />
              <span>MANYCHAT: AUTO-LEAD ATIVO</span>
            </div>

            {/* Dashboard Device Mockup with tilt effect */}
            <div className="relative rounded-3xl bg-white border border-brand-primary/10 p-6 sm:p-7 shadow-2xl overflow-hidden bg-gradient-to-tr from-white to-slate-50 transform lg:rotate-2 lg:hover:rotate-0 transition-transform duration-500">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-xs font-mono text-gray-400 font-medium tracking-tight">skale.agency.crm</div>
                <div className="h-4.5 w-4.5 bg-emerald-500 rounded-full animate-ping opacity-25" />
              </div>

              {/* CRM / Ads Performance Metrics Visuals */}
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex justify-between items-center mb-1 font-display">
                    <span>Faturamento Mensal Sob Escala</span>
                    <span className="text-emerald-600 font-extrabold tracking-normal">+284%</span>
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-gray-950 tracking-tight">
                    <AnimatedCounter value={143520.38} prefix="R$ " decimals={2} />
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary w-[82%] rounded-full transition-all duration-1000" />
                </div>

                {/* Performance stats mini grid */}
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-gray-100 hover:border-brand-primary/20 transition-colors">
                    <span className="text-[10px] text-gray-455 font-bold uppercase tracking-widest font-display block mb-1">ROAS Médio</span>
                    <p className="text-xl font-black text-brand-primary">
                      <AnimatedCounter value={7.84} suffix="x" decimals={2} />
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-gray-100 hover:border-brand-primary/20 transition-colors">
                    <span className="text-[10px] text-gray-455 font-bold uppercase tracking-widest font-display block mb-1">CPA Gerado</span>
                    <p className="text-xl font-black text-gray-950">
                      <AnimatedCounter value={14.20} prefix="R$ " decimals={2} />
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-gray-100 hover:border-brand-primary/20 transition-colors">
                    <span className="text-[10px] text-gray-455 font-bold uppercase tracking-widest font-display block mb-1">Leads Qualificados</span>
                    <p className="text-xl font-black text-brand-primary">
                      <AnimatedCounter value={4280} prefix="+" decimals={0} />
                    </p>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-gray-150 hover:border-brand-primary/20 transition-colors">
                    <span className="text-[10px] text-gray-455 font-bold uppercase tracking-widest font-display block mb-1">Conversão Direct</span>
                    <p className="text-xl font-black text-gray-950">
                      <AnimatedCounter value={92.4} suffix="%" decimals={1} />
                    </p>
                  </div>
                </div>

                {/* System Activity Prompt */}
                <div className="bg-slate-100/50 rounded-2xl p-4 border border-gray-100 flex items-start space-x-3">
                  <UserCheck className="h-5 w-5 text-brand-primary mt-1.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono font-black text-brand-primary tracking-widest block">TELEMETRIA INTEGRADA:</span>
                    <p className="text-xs text-gray-650 leading-relaxed">
                      Sincronização de anúncios Meta + Google Ads conectada. O motor de automação está validando leads de alto interesse para o WhatsApp VIP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
