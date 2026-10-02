"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionCard, MotionSection } from "@/components/ui/Motion";
import { quickPaths } from "@/lib/data/quickPaths";
import { glassCardClass, cn } from "@/lib/utils";

export function ThreePaths() {
  return (
    <section id="caminos" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Cómo empezar con la odontopediatra.
          </h2>
          <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            Cuatro motivos de consulta infantil. El plan se define al ver al niño.
          </p>
        </MotionSection>

        <MotionSection stagger className="border-t border-white/25">
          <div className="grid grid-cols-1 divide-y divide-white/20 md:grid-cols-2 md:divide-x lg:grid-cols-4 lg:divide-y-0">
            {quickPaths.map((path, index) => (
              <MotionCard key={path.id} className="min-w-0">
                <article
                  id={path.id}
                  className="flex h-full scroll-mt-28 flex-col bg-white/10 p-6 transition-colors hover:bg-white/25 sm:p-7 lg:p-8"
                >
                  <span className="mb-6 font-mono text-xs tracking-widest text-champagne">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="text-lg font-black uppercase leading-tight tracking-tighter text-black sm:text-xl">
                    {path.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">
                    {path.description}
                  </p>

                  <Button
                    href={path.href}
                    variant={index === 0 ? "primary" : "outline"}
                    className="mt-6 w-full"
                  >
                    {path.cta}
                  </Button>
                </article>
              </MotionCard>
            ))}
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
