import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Download } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();
  const handleDownloadCV = () => {
    try {
      const link = document.createElement('a');
      link.href = '/Yanis-Touloum.audit.pdf';
      link.download = 'Yanis-Touloum-CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      window.open('/Yanis-Touloum.audit.pdf', '_blank');
    }
  };

  return (
    <footer id="contact" className="bg-gray-900 py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("footer.title")}
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-8"></div>
          <p className="text-lg text-gray-300 max-w-2xl">
            {t("footer.description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">{t("footer.information")}</h3>
              <div className="space-y-4">
                <a
                  href="mailto:yanis.touloum@bsb-education.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  <span>yanis.touloum@bsb-education.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/yanis-touloum-05b60b316"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t("footer.exchange")}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("footer.exchangeDescription")}
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-white hover:bg-gray-100 text-gray-900 rounded-none font-medium"
                onClick={() => (window.location.href = "mailto:yanis.touloum@bsb-education.com")}
              >
                <Mail className="mr-2 h-4 w-4" />
                {t("footer.contactMe")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-[#75639b] text-[#75639b] hover:bg-[#75639b] hover:text-white rounded-none font-medium transition-colors"
                onClick={handleDownloadCV}
              >
                <Download className="mr-2 h-4 w-4" />
                {t("footer.downloadCV")}
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              <span className="text-white">Yanis Touloum</span> • {t("footer.program")} • <a href="https://www.bsb-education.com/" target="_blank" rel="noopener noreferrer" className="text-[#75639b] hover:text-[#9d8ab8] underline decoration-2 underline-offset-2 transition-colors">{t("footer.bsb")}</a>
            </p>
            <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
