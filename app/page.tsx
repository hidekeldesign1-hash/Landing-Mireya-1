import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Empathy } from "@/sections/Empathy";
import { SkinLanguage } from "@/sections/SkinLanguage";
import { ThreePaths } from "@/sections/ThreePaths";
import { Systems } from "@/sections/Systems";
import { ConsultationSocial } from "@/sections/ConsultationSocial";
import { JourneyTimeline } from "@/sections/JourneyTimeline";
import { Footer } from "@/sections/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Empathy />
        <SkinLanguage />
        <ThreePaths />
        <Systems />
        <ConsultationSocial />
        <JourneyTimeline />
      </main>
      <Footer />
    </>
  );
}
