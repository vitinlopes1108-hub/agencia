import React, { useState } from "react";
import { motion } from "motion/react";
import { TrendingDown, Hourglass, DollarSign, Ban, ShieldAlert, Sparkles, AlertCircle } from "lucide-react";

interface LeakItem {
  id: string;
  title: string;
  gauge: string;
  description: string;
  leakPercent: number;
  icon: React.ComponentType<{ className?: string }>;
}

export default function PainPoints() {
  const [activeLeak, setActiveLeak] = useState<string>("no_speed");

  const leaks: LeakItem[] = [
    {
      id: "no_speed",
      title: "01. Janela de Resposta Demorada",
      gauge: "Morte Fria",
      description: "Um lead que entra no seu Instagram Direct hoje espera uma resposta em menos de 3 minutos. Se sua equipe leva mais de 20 minutos ou só responde no dia seguinte, a chance de fechamento despenca em até 380%. Ele já fechou com o concorrente.",
      leakPercent: 74,
      icon: Hourglass,
    },
    {
      id: "raw_leads",
      title: "02. Tráfego Abstrato s/ Qualificação",
      gauge: "Verba Desperdiçada",
      description: "Agências tradicionais geram cliques baratos de curiosos. O seu direct enche de leads frios perguntando 'Qual o valor?'. Isso sobrecarrega seus vendedores com trabalho manual inútil, reduzindo o tempo para focar em clientes maduros de alta renda.",
      leakPercent: 59,
      icon: Ban,
    },
    {
      id: "blind_ads",
      title: "03. Falta de Rastreamento & Tagging",
      gauge: "Abismo de Métricas",
      description: "Subir anúncio sem o rastreamento adequado do pixel e da API de conversão do Meta é gerenciar no escuro. Sem saber exatamente qual criativo gerou a venda real no WhatsApp, sua agência continua aumentando a verba nas campanhas erradas.",
      leakPercent: 82,
      icon: DollarSign,
    },
  ];

  const activeLeakData = leaks.find((l) => l.id === activeLeak) || leaks[0];

  return (
    <section id="inicio" className="py-24 bg-white relative overflow-hidden border-b border-slate-105">
      {/* Dynamic graphic connectors background */}
      <div className="absolute top-[15%] left-[-10%] w-[380px] h-[380px] bg-rose-500/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[350px] h-[350px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical grid header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-rose-500/5 border border-rose-500/20">
              <ShieldAlert className="h-4 w-4 text-rose-500" />
              <span className="text-xs font-bold text-rose-500 tracking-wide uppercase font-mono">
                Estágio 01: O DIAGNÓSTICO DO PROBLEMA
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-gray-950 tracking-tight leading-none">
              O Seu Comercial Digital <br />
              Pode Estar <span className="text-rose-500 underline decoration-wavy decoration-1">Vazando Dinheiro Amadoramente</span>
            </h2>
          </div>
          <div className="lg:col-span-5 mb-1.5">
            <p className="text-gray-550 font-light text-sm sm:text-base leading-relaxed border-l-2 border-rose-500/30 pl-4">
              93% das empresas investem verbas pesadas em tráfego pago sem possuir uma infraestrutura moderna de automação e qualificação de público. O resultado? Cliques caros e leads gelados.
            </p>
          </div>
        </div>

        {/* Core Interactive Leak Simulator Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Asymmetrical Leak selectors list */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
            <div className="space-y-4">
              <span className="text-xs font-mono font-black text-slate-400 block tracking-widest uppercase">
                SELECIONE UM DOS GARGALOS SILENCIOSOS ABAIXO:
              </span>

              <div className="space-y-3">
                {leaks.map((leak) => {
                  const Icon = leak.icon;
                  const isActive = activeLeak === leak.id;
                  return (
                    <button
                      key={leak.id}
                      onClick={() => setActiveLeak(leak.id)}
                      className={`w-full text-left p-5 rounded-2xl border transition-all duration-350 flex items-center justify-between cursor-pointer group ${
                        isActive
                          ? "bg-slate-50 border-rose-500/30 shadow-md scale-[1.01]"
                          : "bg-white border-slate-100 hover:border-slate-200 hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        <div 
                          className={`p-3 rounded-xl transition-all duration-300 ${
                            isActive 
                              ? "bg-rose-500 text-white shadow-md shadow-rose-500/20" 
                              : "bg-slate-50 text-slate-400 group-hover:text-rose-500 group-hover:bg-rose-50"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className={`font-display font-extrabold text-sm sm:text-base transition-colors ${
                            isActive ? "text-gray-900" : "text-gray-700"
                          }`}>
                            {leak.title}
                          </h3>
                          <span className="text-[10px] font-mono font-bold text-rose-500 block uppercase tracking-wider mt-0.5">
                            Gargalo: {leak.gauge}
                          </span>
                        </div>
                      </div>

                      <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-450 bg-slate-100/50 group-hover:bg-rose-50 group-hover:text-rose-500 px-2 py-1 rounded-lg transition-colors">
                        +{leak.leakPercent}% perda
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Micro-simulation status block */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 flex items-start space-x-3">
              <AlertCircle className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] font-mono font-black text-rose-500 uppercase tracking-widest block">CONSEQUÊNCIA DIRETA:</span>
                <p className="text-xs text-gray-500 font-light mt-0.5">
                  Sem resolver esses três problemas fundamentais, dobrar o orçamento de anúncios serve apenas para gerar mais contatos frustrados e desgastar sua marca.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High Fidelity "Leak Monitor Dashboard" */}
          <div className="lg:col-span-6">
            <div className="h-full bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-8 lg:p-10 text-white flex flex-col justify-between relative overflow-hidden shadow-2xl border border-rose-500/15">
              
              {/* Background graphic grid */}
              <div 
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}
              />

              <div className="space-y-6 relative z-10">
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center space-x-2">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] text-rose-400 font-mono font-bold uppercase tracking-widest">DIAGNÓSTICO EM TEMPO REAL</span>
                  </div>
                  <span className="text-[10.5px] font-mono text-white/50 bg-white/5 px-2.5 py-1 rounded">Leak-Detect v1.9</span>
                </div>

                {/* Simulated diagnostic charts */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/70 font-semibold uppercase font-display tracking-wider">EFICIÊNCIA DE INVESTIMENTO</span>
                    <span className="text-xs font-mono font-bold text-rose-400">
                      -{activeLeakData.leakPercent}% perda estimada
                    </span>
                  </div>

                  {/* Graphic dynamic bars */}
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        key={activeLeakData.id + "-retained"}
                        initial={{ width: "100%" }}
                        animate={{ width: `${100 - activeLeakData.leakPercent}%` }}
                        transition={{ duration: 0.6 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-[11px] font-mono text-white/40">
                      <span>Verba que gera faturamento ({100 - activeLeakData.leakPercent}%)</span>
                      <span className="text-rose-400 font-bold">Verba desperdiçada ({activeLeakData.leakPercent}%)</span>
                    </div>
                  </div>
                </div>

                {/* Selected issue detailed review */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                  <span className="inline-block px-2.5 py-1 text-[9px] font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 uppercase rounded-md">
                    RECOMENDAÇÃO TÉCNICA SKALE
                  </span>
                  <h3 className="font-display font-black text-base text-white">
                    {activeLeakData.title.split(".")[1]}
                  </h3>
                  <p className="text-white/70 font-light text-xs sm:text-sm leading-relaxed">
                    {activeLeakData.description}
                  </p>
                </div>
              </div>

              {/* Simulation Call Action to bridge to opportunity section */}
              <div className="pt-6 border-t border-white/5 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="text-center sm:text-left">
                  <span className="text-[10px] text-white/40 font-mono tracking-wider block font-bold">PRÓXIMO ESTÁGIO NARRATIVO</span>
                  <p className="text-xs font-semibold text-emerald-400">Pilar 02: Solucionar de forma definitiva ➜</p>
                </div>
                <a
                  href="#servicos"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-1 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-xs transition-colors cursor-pointer"
                >
                  <span>Ver Solução</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
