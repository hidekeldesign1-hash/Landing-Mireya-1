"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";

export function Empathy() {
  return (
    <section className="relative z-10 bg-transparent px-4 pb-6 pt-0 md:px-8 md:pb-8">
      {/* Glow magenta continuo (detrás de la card, sin overflow scroll) */}
      <div
        className="pointer-events-none absolute -left-20 -top-24 z-0 h-[520px] w-[520px] rounded-full bg-pink-600/40 opacity-40 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[10%] -top-10 z-0 h-64 w-64 rounded-full bg-[#c4122f]/25 opacity-50 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/30 bg-white/20 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        {/* Pluma superior */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-white/25 via-white/5 to-transparent"
          aria-hidden
        />
        {/* Toque de magenta */}
        <div
          className="pointer-events-none absolute -left-16 -top-16 z-10 h-56 w-56 rounded-full bg-pink-600/20 blur-[80px]"
          aria-hidden
        />

        <MotionSection
          stagger
          className="relative z-[15] grid grid-cols-1 divide-y divide-gray-100/80 md:grid-cols-12 md:divide-x md:divide-y-0"
        >
          <MotionItem className="flex flex-col justify-between bg-transparent p-8 md:col-span-4 md:p-10 lg:p-12">
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
              <span aria-hidden>●</span>
              01 / EMPATÍA
            </span>
            <p className="mt-10 text-xs leading-relaxed text-gray-600 md:mt-16 md:text-sm">
              No estás sola. Tal vez el problema no sea falta de esfuerzo; tal
              vez tu piel está intentando comunicar algo más.
            </p>
          </MotionItem>

          <MotionItem className="bg-transparent p-8 md:col-span-8 md:p-10 lg:p-12">
            <p className="text-3xl font-black uppercase leading-[0.95] tracking-tighter text-black md:text-4xl lg:text-5xl">
              Has probado cremas, tratamientos y consejos. Has ocultado manchas,
              brotes o enrojecimiento. Has gastado tiempo y dinero esperando
              resultados que no duran.
            </p>
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
