import { motion } from "framer-motion";
import { ChevronDown, Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BSBBackground } from "@/components/BSBBackground";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex items-center py-32 lg:py-40"
    >
      <BSBBackground opacity={0.15} />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/10 to-white/70"></div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm font-medium text-[#75639b] uppercase tracking-wider">
                Étudiant en Master Finance d'Entreprise
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
                Yanis Touloum
              </h1>
              <div className="h-px w-24 bg-[#75639b]"></div>
              <p className="text-xl md:text-2xl text-gray-600 font-light">
                Analyste Finance & Audit
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Programme Grande École à <a href="https://www.bsb-education.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#75639b] hover:text-[#654a85] underline decoration-2 underline-offset-2 transition-colors">BSB</a>. Spécialisation en Mathématiques Financières. 
              À la recherche d'un stage en <span className="font-semibold text-gray-900">audit</span> à partir de juillet 2026.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={() => scrollToSection("about")}
                size="lg"
                className="bg-[#75639b] hover:bg-[#654a85] text-white px-8 py-6 rounded-none font-medium transition-colors"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#75639b] text-[#75639b] hover:bg-[#75639b] hover:text-white px-8 py-6 rounded-none font-medium transition-colors"
                onClick={() => window.open("https://www.linkedin.com/in/yanis-touloum-05b60b316", "_blank")}
              >
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gray-100 -z-10 translate-x-4 translate-y-4"></div>
              <img
                src="/yanis-photo.jpg"
                alt="Yanis Touloum"
                className="w-full h-full object-cover grayscale-[20%]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23f3f4f6' width='400' height='400'/%3E%3Ctext fill='%236b7280' font-family='Arial' font-size='120' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EYT%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection("about")}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider">Découvrir</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
};
