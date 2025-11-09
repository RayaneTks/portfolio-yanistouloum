import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileMenuOpenRef = useRef(isMobileMenuOpen);

  // Mettre à jour la ref quand l'état change
  useEffect(() => {
    isMobileMenuOpenRef.current = isMobileMenuOpen;
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Fermer le menu mobile immédiatement
    const wasMenuOpen = isMobileMenuOpenRef.current;
    if (wasMenuOpen) {
      setIsMobileMenuOpen(false);
    }

    // Fonction pour effectuer le scroll
    const performScroll = () => {
      const element = document.getElementById(id);
      if (!element) {
        console.warn(`Section avec l'id "${id}" introuvable`);
        return;
      }

      // Calculer la position avec offset pour la navbar fixe
      const navHeight = 64; // Hauteur de la navbar (h-16 = 64px)
      const elementTop = element.offsetTop;
      const offsetPosition = elementTop - navHeight;

      // Scroller vers la position calculée
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth"
      });
    };

    // Sur mobile, attendre que le menu se ferme complètement
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    if (isMobile && wasMenuOpen) {
      // Attendre que l'animation de fermeture soit terminée (200ms + marge)
      setTimeout(performScroll, 300);
    } else {
      // Sur desktop ou si le menu n'était pas ouvert, scroller immédiatement
      performScroll();
    }
  };

  const navItems = [
    { label: t("nav.about"), id: "about" },
    { label: t("nav.experiences"), id: "achievements" },
    { label: t("nav.expertise"), id: "expertise" },
    { label: t("nav.vision"), id: "vision" },
    { label: t("nav.contact"), id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold text-gray-900 hover:text-gray-700 transition-colors flex-shrink-0"
            >
              Yanis Touloum
            </button>
            <div className="hidden sm:flex items-center">
              <LanguageSwitcher variant="desktop" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="bg-[#75639b] hover:bg-[#654a85] text-white rounded-none text-sm transition-colors"
            >
              {t("nav.contact")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors touch-manipulation"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-gray-200 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">
              {/* Language Switcher Mobile - En haut */}
              <div className="pb-4 border-b border-gray-200 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {i18n.language === "en" ? "Language" : "Langue"}
                  </span>
                </div>
                <LanguageSwitcher variant="mobile" />
              </div>
              
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    scrollToSection(item.id);
                  }}
                  className="block w-full text-left py-3 px-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 active:bg-gray-100 transition-colors text-base font-medium rounded-md touch-manipulation"
                >
                  {item.label}
                </button>
              ))}
              <Button
                type="button"
                onClick={() => {
                  scrollToSection("contact");
                }}
                className="w-full bg-[#75639b] hover:bg-[#654a85] active:bg-[#5a4274] text-white mt-2 rounded-none transition-colors py-3 touch-manipulation"
              >
                {t("nav.contact")}
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
