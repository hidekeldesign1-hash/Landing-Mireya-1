import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { Empathy } from "@/sections/Empathy";
import { SkinLanguage } from "@/sections/SkinLanguage";
import { Team } from "@/sections/Team";
import { ThreePaths } from "@/sections/ThreePaths";
import { ConsultationSocial } from "@/sections/ConsultationSocial";
import { CaminoCierre } from "@/sections/CaminoCierre";
import { Footer } from "@/sections/Footer";
import { DnaCanvasBackground } from "@/components/DnaCanvasBackground";

/**
 * Ana Karen Odontopediatra — Hero → Propuesta → Sonrisa → Doctora → Accesos → Reseñas → Ubicación + Cierre
 */
export default function HomePage() {
  return (
    <>
      <DnaCanvasBackground />
      <Hero />
      <div className="relative z-10 overflow-x-clip">
        <Navbar />
        <main className="bg-transparent">
          <Empathy />
          <SkinLanguage />
          <Team />
          <ThreePaths />
          <ConsultationSocial />
          <CaminoCierre />
        </main>
        <Footer />
      </div>
    </>
  );
}
