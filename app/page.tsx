import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Empathy } from "@/sections/Empathy";
import { SkinLanguage } from "@/sections/SkinLanguage";
import { SystemicRootTeaser } from "@/sections/SystemicRootTeaser";
import { Systems } from "@/sections/Systems";
import { ThreePaths } from "@/sections/ThreePaths";
import { ConsultationSocial } from "@/sections/ConsultationSocial";
import { CaminoCierre } from "@/sections/CaminoCierre";
import { Footer } from "@/sections/Footer";
import { DnaCanvasBackground } from "@/components/DnaCanvasBackground";
import { HomeExperience } from "@/components/HomeExperience";

/**
 * Hybrid funnel — una sola narrativa sin bloques duplicados del Camino.
 * Hero → Empatía → Condiciones → Raíz sistémica → Sistemas → Caminos → Prueba social → Cierre
 */
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
          <SystemicRootTeaser />
          <Systems />
          <ThreePaths />
          <ConsultationSocial />
          <CaminoCierre />
        </main>
        <Footer />
      </div>
    </HomeExperience>
  );
}
