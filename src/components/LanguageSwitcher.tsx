import { useTranslation } from "react-i18next";
import { FlagFR } from "./icons/FlagFR";
import { FlagGB } from "./icons/FlagGB";
import { motion } from "framer-motion";

interface LanguageSwitcherProps {
  variant?: "desktop" | "mobile";
}

export const LanguageSwitcher = ({ variant = "desktop" }: LanguageSwitcherProps) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "fr";
  const isEnglish = currentLang === "en";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.lang = lng;
  };

  if (variant === "mobile") {
    return (
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => changeLanguage("fr")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
            currentLang === "fr"
              ? "bg-[#75639b] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Switch to French"
        >
          <FlagFR className="w-5 h-4" />
          <span className="text-sm font-medium">FR</span>
        </button>
        <button
          type="button"
          onClick={() => changeLanguage("en")}
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all ${
            currentLang === "en"
              ? "bg-[#75639b] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          aria-label="Switch to English"
        >
          <FlagGB className="w-5 h-4" />
          <span className="text-sm font-medium">EN</span>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5">
      {/* Bouton FR */}
      <button
        type="button"
        onClick={() => changeLanguage("fr")}
        className={`group flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 ${
          currentLang === "fr"
            ? "bg-[#75639b] text-white shadow-lg shadow-[#75639b]/30 scale-105"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 border border-gray-200"
        }`}
        aria-label="Switch to French"
        title="Français"
      >
        <FlagFR className={`w-4 h-3 transition-transform ${currentLang === "fr" ? "scale-110" : ""}`} />
      </button>
      
      {/* Switch Toggle */}
      <button
        type="button"
        onClick={() => changeLanguage(isEnglish ? "fr" : "en")}
        className={`relative w-12 h-6 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#75639b] focus:ring-offset-2 ${
          isEnglish ? "bg-[#75639b]/20" : "bg-gray-200"
        } hover:opacity-80`}
        aria-label={`Switch to ${isEnglish ? "French" : "English"}`}
        role="switch"
        aria-checked={isEnglish}
      >
        <motion.div
          className={`absolute top-0.5 w-5 h-5 rounded-full shadow-md flex items-center justify-center transition-colors duration-200 ${
            isEnglish ? "bg-[#75639b]" : "bg-white border border-gray-300"
          }`}
          initial={false}
          animate={{
            x: isEnglish ? 22 : 2,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        >
          {isEnglish ? (
            <FlagGB className="w-3 h-2.5" />
          ) : (
            <FlagFR className="w-3 h-2.5" />
          )}
        </motion.div>
      </button>
      
      {/* Bouton EN */}
      <button
        type="button"
        onClick={() => changeLanguage("en")}
        className={`group flex items-center justify-center w-9 h-9 rounded-lg transition-all duration-200 ${
          currentLang === "en"
            ? "bg-[#75639b] text-white shadow-lg shadow-[#75639b]/30 scale-105"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105 border border-gray-200"
        }`}
        aria-label="Switch to English"
        title="English"
      >
        <FlagGB className={`w-4 h-3 transition-transform ${currentLang === "en" ? "scale-110" : ""}`} />
      </button>
    </div>
  );
};

