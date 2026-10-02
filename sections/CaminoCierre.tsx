"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { clinic } from "@/lib/data/bellasmile";
import { links } from "@/lib/data/links";
import { cn, glassCardClass } from "@/lib/utils";

export function CaminoCierre() {
  return (
    <section id="cierre" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection
          id="ubicacion"
          className="scroll-mt-24 border-b border-white/25 px-6 py-10 sm:px-10 lg:px-16 lg:py-14"
        >
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Ana Karen en San José Insurgentes.
          </h2>
          <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-4">
              <address className="not-italic text-sm leading-relaxed text-gray-600">
                {clinic.address.street}
                <br />
                {clinic.address.neighborhood}
                <br />
                {clinic.address.municipality}
                <br />
                {clinic.address.zip} {clinic.address.city}
              </address>
              <p className="mt-4">
                <a
                  href={clinic.phoneTel}
                  className="text-sm font-bold uppercase tracking-wide text-black hover:underline"
                >
                  {clinic.phone}
                </a>
              </p>
              <ul className="mt-6 space-y-2 border-t border-gray-200 pt-6">
                {clinic.hours.map((slot) => (
                  <li
                    key={slot.days}
                    className="flex flex-col gap-0.5 text-sm text-gray-600 sm:flex-row sm:justify-between"
                  >
                    <span className="font-medium uppercase tracking-wide text-champagne">
                      {slot.days}
                    </span>
                    <span>{slot.time}</span>
                  </li>
                ))}
              </ul>
              <Button href={links.directions} variant="outline" className="mt-8">
                Cómo llegar
              </Button>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-white/30 bg-white/10 lg:col-span-8 lg:min-h-[360px]">
              <iframe
                title="Ubicación de Ana Karen Odontopediatra en Google Maps"
                src={clinic.google.embedUrl}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </MotionSection>

        <MotionSection className="px-6 py-10 text-center sm:px-10 lg:px-16 lg:py-14">
          <h2 className="mx-auto max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            La sonrisa de tu hijo empieza aquí.
          </h2>
          <span className="mx-auto mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-gray-600">
            Escríbenos por WhatsApp para agendar la visita en San José Insurgentes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href={links.whatsapp.general()}>Agendar cita</Button>
            <Button href={links.directions} variant="outline">
              Cómo llegar
            </Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
