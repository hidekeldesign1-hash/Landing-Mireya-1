"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionCard, MotionSection } from "@/components/ui/Motion";
import { scaleHover } from "@/lib/animations";
import { links } from "@/lib/data/links";
import { systems } from "@/lib/data/systems";
import { cn, glassCardClass } from "@/lib/utils";

const systemMasks = [
  "mask-clover",
  "mask-squircle",
  "mask-blob-a",
  "mask-soft-br",
  "mask-blob-b",
  "mask-soft-bl",
  "mask-blob-c",
  "mask-soft-tr",
];

export function Systems() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="sistemas" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            <span aria-hidden>●</span>
            04 / NUESTROS SISTEMAS
          </span>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
            Nuestros Sistemas
          </h2>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-gray-600 md:text-sm">
            No necesitas tener todo resuelto para comenzar. Los sistemas
            representan un primer paso para acompañar a tu piel desde una visión
            más integral.
          </p>
        </MotionSection>

        <MotionSection
          stagger
          className="border-t border-white/25 bg-white/5"
        >
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 md:grid-cols-3 lg:grid-cols-4">
            {systems.map((system, index) => (
              <MotionCard key={system.id} className="min-w-0">
                <article className="group relative flex h-full flex-col p-5 sm:p-7">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[8px] uppercase tracking-[0.14em] text-gray-500">
                      system
                    </span>
                  </div>

                  <div className="relative mx-auto mb-5">
                    <motion.div
                      whileHover={reduceMotion ? undefined : scaleHover}
                      className={cn(
                        "relative h-28 w-28 overflow-hidden bg-gray-100 will-change-transform sm:h-32 sm:w-32",
                        systemMasks[index % systemMasks.length],
                      )}
                    >
                      <Image
                        src={system.image}
                        alt={system.name}
                        fill
                        sizes="128px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </motion.div>
                    <span className="absolute -bottom-1 -right-1 flex items-center gap-1 rounded-full border border-gray-200 bg-white/80 px-2 py-0.5 text-[8px] uppercase tracking-wider text-black backdrop-blur-md">
                      ↗
                    </span>
                  </div>

                  <h3 className="text-center text-xs font-black uppercase leading-snug tracking-tight text-black sm:text-sm">
                    {system.name}
                  </h3>
                  <p className="mt-2 flex-1 text-center text-[11px] leading-relaxed text-gray-600">
                    {system.description}
                  </p>
                  <p className="mt-4 border-t border-gray-200 pt-3 text-center text-[9px] font-medium uppercase tracking-[0.16em] text-gray-500">
                    {system.focus}
                  </p>
                </article>
              </MotionCard>
            ))}
          </div>
        </MotionSection>

        <MotionSection className="flex justify-center border-t border-white/25 bg-white/5 px-6 py-10">
          <Button href={links.systems} variant="outline">
            Conocer todos los sistemas
          </Button>
        </MotionSection>
      </Container>
    </section>
  );
}
