"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon, LeafIcon } from "@/components/icons/LineIcons";
import { staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] overflow-x-hidden bg-cream"
    >
      {/* Subtle diagonal mask — not a heavy convex bulge */}
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <clipPath id="hero-curve-mobile" clipPathUnits="objectBoundingBox">
            <path d="M0,0 H1 V0.82 C0.75,0.94 0.55,1 0.5,1 C0.45,1 0.25,0.94 0,0.82 Z" />
          </clipPath>
          {/* Diagonal from top-center-right → bottom-left, slight organic ease at the base */}
          <clipPath id="hero-curve-desktop" clipPathUnits="objectBoundingBox">
            <path d="M0.2,0 C0.14,0.28 0.08,0.55 0.04,0.82 Q0.02,0.95 0.1,1 H1 V0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="grid min-h-[100svh] grid-cols-1 lg:grid-cols-12">
        {/* Left — copy & CTAs */}
        <div className="order-2 flex items-center px-6 pb-14 pt-10 sm:px-10 lg:order-1 lg:col-span-5 lg:px-10 lg:pb-20 lg:pt-28 xl:col-span-5 xl:pl-16 xl:pr-8">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            animate="visible"
            variants={reduceMotion ? undefined : staggerContainer}
            className="w-full max-w-xl lg:max-w-none"
          >
            <motion.h1
              variants={reduceMotion ? undefined : staggerItem}
              className="font-sans text-[1.75rem] font-bold leading-[1.15] tracking-tight text-ink sm:text-[2.15rem] lg:text-[2.35rem] xl:text-[2.65rem]"
            >
              Sé lo frustrante que puede ser mirarte al espejo y sentir que has
              intentado de todo sin encontrar una solución real.
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : staggerItem}
              className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base"
            >
              Tu piel podría estar intentando decirte algo más profundo. Estamos
              aquí para ayudarte a comprenderla y acompañarte en el camino.
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : staggerItem}
              className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 lg:flex-nowrap"
            >
              <Button
                href="#camino-1"
                className="shrink-0 px-5 py-2.5 whitespace-nowrap"
              >
                Quiero empezar hoy
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
              <Button
                href="#camino-2"
                variant="outline"
                className="shrink-0 px-5 py-2.5 whitespace-nowrap"
              >
                Quiero entender qué me está pasando
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right — image with diagonal mask */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 min-h-[46vh] sm:min-h-[50vh] lg:order-2 lg:col-span-7 lg:min-h-[100svh]"
        >
          <div className="hero-image-mask absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&h=1400&fit=crop"
              alt="Mujer sonriendo frente al espejo, recuperando confianza y bienestar"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-[center_18%]"
            />
          </div>

          {/* Badge — fully inside the image quadrant */}
          <div className="absolute bottom-8 right-6 z-10 flex h-[7.5rem] w-[7.5rem] flex-col items-center justify-center rounded-full bg-ink p-3 text-center shadow-[0_12px_40px_-12px_rgba(26,42,58,0.45)] sm:bottom-10 sm:right-8 sm:h-32 sm:w-32 lg:bottom-12 lg:right-10 lg:h-[8.5rem] lg:w-[8.5rem]">
            <LeafIcon className="mb-1 h-4 w-4 text-forest sm:h-5 sm:w-5" />
            <p className="px-1 font-sans text-[0.58rem] font-semibold uppercase leading-[1.25] tracking-[0.06em] text-white sm:text-[0.62rem] lg:text-[0.68rem]">
              La piel no es el enemigo. Es el mensajero.
            </p>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="mt-1 h-3.5 w-3.5 text-white/80"
              aria-hidden
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
