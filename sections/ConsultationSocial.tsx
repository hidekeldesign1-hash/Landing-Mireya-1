"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { panelVariants } from "@/lib/animations";
import { links } from "@/lib/data/links";
import { beforeAfter, socialTestimonials } from "@/lib/data/testimonials";

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
    <section id="consulta" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <MotionSection>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
            Consulta Mireya Díaz
          </p>
          <h2 className="mt-3 font-sans text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Acompañamiento profesional cuando quieres ir más profundo
          </h2>
          <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-beige">
            <div className="relative aspect-[4/5] w-full sm:aspect-[5/4]">
              <Image
                src="/images/mireya-diaz.webp"
                alt="Mireya Díaz, especialista en cuidado integral de la piel"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
          <ul className="mt-8 space-y-3">
            {consultationPoints.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-white">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm leading-relaxed text-muted sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <Button href={links.consultation} className="mt-8">
            Agendar consulta
            <ArrowRightIcon className="h-4 w-4" />
          </Button>
        </MotionSection>

        <MotionSection className="flex flex-col">
          <SectionHeading
            align="left"
            eyebrow="Prueba social"
            title="Antes y después reales"
            subtitle="Historias de quienes recuperaron confianza y bienestar emocional al comprender su piel."
            className="max-w-none"
          />

          <div className="mt-8 flex-1">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-beige p-5 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={reduceMotion ? false : "initial"}
                  animate="animate"
                  exit={reduceMotion ? undefined : "exit"}
                  variants={reduceMotion ? undefined : panelVariants}
                >
                  <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-ink">
                    {current.label}
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {[
                      { src: current.before, label: "Antes" },
                      { src: current.after, label: "Después" },
                    ].map((item) => (
                      <div key={item.label} className="relative">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                          <Image
                            src={item.src}
                            alt={`${item.label} — ${current.label}`}
                            fill
                            sizes="200px"
                            className="object-cover"
                          />
                        </div>
                        <span className="absolute left-3 top-3 bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                          {item.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-5 flex items-center justify-between">
                <button
                  type="button"
                  onClick={prev}
                  className="inline-flex h-10 w-10 items-center justify-center border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-white"
                  aria-label="Caso anterior"
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
                <div className="flex gap-2">
                  {beforeAfter.map((item, i) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setIndex(i)}
                      className={`h-2 w-2 rounded-full transition-colors ${
                        i === index ? "bg-forest" : "bg-forest/25"
                      }`}
                      aria-label={`Ver caso ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex h-10 w-10 items-center justify-center border border-forest/30 text-forest transition-colors hover:bg-forest hover:text-white"
                  aria-label="Caso siguiente"
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <MotionSection stagger className="mt-6 grid gap-4 sm:grid-cols-3">
              {socialTestimonials.map((t) => (
                <MotionItem key={t.id}>
                  <blockquote className="h-full rounded-2xl border border-beige-dark/60 bg-white/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="relative h-9 w-9 overflow-hidden rounded-full">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="36px"
                          className="object-cover"
                        />
                      </div>
                      <cite className="not-italic text-sm font-semibold text-ink">
                        {t.name}
                      </cite>
                    </div>
                    <p className="text-xs leading-relaxed text-muted">
                      “{t.quote}”
                    </p>
                  </blockquote>
                </MotionItem>
              ))}
            </MotionSection>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
