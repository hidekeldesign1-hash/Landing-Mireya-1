"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon, CheckIcon } from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { panelVariants } from "@/lib/animations";
import { links } from "@/lib/data/links";
import { symptoms } from "@/lib/data/symptoms";
import { cn } from "@/lib/utils";

const MOBILE_MAX_WIDTH = 768;

export function SkinLanguage() {
  const [selectedId, setSelectedId] = useState(symptoms[0].id);
  const selected = symptoms.find((s) => s.id === selectedId) ?? symptoms[0];
  const reduceMotion = useReducedMotion();
  const detailRef = useRef<HTMLDivElement>(null);

  function selectSymptom(id: string) {
    setSelectedId(id);

    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia(`(max-width: ${MOBILE_MAX_WIDTH}px)`).matches;
    if (!isMobile) return;

    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start",
      });
    });
  }

  return (
    <section id="sintomas" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionSection>
          <SectionHeading title="¿Qué está intentando decir tu piel?" />
        </MotionSection>

        <MotionSection stagger className="mt-12">
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
            {symptoms.map((symptom) => {
              const active = symptom.id === selectedId;
              return (
                <MotionItem
                  key={symptom.id}
                  className="min-w-0 w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[calc(25%-0.75rem)] xl:w-[calc(16.666%-0.875rem)]"
                >
                  <button
                    type="button"
                    onClick={() => selectSymptom(symptom.id)}
                    className={cn(
                      "group flex w-full min-w-0 flex-col items-center px-1 text-center transition-transform duration-300",
                      active ? "scale-[1.02]" : "hover:scale-[1.02]",
                    )}
                    aria-pressed={active}
                  >
                    <div
                      className={cn(
                        "relative mb-4 aspect-square w-full max-w-[100px] overflow-hidden rounded-full bg-beige transition-[box-shadow,transform,opacity] duration-300 sm:max-w-[110px]",
                        "shadow-[0_10px_28px_-8px_rgba(26,42,58,0.28),0_4px_10px_-4px_rgba(0,163,166,0.18)]",
                        active
                          ? "ring-2 ring-forest ring-offset-2 ring-offset-cream shadow-[0_14px_36px_-8px_rgba(0,163,166,0.35),0_6px_14px_-4px_rgba(26,42,58,0.2)]"
                          : "opacity-95 group-hover:opacity-100 group-hover:shadow-[0_16px_40px_-10px_rgba(26,42,58,0.32),0_6px_14px_-4px_rgba(0,163,166,0.22)]",
                      )}
                    >
                      <Image
                        src={symptom.image}
                        alt={symptom.name}
                        fill
                        sizes="110px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="w-full break-words font-sans text-[11px] font-semibold uppercase leading-tight tracking-wide text-ink sm:text-xs lg:text-[13px]">
                      {symptom.name}
                    </h3>
                    <span
                      className={cn(
                        "mt-2.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors",
                        active
                          ? "bg-forest text-white"
                          : "bg-forest/15 text-forest group-hover:bg-forest group-hover:text-white",
                      )}
                      aria-hidden
                    >
                      <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </button>
                </MotionItem>
              );
            })}
          </div>
        </MotionSection>

        <div
          ref={detailRef}
          id="sintoma-detalle"
          className="mt-12 scroll-mt-24 overflow-hidden rounded-[2rem] bg-beige p-6 sm:p-8 lg:p-10"
        >          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={reduceMotion ? false : "initial"}
              animate="animate"
              exit={reduceMotion ? undefined : "exit"}
              variants={reduceMotion ? undefined : panelVariants}
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="space-y-5 lg:col-span-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-forest">
                    Qué descubres
                  </p>
                  <h3 className="font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                    {selected.name}
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Qué es", text: selected.whatIs },
                      {
                        title: "Cómo impacta emocionalmente",
                        text: selected.emotionalImpact,
                      },
                      {
                        title: "Si se trata solo en superficie",
                        text: selected.superficialRisk,
                      },
                    ].map((item) => (
                      <li key={item.title} className="flex gap-3">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest/15 text-forest">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-ink">
                            {item.title}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-muted">
                            {item.text}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-center lg:col-span-4">
                  <div className="relative flex h-56 w-56 items-center justify-center rounded-full bg-cream shadow-inner sm:h-64 sm:w-64">
                    <div className="absolute inset-4 rounded-full border border-sage/60" />
                    <div className="relative h-40 w-40 overflow-hidden rounded-2xl sm:h-44 sm:w-44">
                      <Image
                        src={selected.image}
                        alt={`Productos sugeridos para ${selected.name}`}
                        fill
                        sizes="176px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <p className="mt-5 max-w-xs text-center text-sm leading-relaxed text-muted">
                    La buena noticia es que sí existen herramientas para
                    ayudarte.
                  </p>
                </div>

                <div className="space-y-5 lg:col-span-4">
                  <div className="rounded-2xl bg-cream p-5 shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-forest">
                      Productos sugeridos
                    </p>
                    <ul className="mt-4 space-y-3">
                      {selected.products.map((product) => (
                        <li
                          key={product.name}
                          className="border-b border-beige-dark/50 pb-3 last:border-0 last:pb-0"
                        >
                          <p className="text-sm font-semibold text-ink">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted">
                            {product.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Button href={selected.productsUrl} className="mt-5 w-full">
                      Ver productos recomendados
                    </Button>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {selected.testimonials.map((t) => (
                      <div
                        key={t.name}
                        className="flex min-w-[140px] flex-1 items-start gap-2 rounded-xl bg-cream/70 p-3"
                      >
                        <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            fill
                            sizes="36px"
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-ink">
                            {t.name}
                          </p>
                          <p className="text-[11px] leading-snug text-muted">
                            “{t.quote}”
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-beige-dark/60 pt-8 text-center">
                <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                  Nuestros productos pueden ayudarte aunque no realices una
                  evaluación. Si deseas empezar hoy, puedes hacerlo.
                </p>
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-ink/80 sm:text-base">
                  Algunas personas desean ir un paso más allá y descubrir si
                  existe algo interno que pueda estar influyendo en su piel. Si
                  tú también quieres comprenderla mejor, puedes realizar nuestra{" "}
                  <span className="font-medium">
                    Evaluación Lenguaje de la Piel™
                  </span>
                  .
                </p>
                <Button href={links.evaluation} variant="gold" className="mt-6">
                  Quiero profundizar
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
