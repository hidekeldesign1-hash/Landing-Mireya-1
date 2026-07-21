"use client";

import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";

export function Empathy() {
  return (
    <section className="relative overflow-hidden bg-beige py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-sage/50 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-gold/10 blur-2xl"
        aria-hidden
      />

      <Container>
        <MotionSection stagger className="mx-auto max-w-4xl text-center">
          <MotionItem>
            <p className="font-sans text-xl font-semibold leading-relaxed text-ink sm:text-2xl lg:text-[1.75rem]">
              Has probado cremas, tratamientos y consejos. Has ocultado manchas,
              brotes o enrojecimiento. Has gastado tiempo y dinero esperando
              resultados que no duran.
            </p>
          </MotionItem>

          <MotionItem>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              No estás sola. Tal vez el problema no sea falta de esfuerzo; tal
              vez tu piel está intentando comunicar algo más.
            </p>
          </MotionItem>
        </MotionSection>
      </Container>
    </section>
  );
}
