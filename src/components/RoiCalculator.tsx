import { useState } from "react";
import { motion } from "motion/react";
import { Calculator, DollarSign, ArrowUpRight, TrendingUp, Sparkles, AlertCircle } from "lucide-react";

export default function RoiCalculator() {
  const [adSpend, setAdSpend] = useState<number>(5000);
  const [cpl, setCpl] = useState<number>(8);
  const [avgTicket, setAvgTicket] = useState<number>(350);
  const [conversionRate, setConversionRate] = useState<number>(3); // in percent

  // Math Calculations for Typical Performance vs Skale Optimizations
  // Skale lowers CPL by approx 20%, and increases conversion rate by approx 1.5x due to the automations + premium IG setup!
  const skaleCpl = Math.max(2, cpl * 0.8);
  const skaleConversion = Math.min(25, conversionRate * 1.6);

  // Common calculations
  const defaultLeads = Math.round(adSpend / cpl);
  const defaultSales = Math.round(defaultLeads * (conversionRate / 100));
  const defaultRevenue = defaultSales * avgTicket;
  const defaultRoas = adSpend > 0 ? (defaultRevenue / adSpend).toFixed(1) : "0";
  const defaultProfit = defaultRevenue - adSpend;

  // Skale calculations
  const skaleLeads = Math.round(adSpend / skaleCpl);
  const skaleSales = Math.round(skaleLeads * (skaleConversion / 100));
  const skaleRevenue = skaleSales * avgTicket;
  const skaleRoas = adSpend > 0 ? (skaleRevenue / adSpend).toFixed(1) : "0";
  const skaleProfit = skaleRevenue - adSpend;
  const growthMultiplier = defaultRevenue > 0 ? (skaleRevenue / defaultRevenue).toFixed(1) : "2.0";

  return (
    <section id="calculadora" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Glow decorative spheres */}
      <div className="absolute top-[30%] left-[5%] w-[380px] h-[380px] rounded-full bg-brand-primary/5 blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[5%] w-[420px] h-[420px] rounded-full bg-brand-secondary/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
            <Calculator className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
              Calculadora de Escala Comercial
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
            Simule o <span className="text-brand-primary">Potencial de Vendas</span> do Seu Negócio
          </h2>
          <p className="text-gray-600 font-light text-base sm:text-lg">
            Ajuste os controles corporativos abaixo para simular o resultado do tráfego comum contra a nossa estrutura com automação e otimização avançada.
          </p>
        </div>

        {/* Dynamic Calculator Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left panel: Input parameters */}
          <div className="lg:col-span-5 bg-white border border-gray-150 rounded-3xl p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="border-b border-gray-100 pb-4">
              <h3 className="font-display font-bold text-lg text-gray-900">Configuração do Investimento</h3>
              <p className="text-xs text-gray-500 mt-1">Insira suas estimativas básicas do funil de vendas</p>
            </div>

            {/* Input 1: Ad Spend */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-700">Investimento Mensal em Anúncios</span>
                <span className="text-brand-primary font-bold text-base">
                  R$ {adSpend.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                id="slider-adspend"
                type="range"
                min="1000"
                max="50000"
                step="500"
                value={adSpend}
                onChange={(e) => setAdSpend(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>R$ 1.000</span>
                <span>R$ 25.000</span>
                <span>R$ 50.000</span>
              </div>
            </div>

            {/* Input 2: CPL */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-700">Custo Absoluto por Lead (CPL)</span>
                <span className="text-brand-primary font-bold text-base">
                  R$ {cpl.toFixed(2).replace(".", ",")}
                </span>
              </div>
              <input
                id="slider-cpl"
                type="range"
                min="2"
                max="30"
                step="0.5"
                value={cpl}
                onChange={(e) => setCpl(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>R$ 2,00 (Barato)</span>
                <span>R$ 15,00 (Médio)</span>
                <span>R$ 30,00 (Caro)</span>
              </div>
            </div>

            {/* Input 3: Ticket Medio */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-700">Ticket Médio do Produto/Serviço</span>
                <span className="text-brand-primary font-bold text-base">
                  R$ {avgTicket.toLocaleString("pt-BR")}
                </span>
              </div>
              <input
                id="slider-avgticket"
                type="range"
                min="50"
                max="5000"
                step="50"
                value={avgTicket}
                onChange={(e) => setAvgTicket(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>R$ 50</span>
                <span>R$ 2.500</span>
                <span>R$ 5.000</span>
              </div>
            </div>

            {/* Input 4: Lead converting percent */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium">
                <span className="text-gray-700">Taxa de Conversão de Vendas (Leads)</span>
                <span className="text-brand-primary font-bold text-base">
                  {conversionRate.toFixed(1).replace(".", ",")}%
                </span>
              </div>
              <input
                id="slider-conversion"
                type="range"
                min="0.5"
                max="15"
                step="0.5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-brand-primary"
              />
              <div className="flex justify-between text-[10px] text-gray-400 font-mono">
                <span>0,5% (Ruim)</span>
                <span>5,0% (Bom)</span>
                <span>15,0% (Incrível)</span>
              </div>
            </div>

            {/* Advice Warning alert */}
            <div className="p-3 bg-slate-50 rounded-xl border border-gray-100 flex items-start space-x-2">
              <AlertCircle className="h-4.5 w-4.5 text-brand-primary flex-shrink-0 mt-0.5" />
              <p className="text-[11px] text-gray-500 leading-normal">
                Nota: O ROAS varia conforme o seu nicho. Essa ferramenta utiliza métricas estimadas de funil, visando demonstrar matematicamente a diferença comercial das automações Assessoria Skale.
              </p>
            </div>
          </div>

          {/* Right panel: Comparison Output */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Standard Strategy Frame */}
            <div className="bg-slate-100/50 border border-dashed border-gray-200 rounded-2xl p-5 sm:p-6 text-gray-650 relative">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">Sem Assessoria Skale (Tráfego Amador)</span>
                <span className="text-sm font-bold text-gray-600">CPL: R$ {cpl.toFixed(2)}</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold font-display block">Leads</span>
                  <span className="text-sm font-bold text-gray-700">{defaultLeads} contatos</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold font-display block">Faturamento</span>
                  <span className="text-sm font-bold text-gray-700">R$ {defaultRevenue.toLocaleString("pt-BR")}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold font-display block">ROAS</span>
                  <span className="text-sm font-bold text-gray-700">{defaultRoas}x</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold font-display block">Lucro Líquido</span>
                  <span className={`text-sm font-bold ${defaultProfit >= 0 ? "text-gray-700" : "text-rose-500"}`}>
                    R$ {defaultProfit.toLocaleString("pt-BR")}
                  </span>
                </div>
              </div>
            </div>

            {/* Skale Premium Strategy frame (High Contrast, Brand colors, glows) */}
            <div className="bg-white border-2 border-brand-primary rounded-3xl p-6 sm:p-8 flex-grow flex flex-col justify-between relative shadow-lg">
              {/* Corner badge */}
              <div className="absolute -top-3.5 right-6 px-4 py-1.5 rounded-full bg-brand-primary text-white font-mono text-[10px] font-bold uppercase tracking-widest shadow-md">
                ⚡ Estrutura Elite Skale
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5 text-brand-primary animate-pulse" />
                  <h4 className="font-display font-black text-gray-900 text-lg sm:text-xl">
                    Performance Prevista com Nossa Estrutura
                  </h4>
                </div>

                {/* Main scale indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Revenue indicator block */}
                  <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                    <span className="text-[11px] text-brand-primary font-bold uppercase tracking-wider block mb-1">
                      Faturamento Previsto
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-gray-900 block">
                      R$ {skaleRevenue.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold block mt-1">
                      🚀 Aproximadamente {growthMultiplier}x mais faturamento
                    </span>
                  </div>

                  {/* Profit indicator block */}
                  <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                    <span className="text-[11px] text-brand-primary font-bold uppercase tracking-wider block mb-1">
                      Lucro do Tráfego
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-emerald-600 block">
                      R$ {skaleProfit.toLocaleString("pt-BR")}
                    </span>
                    <span className="text-[10px] text-gray-550 block mt-1 font-mono">
                      (Descontando os anúncios)
                    </span>
                  </div>

                  {/* Roas & Leads block */}
                  <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                    <span className="text-[11px] text-brand-primary font-bold uppercase tracking-wider block mb-1">
                      ROAS Médio Alvo
                    </span>
                    <span className="text-xl sm:text-2xl font-black text-gray-900 block">
                      {skaleRoas}x
                    </span>
                    <span className="text-[10px] text-brand-primary font-bold block mt-1">
                      {skaleLeads} Leads mais baratos (CPL: R$ {skaleCpl.toFixed(2)})
                    </span>
                  </div>
                </div>

                {/* Value dynamic summary commentary */}
                <div className="p-4 rounded-xl bg-slate-50 border border-gray-100 text-xs text-gray-600 leading-relaxed">
                  Devido à nossa <span className="text-brand-primary font-bold">otimização diária de criativos</span> combinada com <span className="text-brand-primary font-bold">automações de triagem ManyChat/WhatsApp</span>, reduzimos o seu CPL em torno de <span className="text-emerald-600 font-bold">20%</span> e blindamos a conversão de leads fazendo o retorno sobre o investimento disparar.
                </div>
              </div>

              {/* Instant Call to action on Calculator */}
              <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 mt-6">
                <div>
                  <span className="text-xs text-gray-500 block">Gostou da simulação de escala?</span>
                  <p className="text-sm font-bold text-gray-900">Criamos uma planilha real baseada no seu nicho</p>
                </div>
                <a
                  href="#contato"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm transition-all shadow-md shadow-brand-primary/10 cursor-pointer"
                >
                  <span>Reclame Seu Diagnóstico Grátis</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
