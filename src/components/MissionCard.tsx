import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

interface MissionCardProps {
  title: string;
  context: string;
  description: string;
  image: string;
  index: number;
  tags?: string[];
}

export const MissionCard = ({ title, context, description, image, index, tags }: MissionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group h-full overflow-hidden border-2 border-border transition-all hover:border-bsb-purple hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm font-semibold text-white">{context}</p>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="mb-3 font-serif text-xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
};
