"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BellaSmileLogo } from "@/components/brand/BellaSmileLogo";
import { CloseIcon, MenuIcon } from "@/components/icons/LineIcons";
import { links } from "@/lib/data/links";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sonrisa", label: "Sonrisa" },
  { href: "#equipo", label: "Equipo" },
  { href: "#caminos", label: "Accesos" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-gray-200 bg-white/90 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4 lg:h-16">
        <Link href="#inicio" className="inline-flex items-center" aria-label="BellaSmile">
          <BellaSmileLogo className="h-7 w-auto sm:h-8" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.18em] text-gray-500 transition-colors hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={links.phoneWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-[0.16em] text-gray-500 transition-colors hover:text-black"
          >
            WhatsApp
          </Link>
          <Button href={links.schedule} className="px-4 py-2 text-[10px]">
            Agendar cita
          </Button>
        </div>

        <button
          type="button"
          className="cta-interactive cta-shine cta-shine-soft flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-gray-200 p-2 text-black lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <span className="relative z-[1] inline-flex">
            {open ? <CloseIcon /> : <MenuIcon />}
          </span>
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-gray-200 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-xs uppercase tracking-[0.16em] text-black"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href={links.schedule}
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
              >
                Agendar cita
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
