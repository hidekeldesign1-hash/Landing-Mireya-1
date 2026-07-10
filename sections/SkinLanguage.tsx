"use client";

import { useState } from "react";
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

export function SkinLanguage() {
  const [selectedId, setSelectedId] = useState(symptoms[0].id);
  const selected = symptoms.find((s) => s.id === selectedId) ?? symptoms[0];
  const reduceMotion = useReducedMotion();

  return (
    <section id="sintomas" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionSection>
          <SectionHeading title="¿Qué está intentando decir tu piel?" />
        </MotionSection>

        <MotionSection stagger className="mt-12">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 lg:gap-3">
            {symptoms.map((symptom) => {
              const active = symptom.id === selectedId;
              return (
                <MotionItem key={symptom.id}>
                  <button
                    type="button"
                    onClick={() => setSelectedId(symptom.id)}
                    className={cn(
                      "group flex w-full flex-col items-center text-center transition-transform duration-300",
                      active ? "scale-[1.02]" : "hover:scale-[1.02]",
                    )}
                    aria-pressed={active}
                  >
                    <div
                      className={cn(
                        "hexagon relative mb-3 aspect-square w-full max-w-[120px] overflow-hidden bg-beige transition-shadow duration-300",
                        active
                          ? "ring-2 ring-gold ring-offset-2 ring-offset-cream shadow-lg"
                          : "opacity-90 group-hover:opacity-100",
                      )}
                    >
                      <Image
                        src={symptom.image}
                        alt={symptom.name}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-serif text-sm text-forest sm:text-base">
                      {symptom.name}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[11px] leading-snug text-muted sm:text-xs">
                      {symptom.shortDescription}
                    </p>
                    <span
                      className={cn(
                        "mt-2 inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors",
                        active
                          ? "bg-gold text-forest"
                          : "bg-gold/15 text-gold group-hover:bg-gold group-hover:text-forest",
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

        <div className="mt-12 overflow-hidden rounded-[2rem] bg-beige p-6 sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={reduceMotion ? false : "initial"}
              animate="animate"
              exit={reduceMotion ? undefined : "exit"}
              variants={reduceMotion ? undefined : panelVariants}
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
                <div className="space-y-5 lg:col-span-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold-dark">
                    Qué descubres
                  </p>
                  <h3 className="font-serif text-2xl text-forest sm:text-3xl">
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
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold">
                          <CheckIcon className="h-3.5 w-3.5" />
                        </span>
                        <div>
                          <p className="text-sm font-medium text-forest">
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
                    <p className="text-xs font-medium uppercase tracking-[0.15em] text-gold-dark">
                      Productos sugeridos
                    </p>
                    <ul className="mt-4 space-y-3">
                      {selected.products.map((product) => (
                        <li
                          key={product.name}
                          className="border-b border-beige-dark/50 pb-3 last:border-0 last:pb-0"
                        >
                          <p className="text-sm font-medium text-forest">
                            {product.name}
                          </p>
                          <p className="text-xs text-muted">
                            {product.description}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <Button href={links.products} className="mt-5 w-full">
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
                          <p className="text-xs font-medium text-forest">
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
                <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-forest/80 sm:text-base">
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
