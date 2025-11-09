import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Briefcase } from "lucide-react";

export const Arsenal = () => {
  const skills = [
    "Analyse Financière",
    "Contrôle de Gestion",
    "Audit",
    "Modélisation DCF",
    "Mathématiques Financières",
    "Due Diligence",
  ];

  const tools = [
    { name: "Excel", category: "Analyse" },
    { name: "Power BI", category: "Visualisation" },
    { name: "Canva", category: "Présentation" },
    { name: "Elisath", category: "Finance" },
  ];

  return (
    <section id="arsenal" className="bg-gradient-to-br from-bsb-purple-light to-white py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-serif text-4xl font-bold text-bsb-purple md:text-5xl">
            Formation & Compétences
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Une formation d'excellence et des compétences techniques au service de l'analyse.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-bsb-purple/20 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-full bg-bsb-purple p-3">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-bsb-purple">Formation</h3>
                </div>

                <div className="space-y-6">
                  <div className="rounded-lg border-l-4 border-prestige-gold bg-background/50 p-6">
                    <div className="mb-2 text-sm font-semibold text-prestige-gold">2024 - Présent</div>
                    <h4 className="mb-2 font-serif text-xl font-bold text-foreground">
                      Master Finance d'Entreprise
                    </h4>
                    <p className="mb-3 text-sm text-muted-foreground">
                      Programme Grande École - Burgundy School of Business
                    </p>
                    <Badge variant="secondary" className="bg-bsb-purple/10 text-bsb-purple">
                      Spécialisation : Mathématiques Financières
                    </Badge>
                  </div>

                  <div className="rounded-lg border-l-4 border-bsb-purple bg-background/50 p-6">
                    <div className="mb-2 text-sm font-semibold text-prestige-gold">2022 - 2024</div>
                    <h4 className="mb-2 font-serif text-xl font-bold text-foreground">
                      Classe Préparatoire ECT
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Lycée Jean Perrin - Économie, Droit, Management, Mathématiques
                    </p>
                  </div>

                  <div className="rounded-lg border-2 border-success-green/30 bg-success-green/5 p-4">
                    <div className="text-sm font-semibold text-success-green">Prochaine étape</div>
                    <p className="mt-1 text-sm text-foreground">
                      Swiss Life Asset Managers - Comptable Mandant (Janvier 2026)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compétences & Outils */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border-2 border-prestige-gold/20 bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-full bg-prestige-gold p-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-prestige-gold">Boîte à Outils</h3>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">
                      Compétences Clés
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="border border-prestige-gold/30 bg-prestige-gold/10 text-prestige-gold hover:bg-prestige-gold hover:text-white transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Logiciels</h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {tools.map((tool, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-4 py-3"
                        >
                          <span className="font-medium text-foreground">{tool.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {tool.category}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-4 font-serif text-lg font-semibold text-foreground">Langues</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Anglais</span>
                        <Badge variant="outline" className="border-bsb-purple/30 text-bsb-purple">
                          B2
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Italien</span>
                        <Badge variant="outline" className="text-muted-foreground">
                          A1
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Arabe</span>
                        <Badge variant="outline" className="text-muted-foreground">
                          A1
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
