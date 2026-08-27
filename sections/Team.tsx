"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { panelVariants } from "@/lib/animations";
import { links } from "@/lib/data/links";
import { teamAreas } from "@/lib/data/teamMembers";
import { cn, glassCardClass } from "@/lib/utils";

export function Team() {
  const [teamIndex, setTeamIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const currentArea = teamAreas[teamIndex];

  const prevTeam = () =>
    setTeamIndex((i) => (i === 0 ? teamAreas.length - 1 : i - 1));
  const nextTeam = () =>
    setTeamIndex((i) => (i === teamAreas.length - 1 ? 0 : i + 1));

  return (
    <section id="equipo" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "overflow-hidden py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Conoce a nuestro equipo.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            Especialistas en distintas áreas de la odontología, trabajando en
            conjunto para cuidar tu sonrisa.
          </p>

          <div className="relative mx-auto mt-10 max-w-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.article
                key={currentArea.id}
                initial={reduceMotion ? false : "initial"}
                animate="animate"
                exit={reduceMotion ? undefined : "exit"}
                variants={reduceMotion ? undefined : panelVariants}
                className="overflow-hidden rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md"
              >
                <div className="relative aspect-[4/5] min-h-[300px] w-full overflow-hidden bg-gray-100 sm:aspect-[5/4]">
                  <Image
                    src={currentArea.image}
                    alt={`Referencia visual: ${currentArea.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 512px"
                    className="object-cover object-top"
                    priority={teamIndex === 0}
                    loading={teamIndex === 0 ? undefined : "lazy"}
                  />
                </div>
                <div className="space-y-2 p-5 text-center sm:p-6">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-black">
                    {currentArea.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {currentArea.description}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
              <button
                type="button"
                onClick={prevTeam}
                className="cta-interactive cta-shine cta-shine-soft inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                aria-label="Área anterior"
              >
                <ChevronLeftIcon className="relative z-[1] h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {teamAreas.map((area, i) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setTeamIndex(i)}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                      i === teamIndex ? "bg-black/10" : "hover:bg-black/5",
                    )}
                    aria-label={`Ver ${area.title}`}
                    aria-current={i === teamIndex ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        i === teamIndex ? "bg-black" : "bg-black/25",
                      )}
                      aria-hidden
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={nextTeam}
                className="cta-interactive cta-shine cta-shine-soft inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                aria-label="Área siguiente"
              >
                <ChevronRightIcon className="relative z-[1] h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button href={links.whatsapp.equipo()}>Agendar cita</Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
