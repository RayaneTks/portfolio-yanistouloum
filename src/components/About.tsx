import { motion } from "framer-motion";
import { BSBBackground } from "@/components/BSBBackground";
import { useTranslation, Trans } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="bg-gray-50 py-24 lg:py-32 relative">
      <BSBBackground opacity={0.15} />
      <div className="absolute inset-0 bg-gray-50/75 pointer-events-none"></div>
      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("about.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-8"></div>
        </motion.div>

        <div className="max-w-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-700 leading-relaxed text-lg"
          >
            <p>
              <Trans
                i18nKey="about.paragraph1"
                components={{
                  prepClass: <span className="font-semibold text-gray-900" />,
                  bsbLink: <a href="https://www.bsb-education.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#75639b] hover:text-[#654a85] underline decoration-2 underline-offset-2 transition-colors" />
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.paragraph2"
                components={{
                  vertMarine: <a href="https://www.vert-marine.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#75639b] underline decoration-2 underline-offset-2 transition-colors" />,
                  chronopost: <a href="https://www.chronopost.fr/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#75639b] underline decoration-2 underline-offset-2 transition-colors" />
                }}
              />
            </p>
            <p>
              <Trans
                i18nKey="about.paragraph3"
                components={{
                  audit: <span className="font-semibold text-[#75639b]" />,
                  value: <span className="font-semibold text-gray-900" />
                }}
              />
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-12 border-t border-gray-300"
          >
            <blockquote className="text-xl md:text-2xl font-light text-gray-900 italic border-l-4 border-[#75639b] pl-8 leading-relaxed">
              "{t("about.quote")}"
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
