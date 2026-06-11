import React from "react";
import { motion } from "motion/react";
import { Sparkles, ShieldCheck, FileSearch, Settings2, PenTool, Rocket, BarChart3, TrendingUp } from "lucide-react";

interface Step {
  num: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  days: string;
  desc: string;
}

export default function Methodology() {
  const steps: Step[] = [
    {
      num: "01",
      icon: FileSearch,
      title: "Diagnóstico Completo",
      days: "Dias 1 e 2",
      desc: "Auditamos o seu histórico de anúncios, pixel, posicionamento do Instagram e concorrentes para criar um plano de voo customizado para o seu nicho.",
    },
    {
      num: "02",
      icon: Settings2,
      title: "Setup & Rastreamento",
      days: "Dias 3 a 5",
      desc: "Instalamos e configuramos os pixels de tag do Google e API de Conversão do Meta de forma profissional para garantir que 100% dos leads sejam trackeados.",
    },
    {
      num: "03",
      icon: PenTool,
      title: "Criação de Criativos",
      days: "Dias 6 a 8",
      desc: "Desenvolvemos copies persuasivas e orientamos a produção de imagens/vídeos baseados em dores reais do seu cliente, capturando as atenções no feed.",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Lançamento de Campanhas",
      days: "Dia 9",
      desc: "Subimos as campanhas estruturadas por funil (Públicos Frios, Morno e Quente), ligando as automações de direct e testes iniciais de público.",
    },
    {
      num: "05",
      icon: BarChart3,
      title: "Otimização Avançada",
      days: "Frequência Diária",
      desc: "Identificamos quais anúncios trazem leads mais baratos, descartamos os ruins e realocamos a verba nos criativos campeões de conversão.",
    },
    {
      num: "06",
      icon: TrendingUp,
      title: "Escala & Crescimento",
      days: "Frequência Semanal",
      desc: "Aumentamos a verba das campanhas vencedoras (escala vertical) e expandimos para novos públicos/plataformas (escala horizontal) com segurança.",
    },
  ];

  return (
    <section id="metodo" className="py-24 bg-white relative overflow-hidden">
      {/* Glow shapes */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-primary/5 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-brand-secondary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
            <ShieldCheck className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
              Nosso Método Passo a Passo
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Como Fazemos Sua Empresa <span className="text-brand-primary font-black">Escalar</span>
          </h2>
          <p className="text-gray-600 font-light text-base sm:text-lg">
            Um processo cientificamente planejado para estruturar o seu comercial digital em menos de 10 dias.
          </p>
        </div>

        {/* Six Grid step items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white border border-gray-150 hover:border-brand-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md cursor-pointer"
              >
                {/* Visual Top Bar decoration */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-6">
                  {/* Step Num & Icon line */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-brand-primary/5 group-hover:bg-gradient-to-tr group-hover:from-brand-primary group-hover:to-brand-secondary text-brand-primary group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-display font-black text-3xl sm:text-4xl text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors font-mono">
                      {step.num}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-display font-bold text-lg sm:text-xl text-gray-900 group-hover:text-brand-primary transition-colors">
                        {step.title}
                      </h3>
                    </div>
                    <span className="inline-block text-[10px] font-mono font-bold text-brand-primary uppercase bg-brand-primary/5 px-2 py-0.5 rounded">
                      {step.days}
                    </span>
                    <p className="text-sm font-light text-gray-500 leading-relaxed pt-2">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Arrow indicator on detail */}
                <div className="pt-4 flex justify-end">
                  <span className="text-[10px] text-gray-400 group-hover:text-brand-primary font-mono tracking-widest font-bold transition-colors uppercase">
                    Skale Pro ➜
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Small Bottom Summary Callout */}
        <div className="mt-16 text-center">
          <div className="inline-block p-4 sm:p-6 bg-slate-50 border border-gray-150 rounded-2xl max-w-2xl mx-auto">
            <span className="text-xs sm:text-sm font-light text-gray-600">
              ⚡ <strong className="font-bold text-gray-900">Diferencial Assessoria Skale:</strong> Nós não te entregamos planilhas confusas. Você conversa diretamente com os estrategistas por WhatsApp semanalmente acompanhando a evolução real do faturamento.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
