import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Languages, TrendingUp, BarChart3, FileCheck, Calculator, Database, FileSpreadsheet, Palette, Globe2 } from "lucide-react";
import { BSBBackground } from "@/components/BSBBackground";

export const Expertise = () => {
  const skills = [
    { name: "Analyse Financière", icon: TrendingUp },
    { name: "Contrôle de Gestion", icon: BarChart3 },
    { name: "Audit", icon: FileCheck },
    { name: "Modélisation DCF", icon: Calculator },
    { name: "Mathématiques Financières", icon: Database },
    { name: "Due Diligence", icon: FileCheck },
  ];

  const tools = [
    { name: "Excel", category: "Analyse", icon: FileSpreadsheet },
    { name: "Power BI", category: "Visualisation", icon: BarChart3 },
    { name: "Canva", category: "Présentation", icon: Palette },
    { name: "Elisath", category: "Finance", icon: Calculator },
  ];

  const education = [
    {
      period: "2024 - Présent",
      title: "Master Finance d'Entreprise",
      school: "Burgundy School of Business",
      specialization: "Mathématiques Financières",
    },
    {
      period: "2022 - 2024",
      title: "Classe Préparatoire ECT",
      school: "Lycée Jean Perrin",
      specialization: "Économie, Droit, Management, Mathématiques",
    },
  ];

  const languages = [
    { name: "Français", level: "Natif", code: "FR", flag: "🇫🇷" },
    { name: "Anglais", level: "B2", code: "EN", flag: "🇬🇧" },
    { name: "Italien", level: "A1", code: "IT", flag: "🇮🇹" },
    { name: "Arabe", level: "A1", code: "AR", flag: "🇸🇦" },
  ];

  return (
    <section id="expertise" className="bg-white py-24 lg:py-32 relative">
      <BSBBackground opacity={0.15} />
      <div className="absolute inset-0 bg-white/80 pointer-events-none"></div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expertise
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Compétences techniques et méthodologiques développées au cours de ma formation et de mes expériences professionnelles.
          </p>
        </motion.div>

        {/* Compétences, Outils et Langues */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-[#75639b]">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Compétences</h3>
            </div>
            <div className="space-y-5">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-2.5 border-b border-gray-200 last:border-0 hover:bg-[#75639b]/5 transition-colors px-2 -mx-2 rounded"
                  >
                    <Icon className="h-5 w-5 text-[#75639b] flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Outils */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-50 p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-[#75639b]">
                <Database className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Outils</h3>
            </div>
            <div className="space-y-5">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="py-2.5 border-b border-gray-200 last:border-0 hover:bg-[#75639b]/5 transition-colors px-2 -mx-2 rounded"
                >
                  <div className="text-gray-800 font-semibold mb-1">{tool.name}</div>
                  <div className="text-sm text-[#75639b]">{tool.category}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 p-8 border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-[#75639b]">
                <Languages className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Langues</h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-0"
                >
                  <span className="text-gray-800 font-medium">{lang.name}</span>
                  <span className="text-sm text-gray-600 font-medium">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Formation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-8 md:p-12 border border-gray-200"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-[#75639b]">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-900">Formation</h3>
          </div>
          <div className="space-y-10">
            {education.map((edu, index) => (
              <div
                key={index}
                className="border-l-2 border-[#75639b] pl-8 pb-10 last:pb-0 relative"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-[#75639b] rounded-full"></div>
                <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {edu.period}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.title}</h4>
                <p className="text-gray-700 font-medium mb-2">
                  {edu.school === "Burgundy School of Business" ? (
                    <a 
                      href="https://www.bsb-education.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#75639b] hover:text-[#654a85] underline decoration-2 underline-offset-2 transition-colors font-semibold"
                      title="Visiter le site de BSB Dijon"
                    >
                      {edu.school}
                    </a>
                  ) : (
                    edu.school
                  )}
                </p>
                <p className="text-gray-600">{edu.specialization}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
