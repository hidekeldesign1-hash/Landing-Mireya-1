"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { CartIcon, CloseIcon, MenuIcon } from "@/components/icons/LineIcons";
import { links } from "@/lib/data/links";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#sintomas", label: "Síntomas" },
  { href: "#caminos", label: "Caminos" },
  { href: "#sistemas", label: "Sistemas" },
  { href: "#consulta", label: "Consulta" },
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
          ? "border-b border-beige-dark/60 bg-cream/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="#inicio"
          className="flex items-center gap-2 font-sans text-ink"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center bg-forest text-xs font-bold tracking-wide text-white">
            DM
          </span>
          <span className="text-sm font-semibold tracking-[0.18em]">CEUTICALS</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:text-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={links.shopify}
            className="p-2 text-ink transition-colors hover:bg-beige hover:text-forest"
            aria-label="Ir a la tienda"
          >
            <CartIcon className="h-5 w-5" />
          </Link>
          <Button href={links.startNow} className="px-5 py-2.5">
            Empezar ahora
          </Button>
        </div>

        <button
          type="button"
          className="rounded-full p-2 text-forest lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-beige-dark/60 bg-cream lg:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium uppercase tracking-[0.14em] text-ink"
                >
                  {link.label}
                </Link>
              ))}
              <Button href={links.startNow} onClick={() => setOpen(false)} className="mt-2 w-full">
                Empezar ahora
              </Button>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
