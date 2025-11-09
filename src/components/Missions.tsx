import { motion } from "framer-motion";
import { MissionCard } from "./MissionCard";
import missionFinance from "@/assets/mission-finance.jpg";
import missionAudit from "@/assets/mission-audit.jpg";
import missionLogistics from "@/assets/mission-logistics.jpg";

export const Missions = () => {
  const missions = [
    {
      title: "Modélisation & Analyse Financière",
      context: "Projet Académique (BSB)",
      description: "Analyse de la viabilité d'investissements via la méthode DCF (Discounted Cash Flow). Construction de modèles financiers complexes pour évaluer la création de valeur et optimiser les décisions stratégiques.",
      image: missionFinance,
    },
    {
      title: "Audit & Contrôle des Flux de Caisse",
      context: "Vert Marine",
      description: "Mise en place d'un protocole de double-vérification pour la clôture des caisses, réduisant les écarts de caisse de 15%. Gestion rigoureuse des inventaires et suivi quotidien des transactions.",
      image: missionAudit,
    },
    {
      title: "Fiabilisation & Traçabilité des Flux",
      context: "Chronopost",
      description: "Garant de la traçabilité des envois via le système d'information LYM. Coordination des flux logistiques et garantie du respect des procédures de sécurité pour assurer une chaîne de contrôle sans faille.",
      image: missionLogistics,
    },
  ];

  return (
    <section id="missions" className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-bsb-purple md:text-5xl">
            Mes Expériences Clés
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            De l'analyse financière au contrôle opérationnel, découvrez comment j'ai appliqué rigueur et méthode.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <MissionCard key={index} {...mission} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
