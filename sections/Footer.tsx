import { BookIcon, HeartIcon, LeafIcon, SparkIcon } from "@/components/icons/LineIcons";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: BookIcon,
    title: "Educamos",
    text: "antes de vender",
  },
  {
    icon: SparkIcon,
    title: "Sugerimos",
    text: "antes de presionar",
  },
  {
    icon: HeartIcon,
    title: "Acompañamos",
    text: "antes de intervenir",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-forest text-cream">
      <div
        className="pointer-events-none absolute -bottom-10 -right-6 text-gold/20"
        aria-hidden
      >
        <LeafIcon className="h-40 w-40 sm:h-52 sm:w-52" />
      </div>

      <Container className="relative grid gap-12 py-14 sm:py-16 lg:grid-cols-3 lg:gap-10 lg:py-20">
        <div className="space-y-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-medium text-cream">{title}</span>{" "}
                <span className="text-cream/70">{text}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-serif text-2xl tracking-wide sm:text-3xl">
            DM{" "}
            <span className="font-sans text-sm font-medium tracking-[0.3em]">
              CEUTICALS
            </span>
          </p>
          <p className="mt-4 max-w-xs font-serif text-lg leading-snug text-gold-light">
            La piel no es el enemigo. Es el mensajero.
          </p>
        </div>

        <div className="flex flex-col justify-center lg:items-end lg:text-right">
          <p className="max-w-sm text-sm leading-relaxed text-cream/75">
            Educamos antes de vender, sugerimos antes de presionar y acompañamos
            antes de intervenir. Porque comprender tu piel es el primer paso
            hacia el bienestar.
          </p>
          <p className="mt-8 text-xs tracking-wide text-cream/50">
            © {new Date().getFullYear()} DM Ceuticals. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
