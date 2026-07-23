"use client";

import {
  BookIcon,
  CheckIcon,
  ClipboardIcon,
  FaceIcon,
  HeartIcon,
  LeafIcon,
  SparkIcon,
  UserIcon,
} from "@/components/icons/LineIcons";
import { Container } from "@/components/ui/Container";
import { MotionItem, MotionSection } from "@/components/ui/Motion";
import { timelineSteps } from "@/lib/data/timeline";
import { cn, glassCardClass } from "@/lib/utils";

const icons = [
  FaceIcon,
  BookIcon,
  ClipboardIcon,
  UserIcon,
  LeafIcon,
  SparkIcon,
  HeartIcon,
  CheckIcon,
];

export function JourneyTimeline() {
  return (
    <section className="relative bg-transparent px-4 py-6 md:px-8 md:py-8">
      <Container className={cn(glassCardClass, "py-0")}>
        <MotionSection className="px-6 py-10 sm:px-8 lg:px-10 lg:py-14">
          <span className="mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500">
            <span aria-hidden>●</span>
            07 / JOURNEY
          </span>
          <h2 className="max-w-4xl text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
            El camino hacia tu mejor versión
          </h2>
        </MotionSection>

        <MotionSection stagger className="border-t border-white/25 bg-white/5">
          <ol className="grid grid-cols-2 divide-x divide-white/20 divide-y sm:grid-cols-4 lg:grid-cols-8">
            {timelineSteps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <MotionItem key={step.id}>
                  <li className="flex flex-col items-center px-3 py-8 text-center">
                    <span className="mb-3 font-mono text-[9px] tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-white/20 text-black backdrop-blur-md">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[10px] font-medium uppercase leading-snug tracking-wide text-gray-600 sm:text-[11px]">
                      {step.label}
                    </span>
                  </li>
                </MotionItem>
              );
            })}
          </ol>
        </MotionSection>
      </Container>
    </section>
  );
}
