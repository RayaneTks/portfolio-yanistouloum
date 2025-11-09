import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Vision = () => {
  const { t } = useTranslation();
  
  return (
    <section id="vision" className="bg-gray-900 py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("vision.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto"
        >
          <p>{t("vision.paragraph1")}</p>
          <p>{t("vision.paragraph2")}</p>
          <p>{t("vision.paragraph3")}</p>
        </motion.div>
      </div>
    </section>
  );
};
