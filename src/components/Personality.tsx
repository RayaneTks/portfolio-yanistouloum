import { motion } from "framer-motion";

export const Personality = () => {
  const values = [
    {
      title: "Rigueur",
      description: "Pratique régulière de la méditation pour développer une concentration optimale et une rigueur mentale essentielle dans l'analyse financière complexe.",
    },
    {
      title: "Engagement",
      description: "Bénévolat actif dans l'aide aux devoirs, développant mes compétences en pédagogie et communication. Partage de connaissances et transmission de valeurs.",
    },
    {
      title: "Ouverture",
      description: "Passion pour les voyages et le football, sources d'ouverture d'esprit, de curiosité culturelle et d'esprit d'équipe. Expérience d'une vision globale des enjeux.",
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
            Valeurs
          </h2>
          <div className="h-px w-16 bg-[#75639b] mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl">
            Les principes qui guident mon approche professionnelle et personnelle.
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
            Je crois fermement que l'excellence professionnelle passe par un équilibre entre compétences 
            techniques et développement personnel. Mes engagements extra-professionnels enrichissent mon 
            approche du travail et renforcent des qualités essentielles en audit : rigueur, patience, 
            communication et esprit d'équipe.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
