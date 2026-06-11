import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, MessageCircle, TrendingUp, TrendingDown, Star, CheckSquare } from "lucide-react";

interface CaseStudy {
  id: string;
  category: string;
  clientName: string;
  niche: string;
  quote: string;
  metrics: { label: string; value: string; trend?: string; isPositive?: boolean }[];
  performance: { campaign: string; spent: string; generated: string; roas: string }[];
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("commerce");

  const cases: CaseStudy[] = [
    {
      id: "commerce",
      category: "commerce",
      clientName: "Sérgio M. - Proprietário de E-commerce",
      niche: "E-commerce de Copos Premium & Brindes",
      quote: "Antes de fechar com a Assessoria Skale, nós tínhamos um ROAS instável de no máximo 2x. Em 60 dias de otimização nos anúncios e estruturação de criativos inteligentes de feed, batemos mais de R$ R$ 182k faturados com ROAS batendo 7.5x. O suporte deles pelo WhatsApp é o melhor do mercado.",
      metrics: [
        { label: "Faturamento Gerado", value: "R$ 182.430,90", trend: "+320%", isPositive: true },
        { label: "ROAS Consolidado", value: "7.62x", trend: "+180%", isPositive: true },
        { label: "Custo por Compra", value: "R$ 18,40", trend: "-45%", isPositive: true },
      ],
      performance: [
        { campaign: "Skale - Conversão Frio (Copos)", spent: "R$ 12.000,00", generated: "R$ 84.500,00", roas: "7.0x" },
        { campaign: "Skale - Remarketing Ativo", spent: "R$ 3.500,00", generated: "R$ 38.200,00", roas: "10.9x" },
        { campaign: "Skale - Públicos Lookalike", spent: "R$ 8.400,00", generated: "R$ 59.730,90", roas: "7.1x" }
      ]
    },
    {
      id: "servicos",
      category: "servicos",
      clientName: "Dra. Letícia R. - Clínica de Odontologia VIP",
      niche: "Serviços de Saúde & Odontologia Estética",
      quote: "Nosso maior gargalo era a recepção respondendo leads frios que sumiam. A Skale instalou a automação de resposta imediata no Instagram Direct com triagem de renda. Agora, nossa recepcionista no WhatsApp só atende leads qualificados agendando consultas alto valor. Nossa agenda lotou em 3 semanas.",
      metrics: [
        { label: "Contatos Agendados", value: "148 Clientes", trend: "+240%", isPositive: true },
        { label: "Custo por Lead (CPL)", value: "R$ 4,10", trend: "-35%", isPositive: true },
        { label: "Faturamento Clínico", value: "R$ 96.000,00", trend: "Recorde", isPositive: true },
      ],
      performance: [
        { campaign: "Skale - Captação Direct (Estética)", spent: "R$ 3.100,00", generated: "172 Leads", roas: "ManyChat" },
        { campaign: "Skale - Geolocalizado (Implantes)", spent: "R$ 4.500,00", generated: "R$ 68.000,00", roas: "15.1x" },
        { campaign: "Skale - Tráfego WhatsApp Direto", spent: "R$ 1.800,00", generated: "R$ 28.000,00", roas: "15.5x" }
      ]
    },
    {
      id: "infoproduto",
      category: "infoproduto",
      clientName: "Bruno K. - Co-produtor & Mentor",
      niche: "Lançamentos e Vendas no Perpétuo",
      quote: "O método de otimização contínua da Assessoria Skale salvou o nosso perpétuo. Estruturaram criativos magnéticos com VSL e funis de captação que vendem todos os dias no orgânico com automação ManyChat e anúncios de lembrete dinâmicos. A escala é absurda.",
      metrics: [
        { label: "Vendas Diretas", value: "482 Alunos", trend: "+410%", isPositive: true },
        { label: "ROAS Geral Lucro", value: "6.9x", trend: "+94%", isPositive: true },
        { label: "Faturamento Digital", value: "R$ 141.250,00", trend: "+280%", isPositive: true },
      ],
      performance: [
        { campaign: "Skale - Perpétuo VSL Direto", spent: "R$ 11.200,00", generated: "R$ 74.000,00", roas: "6.6x" },
        { campaign: "Skale - Distribuição Conteúdo", spent: "R$ 4.000,00", generated: "91k visualizações", roas: "Branding" },
        { campaign: "Skale - Remarketing Lançador", spent: "R$ 5.250,00", generated: "R$ 67.250,00", roas: "12.8x" }
      ]
    }
  ];

  const currentCase = cases.find((c) => c.category === activeCategory) || cases[0];

