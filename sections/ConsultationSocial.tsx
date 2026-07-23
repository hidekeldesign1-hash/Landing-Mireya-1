"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { panelVariants } from "@/lib/animations";
import { links } from "@/lib/data/links";
import { beforeAfter, socialTestimonials } from "@/lib/data/testimonials";
import { cn, glassCardClass, glassCardSoftClass } from "@/lib/utils";

const consultationPoints = [
  "Valoración integral de lo que tu piel comunica",
  "Interpretación avanzada de síntomas y patrones",
  "Análisis de múltiples ejes (intestino, estrés, hormonas…)",
  "Plan individualizado y acompañamiento cercano",
];

export function ConsultationSocial() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const current = beforeAfter[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? beforeAfter.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === beforeAfter.length - 1 ? 0 : i + 1));

  return (
    <section id="consulta" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <div className="grid grid-cols-1 divide-y divide-white/25 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          {/* Consultation */}
          <MotionSection className="p-6 sm:p-8 lg:col-span-6 lg:p-10 xl:p-12">
            <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
              <span aria-hidden>●</span>
              05 / CONSULTA MIREYA DÍAZ
            </span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
              Acompañamiento profesional cuando quieres ir más profundo
            </h2>

            <div className="relative mt-8">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-white/20 sm:aspect-[5/4] mask-squircle">
                <Image
                  src="/images/mireya-diaz.webp"
                  alt="Mireya Díaz, especialista en cuidado integral de la piel"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-[center_20%]"
                />
              </div>
              <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full border border-white/40 bg-white/25 px-3 py-1 text-[10px] uppercase tracking-wider text-black backdrop-blur-md">
                ↗ explore
              </span>
              <span className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/25 px-2.5 py-1 text-[9px] uppercase tracking-wider text-gray-700 backdrop-blur-md">
                ~ expert
              </span>
            </div>

            <ul className="mt-8 divide-y divide-gray-200 border-y border-gray-200">
              {consultationPoints.map((point, i) => (
                <li key={point} className="flex items-start gap-3 py-3.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-200 text-black">
                    <CheckIcon className="h-3 w-3" />
                  </span>
                  <span className="font-mono text-[9px] tracking-widest text-gray-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs leading-relaxed text-gray-600 md:text-sm">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <Button href={links.consultation} className="mt-8">
              Agendar consulta
            </Button>
          </MotionSection>

          {/* Social proof */}
          <MotionSection className="flex flex-col bg-white/10 p-6 sm:p-8 lg:col-span-6 lg:p-10 xl:p-12">
            <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
              <span aria-hidden>●</span>
              06 / PRUEBA SOCIAL
            </span>
            <h2 className="text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl">
              Antes y después reales
            </h2>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-gray-600 md:text-sm">
              Historias de quienes recuperaron confianza y bienestar emocional
              al comprender su piel.
            </p>

            <div className={cn(glassCardSoftClass, "mt-8 flex-1 p-5 sm:p-6")}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : "initial"}
                  animate="animate"
                  exit={reduceMotion ? undefined : "exit"}
                  variants={reduceMotion ? undefined : panelVariants}
                >
                  <p className="mb-4 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500">
                    {current.label}
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { src: current.before, label: "Antes", mask: "mask-soft-bl" },
                      { src: current.after, label: "Después", mask: "mask-soft-br" },
                    ].map((item) => (
                      <div key={item.label} className="relative">
                        <div
                          className={`relative aspect-[3/4] overflow-hidden bg-white/20 ${item.mask}`}
                        >
                          <Image
                            src={item.src}
                            alt={`${item.label} — ${current.label}`}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                        <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-white/40 bg-white/30 px-2.5 py-1 text-[9px] uppercase tracking-wider text-black backdrop-blur-md">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
                <button
                  type="button"
                  onClick={prev}
                  className="cta-interactive cta-shine cta-shine-soft inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                  aria-label="Caso anterior"
                >
                  <ChevronLeftIcon className="relative z-[1] h-4 w-4" />
                </button>
                <div className="flex gap-2">
                  {beforeAfter.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === index ? "bg-black" : "bg-black/25"
                      }`}
                      aria-label={`Ver caso ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="cta-interactive cta-shine cta-shine-soft inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                  aria-label="Caso siguiente"
                >
                  <ChevronRightIcon className="relative z-[1] h-4 w-4" />
                </button>
              </div>
            </div>

            <MotionSection
              stagger
              className="mt-6 grid divide-y divide-white/20 overflow-hidden rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md sm:grid-cols-3 sm:divide-x sm:divide-y-0"
            >
              {socialTestimonials.map((t) => (
                <MotionItem key={t.id}>
                  <blockquote className="h-full p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="relative h-8 w-8 overflow-hidden bg-gray-100 mask-blob-a">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <cite className="not-italic text-[10px] font-bold uppercase tracking-wider text-black">
                        {t.name}
                      </cite>
                    </div>
                    <p className="text-[11px] leading-relaxed text-gray-600">
                      “{t.quote}”
                    </p>
                  </blockquote>
                </MotionItem>
              ))}
            </MotionSection>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
