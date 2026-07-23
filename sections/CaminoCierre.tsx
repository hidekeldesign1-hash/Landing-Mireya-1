"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { links } from "@/lib/data/links";
import { cn, glassCardClass } from "@/lib/utils";

export function CaminoCierre() {
  return (
    <section id="cierre" className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-14 text-center sm:px-10 lg:px-16 lg:py-20">
          <span className="mb-5 inline-flex items-center justify-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            <span aria-hidden>●</span>
            07 / CIERRE
          </span>
          <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
            Empieza tu camino ahora
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-xs leading-relaxed text-gray-600 md:text-sm">
            La piel no es el enemigo. Es el mensajero. Da el primer paso con el
            diagnóstico Lenguaje de la Piel™ o compra directo en la tienda.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={links.restore360}>Empezar mi camino ahora</Button>
            <Button href={links.shopify} variant="outline">
              Ir a la tienda
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
