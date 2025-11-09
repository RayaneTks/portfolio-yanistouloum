import { motion } from "framer-motion";
import { FileSpreadsheet, BarChart3, Database, FileText } from "lucide-react";
import { BSBBackground } from "@/components/BSBBackground";
import { useTranslation } from "react-i18next";

export const Achievements = () => {
  const { t } = useTranslation();
  
  const missions = [
    {
      title: t("achievements.missions.financialModeling.title"),
      context: t("achievements.missions.financialModeling.context"),
      company: "BSB",
      companyLink: "https://www.bsb-education.com/",
      logo: "/logos/BSB_logo_burgundy.jpg",
      description: t("achievements.missions.financialModeling.description"),
      tools: [
        { name: t("achievements.tools.excel"), icon: FileSpreadsheet },
        { name: t("achievements.tools.powerBI"), icon: BarChart3 },
        { name: t("achievements.tools.elisath"), icon: Database },
      ],
    },
    {
      title: t("achievements.missions.cashControl.title"),
      context: t("achievements.missions.cashControl.context"),
      company: "Vert Marine",
      companyLink: "https://www.vert-marine.com/",
      logo: "/logos/vert_marine.png",
      description: t("achievements.missions.cashControl.description"),
      tools: [
        { name: t("achievements.tools.excel"), icon: FileSpreadsheet },
        { name: t("achievements.tools.managementSystems"), icon: Database },
      ],
    },
    {
      title: t("achievements.missions.logisticsTraceability.title"),
      context: t("achievements.missions.logisticsTraceability.context"),
      company: "Chronopost",
      companyLink: "https://www.chronopost.fr/",
      logo: "/logos/chronopost_logo.png",
      description: t("achievements.missions.logisticsTraceability.description"),
      tools: [
        { name: t("achievements.tools.lymSystem"), icon: Database },
        { name: t("achievements.tools.excel"), icon: FileSpreadsheet },
        { name: t("achievements.tools.reports"), icon: FileText },
      ],
    },
  ];

  return (
    <section id="achievements" className="bg-gray-50 py-24 lg:py-32 relative">
      <BSBBackground opacity={0.15} />
      <div className="absolute inset-0 bg-gray-50/75 pointer-events-none"></div>
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("achievements.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            {t("achievements.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full flex flex-col bg-white border border-gray-200 hover:border-[#75639b]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#75639b]/5">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-200">
                  {/* Logo et contexte */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-[#75639b] uppercase tracking-wider mb-2">
                          {mission.context}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {mission.title}
                        </h3>
                      </div>
                      {mission.logo && (
                        <div className="flex-shrink-0 flex items-center justify-center bg-white rounded border border-gray-200 p-2 min-w-[80px] min-h-[60px]">
                          <a 
                            href={mission.companyLink || "#"} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="block w-full h-full flex items-center justify-center"
                            title={`${t("common.visitWebsite")} ${mission.company}`}
                          >
                            <img 
                              src={mission.logo}
                              alt={`Logo ${mission.company}`}
                              className="max-h-12 max-w-[120px] w-auto h-auto object-contain"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                console.error(`Erreur chargement logo ${mission.company}:`, mission.logo);
                                target.style.display = 'none';
                                // Afficher le nom de l'entreprise en fallback
                                const parent = target.parentElement;
                                if (parent && !parent.querySelector('.logo-fallback')) {
                                  const fallback = document.createElement('div');
                                  fallback.className = 'logo-fallback text-xs font-semibold text-[#75639b] text-center';
                                  fallback.textContent = mission.company;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          </a>
                        </div>
                      )}
                    </div>
                    {mission.companyLink && (
                      <a 
                        href={mission.companyLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-[#75639b] hover:text-[#654a85] underline decoration-1 underline-offset-2 transition-colors inline-flex items-center gap-1"
                        title={`${t("common.visitWebsite")} ${mission.company}`}
                      >
                        {mission.company}
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mission.tools.map((tool, toolIndex) => {
                      const ToolIcon = tool.icon;
                      return (
                        <div
                          key={toolIndex}
                          className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#75639b]/30 text-xs font-medium text-gray-700 hover:border-[#75639b]/60 hover:bg-[#75639b]/5 transition-colors"
                        >
                          <ToolIcon className="h-3.5 w-3.5 text-[#75639b] flex-shrink-0" />
                          <span>{tool.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 leading-relaxed">
                    {mission.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
