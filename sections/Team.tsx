import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MotionSection } from "@/components/ui/Motion";
import { links } from "@/lib/data/links";
import { doctors } from "@/lib/data/teamMembers";
import { cn, glassCardClass } from "@/lib/utils";

export function Team() {
  return (
    <section id="doctores" className="relative bg-transparent px-4 py-8 md:px-8 md:py-10">
      <Container className={cn(glassCardClass, "overflow-hidden py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-none tracking-tighter text-black md:text-4xl lg:text-5xl">
            Conoce a nuestros doctores.
          </h2>
          <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-600">
            El Dr. Ricardo Mayo y la Dra. Montserrat atienden en RM SONRISAS,
            en la Colonia del Valle.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {doctors.map((doctor) => (
              <article
                key={doctor.id}
                className="overflow-hidden rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md"
              >
                <div className="relative aspect-[5/4] min-h-[220px] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.specialty}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_18%]"
                  />
                </div>
                <div className="flex flex-col p-6 sm:p-8">
                  <h3 className="text-2xl font-black uppercase leading-none tracking-tighter text-black">
                    {doctor.name}
                  </h3>
                  <span className="mt-3 block h-px w-10 bg-champagne" aria-hidden />
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {doctor.specialty} en RM SONRISAS.
                  </p>
                  <dl className="mt-6 divide-y divide-black/10 border-y border-black/10">
                    <div className="py-3">
                      <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-champagne">
                        Especialidad
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-black">
                        {doctor.specialty}
                      </dd>
                    </div>
                    <div className="py-3">
                      <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-champagne">
                        Cédula
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-black">
                        {doctor.license}
                      </dd>
                    </div>
                    <div className="py-3">
                      <dt className="text-[10px] font-medium uppercase tracking-[0.14em] text-champagne">
                        Zona
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-black">
                        {doctor.area}
                      </dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button href={links.whatsapp.equipo()}>Agendar cita</Button>
          </div>
        </MotionSection>
      </Container>
    </section>
  );
}
