"use client";

import {
  ArrowRightIcon,
  BookIcon,
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

const stepIcons = [BottleIcon, ClipboardIcon, BookIcon, CartIcon, CalendarIcon, UserIcon];

export function ThreePaths() {
  return (
    <section id="caminos" className="bg-cream py-16 sm:py-20 lg:py-24">
      <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="Tu camino"
            title="Elige cómo quieres empezar"
            subtitle="Cuatro rutas claras según lo que necesitas hoy. Ninguna es incorrecta; todas te acercan a comprender y cuidar tu piel."
          />
        </MotionSection>

        <MotionSection stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {paths.map((path, index) => {
            const styles = accentStyles[path.accent];
            return (
              <MotionItem key={path.id}>
                <article
                  id={path.id}
                  className={cn(
                    "flex h-full scroll-mt-28 flex-col rounded-2xl border p-5",
                    styles.card,
                  )}
                >
                  <span
                    className={cn(
                      "inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em]",
                      styles.badge,
                    )}
                  >
                    Camino {index + 1}
                  </span>
                  <h3 className="mt-3 min-h-[1.75rem] whitespace-nowrap font-sans text-base font-bold leading-none tracking-tight text-ink sm:text-lg">
                    {path.title}
                  </h3>
                  <p className="mt-2 min-h-[2.5rem] text-sm leading-snug text-muted">
                    {path.description}
                  </p>

                  <ol className="mt-5 flex flex-1 flex-col gap-2">
                    {path.steps.map((step, stepIndex) => {
                      const Icon = stepIcons[stepIndex % stepIcons.length];
                      return (
                        <li
                          key={`${path.id}-${step.label}`}
                          className="flex items-center gap-2.5"
                        >
                          <span
                            className={cn(
                              "inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                              styles.iconBg,
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="text-xs font-medium text-ink sm:text-sm">
                            {step.label}
                          </span>
                          {stepIndex < path.steps.length - 1 ? (
                            <ArrowRightIcon className="ml-auto h-3.5 w-3.5 text-muted-light" />
                          ) : null}
                        </li>
                      );
                    })}
                  </ol>

                  <Button
                    href={path.href}
                    variant={styles.button}
                    className="mt-5 w-full px-4 py-2.5 text-[10px]"
                  >
                    {path.cta}
                    <ArrowRightIcon className="h-3.5 w-3.5" />
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
