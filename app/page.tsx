import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Empathy } from "@/sections/Empathy";
import { SkinLanguage } from "@/sections/SkinLanguage";
import { ThreePaths } from "@/sections/ThreePaths";
import { Systems } from "@/sections/Systems";
import { ConsultationSocial } from "@/sections/ConsultationSocial";
import { JourneyTimeline } from "@/sections/JourneyTimeline";
import { Footer } from "@/sections/Footer";
import { DnaCanvasBackground } from "@/components/DnaCanvasBackground";
import { HomeExperience } from "@/components/HomeExperience";

export default function HomePage() {
  return (
    <HomeExperience>
      <DnaCanvasBackground />
      <div className="relative z-10">
        <Navbar />
        <main className="bg-transparent">
          <Hero />
          <Empathy />
          <SkinLanguage />
          <ThreePaths />
          <Systems />
          <ConsultationSocial />
          <JourneyTimeline />
        </main>
        <Footer />
      </div>
    </HomeExperience>
  );
}
