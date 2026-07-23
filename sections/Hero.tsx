"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { DmLogo } from "@/components/brand/DmLogo";
import { useExperienceReady } from "@/components/ExperienceGate";
import {
  staggerContainer,
  staggerItem,
  fadeInScale,
} from "@/lib/animations";
import { links } from "@/lib/data/links";
import { cn } from "@/lib/utils";

const portraitMask = {
  WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 22%)",
  maskImage: "linear-gradient(to top, transparent 0%, black 22%)",
} as const;

const AUTOPLAY_MS = 3800;

const WIDGET_SLIDES = [
  {
    id: "quiz-piel",
    tag: "Evaluación gratuita",
    metric: "2 MIN",
    description: "Descubre el lenguaje de tu piel y encuentra la rutina exacta.",
    ctaText: "Desde tu piel",
    url: links.restore360,
    type: "badge" as const,
  },
  {
    id: "reset-360",
    tag: "Raíz sistémica",
    metric: "RESET 360™",
    description:
      "Descubre si existe un factor interno (estrés, digestión) afectando tu piel.",
    ctaText: "Desde la raíz",
    url: links.reset360,
    type: "badge" as const,
  },
  {
    id: "consulta-mireya",
    tag: "Valoración clínica",
    metric: "EXPERT",
    description:
      "Acompañamiento cercano e interpretación avanzada de tu caso.",
    ctaText: "Agendar consulta",
    url: links.agendar,
    type: "profile" as const,
    image: "/images/mireya-diaz.webp",
  },
] as const;

