import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Languages, TrendingUp, BarChart3, FileCheck, Calculator, Database, FileSpreadsheet, Palette } from "lucide-react";
import { BSBBackground } from "@/components/BSBBackground";
import { useTranslation, Trans } from "react-i18next";
import { FlagFR } from "./icons/FlagFR";
import { FlagGB } from "./icons/FlagGB";
import { FlagIT } from "./icons/FlagIT";
import { FlagSA } from "./icons/FlagSA";

export const Expertise = () => {
  const { t } = useTranslation();
  
  const skills = [
    { name: t("expertise.skills.financialAnalysis"), icon: TrendingUp },
    { name: t("expertise.skills.managementControl"), icon: BarChart3 },
    { name: t("expertise.skills.audit"), icon: FileCheck },
    { name: t("expertise.skills.dcfModeling"), icon: Calculator },
    { name: t("expertise.skills.financialMath"), icon: Database },
    { name: t("expertise.skills.dueDiligence"), icon: FileCheck },
  ];

  const tools = [
    { name: "Excel", category: t("expertise.tools.analysis"), icon: FileSpreadsheet },
    { name: "Power BI", category: t("expertise.tools.visualization"), icon: BarChart3 },
    { name: "Canva", category: t("expertise.tools.presentation"), icon: Palette },
    { name: "Elisath", category: t("expertise.tools.finance"), icon: Calculator },
  ];

  const education = [
    {
      period: t("expertise.education.master.period"),
      title: t("expertise.education.master.title"),
      school: "Burgundy School of Business",
      specialization: t("expertise.education.master.specialization"),
    },
    {
      period: t("expertise.education.prep.period"),
      title: t("expertise.education.prep.title"),
      school: "Lycée Jean Perrin",
      specialization: t("expertise.education.prep.specialization"),
    },
  ];

  const languages = [
    { name: t("expertise.languages.french"), level: t("expertise.languages.native"), code: "FR", Icon: FlagFR },
    { name: t("expertise.languages.english"), level: "B2", code: "EN", Icon: FlagGB },
    { name: t("expertise.languages.italian"), level: "A1", code: "IT", Icon: FlagIT },
    { name: t("expertise.languages.arabic"), level: "A1", code: "AR", Icon: FlagSA },
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
            {t("expertise.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {t("expertise.subtitle")}
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
              <h3 className="text-xl font-semibold text-gray-900">{t("expertise.skills.title")}</h3>
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
              <h3 className="text-xl font-semibold text-gray-900">{t("expertise.tools.title")}</h3>
            </div>
            <div className="space-y-5">
              {tools.map((tool, index) => {
                const ToolIcon = tool.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 py-2.5 border-b border-gray-200 last:border-0 hover:bg-[#75639b]/5 transition-colors px-2 -mx-2 rounded"
                  >
                    <div className="flex-shrink-0 p-2 bg-white border border-gray-200 rounded">
                      <ToolIcon className="h-5 w-5 text-[#75639b]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-800 font-semibold mb-1">{tool.name}</div>
                      <div className="text-sm text-[#75639b]">{tool.category}</div>
                    </div>
                  </div>
                );
              })}
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
              <h3 className="text-xl font-semibold text-gray-900">{t("expertise.languages.title")}</h3>
            </div>
            <div className="space-y-5">
              {languages.map((lang, index) => {
                const FlagIcon = lang.Icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between py-2.5 border-b border-gray-200 last:border-0 hover:bg-[#75639b]/5 transition-colors px-2 -mx-2 rounded"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-6 flex items-center justify-center border border-gray-200 rounded-sm overflow-hidden shadow-sm" role="img" aria-label={lang.name}>
                        <FlagIcon className="w-full h-full" />
                      </div>
                      <div>
                        <span className="text-gray-800 font-medium block">{lang.name}</span>
                        <span className="text-xs text-gray-500">{lang.code}</span>
                      </div>
                    </div>
                    <span className="text-sm font-semibold text-[#75639b] bg-[#75639b]/10 px-2 py-1 rounded">
                      {lang.level}
                    </span>
                  </div>
                );
              })}
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
            <h3 className="text-2xl font-semibold text-gray-900">{t("expertise.education.title")}</h3>
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
                      title={t("common.bsbWebsite")}
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
