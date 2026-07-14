"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRightIcon,
  BottleIcon,
  CalendarIcon,
  CartIcon,
  ClipboardIcon,
  UserIcon,
} from "@/components/icons/LineIcons";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { paths, type JourneyPath } from "@/lib/data/paths";
import { cn } from "@/lib/utils";

const accentStyles: Record<
  JourneyPath["accent"],
  { card: string; badge: string; button: "primary" | "gold" | "outline"; iconBg: string }
> = {
  green: {
    card: "bg-sage-muted border-sage",
    badge: "bg-forest text-white",
    button: "primary",
    iconBg: "bg-forest/10 text-forest",
  },
  lavender: {
    card: "bg-beige border-beige-dark",
    badge: "bg-ink text-white",
    button: "outline",
    iconBg: "bg-ink/10 text-ink",
  },
  gold: {
    card: "bg-white border-forest/25",
    badge: "bg-forest text-white",
    button: "gold",
    iconBg: "bg-forest/10 text-forest",
  },
};

const stepIcons = [BottleIcon, ClipboardIcon, CartIcon, CalendarIcon, UserIcon];

export function ThreePaths() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="caminos" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="Tu camino"
            title="Elige cómo quieres empezar"
            subtitle="Tres rutas claras según lo que necesitas hoy. Ninguna es incorrecta; todas te acercan a comprender y cuidar tu piel."
          />
        </MotionSection>

        <MotionSection stagger className="mt-12 grid gap-6 lg:grid-cols-3">
          {paths.map((path, index) => {
            const styles = accentStyles[path.accent];
            return (
              <MotionItem key={path.id}>
                <article
                  id={path.id}
                  className={cn(
                    "flex h-full scroll-mt-28 flex-col rounded-[1.75rem] border p-6 sm:p-8",
                    styles.card,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em]",
                      styles.badge,
                    )}
                  >
                    Camino {index + 1}
                  </span>
                  <h3 className="mt-4 font-sans text-2xl font-bold leading-snug tracking-tight text-ink">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {path.description}
                  </p>

                  <motion.ol
                    className="mt-8 flex flex-1 flex-col gap-3"
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={reduceMotion ? undefined : staggerContainer}
                  >
                    {path.steps.map((step, stepIndex) => {
                      const Icon = stepIcons[stepIndex % stepIcons.length];
                      return (
                        <motion.li
                          key={step.label}
                          variants={reduceMotion ? undefined : staggerItem}
                          className="flex items-center gap-3"
                        >
                          <span
                            className={cn(
                              "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
                              styles.iconBg,
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-medium text-ink">
                            {step.label}
                          </span>
                          {stepIndex < path.steps.length - 1 ? (
                            <ArrowRightIcon className="ml-auto h-4 w-4 text-muted-light" />
                          ) : null}
                        </motion.li>
                      );
                    })}
                  </motion.ol>

                  <Button
                    href={path.href}
                    variant={styles.button}
                    className="mt-8 w-full"
                  >
                    {path.cta}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Button>
                </article>
              </MotionItem>
            );
          })}
        </MotionSection>
      </Container>
    </section>
  );
}
