"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { PREMIUM_EASE } from "@/lib/animations";
import { caminoResetChips } from "@/lib/data/camino";
import { links } from "@/lib/data/links";
import { cn, glassCardClass } from "@/lib/utils";

/**
 * Educación de la UVP: la piel se lee también desde adentro (Reset 360™).
 * Conservado del Camino; el router de 9 chips y el mapa de 3 hitos se eliminaron.
 */
export function SystemicRootTeaser() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const selectedCount = useMemo(
    () => Object.values(checked).filter(Boolean).length,
    [checked],
  );
  const reveal = selectedCount >= 2;

  function toggle(label: string) {
    setChecked((prev) => ({ ...prev, [label]: !prev[label] }));
  }

  return (
    <section id="raiz-sistemica" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <MotionSection className="order-1 px-6 py-10 sm:px-8 lg:col-span-5 lg:px-10 lg:py-14">
            <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
              <span aria-hidden>●</span>
              03 / RAÍZ SISTÉMICA
            </span>
            <h2 className="max-w-md text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
              Por qué miramos más allá de la crema
            </h2>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-gray-600 md:text-sm">
              DM Ceuticals lee la piel y también lo que la alimenta: estrés,
              digestión, hormonas. Reset 360™ es el escaneo de esa raíz
              sistémica.
            </p>
            <Button href={links.reset360} variant="outline" className="mt-8">
              Ir a Reset 360™
            </Button>
          </MotionSection>

          <MotionSection className="order-2 border-t border-white/25 bg-white/10 px-6 py-10 sm:px-8 lg:col-span-7 lg:border-l lg:border-t-0 lg:px-10 lg:py-14">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Demo · marca patrones que reconoces
            </p>
            <ul className="flex flex-wrap gap-2">
              {caminoResetChips.map((label) => {
                const on = !!checked[label];
                return (
                  <li key={label}>
                    <button
                      type="button"
                      onClick={() => toggle(label)}
                      className={cn(
                        "cta-interactive rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors",
                        on
                          ? "border-black bg-black text-white"
                          : "border-gray-200 bg-white/30 text-gray-700 hover:bg-white/50",
                      )}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>

            <AnimatePresence>
              {reveal ? (
                <motion.div
                  key="reset-reveal"
                  initial={{ opacity: 0, y: 12, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 8, height: 0 }}
                  transition={{ duration: 0.45, ease: PREMIUM_EASE }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <p className="mb-4 text-xs text-gray-600">
                      Hay una raíz sistémica que vale la pena escanear.
                    </p>
                    <Button href={links.reset360} className="w-full sm:w-auto">
                      Empezar Reset 360™
                    </Button>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </MotionSection>
        </div>
      </Container>
    </section>
  );
}
