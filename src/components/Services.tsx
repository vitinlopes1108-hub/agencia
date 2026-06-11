import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Target,
  LineChart,
  Instagram,
  Bot,
  Zap,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  gargalos: string[];
  entregaveis: string[];
  meta: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string>("trafego");

  const listServices: ServiceItem[] = [
    {
      id: "trafego",
      icon: Target,
      title: "Tráfego Pago Especializado",
      badge: "Aquisição",
      shortDesc: "Colocamos o seu produto/serviço na cara do cliente ideal nas principais redes de anúncio.",
      fullDesc: "Desenvolvemos campanhas assertivas e direcionadas. Analisamos detalhadamente seus concorrentes, definimos públicos quentes com poder de compra e estabelecemos um fluxo diário de novos clientes buscando o seu negócio.",
      gargalos: [
        "Falta de clientes qualificados diariamente",
        "Anúncios que torram verba sem trazer retorno",
        "Dificuldade para achar o público certo",
      ],
      entregaveis: [
        "Gestão completa em Meta Ads (Instagram/Facebook)",
        "Gestão avançada em Google Ads (Pesquisa/YouTube)",
        "Setup completo e pixel de rastreamento blindado",
        "Acompanhamento analítico em tempo real",
      ],
      meta: "Aumentar Taxa de Cliques e Leads",
    },
    {
      id: "otimizacao",
      icon: LineChart,
      title: "Otimização Contínua de Campanhas",
      badge: "Performance",
      shortDesc: "Melhoramos o ROAS cortando anúncios ruins e duplicando o orçamento das campanhas campeãs.",
      fullDesc: "Não somos panfleteiros virtuais. Monitoramos e otimizamos suas campanhas diariamente, ajustando métricas como CTR, CPM e CPL para garantir o menor custo possível por conversão e assegurar lucratividade.",
      gargalos: [
        "Custo por Lead (CPL) alto e subindo constantemente",
        "Campanhas que flutuam demais (um dia sobem, outro caem)",
        "Dificuldade em organizar os números das campanhas",
      ],
      entregaveis: [
        "Análise minuciosa de métricas secundárias (CTR, CPC, CPA)",
        "Ajustes diários de lances de orçamento",
        "Testes A/B incessantes de novos públicos",
        "Relatórios semanais objetivos (sem enrolação técnica)",
      ],
      meta: "Reduzir CPL e Escalabilidade de ROAS",
    },
    {
      id: "conteudo",
      icon: Instagram,
      title: "Criação de Conteúdo & Organização do IG",
      badge: "Branding",
      shortDesc: "Ajeitamos a casa! Deixamos seu perfil com cara de grife profissional com criativos focados em vender.",
      fullDesc: "Um anúncio bem feito que leva o cliente para um Instagram desorganizado é dinheiro jogado fora. Estruturamos seu posicionamento estético, criamos copies que convertem e organizamos o feed para transformá-lo num portal de vendas.",
      gargalos: [
        "Seguidores que chegam pelos anúncios mas não compram",
        "Perfil amador que passa desconfiança para clientes de ticket alto",
        "Falta de direcionamento do que falar nos Stories ou Reels",
      ],
      entregaveis: [
        "Otimização completa do perfil (Bio, Destaques, Links)",
        "Roteiros direcionados de Stories que vendem",
        "Design profissional para anúncios (Imagens e Vídeos VSL)",
        "Grade editorial focada em quebrar objeções do cliente",
      ],
      meta: "Aumentar Autoridade e Desejo de Compra",
    },
    {
      id: "automacao",
      icon: Bot,
      title: "Automações de Chat e Processos",
      badge: "Produtividade",
      shortDesc: "Seu Instagram e WhatsApp trabalhando sozinhos 24 horas por dia qualificando e convertendo clientes.",
      fullDesc: "Elimine o atraso na resposta de novos leads. Criamos fluxos inteligentes automatizados no direct e WhatsApp. O lead chega, interage com o robô, é qualificado, e seu vendedor só entra quando o cliente está pronto para passar o cartão.",
      gargalos: [
        "Vendedores estressados respondendo perguntas bobas e repetitivas",
        "Demora de horas para responder um lead que esfria",
        "Perda de controle de leads que esquecem de retornar",
      ],
      entregaveis: [
        "Integração oficial ManyChat nos Direct do Instagram",
        "Fluxo inteligente de captação de WhatsApp direto pelo direct",
        "Robôs de Autoatendimento com respostas instantâneas personalizadas",
        "Automações de acompanhamento (follow-up) sem estresse",
      ],
      meta: "Eliminar 100% dos Leads Frios no WhatsApp",
    },
    {
      id: "escala",
      icon: Zap,
      title: "Estratégia, Conversão & Escala",
      badge: "Crescimento",
      shortDesc: "Montamos o quebra-cabeça estratégico para decolar de vez o faturamento do seu negócio.",
      fullDesc: "Unimos tráfego de ponta, automação dinâmica e canais de atendimento eficientes num ecossistema único. Ajudamos a modelar seu funil de vendas principal aplicando táticas de up-sell, cross-sell e remarketing agressivo.",
      gargalos: [
        "Faturamento estagnado mesmo aumentando o investimento",
        "Falta de visibilidade do funil inteiro (não sabe onde perde cliente)",
        "Vendas instáveis e imprevisíveis",
      ],
      entregaveis: [
        "Estruturação de funis híbridos (Tráfego Pago + Vendedor + Robô)",
        "Táticas de remarketing ativo direcionado",
        "Mentoria estratégica do script de venda no WhatsApp",
        "Desenho do plano de metas de escala para o próximo nível",
      ],
      meta: "Vendas Previsíveis e Volume Exponencial",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-dark-bg relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] rounded-full bg-brand-secondary/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3.5 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/20">
            <Sparkles className="h-4 w-4 text-brand-primary animate-pulse" />
            <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
              O Que Entregamos para Sua Empresa
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Nossos Pilares de <span className="text-brand-primary">Transformação</span>
          </h2>
          <p className="text-gray-600 font-light text-base sm:text-lg">
            Combinamos estratégias de tráfego ultra sintonizadas com ferramentas tecnológicas automatizadas para construir um fluxo constante de clientes e impulsionar suas conversões.
          </p>
        </div>

        {/* Dynamic Service Selector & Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Service Tabs (Left column) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 justify-center">
            {listServices.map((service) => {
              const Icon = service.icon;
              const isActive = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  id={`tab-${service.id}`}
                  onClick={() => setSelectedService(service.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-4 cursor-pointer ${
                    isActive
                      ? "bg-white border-brand-primary shadow-md shadow-brand-primary/5"
                      : "bg-slate-50/50 border-gray-100 hover:border-gray-200 hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-tr from-brand-primary to-brand-secondary text-white shadow-md shadow-brand-primary/20"
                        : "bg-slate-100 text-gray-500"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center space-x-2">
                      <span className={`font-display font-bold sm:text-lg ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                        {service.title}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-primary uppercase tracking-widest block">
                      Pilar {service.badge}
                    </span>
                    <p className="text-xs text-gray-500 font-light line-clamp-1">
                      {service.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Service Detailed View (Right column) */}
          <div className="lg:col-span-7">
            <div className="h-full bg-white border border-brand-primary/10 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between bg-gradient-to-tr from-white to-slate-50/30">
              {/* Abs decoration backdrop */}
              <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-brand-primary/5 to-transparent rounded-full pointer-events-none" />

              <AnimatePresence mode="wait">
                {listServices.map((item) => {
                  if (item.id !== selectedService) return null;
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8 flex-grow flex flex-col justify-between"
                    >
                      <div className="space-y-6">
                        {/* Title & Badge */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-3.5 rounded-2xl bg-brand-primary/5 text-brand-primary">
                              <Icon className="h-8 w-8" />
                            </div>
                            <div>
                              <span className="text-xs font-mono font-bold text-brand-primary tracking-widest uppercase block mb-0.5">
                                Pilar de Metodologia
                              </span>
                              <h3 className="font-display text-2xl font-black text-gray-900">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <div className="inline-block self-start sm:self-center px-4 py-1.5 rounded-full bg-brand-primary/5 border border-brand-primary/10 text-brand-primary font-mono text-xs font-bold tracking-wider uppercase">
                            OBJETIVO: {item.meta}
                          </div>
                        </div>

                        {/* Long Description */}
                        <p className="text-gray-600 font-light text-base leading-relaxed">
                          {item.fullDesc}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                          {/* Common Blockages (Gargalos) */}
                          <div className="space-y-4">
                            <h4 className="text-sm font-bold font-display uppercase tracking-widest text-[#dc2626] flex items-center space-x-2">
                              <span>⚠️ Problemas Comuns Resolvidos</span>
                            </h4>
                            <ul className="space-y-3">
                              {item.gargalos.map((g, gi) => (
                                <li key={gi} className="flex items-start space-x-2.5 text-xs text-gray-500">
                                  <div className="h-1.5 w-1.5 rounded-full bg-[#dc2626] mt-1.5 flex-shrink-0" />
                                  <span>{g}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Key Deliverables */}
                          <div className="space-y-4">
                            <h4 className="text-sm font-bold font-display uppercase tracking-widest text-brand-primary flex items-center space-x-2">
                              <span>🚀 O que entregamos para você</span>
                            </h4>
                            <ul className="space-y-3">
                              {item.entregaveis.map((delivery, di) => (
                                <li key={di} className="flex items-start space-x-2.5 text-xs text-gray-600">
                                  <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                                  <span>{delivery}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Floating CTA in detailed box */}
                      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-100 mt-8">
                        <div className="text-center sm:text-left">
                          <span className="text-xs text-gray-400 font-medium">Tem interesse nesse pilar?</span>
                          <p className="text-sm font-bold text-gray-900">Montamos sua estrutura sob demanda</p>
                        </div>
                        <a
                          href="#contato"
                          className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm transition-all duration-300 transform hover:scale-105 shadow-md shadow-brand-primary/10"
                        >
                          <span>Solicitar Orçamento</span>
                          <ArrowRight className="h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
