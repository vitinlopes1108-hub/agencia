import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

interface NavbarProps {
  onOpenForm: () => void;
}

export default function Navbar({ onOpenForm }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-brand-primary/10 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2.5">
            <Logo variant="original" size={38} className="transform hover:rotate-6 transition-transform duration-300" />
            <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-gray-900">
              Assessoria <span className="text-brand-primary">Skale</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#servicos"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              Serviços
            </a>
            <a
              href="#automacao"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              Automação
            </a>
            <a
              href="#calculadora"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              Calculadora Roas
            </a>
            <a
              href="#metodo"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              Método
            </a>
            <a
              href="#resultados"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              Resultados
            </a>
            <a
              href="#faq"
              className="text-gray-600 hover:text-brand-primary font-medium text-sm transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <button
              id="nav-cta"
              onClick={onOpenForm}
              className="inline-flex items-center space-x-1 px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md shadow-brand-primary/20 cursor-pointer"
            >
              <span>Escalar Minha Empresa</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-brand-primary hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-brand-primary/10 py-6 px-4 space-y-4 shadow-xl"
        >
          <a
            href="#servicos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            Serviços
          </a>
          <a
            href="#automacao"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            Automação
          </a>
          <a
            href="#calculadora"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            Calculadora Roas
          </a>
          <a
            href="#metodo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            Método
          </a>
          <a
            href="#resultados"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            Resultados
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-gray-700 hover:text-brand-primary font-medium text-base py-2"
          >
            FAQ
          </a>
          <button
            id="mobile-nav-cta"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenForm();
            }}
            className="w-full text-center block px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm transition-all shadow-md shadow-brand-primary/10"
          >
            Escalar Minha Empresa
          </button>
        </div>
      )}
    </nav>
  );
}
