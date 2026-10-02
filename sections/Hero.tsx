"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ClinicName } from "@/components/brand/ClinicName";
import {
  staggerContainer,
  staggerItem,
  fadeInScale,
} from "@/lib/animations";
import { links } from "@/lib/data/links";
import { doctors } from "@/lib/data/teamMembers";
import { cn } from "@/lib/utils";

const doctor = doctors[0];

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
            <p className="text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-coral">
              Odontopediatra
            </p>
            <p
              className="mt-2 text-sm tracking-[0.18em] text-[#f4b400]"
              aria-label="5 de 5 estrellas en Google"
            >
              ★★★★★
            </p>
            <p className="mt-2 text-[1.15rem] font-black uppercase leading-[1.05] tracking-tight text-black">
              Ana Karen
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-gray-600">
              Dentista infantil
              <br />
              San José Insurgentes · CDMX
            </p>
            <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.14em] text-gray-500">
              Cédula de ejemplo
            </p>
            <p className="text-sm font-semibold tracking-wide text-black">
              {doctor.licenseExample}
            </p>

            <a
              href={links.writeReview}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-interactive cta-shine mt-4 inline-flex w-full items-center justify-between gap-2 rounded-full border border-coral/30 bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-black hover:bg-white"
            >
              <span className="relative z-[1]">Deja tu reseña</span>
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
      className="relative bg-[#fff3ea] md:min-h-[100svh]"
    >
      <h1 className="sr-only">
        Ana Karen, odontopediatra en San José Insurgentes, Ciudad de México.
        Atención dental para niños.
      </h1>
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_65%_35%,#fffaf6_0%,#fff3ea_55%,#ffe0d2_100%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_12%_80%,rgba(226,24,120,0.32)_0%,transparent_50%),radial-gradient(ellipse_at_80%_20%,rgba(42,168,220,0.34)_0%,transparent_46%),radial-gradient(ellipse_at_50%_100%,rgba(255,196,48,0.38)_0%,transparent_42%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[20%] top-[20%] z-0 hidden h-16 w-16 rounded-full bg-white/50 blur-2xl md:block"
        aria-hidden
      />

      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 hidden h-[82vh] w-[min(58vw,760px)] -translate-x-1/2 md:block">
        <Image
          src="/images/Muela-hero-nina.png"
          alt="Muela sonriente, mascota del consultorio de odontopediatría"
          fill
          priority
          quality={95}
          sizes="58vw"
          className="hero-tooth-float object-contain object-bottom"
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
          <span className="block">Odontopediatría</span>
          <span className="block">para que la</span>
          <span className="mt-1 block font-light text-coral">
            visita se sienta
          </span>
          <span className="block">tranquila.</span>
          <span className="mt-3 block max-w-sm text-xs font-medium normal-case leading-relaxed tracking-tight text-gray-600 sm:text-sm">
            Odontopediatra en San José Insurgentes. Ana Karen atiende a niños
            desde la primera visita.
          </span>
        </motion.p>

        <motion.div
          variants={reduceMotion ? undefined : fadeInScale}
          className="relative mx-auto my-2 h-[320px] w-full max-w-[280px] will-change-transform"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/Muela-hero-nina.png"
              alt="Muela sonriente, mascota del consultorio de odontopediatría"
              fill
              priority
              quality={95}
              sizes="280px"
              className="hero-tooth-float object-contain object-center"
            />
          </div>
          <Link
            href="#sonrisa"
            aria-label="Ver atención de odontopediatría"
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
            Les explicamos qué va a pasar, sin prisa y sin presión.
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
              Conocer el consultorio
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
          className="mt-2 border-t border-champagne/50 pt-5 text-center"
        >
          <ClinicName className="mx-auto items-center" />
          <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
            San José Insurgentes, CDMX
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
              <span className="block">Odontopediatría</span>
              <span className="block">para que la</span>
              <span className="mt-1 block font-light text-coral">
                visita se sienta
              </span>
              <span className="block">tranquila.</span>
              <span className="mt-3 block max-w-[22ch] text-[0.32em] font-medium normal-case leading-[1.25] tracking-tight text-black/60 sm:text-[0.28em]">
                Odontopediatra en San José Insurgentes. Ana Karen atiende a
                niños desde la primera visita.
              </span>
            </motion.p>
          </div>

          <motion.div
            variants={reduceMotion ? undefined : staggerItem}
            className="mt-12 lg:mt-0"
          >
            <div className="max-w-xs border-l border-champagne pl-4">
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.08em] text-black/75 sm:text-[11px]">
                Les explicamos qué va a pasar, sin prisa y sin presión.
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
                  Conocer el consultorio
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none relative hidden lg:col-span-4 lg:block xl:col-span-5">
          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
            <Link
              href="#sonrisa"
              aria-label="Ver atención de odontopediatría"
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

          <div className="ml-auto max-w-[220px] border-t border-champagne/50 pt-5 text-right">
            <ClinicName className="ml-auto items-end text-right" />
            <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
              San José Insurgentes, CDMX
            </p>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
