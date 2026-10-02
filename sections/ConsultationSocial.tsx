"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { links } from "@/lib/data/links";
import { googleReviews } from "@/lib/data/reviews";
import { cn, glassCardClass } from "@/lib/utils";

export function ConsultationSocial() {
  const [index, setIndex] = useState(0);
  const total = googleReviews.length;
  const review = googleReviews[index];

  function step(dir: -1 | 1) {
    setIndex((current) => (current + dir + total) % total);
  }

  return (
    <section id="resenas" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "overflow-hidden py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Lo que dicen las familias
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-gray-600">
            Reseñas publicadas en Google sobre Ana Karen.
          </p>

          {review ? (
            <div className="mx-auto mt-8 max-w-2xl">
              <div className="flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Reseña anterior"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-black"
                >
                  ‹
                </button>
                <p className="text-center text-xs font-medium uppercase tracking-[0.16em] text-gray-500">
                  {index + 1} de {total}
                </p>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Reseña siguiente"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white text-lg text-black"
                >
                  ›
                </button>
              </div>

              <AnimatePresence mode="wait">
                <motion.figure
                  key={review.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-6 text-center"
                >
                  <div
                    className="text-champagne"
                    aria-label="5 de 5 estrellas"
                  >
                    ★★★★★
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-gray-800 sm:text-base">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-black">
                    {review.author}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          ) : null}

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
