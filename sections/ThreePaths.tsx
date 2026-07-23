"use client";

import {
  BookIcon,
  BottleIcon,
  CalendarIcon,
  CartIcon,
  ClipboardIcon,
  UserIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionCard, MotionSection } from "@/components/ui/Motion";
import { paths } from "@/lib/data/paths";
import { glassCardClass, cn } from "@/lib/utils";

const stepIcons = [BottleIcon, ClipboardIcon, BookIcon, CartIcon, CalendarIcon, UserIcon];

export function ThreePaths() {
  return (
    <section id="caminos" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            <span aria-hidden>●</span>
            05 / TU CAMINO
          </span>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
            Elige cómo quieres empezar
          </h2>
          <p className="mt-5 max-w-xl text-xs leading-relaxed text-gray-600 md:text-sm">
            Cuatro rutas claras según lo que necesitas hoy. Ninguna es
            incorrecta; todas te acercan a comprender y cuidar tu piel.
          </p>
        </MotionSection>

        {/* 4-column editorial table */}
        <MotionSection stagger className="border-t border-white/25">
          <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-2 md:divide-x lg:grid-cols-4 lg:divide-y-0">
            {paths.map((path, index) => (
              <MotionCard key={path.id} className="min-w-0">
                <article
                  id={path.id}
                  className="flex h-full scroll-mt-28 flex-col bg-white/10 p-6 transition-colors hover:bg-white/25 sm:p-7 lg:p-8"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="rounded-full border border-gray-200 px-2 py-0.5 text-[9px] uppercase tracking-[0.14em] text-gray-500">
                      camino
                    </span>
                  </div>

                  <h3 className="text-lg font-black uppercase leading-tight tracking-tighter text-black sm:text-xl">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-gray-600">
                    {path.description}
                  </p>

                  <ol className="mt-6 flex-1 divide-y divide-gray-200 border-y border-gray-200">
                    {path.steps.map((step, stepIndex) => {
                      const Icon = stepIcons[stepIndex % stepIcons.length];
                      return (
                        <li
                          key={`${path.id}-${step.label}`}
                          className="flex items-center gap-3 py-3"
                        >
                          <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-[#F9FAFB] text-black">
                            <Icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="text-[11px] font-medium uppercase tracking-wide text-black">
                            {step.label}
                          </span>
                        </li>
                      );
                    })}
                  </ol>

                  <Button
                    href={path.href}
                    variant={index === 0 ? "primary" : "outline"}
                    className="mt-6 w-full"
                  >
                    {path.cta}
                  </Button>
                </article>
              </MotionCard>
            ))}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
