import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Personality = () => {
  const { t } = useTranslation();
  
  const values = [
    {
      title: t("personality.values.rigor.title"),
      description: t("personality.values.rigor.description"),
    },
    {
      title: t("personality.values.commitment.title"),
      description: t("personality.values.commitment.description"),
    },
    {
      title: t("personality.values.openness.title"),
      description: t("personality.values.openness.description"),
    },
  ];

  return (
    <section id="personality" className="bg-white py-24 lg:py-32">
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("personality.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t("personality.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-[#75639b] pl-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-50 p-10 md:p-14 border border-gray-200"
        >
          <p className="text-gray-700 leading-relaxed text-lg max-w-3xl">
            {t("personality.conclusion")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
