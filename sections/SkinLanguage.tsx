"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckIcon } from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { links } from "@/lib/data/links";
import { symptoms } from "@/lib/data/symptoms";
import { cn, glassCardClass } from "@/lib/utils";

const MOBILE_MAX_WIDTH = 768;

const maskClasses = [
  "mask-squircle",
  "mask-blob-a",
  "mask-soft-br",
  "mask-clover",
  "mask-blob-b",
  "mask-soft-bl",
  "mask-blob-c",
  "mask-soft-tr",
  "mask-squircle",
  "mask-blob-a",
  "mask-clover",
];

export function SkinLanguage() {
  const [selectedId, setSelectedId] = useState(symptoms[0].id);
  const selected = symptoms.find((s) => s.id === selectedId) ?? symptoms[0];
  const reduceMotion = useReducedMotion();
  const detailRef = useRef<HTMLDivElement>(null);
  const selectedIndex = symptoms.findIndex((s) => s.id === selectedId);

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
    <section id="sintomas" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        {/* Header row */}
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            <span aria-hidden>●</span>
            02 / SKIN LANGUAGE
          </span>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
            ¿Qué está intentando decir tu piel?
          </h2>
        </MotionSection>

        {/* Compact modular symptom bar */}
        <MotionSection stagger className="border-t border-white/25 bg-white/10">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
            {symptoms.map((symptom, index) => {
              const active = symptom.id === selectedId;
              return (
                <MotionItem key={symptom.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => selectSymptom(symptom.id)}
                    className={cn(
                      "cta-interactive cta-shine cta-shine-soft group relative flex h-full w-full min-w-0 flex-col items-center px-2 py-5 text-center transition-colors duration-300 sm:px-3 sm:py-6",
                      active
                        ? "bg-white/45 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)] ring-1 ring-white/40"
                        : "hover:bg-white/25",
                    )}
                    aria-pressed={active}
                  >
                    {active ? (
                      <span
                        className="pointer-events-none absolute inset-0 animate-pulse rounded-sm bg-pink-600/[0.04]"
                        aria-hidden
                      />
                    ) : null}
                    <span className="mb-3 font-mono text-[9px] tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "relative mb-3 aspect-square w-full max-w-[72px] overflow-hidden bg-gray-100 sm:max-w-[80px]",
                        maskClasses[index % maskClasses.length],
                      )}
                    >
                      <Image
                        src={symptom.image}
                        alt={symptom.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <h3 className="w-full break-words text-[9px] font-bold uppercase leading-tight tracking-wide text-black sm:text-[10px]">
                      {symptom.name}
                    </h3>
                    <span
                      className={cn(
                        "mt-3 inline-flex h-5 w-5 items-center justify-center rounded-full text-[9px] transition-colors",
                        active
                          ? "bg-black text-white"
                          : "border border-gray-200 bg-white text-black group-hover:bg-black group-hover:text-white",
                      )}
                      aria-hidden
                    >
                      ↗
                    </span>
                  </button>
                </MotionItem>
              );
            })}
          </div>
        </MotionSection>

        {/* Detail panel — editorial 12-col grid */}
        <div
          ref={detailRef}
          id="sintoma-detalle"
          className="scroll-mt-24 border-t border-white/25 bg-white/10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -15 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 divide-y divide-gray-200 md:grid-cols-12 md:divide-x md:divide-y-0"
            >
              {/* Copy column */}
              <div className="space-y-6 p-6 sm:p-8 md:col-span-4 lg:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-gray-400">
                    {String(selectedIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/40 bg-white/25 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-gray-700 backdrop-blur-md">
                    condición
                  </span>
                </div>
                <h3 className="text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl">
                  {selected.name}
                </h3>
                <ul className="divide-y divide-gray-200 border-y border-gray-200">
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
                    <li key={item.title} className="flex gap-3 py-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-gray-200 text-black">
                        <CheckIcon className="h-3 w-3" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-black">
                          {item.title}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-gray-600">
                          {item.text}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image column */}
              <div className="relative flex flex-col items-center justify-center bg-white/10 p-8 md:col-span-4 lg:p-10">
                  <div className="relative">
                  <div className="relative h-52 w-52 overflow-hidden bg-white/20 sm:h-60 sm:w-60 mask-clover">
                      <Image
                        src={selected.image}
                        alt={`Productos sugeridos para ${selected.name}`}
                        fill
                        sizes="240px"
                        className="object-cover"
                      />
                    </div>
                    <span className="absolute -bottom-2 right-2 flex items-center gap-1 rounded-full border border-white/40 bg-white/30 px-3 py-1 text-[10px] uppercase tracking-wider text-black backdrop-blur-md">
                      ↗ explore
                    </span>
                    <span className="absolute -left-2 top-4 rounded-full border border-white/40 bg-white/30 px-2.5 py-1 text-[9px] uppercase tracking-wider text-gray-700 backdrop-blur-md">
                      ~ read
                    </span>
                  </div>
                <p className="mt-8 max-w-[14rem] text-center text-xs leading-relaxed text-gray-600">
                  La buena noticia es que sí existen herramientas para
                  ayudarte.
                </p>
              </div>

              {/* Products column */}
              <div className="flex flex-col p-6 sm:p-8 md:col-span-4 lg:p-10">
                <span className="mb-4 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
                  <span aria-hidden>●</span>
                  Productos sugeridos
                </span>
                <ul className="flex-1 space-y-0 divide-y divide-gray-200 border-y border-gray-200">
                  {selected.products.map((product) => (
                    <li key={product.name} className="py-3.5">
                      <p className="text-xs font-bold uppercase tracking-wide text-black">
                        {product.name}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-gray-600">
                        {product.description}
                      </p>
                    </li>
                  ))}
                </ul>
                <Button href={selected.productsUrl} className="mt-6 w-full">
                  Ver productos recomendados
                </Button>

                <div className="mt-6 grid gap-3 border-t border-gray-200 pt-6">
                  {selected.testimonials.map((t) => (
                    <div
                      key={t.name}
                      className="flex items-start gap-3"
                    >
                      <div className="relative h-8 w-8 shrink-0 overflow-hidden mask-blob-a bg-gray-100">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-black">
                          {t.name}
                        </p>
                        <p className="text-[11px] leading-snug text-gray-600">
                          “{t.quote}”
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="border-t border-white/25 bg-white/10 px-6 py-10 text-center sm:px-8 lg:px-10">
            <p className="mx-auto max-w-2xl text-xs leading-relaxed text-gray-600 md:text-sm">
              Nuestros productos pueden ayudarte aunque no realices una
              evaluación. Si deseas empezar hoy, puedes hacerlo.
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-gray-700 md:text-sm">
              Algunas personas desean ir un paso más allá y descubrir si existe
              algo interno que pueda estar influyendo en su piel. Si tú también
              quieres comprenderla mejor, puedes realizar nuestra{" "}
              <span className="font-semibold text-black">
                Evaluación Lenguaje de la Piel™
              </span>
              .
            </p>
            <Button href={links.restore360} variant="outline" className="mt-6">
              Quiero profundizar
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
