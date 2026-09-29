"use client";

import { MotionItem, MotionSection } from "@/components/ui/Motion";

export function Empathy() {
  return (
    <section className="relative z-10 bg-transparent px-4 pb-8 pt-0 md:px-8 md:pb-10">
      <div
        className="pointer-events-none absolute -left-20 -top-24 z-0 h-[520px] w-[520px] rounded-full bg-[#5eb3d9]/25 opacity-50 blur-[140px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[10%] -top-10 z-0 h-64 w-64 rounded-full bg-[#2a7ab8]/20 opacity-50 blur-[100px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/30 bg-white/20 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.12)] backdrop-blur-xl">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-white/25 via-white/5 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-16 -top-16 z-10 h-56 w-56 rounded-full bg-[#5eb3d9]/15 blur-[80px]"
          aria-hidden
        />

        <MotionSection
          stagger
          className="relative z-[15] grid grid-cols-1 divide-y divide-gray-100/80 md:grid-cols-12 md:divide-x md:divide-y-0"
        >
          <MotionItem className="flex flex-col justify-center bg-transparent p-8 md:col-span-4 md:p-10 lg:p-12">
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              En RM SONRISAS te explicamos cada paso con claridad, desde la
              valoración hasta el plan de cuidado.
            </p>
          </MotionItem>

          <MotionItem className="bg-transparent p-8 md:col-span-8 md:p-10 lg:p-12">
            <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.95] tracking-tighter text-black md:text-4xl lg:text-5xl">
              Cuidar tu sonrisa no debería sentirse complicado.
            </h2>
            <span className="mt-5 block h-px w-12 bg-champagne" aria-hidden />
          </MotionItem>
        </MotionSection>
      </div>
    </section>
  );
}
