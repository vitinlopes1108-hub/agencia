import { ArrowUp, Instagram, Linkedin, Smartphone } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-white border-t border-gray-150 py-16 text-xs text-gray-550 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Info and brand */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <Logo size={32} variant="original" />
              <span className="font-display font-black text-lg text-gray-900">
                Assessoria <span className="text-brand-primary">Skale</span>
              </span>
            </div>
            <p className="text-gray-500 font-light leading-relaxed max-w-sm">
              Empresa parceira especializada em tração e otimização comercial de alta performance. Estruturamos seus anúncios de tráfego pago, suas copies e suas automações de chat com foco em retorno real.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-gray-200 hover:border-brand-primary text-gray-550 hover:text-brand-primary rounded-xl transition cursor-pointer"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-gray-200 hover:border-brand-primary text-gray-550 hover:text-brand-primary rounded-xl transition cursor-pointer"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 border border-gray-200 hover:border-brand-primary text-gray-550 hover:text-brand-primary rounded-xl transition cursor-pointer"
              >
                <Smartphone className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Fast Navigation links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-extrabold text-xs text-gray-950 uppercase tracking-wider">Navegação Rápida</h4>
            <ul className="space-y-2.5 font-normal text-gray-500">
              <li>
                <a href="#servicos" className="hover:text-brand-primary transition">Serviços Governança</a>
              </li>
              <li>
                <a href="#automacao" className="hover:text-brand-primary transition">Automações Customizadas</a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-brand-primary transition">Calculadora ROAS</a>
              </li>
              <li>
                <a href="#metodo" className="hover:text-brand-primary transition">Nossa Metodologia</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-brand-primary transition">Casos & Provas</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact metadata info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-extrabold text-xs text-gray-950 uppercase tracking-wider">Sede e Atendimento Comercial</h4>
            <p className="text-gray-500 font-light leading-relaxed">
              Atendimento executivo em todo o Brasil de forma remota ativa. Reuniões de estratégia e briefings com horário agendado.
            </p>
            <div className="text-[11px] space-y-1">
              <p className="text-gray-800 font-semibold">📧 comercial@assessoriaskale.com.br</p>
              <p className="text-gray-800 font-semibold">📞 (11) 99999-9999 (WhatsApp Oficial)</p>
            </div>
          </div>

        </div>

        {/* Corporate bottom lines */}
        <div className="mt-12 pt-8 border-t border-gray-150 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px]">
          <div>
            <p>© 2026 Assessoria Skale Ltda. Todos os direitos reservados.</p>
            <p className="mt-0.5 text-gray-400">
              Desenvolvido de forma integrada com foco em alta conversão e escala. CNPJ Fictício: 32.482.110/0001-92
            </p>
          </div>

          <button
            id="btn-scroll-top"
            onClick={handleScrollTop}
            className="inline-flex items-center space-x-1 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-550 hover:border-brand-primary/40 hover:text-brand-primary transition group cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
