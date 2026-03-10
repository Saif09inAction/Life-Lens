import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoryHero from "@/components/story/StoryHero";
import StoryRisk from "@/components/story/StoryRisk";
import StoryRealityStrip from "@/components/story/StoryRealityStrip";
import StoryJourneys from "@/components/story/StoryJourneys";
import StoryConcept from "@/components/story/StoryConcept";
import StoryPrototype from "@/components/story/StoryPrototype";
import StoryClosing from "@/components/story/StoryClosing";
import TeamSection from "@/components/sections/TeamSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <StoryHero />
        <StoryRisk />
        <StoryRealityStrip />
        <StoryJourneys />
        <StoryConcept />
        <StoryPrototype />
        <StoryClosing />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
