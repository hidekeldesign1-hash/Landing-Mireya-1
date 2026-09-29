"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckIcon } from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { wa } from "@/lib/data/whatsapp";
import { smileCategories } from "@/lib/data/smileCategories";
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
];

export function SkinLanguage() {
  const [selectedId, setSelectedId] = useState(smileCategories[0].id);
  const selected =
    smileCategories.find((s) => s.id === selectedId) ?? smileCategories[0];
  const reduceMotion = useReducedMotion();
  const detailRef = useRef<HTMLDivElement>(null);

  function selectCategory(id: string) {
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
    <section id="sonrisa" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            ¿Qué necesita tu sonrisa?
          </h2>
          <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            Selecciona un área para orientarte. Confirmaremos contigo la
            valoración adecuada en consulta.
          </p>
        </MotionSection>

        <MotionSection stagger className="border-t border-white/25 bg-white/10">
          <div className="grid grid-cols-2 divide-x divide-y divide-gray-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10">
            {smileCategories.map((category, index) => {
              const active = category.id === selectedId;
              return (
                <MotionItem key={category.id} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => selectCategory(category.id)}
                    aria-pressed={active}
                    aria-controls="sonrisa-detalle"
                    className={cn(
                      "group relative flex h-full w-full min-w-0 flex-col items-center px-2 py-5 text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black sm:px-3 sm:py-6",
                      active ? "z-10 bg-white" : "hover:bg-white/40",
                    )}
                  >
                    <span
                      className={cn(
                        "pointer-events-none absolute inset-x-0 bottom-0 h-1 transition-colors",
                        active ? "bg-champagne" : "bg-transparent group-hover:bg-champagne/40",
                      )}
                      aria-hidden
                    />
                    <span
                      className={cn(
                        "mb-3 font-mono text-[9px] tracking-widest",
                        active ? "text-champagne" : "text-gray-400",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={cn(
                        "relative mb-3 h-16 w-16 shrink-0 overflow-hidden bg-gray-200 transition-opacity sm:h-20 sm:w-20",
                        maskClasses[index % maskClasses.length],
                        active
                          ? "opacity-100 ring-2 ring-champagne ring-offset-2 ring-offset-white"
                          : "opacity-60 group-hover:opacity-100",
                      )}
                    >
                      <Image
                        src={category.image}
                        alt=""
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <h3
                      className={cn(
                        "w-full break-words text-[9px] font-bold uppercase leading-tight tracking-wide sm:text-[10px]",
                        active ? "text-black" : "text-gray-500",
                      )}
                    >
                      {category.name}
                    </h3>
                  </button>
                </MotionItem>
              );
            })}
          </div>
        </MotionSection>

        <div
          ref={detailRef}
          id="sonrisa-detalle"
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
              <div className="space-y-6 p-6 sm:p-8 md:col-span-4 lg:p-10">
                <h3 className="text-2xl font-black uppercase leading-none tracking-tighter text-black md:text-3xl">
                  {selected.headline}
                </h3>
                <ul className="divide-y divide-gray-200 border-y border-gray-200">
                  {selected.points.map((item) => (
                    <li key={item.title} className="flex gap-3 py-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-champagne text-champagne">
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

              <div className="relative flex flex-col items-center justify-center bg-white/10 p-8 md:col-span-4 lg:p-10">
                <div className="relative">
                  <div className="relative h-52 w-52 overflow-hidden bg-white/20 sm:h-60 sm:w-60 mask-clover">
                    <Image
                      src={selected.image}
                      alt={`Referencia visual: ${selected.name}`}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col p-6 sm:p-8 md:col-span-4 lg:p-10">
                <p className="text-xs font-bold uppercase tracking-wide text-black">
                  {selected.name}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                  {selected.summary}
                </p>
                <Button href={wa.categoria(selected.name)} className="mt-6 w-full">
                  Agendar cita
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
