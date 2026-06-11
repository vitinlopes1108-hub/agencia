import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  ArrowLeft,
  Smartphone,
  Send,
} from "lucide-react";

interface ContactFormProps {
  onSuccess: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [step, setStep] = useState<number>(1);
  const [companyName, setCompanyName] = useState<string>("");
  const [instagram, setInstagram] = useState<string>("");
  const [revenue, setRevenue] = useState<string>("");
  const [challenge, setChallenge] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [diagnosisGenerated, setDiagnosisGenerated] = useState<boolean>(false);

  const totalSteps = 4;

  const handleNext = () => {
    if (step === 1 && (!companyName || !instagram)) {
      alert("Por favor, preencha o nome da empresa e o Instagram.");
      return;
    }
    if (step === 2 && !revenue) {
      alert("Por favor, selecione uma faixa de faturamento.");
      return;
    }
    if (step === 3 && !challenge) {
      alert("Por favor, selecione seu maior desafio.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !whatsapp) {
      alert("Por favor, preencha o seu nome e WhatsApp.");
      return;
    }

    setLoading(true);

    // Simulate sending data and compiling customized recommendation
    setTimeout(() => {
      setLoading(false);
      setDiagnosisGenerated(true);
    }, 1500);
  };

  // Generate Personalized Advices based on their inputs
  const getCustomizedDiagnosis = () => {
    let title = "Plano de Escala Skale";
    let strategy = "";
    let automationTip = "";
    let recommendedBudget = "";

    if (revenue === "Até R$ 10k") {
      recommendedBudget = "R$ 1.000 a R$ 2.000 / mês";
      strategy = "Foco em atração local e campanhas de Mensagem direto para o Direct/WhatsApp. No seu nível, precisamos construir autoridade estática no Instagram (Bio limpa, destaques estratégicos com depoimentos) antes de colocar verbas massivas.";
      automationTip = "Configure respostas automáticas de boas-vindas simples no Instagram Direct para não deixar nenhuma oportunidade esfriar enquanto você atende outras demandas.";
    } else if (revenue === "R$ 10k a R$ 50k") {
      recommendedBudget = "R$ 2.500 a R$ 5.000 / mês";
      strategy = "Criar funis de conversão em camadas (Públicos frios vendo criativos de dor, e remarketing ativo quebrando objeções de preço). O Instagram precisa estar com carimbo profissional contínuo.";
      automationTip = "Automação ManyChat para triagem de leads: peça o faturamento no direct antes de mandar o WhatsApp para filtrar sua equipe comercial.";
    } else {
      recommendedBudget = "R$ 5.000+ / mês";
      strategy = "Escala horizontal de públicos (Lookalike, Interesses cruzados e Pesquisa no Google Ads). Otimização cirúrgica diária baseada em CTR e CPA. Seu foco principal agora é a retenção e o tempo de resposta.";
      automationTip = "Integração total ManyChat ➜ CRM de vendas (ActiveCampaign, PipeDrive ou planilha) de forma automática. Notificações imediatas de novos leads VIP no celular do vendedor.";
    }

    let challengeTip = "";
    if (challenge === "Não tenho leads qualificados") {
      challengeTip = "Estruturar criativos no formato 'Mitos e Verdades' que filtram pessoas desqualificadas e mostram dores reais do seu comprador ideal.";
    } else if (challenge === "Processos manuais e lentos") {
      challengeTip = "Substituir o envio manual de PDFs informativos por fluxos interativos automáticos de apresentação no próprio direct do lead.";
    } else if (challenge === "Anúncios caros sem vendas") {
      challengeTip = "Fazer uma auditoria técnica de pixel/API de conversão. Muito provavelmente sua campanha está otimizando para clique (Tráfego) em vez de Compras/Contatos reais.";
    } else {
      challengeTip = "Implementar táticas de script de fechamento em alta velocidade (atendimento em até 5min com áudios curtos personalizados).";
    }

    return { title, strategy, automationTip, recommendedBudget, challengeTip };
  };

  const diagnosis = getCustomizedDiagnosis();

  // Create formatted WhatsApp link to contact directly with formatted data
  const getWhatsAppLink = () => {
    const message = `Olá Assessoria Skale! Acabei de rodar o gerador de diagnóstico institucional.\n\nEmpresa: ${companyName}\nInstagram: ${instagram}\nFaturamento: ${revenue}\nDesafio: ${challenge}\nNome do Responsável: ${clientName}\n\nQuero agendar minha reunião gratuita para discutir esse diagnóstico!`;
    return `https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contato" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[380px] h-[380px] bg-brand-secondary/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="bg-white border border-gray-150 rounded-3xl p-6 sm:p-10 shadow-lg relative">
          
          {/* Tag Header */}
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
              <Sparkles className="h-4 w-4 text-brand-primary animate-pulse" />
              <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
                Diagnóstico de Escala
              </span>
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
              Seu Plano de Tráfego e Automação
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Responda estas 4 perguntas rápidas para gerar um mini-relatório personalizado com nossos estrategistas.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {!diagnosisGenerated ? (
              /* Conversational Qualification Multi-Step Form */
              <motion.div
                key="form-steps"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {/* Progress Indicators */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <span className="text-xs font-mono text-gray-450 font-black">
                    PASSO {step} DE {totalSteps}
                  </span>
                  <div className="flex space-x-1.5">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          step >= i ? "w-8 bg-brand-primary" : "w-1.5 bg-slate-100"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* STEP 1: Basic Company details */}
                  {step === 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-extrabold text-lg text-gray-900">Sobre sua Empresa</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-650 mb-1.5 uppercase font-display">Nome Comercial da Empresa</label>
                          <input
                            id="input-company-name"
                            type="text"
                            required
                            placeholder="Ex: Minha Loja Premium"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full bg-slate-50 hover:bg-slate-100/50 border border-gray-250 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-650 mb-1.5 uppercase font-display">Instagram da Empresa</label>
                          <input
                            id="input-instagram"
                            type="text"
                            required
                            placeholder="Ex: @minhaloja.premium"
                            value={instagram}
                            onChange={(e) => setInstagram(e.target.value)}
                            className="w-full bg-slate-50 hover:bg-slate-100/50 border border-gray-250 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 2: Revenue Select */}
                  {step === 2 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-extrabold text-lg text-gray-900">Qual o faturamento mensal atual da sua marca?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {["Até R$ 10k", "R$ 10k a R$ 50k", "R$ 50k a R$ 100k", "Mais de R$ 100k"].map((rev) => (
                          <button
                            key={rev}
                            id={`rev-btn-${rev.replace(/\s+/g, '')}`}
                            type="button"
                            onClick={() => setRevenue(rev)}
                            className={`p-4 rounded-xl text-sm font-bold transition-all border text-left cursor-pointer ${
                              revenue === rev
                                ? "bg-brand-primary/5 border-2 border-brand-primary text-brand-primary shadow-sm"
                                : "bg-white border-gray-200 hover:border-brand-primary/35 text-gray-650 hover:text-brand-primary"
                            }`}
                          >
                            {rev}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 3: Challenging bottlenecks */}
                  {step === 3 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-extrabold text-lg text-gray-900">Qual seu maior gargalo de captação hoje?</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {[
                          "Não tenho leads qualificados",
                          "Processos manuais e lentos",
                          "Anúncios caros sem vendas",
                          "Vendedores com script fraco",
                        ].map((ch) => (
                          <button
                            key={ch}
                            id={`chal-btn-${ch.replace(/\s+/g, '')}`}
                            type="button"
                            onClick={() => setChallenge(ch)}
                            className={`p-4 rounded-xl text-sm font-bold transition-all border text-left cursor-pointer ${
                              challenge === ch
                                ? "bg-brand-primary/5 border-2 border-brand-primary text-brand-primary shadow-sm"
                                : "bg-white border-gray-200 hover:border-brand-primary/35 text-gray-650 hover:text-brand-primary"
                            }`}
                          >
                            {ch}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Personal contact detail */}
                  {step === 4 && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-4"
                    >
                      <h3 className="font-display font-extrabold text-lg text-gray-900">Informações de contato</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-650 mb-1.5 uppercase font-display">Seu Nome Completo</label>
                          <input
                            id="input-client-name"
                            type="text"
                            required
                            placeholder="Ex: Sérgio Machado"
                            value={clientName}
                            onChange={(e) => setClientName(e.target.value)}
                            className="w-full bg-slate-50 hover:bg-slate-100/50 border border-gray-250 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-650 mb-1.5 uppercase font-display">Número de WhatsApp</label>
                          <input
                            id="input-whatsapp"
                            type="tel"
                            required
                            placeholder="Ex: (11) 99999-9999"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            className="w-full bg-slate-50 hover:bg-slate-100/50 border border-gray-250 focus:bg-white focus:ring-2 focus:ring-brand-primary/20 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-primary transition-all"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Navigation buttons */}
                  <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <button
                        id="btn-back"
                        type="button"
                        onClick={handleBack}
                        className="inline-flex items-center space-x-1 text-xs font-bold text-gray-550 hover:text-gray-900 transition cursor-pointer"
                      >
                        <ArrowLeft className="h-4 w-4" />
                        <span>Voltar</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    {step < totalSteps ? (
                      <button
                        id="btn-next"
                        type="button"
                        onClick={handleNext}
                        className="inline-flex items-center space-x-1.5 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-xs shadow-md shadow-brand-primary/15 transition transform hover:scale-[1.02] cursor-pointer"
                      >
                        <span>Avançar</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    ) : (
                      <button
                        id="btn-submit"
                        type="submit"
                        disabled={loading}
                        className="inline-flex items-center space-x-1.5 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-primary hover:to-brand-secondary text-white font-extrabold text-xs shadow-md shadow-brand-primary/20 transition transform hover:scale-[1.02] cursor-pointer"
                      >
                        {loading ? (
                          <span>Criando Diagnóstico Inteligente...</span>
                        ) : (
                          <>
                            <span>Enviar e Gerar Diagnóstico</span>
                            <Send className="h-4.5 w-4.5" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            ) : (
              /* Diagnostic instant result report display */
              <motion.div
                key="diagnosis-result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/20 text-center space-y-4">
                  <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900">Relatório de Diagnóstico Gerado com Sucesso!</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Com base nas respostas enviadas pelo responsável, nossos estrategistas estruturaram o seguinte parecer preliminar:
                    </p>
                  </div>
                </div>

                {/* Detailed Diagnosis Report Panel */}
                <div className="bg-slate-50 rounded-2xl p-6 border border-gray-150 space-y-5">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                    <span className="text-xs font-mono font-bold text-brand-primary">EMPRESA: {companyName.toUpperCase()}</span>
                    <span className="text-[10px] font-mono text-gray-500">Faixa: {revenue}</span>
                  </div>

                  {/* Recommendation block 1: Traffic Plan */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-brand-primary">📍 Estratégia de Captação Recomendada:</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{diagnosis.strategy}</p>
                  </div>

                  {/* Recommendation block 2: Obstacle advice */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-brand-secondary">🎯 Para solucionar gargalo de "{challenge}":</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{diagnosis.challengeTip}</p>
                  </div>

                  {/* Recommendation block 3: Automation action */}
                  <div className="space-y-1.5">
                    <h4 className="text-xs font-bold font-display uppercase tracking-wider text-gray-900">🤖 Configurações de Automação Chave:</h4>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">{diagnosis.automationTip}</p>
                  </div>

                  {/* Recommendation block 4: Budget */}
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200 text-xs">
                    <span className="text-gray-500 font-bold">Investimento Recomendado Inicial:</span>
                    <span className="text-emerald-600 font-bold font-mono">{diagnosis.recommendedBudget}</span>
                  </div>
                </div>

                {/* Action buttons on generated diagnosis details */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    id="btn-redo"
                    onClick={() => {
                      setDiagnosisGenerated(false);
                      setStep(1);
                    }}
                    className="text-xs font-bold text-gray-550 hover:text-gray-900 transition cursor-pointer"
                  >
                    Recomeçar Diagnóstico
                  </button>

                  <a
                    id="whatsapp-report-send"
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => onSuccess()}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-sm shadow-md shadow-green-500/20 cursor-pointer"
                  >
                    <Smartphone className="h-5 w-5" />
                    <span>Reivindicar Reunião com Diagnóstico</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
