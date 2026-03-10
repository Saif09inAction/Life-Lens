import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import JourneySection from "@/components/sections/JourneySection";
import ProblemSection from "@/components/sections/ProblemSection";
import ResearchSection from "@/components/sections/ResearchSection";
import SolutionSection from "@/components/sections/SolutionSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ImpactSection from "@/components/sections/ImpactSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <JourneySection />
        <ProblemSection />
        <ResearchSection />
        <SolutionSection />
        <HowItWorksSection />
        <ImpactSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
