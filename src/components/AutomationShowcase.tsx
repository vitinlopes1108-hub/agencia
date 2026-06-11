import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Bot,
  UserCheck,
  Zap,
  Smartphone,
  Sparkles,
  Play,
  CheckCircle,
  Database,
  ArrowRight,
} from "lucide-react";

type FlowStep = "idle" | "dm_trigger" | "chat_qualify" | "crm_routing" | "whatsapp_sale";

export default function AutomationShowcase() {
  const [activeStep, setActiveStep] = useState<FlowStep>("idle");
  const [selectedRevenue, setSelectedRevenue] = useState<string | null>(null);
  const [chatLog, setChatLog] = useState<{ sender: "user" | "bot"; text: string }[]>([]);

  // Simulation controls
  const handleStartSimulation = () => {
    setActiveStep("dm_trigger");
    setSelectedRevenue(null);
    setChatLog([
      { sender: "user", text: "Quero Escalar!" }
    ]);
  };

  useEffect(() => {
    if (activeStep === "dm_trigger") {
      const timer = setTimeout(() => {
        setChatLog(prev => [
          ...prev,
          { sender: "bot", text: "Excelente! Para liberarmos o seu diagnóstico gratuito, me conta qual o faturamento atual da sua empresa?" }
        ]);
        setActiveStep("chat_qualify");
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [activeStep]);

  const handleSelectRevenue = (rev: string) => {
    setSelectedRevenue(rev);
    setChatLog(prev => [
      ...prev,
      { sender: "user", text: rev },
      { sender: "bot", text: "Perfeito! Lead super qualificado detectado. Encaminhando dados para o CRM e abrindo canal vip com um especialista para as próximas 24h..." }
    ]);

    setActiveStep("crm_routing");

    setTimeout(() => {
      setActiveStep("whatsapp_sale");
    }, 2000);
  };

  return (
    <section id="automacao" className="py-24 bg-white border-y border-gray-100 relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,109,217,0.05),transparent_60%)]" opacity="0.6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Diagram explanation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
              <Bot className="h-4 w-4 text-brand-primary animate-pulse" />
              <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
                Tecnologia & Escala Comercial
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Sua Operação Geral de Vendas no{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                Piloto Automático
              </span>
            </h2>

            <p className="text-gray-600 font-light text-base leading-relaxed">
              Muitas agências focam apenas em cliques. Nós construímos sistemas completos de automação que convertem seguidores do Instagram em leads qualificados no WhatsApp em questão de segundos.
            </p>

            {/* List of benefits of automated flow */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-brand-primary/10 text-brand-primary mt-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Velocidade de Resposta Instantânea</h4>
                  <p className="text-xs text-gray-500">Leads respondidos no primeiro minuto têm 7x mais chances de fechar venda.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-brand-primary/10 text-brand-primary mt-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Triagem Automática por faturamento</h4>
                  <p className="text-xs text-gray-500">Filtre curiosos e decole a produtividade da sua equipe focando em quem tem dinheiro.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-1 rounded-full bg-brand-primary/10 text-brand-primary mt-1">
                  <CheckCircle className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">Integração Direta com Seu CRM</h4>
                  <p className="text-xs text-gray-500">Notificações automáticas no celular do seu time comercial sempre que um lead VIP aparecer.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              {activeStep === "idle" ? (
                <button
                  id="btn-start-simulation"
                  onClick={handleStartSimulation}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm transition-all duration-300 shadow-md shadow-brand-primary/20 transform hover:scale-[1.02] cursor-pointer"
                >
                  <Play className="h-4 w-4 fill-current" />
                  <span>Testar Caixa de Automação Ao Vivo</span>
                </button>
              ) : (
                <button
                  id="btn-reset-simulation"
                  onClick={handleStartSimulation}
                  className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-50 border border-gray-200 hover:border-brand-primary/30 text-gray-600 font-semibold text-sm transition-all cursor-pointer"
                >
                  <span>Reiniciar Simulação</span>
                </button>
              )}
            </div>
          </div>

          {/* Right: Simulated Multi-step flowchart app with glowing nodes */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-white border border-brand-primary/10 shadow-lg overflow-hidden min-h-[500px] flex flex-col justify-between">
              {/* Grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(26,109,217,0.01),transparent_70%)] pointer-events-none" />

              {/* Node progress connections */}
              <div className="absolute top-1/2 left-6 right-6 h-0.5 bg-slate-100 -translate-y-1/2 hidden md:block z-0" />

              {activeStep === "idle" ? (
                /* Interactive Idle Standby screen */
                <div className="flex-grow flex flex-col items-center justify-center text-center space-y-6 py-12 z-10">
                  <div className="h-20 w-20 rounded-full bg-brand-primary/5 border border-brand-primary/20 flex items-center justify-center animate-bounce">
                    <Zap className="h-10 w-10 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-gray-900">Pronto para Teste Comercial</h3>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto mt-1">
                      Clique no botão para simular visualmente a experiência automatizada de um cliente entrando pelo seu anúncio.
                    </p>
                  </div>
                  <button
                    id="btn-inner-start"
                    onClick={handleStartSimulation}
                    className="inline-flex items-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary text-white font-bold text-xs cursor-pointer shadow-md shadow-brand-primary/10"
                  >
                    <span>Simular Fluxo de Alta Renda</span>
                  </button>
                </div>
              ) : (
                /* Active simulator screen */
                <div className="flex-grow flex flex-col justify-between z-10 space-y-6">
                  {/* Step Nodes Status bar */}
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className={`p-2 rounded-lg border text-[10px] sm:text-xs font-bold transition-all ${
                      activeStep === "dm_trigger" ? "bg-brand-primary/10 border-brand-primary text-brand-primary" : "bg-slate-50 border-gray-100 text-gray-400"
                    }`}>
                      1. Instagram DM
                    </div>
                    <div className={`p-2 rounded-lg border text-[10px] sm:text-xs font-bold transition-all ${
                      activeStep === "chat_qualify" ? "bg-brand-primary/10 border-brand-primary text-brand-primary" : "bg-slate-50 border-gray-100 text-gray-400"
                    }`}>
                      2. Qualificador
                    </div>
                    <div className={`p-2 rounded-lg border text-[10px] sm:text-xs font-bold transition-all ${
                      activeStep === "crm_routing" ? "bg-brand-primary/10 border-brand-primary text-brand-primary" : "bg-slate-50 border-gray-100 text-gray-400"
                    }`}>
                      3. Distribuição
                    </div>
                    <div className={`p-2 rounded-lg border text-[10px] sm:text-xs font-bold transition-all ${
                      activeStep === "whatsapp_sale" ? "bg-brand-primary/10 border-brand-primary text-brand-primary" : "bg-slate-50 border-gray-100 text-gray-400"
                    }`}>
                      4. WhatsApp VIP
                    </div>
                  </div>

                  {/* Simulated screen showing Chatbot on cellphone */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch flex-grow">
                    {/* Visual chatbot device mockup */}
                    <div className="md:col-span-7 bg-slate-50 border border-gray-100 rounded-2xl p-4 flex flex-col justify-between min-h-[280px]">
                      {/* Cell Header */}
                      <div className="flex items-center space-x-2 pb-2 border-b border-gray-100">
                        <div className="h-6 w-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-[10px] font-extrabold text-brand-primary">
                          AS
                        </div>
                        <div>
                          <p className="text-[10px] font-extrabold text-gray-850">Assessoria Skale Clientes</p>
                          <span className="text-[8px] text-emerald-500 block -mt-1 font-mono font-bold">● assistente online</span>
                        </div>
                      </div>

                      {/* Chat text box */}
                      <div className="flex-grow space-y-3 my-4 overflow-y-auto max-h-[180px] pr-1">
                        <AnimatePresence>
                          {chatLog.map((log, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className={`flex ${log.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div className={`max-w-[85%] rounded-xl p-2.5 text-xs ${
                                log.sender === "user"
                                  ? "bg-brand-primary text-white rounded-br-none shadow-sm"
                                  : "bg-white border border-gray-100 text-gray-700 rounded-bl-none shadow-sm"
                              }`}>
                                {log.text}
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>

                      {/* Active Prompt choice (Ask Qualification faturamento) */}
                      {activeStep === "chat_qualify" && !selectedRevenue && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-1.5 pt-2 border-t border-gray-100"
                        >
                          <p className="text-[10px] text-brand-primary font-bold font-display uppercase tracking-wider text-center">Qual o seu faturamento mensal?</p>
                          <div className="grid grid-cols-2 gap-1.5">
                            {["Até R$ 10k", "R$ 10k a 50k", "R$ 50k a 100k", "R$ 100k+"].map((status, index) => (
                              <button
                                key={index}
                                id={`choice-${index}`}
                                onClick={() => handleSelectRevenue(status)}
                                className="bg-white border border-gray-200 hover:border-brand-primary text-gray-800 rounded-lg p-2 text-[10px] font-bold text-center transition-all duration-200 hover:bg-brand-primary/5 cursor-pointer"
                              >
                                {status}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Operational Node indicators on progress */}
                    <div className="md:col-span-5 flex flex-col justify-center space-y-4">
                      {/* Database update box */}
                      <div className={`p-3 rounded-xl border transition-all ${
                        activeStep === "crm_routing" || activeStep === "whatsapp_sale"
                          ? "bg-brand-primary/5 border-brand-primary text-gray-800"
                          : "bg-slate-50 border-gray-100 text-gray-400"
                      }`}>
                        <div className="flex items-center space-x-2">
                          <Database className={`h-4 w-4 ${activeStep === "crm_routing" || activeStep === "whatsapp_sale" ? "text-brand-primary" : "text-gray-400"}`} />
                          <span className="text-xs font-black uppercase font-mono">Integração CRM</span>
                        </div>
                        <p className="text-[10px] text-gray-550 mt-1">
                          {selectedRevenue ? `Faturamento detectado: ${selectedRevenue}. Registro salvo no funil automaticamente.` : "Aguardando faturamento..."}
                        </p>
                      </div>

                      {/* Commercial redirect VIP notification */}
                      <div className={`p-3 rounded-xl border transition-all ${
                        activeStep === "whatsapp_sale"
                          ? "bg-emerald-50 border-emerald-500/30 text-gray-800 bg-emerald-500/5"
                          : "bg-slate-50 border-gray-100 text-gray-400"
                      }`}>
                        <div className="flex items-center space-x-2">
                          <Smartphone className={`h-4 w-4 ${activeStep === "whatsapp_sale" ? "text-emerald-500" : "text-gray-400"}`} />
                          <span className="text-xs font-black uppercase font-mono">WhatsApp Alerta</span>
                        </div>
                        <p className="text-[10px] text-gray-550 mt-1">
                          {activeStep === "whatsapp_sale" ? "🔊 Alerta comercial enviado! Vendedor VIP assumindo o contato em alta escala." : "Aguardando triagem de leads..."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
