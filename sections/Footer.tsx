import {
  BookIcon,
  HeartIcon,
  InstagramIcon,
  LeafIcon,
  SparkIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons/LineIcons";
import { Container } from "@/components/ui/Container";

const pillars = [
  {
    icon: BookIcon,
    title: "Educamos",
    text: "antes de usar",
  },
  {
    icon: SparkIcon,
    title: "Sugerimos",
    text: "antes de comprar",
  },
  {
    icon: HeartIcon,
    title: "Acompañamos",
    text: "antes de intervenir",
  },
];

const socialLinks = [
  {
    href: "https://wa.me/5215561174386",
    label: "WhatsApp",
    icon: WhatsAppIcon,
  },
  {
    href: "https://www.instagram.com/dmceuticals?utm_source=qr&igsh=dG54aG5xaTlsNnI4",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://www.tiktok.com/@mireyadiazfe?_r=1&_t=ZS-97oz3RvW0Av",
    label: "TikTok",
    icon: TikTokIcon,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute -bottom-10 -right-6 text-forest/30"
        aria-hidden
      >
        <LeafIcon className="h-40 w-40 sm:h-52 sm:w-52" />
      </div>

      <Container className="relative grid gap-12 py-14 sm:py-16 lg:grid-cols-3 lg:gap-10 lg:py-20">
        <div className="space-y-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-forest/50 text-forest">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-sm leading-relaxed">
                <span className="font-semibold text-white">{title}</span>{" "}
                <span className="text-white/70">{text}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <p className="flex items-center gap-2 font-sans tracking-wide">
            <span className="inline-flex h-9 w-9 items-center justify-center bg-forest text-xs font-bold text-white">
              DM
            </span>
            <span className="text-sm font-semibold tracking-[0.28em]">
              CEUTICALS
            </span>
          </p>
          <p className="mt-4 max-w-xs font-sans text-lg font-semibold leading-snug text-forest-light">
            La piel no es el enemigo. Es el mensajero.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/50 text-forest transition-colors hover:bg-forest hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center lg:items-end lg:text-right">
          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            Educamos antes de usar, sugerimos antes de comprar y acompañamos
            antes de intervenir. Porque comprender tu piel es el primer paso
            hacia el bienestar.
          </p>

          <p className="mt-8 text-xs tracking-wide text-white/50">
            © {new Date().getFullYear()} DM Ceuticals. Todos los derechos
            reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
