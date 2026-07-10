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
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineSteps } from "@/lib/data/timeline";

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
    <section className="border-y border-beige-dark/50 bg-beige py-14 sm:py-16">
      <Container>
        <MotionSection>
          <SectionHeading
            title="El camino hacia tu mejor versión"
            subtitle="Un recorrido emocional, no solo un embudo de compra."
          />
        </MotionSection>

        <MotionSection stagger className="relative mt-12">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gold/40 lg:block"
            aria-hidden
          />
          <ol className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-8">
            {timelineSteps.map((step, index) => {
              const Icon = icons[index % icons.length];
              return (
                <MotionItem key={step.id}>
                  <li className="flex flex-col items-center text-center">
                    <span className="relative z-10 mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 bg-cream text-gold shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs leading-snug text-muted sm:text-[13px]">
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
