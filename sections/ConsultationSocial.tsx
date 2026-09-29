"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { panelVariants } from "@/lib/animations";
import { clinic } from "@/lib/data/bellasmile";
import { links } from "@/lib/data/links";
import { googleReviews } from "@/lib/data/reviews";
import { cn, glassCardClass, glassCardSoftClass } from "@/lib/utils";

export function ConsultationSocial() {
  const [reviewIndex, setReviewIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const currentReview = googleReviews[reviewIndex];

  const prevReview = () =>
    setReviewIndex((i) => (i === 0 ? googleReviews.length - 1 : i - 1));
  const nextReview = () =>
    setReviewIndex((i) => (i === googleReviews.length - 1 ? 0 : i + 1));

  return (
    <section id="resenas" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "overflow-hidden py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Lo que dicen nuestros pacientes.
          </h2>
          <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            Reseñas verificadas en Google.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-xl leading-none text-champagne" aria-hidden>
              ★★★★★
            </span>
            <div>
              <p className="text-sm font-black uppercase tracking-tight text-black">
                {clinic.google.rating.toFixed(1)} en Google
              </p>
              <p className="text-[10px] uppercase tracking-[0.14em] text-gray-500">
                {clinic.google.reviewCount} reseñas
              </p>
            </div>
          </div>

          <div className={cn(glassCardSoftClass, "mx-auto mt-8 max-w-2xl p-5 sm:p-6")}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentReview.id}
                initial={reduceMotion ? false : "initial"}
                animate="animate"
                exit={reduceMotion ? undefined : "exit"}
                variants={reduceMotion ? undefined : panelVariants}
              >
                <blockquote>
                  <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                    “{currentReview.quote}”
                  </p>
                  <footer className="mt-4">
                    <cite className="not-italic text-[10px] font-bold uppercase tracking-wider text-black">
                      {currentReview.author}
                    </cite>
                  </footer>
                </blockquote>
              </motion.div>
            </AnimatePresence>

            <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-4">
              <button
                type="button"
                onClick={prevReview}
                className="cta-interactive cta-shine cta-shine-soft inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                aria-label="Reseña anterior"
              >
                <ChevronLeftIcon className="relative z-[1] h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {googleReviews.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setReviewIndex(i)}
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full transition-colors",
                      i === reviewIndex ? "bg-black/10" : "hover:bg-black/5",
                    )}
                    aria-label={`Ver reseña ${i + 1}`}
                    aria-current={i === reviewIndex ? "true" : undefined}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        i === reviewIndex ? "bg-champagne" : "bg-black/25",
                      )}
                      aria-hidden
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={nextReview}
                className="cta-interactive cta-shine cta-shine-soft inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/40 bg-white/20 text-black backdrop-blur-md"
                aria-label="Reseña siguiente"
              >
                <ChevronRightIcon className="relative z-[1] h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <Button href={links.writeReview} variant="outline">
              Deja tu reseña
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
