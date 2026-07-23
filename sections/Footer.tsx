import {
  BookIcon,
  HeartIcon,
  InstagramIcon,
  SparkIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons/LineIcons";
import { DmLogo } from "@/components/brand/DmLogo";
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
    <footer className="border-t border-gray-200 bg-black text-white">
      <Container className="py-0">
        <div className="grid grid-cols-1 divide-y divide-white/10 border-x border-white/10 lg:grid-cols-12 lg:divide-x lg:divide-y-0">
          <div className="divide-y divide-white/10 lg:col-span-4">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <div key={title} className="flex items-start gap-3 px-6 py-5 sm:px-8">
                <span className="font-mono text-[9px] tracking-widest text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <p className="text-xs leading-relaxed">
                  <span className="font-bold uppercase tracking-wide text-white">
                    {title}
                  </span>{" "}
                  <span className="text-white/55">{text}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center px-6 py-12 text-center lg:col-span-4">
            <DmLogo inverted className="mx-auto h-10 w-auto sm:h-11" />
            <p className="mt-6 max-w-xs text-lg font-black uppercase leading-none tracking-tighter text-white">
              La piel no es el enemigo. Es el mensajero.
            </p>

            <div className="mt-8 flex items-center justify-center gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="cta-interactive cta-shine cta-shine-soft inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white hover:text-black"
                >
                  <Icon className="relative z-[1] h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center px-6 py-10 sm:px-8 lg:col-span-4 lg:items-end lg:text-right">
            <p className="max-w-sm text-xs leading-relaxed text-white/55 md:text-sm">
              Educamos antes de usar, sugerimos antes de comprar y acompañamos
              antes de intervenir. Porque comprender tu piel es el primer paso
              hacia el bienestar.
            </p>
            <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.18em] text-white/35">
              © {new Date().getFullYear()} DM Ceuticals. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
