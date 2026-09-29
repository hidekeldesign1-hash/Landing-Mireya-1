import { BellaSmileLogo } from "@/components/brand/BellaSmileLogo";
import { WhatsAppIcon } from "@/components/icons/LineIcons";
import { Container } from "@/components/ui/Container";
import { clinic } from "@/lib/data/bellasmile";
import { links } from "@/lib/data/links";

export function Footer() {
  return (
    <footer className="border-t-2 border-champagne bg-black text-white">
      <Container className="px-6 py-12 sm:px-8 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <BellaSmileLogo inverted className="mx-auto h-10 w-auto sm:h-11" />
          <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50">
            Del Valle, CDMX
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-10 border-y border-white/10 py-10 sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
              Dirección
            </p>
            <address className="not-italic text-xs leading-relaxed text-white/75">
              {clinic.address.street}
              <br />
              {clinic.address.neighborhood}
              <br />
              {clinic.address.municipality}
              <br />
              {clinic.address.zip} Ciudad de México
            </address>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
              Contacto
            </p>
            <a
              href={clinic.phoneTel}
              className="text-sm font-bold uppercase tracking-wide text-white hover:text-white/80"
            >
              {clinic.phone}
            </a>
            <a
              href={links.schedule}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar cita por WhatsApp"
              className="cta-interactive mt-4 flex flex-col items-center gap-2 text-white transition-colors hover:text-white/80"
            >
              <span className="inline-flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/25 bg-white/5 text-white">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-white/70">
                Agendar cita
              </span>
            </a>
          </div>

          <div className="flex flex-col items-center text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
              Horarios
            </p>
            <ul className="space-y-3 text-xs leading-relaxed text-white/75">
              {clinic.hours.map((slot) => (
                <li key={slot.days}>
                  <span className="block font-medium text-white/90">{slot.days}</span>
                  <span className="text-white/60">{slot.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 text-center">
          <a
            href={links.directions}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-interactive cta-shine cta-shine-soft inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white hover:bg-white hover:text-black"
          >
            <span className="relative z-[1]">Cómo llegar</span>
          </a>
          <p className="max-w-md text-xs leading-relaxed text-white/45">
            Consultorio dental en la Colonia del Valle. Ortodoncia con el Dr.
            Ricardo Mayo y la Dra. Montserrat.
          </p>
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/30">
            © {new Date().getFullYear()} RM SONRISAS. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
