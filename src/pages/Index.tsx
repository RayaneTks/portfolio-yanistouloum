import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Achievements } from "@/components/Achievements";
import { Expertise } from "@/components/Expertise";
import { Vision } from "@/components/Vision";
import { Personality } from "@/components/Personality";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <StructuredData />
      <Navigation />
      <Hero />
      <About />
      <Achievements />
      <Expertise />
      <Vision />
      <Personality />
      <Footer />
    </div>
  );
};

export default Index;