  return (
    <section id="resultados" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-[40%] left-[-15%] w-[420px] h-[420px] bg-brand-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[380px] h-[380px] bg-brand-secondary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
            <TrendingUp className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
              Provas de Faturamento Real
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
            Nossos Clientes Estão <span className="text-brand-primary">Colhendo Escala</span>
          </h2>
          <p className="text-gray-600 font-light text-base sm:text-lg">
            Veja os painéis de resultados e o feedback real de quem confiou na Assessoria Skale para estruturar seu tráfego pago e suas automações.
          </p>
        </div>

        {/* Niche select Category toggle buttons */}
        <div className="flex justify-center items-center flex-wrap gap-3 mb-12">
          <button
            id="cat-commerce"
            onClick={() => setActiveCategory("commerce")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === "commerce"
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                : "bg-white border border-gray-200 text-gray-600 hover:text-brand-primary hover:border-brand-primary/30"
            }`}
          >
            🛒 E-commerce & Vendas de Produtos
          </button>
          <button
            id="cat-servicos"
            onClick={() => setActiveCategory("servicos")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === "servicos"
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                : "bg-white border border-gray-200 text-gray-600 hover:text-brand-primary hover:border-brand-primary/30"
            }`}
          >
            🩺 Clínicas, Estética & Prestadores
          </button>
          <button
            id="cat-infoproduto"
            onClick={() => setActiveCategory("infoproduto")}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
              activeCategory === "infoproduto"
                ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20"
                : "bg-white border border-gray-200 text-gray-600 hover:text-brand-primary hover:border-brand-primary/30"
            }`}
          >
            🎓 Cursos Online & Mentorias
          </button>
        </div>

        {/* Main interactive Showcase Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Executive testimonial card */}
          <div className="lg:col-span-5 bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
            <div className="absolute top-0 left-0 bg-brand-primary/5 px-4 py-1.5 text-[10px] font-mono rounded-br-2xl border-r border-b border-gray-150 text-brand-primary font-black">
              DEPOIMENTO EXECUTIVO
            </div>
 
            <div className="space-y-6 pt-4">
              {/* Star review ratings */}
              <div className="flex space-x-1">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="h-4 w-4 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>
 
              {/* Chat testimonial bubble */}
              <div className="relative">
                <p className="text-gray-700 text-sm sm:text-base font-light italic leading-relaxed">
                  "{currentCase.quote}"
                </p>
              </div>
            </div>
 
            {/* Client meta details with avatar simulator */}
            <div className="pt-6 border-t border-gray-100 flex items-center space-x-3.5 mt-8">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center font-display font-black text-xl text-white shadow-md shadow-brand-primary/20">
                {currentCase.clientName.charAt(0)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{currentCase.clientName}</h4>
                <p className="text-[11px] text-brand-primary font-mono font-bold uppercase">{currentCase.niche}</p>
              </div>
            </div>
          </div>
 
          {/* Right panel: Campaign Manager UI mockup simulator */}
          <div className="lg:col-span-7 bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div className="space-y-6 flex-grow flex flex-col justify-between">
              
              {/* Fake Campaign Manager Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-gray-100 pb-4 gap-4">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-gray-500 font-mono font-bold uppercase tracking-wider">
                    GESTÃO ATIVA: GOOGLE & META ADS INTEGRADO
                  </span>
                </div>
                <div className="inline-flex items-center space-x-1.5 bg-slate-50 border border-gray-100 rounded-lg px-2.5 py-1 text-[10px] text-gray-500 font-mono">
                  <span>Atualizado de forma diária</span>
                </div>
              </div>
 
              {/* 3 Metric cards inside Manager screen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentCase.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-gray-100 flex flex-col justify-between">
                    <span className="text-[10px] text-gray-500 font-semibold block uppercase tracking-wider font-display">{m.label}</span>
                    <span className="text-lg font-black text-gray-900 block my-1">
                      {m.value}
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 font-bold block bg-emerald-50 self-start px-2 py-0.5 rounded">
                      {m.trend}
                    </span>
                  </div>
                ))}
              </div>
 
              {/* Fake Spreadsheet of campaign optimization lines */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] text-gray-500 tracking-wider font-mono font-bold uppercase block">
                  VEICULAÇÃO DAS CAMPANHAS DA CONTA
                </span>
 
                <div className="overflow-x-auto no-scrollbar">
                  <table className="w-full text-[11px] text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-100 text-gray-400 font-mono">
                        <th className="pb-2 font-semibold">Campanha Ativa</th>
                        <th className="pb-2 font-semibold">Gasto</th>
                        <th className="pb-2 font-semibold">Retorno Esperado</th>
                        <th className="pb-2 font-semibold text-right">Métrica/ROAS</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 text-gray-600">
                      {currentCase.performance.map((p, pIdx) => (
                        <tr key={pIdx} className="hover:bg-slate-50/50">
                          <td className="py-2.5 font-semibold text-gray-800 max-w-[150px] truncate">{p.campaign}</td>
                          <td className="py-2.5 font-mono">{p.spent}</td>
                          <td className="py-2.5 font-mono">{p.generated}</td>
                          <td className="py-2.5 text-right font-mono font-bold text-brand-primary">{p.roas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
 
            </div>
 
            {/* Bottom Disclaimer */}
            <div className="pt-4 border-t border-gray-100 mt-6 text-center sm:text-left">
              <p className="text-[10px] text-gray-450 font-mono">
                *Resultados auditados obtidos com orçamento variável correspondente de cada empresa. Resultados passados não garantem faturamentos idênticos, mas validam metodologias previsíveis.
              </p>
            </div>
          </div>
 
        </div>
      </div>
    </section>
  );
}
