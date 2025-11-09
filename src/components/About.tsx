import { motion } from "framer-motion";
import { BSBBackground } from "@/components/BSBBackground";

export const About = () => {
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
            À Propos
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
              Après une <span className="font-semibold text-gray-900">classe préparatoire ECT</span> qui m'a forgé une solide base en économie, droit et management, 
              j'ai intégré le <a href="https://www.bsb-education.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#75639b] hover:text-[#654a85] underline decoration-2 underline-offset-2 transition-colors">Programme Grande École de BSB</a> avec une passion grandissante pour la finance.
            </p>
            <p>
              Mes expériences professionnelles, notamment chez <a href="https://www.vert-marine.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#75639b] underline decoration-2 underline-offset-2 transition-colors">Vert Marine</a> et <a href="https://www.chronopost.fr/" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 hover:text-[#75639b] underline decoration-2 underline-offset-2 transition-colors">Chronopost</a>, m'ont permis de développer 
              une approche rigoureuse du contrôle et de l'audit. Chaque mission a renforcé ma conviction que la précision 
              et la méthode sont les clés de l'excellence.
            </p>
            <p>
              Aujourd'hui, je me prépare à relever de nouveaux défis dans l'<span className="font-semibold text-[#75639b]">audit</span>, convaincu que ma formation 
              académique et mes expériences terrain me permettront d'apporter une <span className="font-semibold text-gray-900">valeur ajoutée significative</span>.
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
              "Je crois que l'audit n'est pas seulement un contrôle, mais un levier de transformation 
              et d'amélioration continue pour les organisations."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
