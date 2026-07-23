"use client";

import { useCallback, useState, type ReactNode } from "react";
import { SplashScreen } from "@/components/SplashScreen";
import { ExperienceProvider } from "@/components/ExperienceGate";

type HomeExperienceProps = {
  children: ReactNode;
};

/**
 * Gatekeeper: landing stays mounted & painted under the opaque splash (no white flash).
 * On click, reveal immediately so entrance animations run as the splash dissolves.
 */
export function HomeExperience({ children }: HomeExperienceProps) {
  const [ready, setReady] = useState(false);
  const [splashMounted, setSplashMounted] = useState(true);

  const handleReveal = useCallback(() => {
    setReady(true);
    document.body.style.overflow = "";
  }, []);

  const handleComplete = useCallback(() => {
    setSplashMounted(false);
  }, []);

  return (
    <ExperienceProvider ready={ready}>
      {splashMounted ? (
        <SplashScreen onReveal={handleReveal} onComplete={handleComplete} />
      ) : null}
      <div
        aria-hidden={!ready}
        className={
          ready ? undefined : "pointer-events-none select-none overflow-hidden"
        }
        style={ready ? undefined : { height: "100dvh" }}
      >
        {children}
      </div>
    </ExperienceProvider>
  );
}
