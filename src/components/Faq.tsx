import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "O que faz exatamente a Assessoria Skale?",
      a: "Nós estruturamos a máquina de vendas digital da sua empresa. Atuamos criando e gerindo anúncios de alta conversão (Meta e Google Ads), otimizando diariamente os orçamentos, organizando a estética de vendas do seu perfil no Instagram e implantando automações de direct/WhatsApp para qualificar leads e economizar tempo do seu comercial.",
    },
    {
      q: "Qual o investimento mínimo mensal necessário em anúncios?",
      a: "Recomendamos começar com no mínimo R$ 1.500,00 por mês (cerca de R$ 50 por dia) dedicados exclusivamente às plataformas de anúncio (Meta/Google). Esse orçamento inicial garante dados estatísticos suficientes para que nossos estrategistas encontrem criativos campeões e gerem os primeiros leads relevantes para a escala.",
    },
    {
      q: "Em quanto tempo os primeiros resultados começam a aparecer?",
      a: "De forma geral, a estruturação e o setup ocorrem dentro dos primeiros 8 a 10 dias de assessoria. Uma vez lançadas as campanhas, costuma-se registrar faturamento e cliques qualificados já nas primeiras 48h. A otimização refinada e a real escala de conversão robustecem-se à medida que acumulamos dados nas primeiras semanas comerciais.",
    },
    {
      q: "Preciso necessariamente aparecer nos Stories ou gravar vídeos?",
      a: "Não é obrigatório! Conseguimos escalar marcas perfeitamente utilizando criativos em imagens profissionais, animações vetoriais, locutores profissionais ou VSLs focadas em quebra de objeções. Se você preferir aparecer, fornecemos roteiros mastigados prontos para gravação para acelerar a conversão, mas estruturamos opções 100% integradas sem necessidade de gravações pessoais se assim optar.",
    },
    {
      q: "Como as automações de chat diminuem o estresse do time de vendas?",
      a: "Sempre que um lead interage via direct, nossa automação ManyChat faz uma triagem instantânea de qualificação (descobre faturamento, necessidade, dores) em segundos. O robô responde de imediato, filtrando curiosos de baixas taxas de conversão de leads VIP. Seu time comercial ganha horas de produtividade pois foca unicamente em leads prontos para fechar contrato.",
    },
    {
      q: "Qual o formato do contrato de prestação de serviço?",
      a: "Trabalhamos com contratos de assessoria continuada, com taxas mensais transparentes e fixas. Em cenários específicos de grandes marcas ou e-commerces em alta escala, desenhamos parcerias comerciais híbridas baseadas em porcentagem de comissão por faturamento gerado para alinhar perfeitamente nossos objetivos de crescimento mútuo.",
    },
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-[20%] left-[-10%] w-[380px] h-[380px] bg-brand-primary/5 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-brand-primary/5 border border-brand-primary/25">
            <HelpCircle className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-bold text-brand-primary tracking-wide uppercase">
              Perguntas Frequentes
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900">
            Suas Dúvidas <span className="text-brand-primary">Respondidas</span>
          </h2>
          <p className="text-gray-650 font-light text-sm sm:text-base">
            Esclareça as perguntas mais habituais para começar a escalabilidade do seu negócio com a Assessoria Skale com clareza.
          </p>
        </div>

        {/* FAQ Accordion container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-gray-150 hover:border-brand-primary/30 rounded-2xl p-5 sm:p-6 transition duration-200 shadow-sm"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between text-left font-display font-black text-sm sm:text-base text-gray-950 cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-brand-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed border-t border-gray-200 mt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
