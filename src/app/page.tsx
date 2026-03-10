import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ResearchSection from "@/components/sections/ResearchSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PrototypeSection from "@/components/sections/PrototypeSection";
import ArchitectureSection from "@/components/sections/ArchitectureSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ImpactSection from "@/components/sections/ImpactSection";
import MarketSection from "@/components/sections/MarketSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ResearchSection />
        <SolutionSection />
        <HowItWorksSection />
        <PrototypeSection />
        <ArchitectureSection />
        <TechStackSection />
        <ImpactSection />
        <MarketSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
