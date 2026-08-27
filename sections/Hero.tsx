"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BellaSmileLogo } from "@/components/brand/BellaSmileLogo";
import {
  staggerContainer,
  staggerItem,
  fadeInScale,
} from "@/lib/animations";
import { clinic } from "@/lib/data/bellasmile";
import { links } from "@/lib/data/links";
import { cn } from "@/lib/utils";

const portraitMask = {
  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 22%)",
  maskImage: "linear-gradient(to top, transparent 0%, black 22%)",
} as const;

function HeroWidgetCard({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn("w-full max-w-xs will-change-transform", className)}
      animate={
        reduceMotion
          ? undefined
          : {
              y: [0, -10, 0],
            }
      }
      transition={
        reduceMotion
          ? undefined
          : {
              duration: 1.35,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.45, 1],
            }
      }
    >
      <div className="overflow-hidden rounded-2xl border border-white/35 bg-white/20 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="relative min-h-[200px]">
          <div className="flex h-full min-w-0 flex-col">
            <p className="text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-black/55">
              Clínica Dental
            </p>
            <p className="mt-3 text-[1.35rem] font-black uppercase leading-[1.05] tracking-tight text-black">
              BellaSmile
            </p>
            <p className="mt-3 text-base leading-none tracking-tight text-black" aria-label="5 estrellas en Google">
              ★★★★★
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-gray-600">
              {clinic.google.rating.toFixed(1)} en Google · {clinic.google.reviewCount} reseñas
              <br />
              Polanco · CDMX
            </p>

            <a
              href={links.googleReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-interactive cta-shine mt-4 inline-flex w-full items-center justify-between gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-black hover:bg-white"
            >
              <span className="relative z-[1]">Ver reseñas</span>
              <span
                className="relative z-[1] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px] text-white"
                aria-hidden
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="inicio"
      className="relative z-0 overflow-x-clip bg-[#e8eef4] md:min-h-[100svh]"
    >
      <h1 className="sr-only">
        Tu sonrisa merece algo más que un tratamiento. Clínica dental BellaSmile
        en Polanco, Ciudad de México.
      </h1>
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_65%_35%,#f3f7fb_0%,#e8eef4_60%,#dfe8f0_100%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_15%_85%,rgba(94,179,217,0.32)_0%,transparent_52%),radial-gradient(ellipse_at_55%_95%,rgba(42,122,184,0.22)_0%,transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[20%] top-[20%] z-0 hidden h-16 w-16 rounded-full bg-white/50 blur-2xl md:block"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 z-10 hidden h-[82vh] w-[min(58vw,760px)] -translate-x-1/2 md:block"
        style={portraitMask}
      >
        <div
          className="hero-glow-ring pointer-events-none absolute left-[6%] top-[6%] h-[68%] w-[78%] rounded-full opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-[16%] top-[14%] h-[40%] w-[55%] rounded-full bg-white/25 blur-3xl"
          aria-hidden
        />
        <Image
          src="/images/Muela-hero.png"
          alt="Ilustración dental BellaSmile"
          fill
          priority
          quality={95}
          sizes="58vw"
          className="object-cover object-bottom"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#e8eef4] via-[#e8eef4]/65 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[48%] w-[42%] bg-gradient-to-tr from-[#5eb3d9]/15 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={reduceMotion ? undefined : staggerContainer}
        className="relative z-20 flex flex-col items-center justify-start gap-6 px-4 pb-12 pt-20 text-left md:hidden"
      >
        <motion.p
          variants={reduceMotion ? undefined : staggerItem}
          aria-hidden="true"
          className="w-full max-w-[16ch] text-3xl font-black uppercase leading-tight tracking-tighter text-black sm:text-4xl"
        >
          <span className="block">Tu sonrisa</span>
          <span className="block">merece algo</span>
          <span className="mt-1 block font-light text-black/70">
            más que un
          </span>
          <span className="block">tratamiento.</span>
          <span className="mt-3 block max-w-sm text-xs font-medium normal-case leading-relaxed tracking-tight text-gray-600 sm:text-sm">
            Clínica dental en Polanco. Valoración, prevención y tratamientos con
            un equipo que te acompaña paso a paso.
          </span>
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : fadeInScale}
          className="relative mx-auto my-2 h-[320px] w-full max-w-[280px] will-change-transform"
        >
          <div className="absolute inset-0 overflow-hidden" style={portraitMask}>
            <div
              className="hero-glow-ring pointer-events-none absolute left-[4%] top-[4%] h-[70%] w-[82%] rounded-full opacity-70"
              aria-hidden
            />
            <Image
              src="/images/Muela-hero.png"
              alt="Ilustración dental BellaSmile"
              fill
              priority
              quality={95}
              sizes="280px"
              className="rounded-b-full object-cover object-top"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#e8eef4] via-[#e8eef4]/70 to-transparent"
              aria-hidden
            />
          </div>
          <Link
            href="#sonrisa"
            aria-label="Ver servicios dentales"
            className="cta-interactive cta-shine cta-shine-soft absolute bottom-3 right-1 z-20 flex h-11 w-11 min-h-[44px] min-w-[44px] flex-col items-center justify-center rounded-full border border-white/80 bg-white/70 text-center shadow-sm backdrop-blur-md"
          >
            <span className="relative z-[1] text-[10px] text-black" aria-hidden>
              ↓
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="z-20 flex w-full max-w-xs flex-col gap-4"
        >
          <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
            Atención clara desde la primera visita, sin complicaciones ni
            presión.
          </p>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Button href={links.whatsapp.hero()} className="w-full bg-black text-white">
              Agendar cita
            </Button>
            <Button
              href={links.conocer}
              variant="outline"
              className="w-full border-gray-300 bg-white/80 text-black hover:bg-white"
            >
              Conocer BellaSmile
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="mx-auto mt-4 w-full max-w-xs"
        >
          <HeroWidgetCard />
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="mt-2 border-t border-black/10 pt-5 text-center"
        >
          <BellaSmileLogo className="mx-auto h-8 w-auto" />
          <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
            Polanco, CDMX
          </p>
        </motion.div>
      </motion.div>

      <div className="relative z-20 mx-auto hidden min-h-[100svh] max-w-[1400px] grid-cols-1 px-5 pb-6 pt-24 sm:px-8 md:grid lg:grid-cols-12 lg:gap-4 lg:px-10 lg:pb-8 lg:pt-28">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={reduceMotion ? undefined : staggerContainer}
          className="relative flex flex-col justify-between lg:col-span-5 lg:py-2 xl:col-span-4"
        >
          <div>
            <motion.p
              variants={reduceMotion ? undefined : staggerItem}
              aria-hidden="true"
              className="max-w-[16ch] text-left text-3xl font-black uppercase leading-tight tracking-tighter text-black sm:text-4xl lg:text-[3.1rem] xl:text-[3.6rem] lg:leading-[0.9]"
            >
              <span className="block">Tu sonrisa</span>
              <span className="block">merece algo</span>
              <span className="mt-1 block font-light text-black/70">
                más que un
              </span>
              <span className="block">tratamiento.</span>
              <span className="mt-3 block max-w-[22ch] text-[0.32em] font-medium normal-case leading-[1.25] tracking-tight text-black/60 sm:text-[0.28em]">
                Clínica dental en Polanco. Valoración, prevención y tratamientos
                con un equipo que te acompaña paso a paso.
              </span>
            </motion.p>
          </div>

          <motion.div
            variants={reduceMotion ? undefined : staggerItem}
            className="mt-12 lg:mt-0"
          >
            <div className="max-w-xs border-l border-black/15 pl-4">
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.08em] text-black/75 sm:text-[11px]">
                Atención clara desde la primera visita, sin complicaciones ni
                presión.
              </p>
              <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={links.whatsapp.hero()} className="shrink-0 whitespace-nowrap">
                  Agendar cita
                </Button>
                <Button
                  href={links.conocer}
                  variant="outline"
                  className="shrink-0 whitespace-nowrap border-gray-300 bg-white/80 text-black backdrop-blur-md hover:bg-white"
                >
                  Conocer BellaSmile
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none relative hidden lg:col-span-4 lg:block xl:col-span-5">
          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
            <Link
              href="#sonrisa"
              aria-label="Ver servicios dentales"
              className="cta-interactive cta-shine cta-shine-soft pointer-events-auto relative flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/80 bg-white/45 text-center shadow-[0_8px_40px_rgba(0,0,0,0.1)] backdrop-blur-md sm:h-12 sm:w-12"
            >
              <span
                className="pointer-events-none absolute -inset-3 rounded-full border border-white/35"
                aria-hidden
              />
              <span className="relative z-[1] text-xs text-black" aria-hidden>
                ↓
              </span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mt-8 flex flex-col justify-between gap-10 lg:col-span-3 lg:mt-0 lg:py-2"
        >
          <HeroWidgetCard className="ml-auto w-full max-w-[240px]" />

          <div className="ml-auto max-w-[220px] border-t border-black/10 pt-5 text-right">
            <BellaSmileLogo className="ml-auto h-7 w-auto" />
            <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
              Polanco, CDMX
            </p>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-[#e8eef4] via-[#e8eef4]/55 to-transparent"
        aria-hidden
      />
    </section>
  );
}
