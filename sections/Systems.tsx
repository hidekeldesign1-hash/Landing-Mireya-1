"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { links } from "@/lib/data/links";
import { systems } from "@/lib/data/systems";

export function Systems() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="sistemas" className="bg-beige py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionSection>
          <SectionHeading
            title="Nuestros Sistemas"
            subtitle="No necesitas tener todo resuelto para comenzar. Los sistemas representan un primer paso para acompañar a tu piel desde una visión más integral."
          />
        </MotionSection>

        <MotionSection
          stagger
          className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12"
        >
          {systems.map((system) => (
            <MotionItem key={system.id} className="min-w-0">
              <article className="group flex h-full flex-col items-center px-1 text-center">
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.04 }}
                  transition={{ duration: 0.25 }}
                  className="relative mb-5 h-28 w-28 overflow-hidden rounded-full border-4 border-cream shadow-md sm:h-36 sm:w-36"
                >
                  <Image
                    src={system.image}
                    alt={system.name}
                    fill
                    sizes="144px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
                <h3 className="font-sans text-base font-bold leading-snug tracking-tight text-ink sm:text-lg">
                  {system.name}
                </h3>
                <p className="mt-2 max-w-[16rem] text-sm leading-relaxed text-muted">
                  {system.description}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-forest sm:text-[11px]">
                  {system.focus}
                </p>
              </article>
            </MotionItem>
          ))}
        </MotionSection>

        <MotionSection className="mt-12 flex justify-center">
          <Button href={links.systems}>
            Conocer todos los sistemas
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </MotionSection>
      </Container>
    </section>
  );
}