function HeroWidgetSlider({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const slide = WIDGET_SLIDES[index];

  const goTo = useCallback((next: number) => {
    setIndex(
      ((next % WIDGET_SLIDES.length) + WIDGET_SLIDES.length) %
        WIDGET_SLIDES.length,
    );
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % WIDGET_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

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
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div className="overflow-hidden rounded-2xl border border-white/35 bg-white/20 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl">
        <div className="relative min-h-[220px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 22, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={
                reduceMotion
                  ? undefined
                  : { opacity: 0, y: -16, scale: 0.98 }
              }
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 22,
                mass: 0.85,
              }}
              className="flex h-full flex-col"
            >
              <p className="text-[10px] font-medium uppercase leading-snug tracking-[0.12em] text-black/55">
                {slide.tag}
              </p>
              <p className="mt-3 text-3xl font-black uppercase leading-none tracking-tighter text-black sm:text-4xl">
                {slide.metric}
              </p>
              <p className="mt-3 text-[11px] leading-relaxed text-gray-600">
                {slide.description}
              </p>

              {slide.type === "profile" ? (
                <div className="relative mt-4 h-28 w-full overflow-hidden rounded-xl bg-black/5">
                  <Image
                    src={slide.image}
                    alt="Mireya Díaz"
                    fill
                    sizes="210px"
                    className="object-cover object-[center_20%] opacity-90"
                  />
                </div>
              ) : (
                <div className="mt-4 flex min-h-[7rem] items-end">
                  <span className="rounded-full border border-gray-200 bg-white/50 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.14em] text-gray-500">
                    {slide.id === "quiz-piel"
                      ? "Lenguaje de la piel"
                      : "Reset 360™"}
                  </span>
                </div>
              )}

              <a
                href={slide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-interactive cta-shine mt-4 inline-flex w-full items-center justify-between gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-black hover:bg-white"
              >
                <span className="relative z-[1]">{slide.ctaText}</span>
                <span
                  className="relative z-[1] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-[10px] text-white"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        <div
          className="mt-4 flex justify-center gap-1.5"
          role="tablist"
          aria-label="Slides del widget"
        >
          {WIDGET_SLIDES.map((item, i) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a ${item.tag}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors",
                i === index ? "bg-black" : "bg-black/25 hover:bg-black/40",
              )}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();
  const ready = useExperienceReady();
  const enter = ready || !!reduceMotion;

  return (
    <section
      id="inicio"
      className="relative z-0 overflow-x-clip bg-[#e8e8ea] md:min-h-[100svh]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_65%_35%,#f3f3f5_0%,#e8e8ea_60%,#e0e0e2_100%)]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute -bottom-10 -left-10 z-0 h-[500px] w-[500px] rounded-full bg-pink-600/30 blur-[120px] md:h-[640px] md:w-[640px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-20 left-0 z-0 h-[420px] w-[420px] rounded-full bg-[#c4122f]/45 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-16 z-0 h-[480px] w-[480px] rounded-full bg-pink-600/30 opacity-30 blur-[140px]"
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
          src="/images/mujer-hero.png"
          alt="Mujer observando su piel frente al espejo"
          fill
          priority
          quality={95}
          sizes="58vw"
          className="object-cover object-bottom mix-blend-screen"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[32%] bg-gradient-to-t from-[#e8e8ea] via-[#e8e8ea]/65 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-[48%] w-[42%] bg-gradient-to-tr from-pink-600/20 via-transparent to-transparent"
          aria-hidden
        />
      </div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        animate={enter ? "visible" : "hidden"}
        variants={reduceMotion ? undefined : staggerContainer}
        className="relative z-20 flex flex-col items-center justify-start gap-6 px-4 pb-12 pt-20 text-left md:hidden"
      >
        <motion.span
          variants={reduceMotion ? undefined : staggerItem}
          className="flex w-full items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-black/45"
        >
          <span aria-hidden>●</span>
          00 / SKIN LANGUAGE
        </motion.span>

        <motion.h1
          variants={reduceMotion ? undefined : staggerItem}
          className="w-full max-w-[16ch] text-3xl font-black uppercase leading-tight tracking-tighter text-black sm:text-4xl"
        >
          <span className="block">Sé lo</span>
          <span className="block">frustrante</span>
          <span className="mt-1 block font-light text-black/70">
            que puede ser
          </span>
          <span className="block">mirarte al</span>
          <span className="block">espejo</span>
          <span className="mt-3 block max-w-sm text-xs font-medium normal-case leading-relaxed tracking-tight text-gray-600 sm:text-sm">
            y sentir que has intentado de todo sin encontrar una solución real.
          </span>
        </motion.h1>

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
              src="/images/mujer-hero.png"
              alt="Mujer observando su piel frente al espejo"
              fill
              priority
              quality={95}
              sizes="280px"
              className="rounded-b-full object-cover object-top mix-blend-screen"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#e8e8ea] via-[#e8e8ea]/70 to-transparent"
              aria-hidden
            />
          </div>
          <Link
            href="#sintomas"
            className="cta-interactive cta-shine cta-shine-soft absolute bottom-3 right-1 z-20 flex h-16 w-16 flex-col items-center justify-center rounded-full border border-white/80 bg-white/70 text-center shadow-sm backdrop-blur-md"
          >
            <span className="relative z-[1] text-[10px] text-black" aria-hidden>
              ▶
            </span>
            <span className="relative z-[1] text-[8px] font-semibold uppercase tracking-[0.14em] text-black">
              Explore
            </span>
          </Link>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="z-20 flex w-full max-w-xs flex-col gap-4"
        >
          <div className="flex gap-3">
            <span className="shrink-0 pt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-black/50">
              About
            </span>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
              Tu piel podría estar intentando decirte algo más profundo. Estamos
              aquí para ayudarte a comprenderla y acompañarte en el camino.
            </p>
          </div>
          <div className="flex w-full max-w-xs flex-col gap-3">
            <Button href={links.restore360} className="w-full bg-black text-white">
              Quiero empezar hoy
            </Button>
            <Button
              href={links.reset360}
              variant="outline"
              className="w-full border-gray-300 bg-white/80 text-black hover:bg-white"
            >
              Quiero entender qué me está pasando
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="mx-auto mt-4 w-full max-w-xs"
        >
          <HeroWidgetSlider />
        </motion.div>

        <motion.div
          variants={reduceMotion ? undefined : staggerItem}
          className="mt-2 border-t border-black/10 pt-5 text-center"
        >
          <DmLogo className="mx-auto h-8 w-auto" />
          <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
            La piel no es el enemigo. Es el mensajero.
          </p>
        </motion.div>
      </motion.div>

      <div className="relative z-20 mx-auto hidden min-h-[100svh] max-w-[1400px] grid-cols-1 px-5 pb-6 pt-24 sm:px-8 md:grid lg:grid-cols-12 lg:gap-4 lg:px-10 lg:pb-8 lg:pt-28">
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          animate={enter ? "visible" : "hidden"}
          variants={reduceMotion ? undefined : staggerContainer}
          className="relative flex flex-col justify-between lg:col-span-5 lg:py-2 xl:col-span-4"
        >
          <div>
            <motion.span
              variants={reduceMotion ? undefined : staggerItem}
              className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-black/45"
            >
              <span aria-hidden>●</span>
              00 / SKIN LANGUAGE
            </motion.span>

            <motion.h1
              variants={reduceMotion ? undefined : staggerItem}
              className="max-w-[16ch] text-left text-3xl font-black uppercase leading-tight tracking-tighter text-black sm:text-4xl lg:text-[3.1rem] xl:text-[3.6rem] lg:leading-[0.9]"
            >
              <span className="block">Sé lo</span>
              <span className="block">frustrante</span>
              <span className="mt-1 block font-light text-black/70">
                que puede ser
              </span>
              <span className="block">mirarte al</span>
              <span className="block">espejo</span>
              <span className="mt-3 block max-w-[22ch] text-[0.32em] font-medium normal-case leading-[1.25] tracking-tight text-black/60 sm:text-[0.28em]">
                y sentir que has intentado de todo sin encontrar una solución
                real.
              </span>
            </motion.h1>
          </div>

          <motion.div
            variants={reduceMotion ? undefined : staggerItem}
            className="mt-12 flex gap-4 lg:mt-0"
          >
            <span className="shrink-0 pt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-white/85">
              About
            </span>
            <div className="max-w-xs border-l border-white/35 pl-4">
              <p className="text-[10px] font-medium uppercase leading-relaxed tracking-[0.08em] text-white/95 sm:text-[11px]">
                Tu piel podría estar intentando decirte algo más profundo.
                Estamos aquí para ayudarte a comprenderla y acompañarte en el
                camino.
              </p>
              <div className="mt-5 flex w-full max-w-xs flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button
                  href={links.restore360}
                  className="shrink-0 whitespace-nowrap"
                >
                  Quiero empezar hoy
                </Button>
                <Button
                  href={links.reset360}
                  variant="outline"
                  className="shrink-0 whitespace-nowrap border-white/50 bg-white/25 text-white backdrop-blur-md hover:bg-white hover:text-black"
                >
                  Quiero entender qué me está pasando
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="pointer-events-none relative hidden lg:col-span-4 lg:block xl:col-span-5">
          <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2">
            <Link
              href="#sintomas"
              className="cta-interactive cta-shine cta-shine-soft pointer-events-auto relative flex h-24 w-24 flex-col items-center justify-center rounded-full border border-white/80 bg-white/45 text-center shadow-[0_8px_40px_rgba(0,0,0,0.1)] backdrop-blur-md sm:h-28 sm:w-28"
            >
              <span
                className="pointer-events-none absolute -inset-3 rounded-full border border-white/35"
                aria-hidden
              />
              <span className="relative z-[1] mb-1 text-xs text-black" aria-hidden>
                ▶
              </span>
              <span className="relative z-[1] text-[9px] font-semibold uppercase tracking-[0.18em] text-black">
                Explore
              </span>
            </Link>
          </div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 16 }}
          animate={enter ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mt-8 flex flex-col justify-between gap-10 lg:col-span-3 lg:mt-0 lg:py-2"
        >
          <HeroWidgetSlider className="ml-auto w-full max-w-[210px]" />

          <div className="ml-auto max-w-[220px] border-t border-black/10 pt-5 text-right">
            <DmLogo className="ml-auto h-7 w-auto" />
            <p className="mt-3 text-[10px] font-medium uppercase leading-relaxed tracking-[0.1em] text-black/50">
              La piel no es el enemigo. Es el mensajero.
            </p>
          </div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-36 bg-gradient-to-t from-[#e8e8ea] via-[#e8e8ea]/55 to-transparent"
        aria-hidden
      />
    </section>
  );
}
