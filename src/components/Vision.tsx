import { motion } from "framer-motion";

export const Vision = () => {
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
            Vision Professionnelle
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
          <p>
            L'audit représente pour moi le parfait équilibre entre rigueur analytique et vision stratégique. 
            C'est un domaine qui exige à la fois une maîtrise technique pointue et une capacité à comprendre 
            les enjeux business dans leur globalité.
          </p>
          <p>
            Mon objectif est de rejoindre une équipe d'audit où je pourrai mettre à profit ma formation 
            académique d'excellence et mes expériences terrain pour contribuer à la fiabilité financière 
            des organisations, tout en développant une expertise qui me permettra d'évoluer vers des 
            responsabilités managériales à long terme.
          </p>
          <p>
            Je crois que l'audit moderne doit évoluer vers une approche plus consultative, en proposant 
            non seulement des constats mais aussi des solutions concrètes d'amélioration. Mon ambition 
            est de continuer à apprendre et à évoluer dans un environnement exigeant, en contribuant 
            activement à la réussite des équipes et des projets qui me seront confiés.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
