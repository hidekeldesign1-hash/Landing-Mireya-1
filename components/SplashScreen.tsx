"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { DmLogo } from "@/components/brand/DmLogo";
import { PREMIUM_EASE } from "@/lib/animations";

type SplashScreenProps = {
  /** Fires on click — reveal landing + start entrance motions under the exiting splash. */
  onReveal?: () => void;
  onComplete: () => void;
};

/**
 * Single native <video> — the reliable path for iPhone Safari, Android Chrome,
 * Samsung Internet, and desktop. Muted + playsInline + loop = autoplay without
 * a play button. No Blob URLs / createElement (those black-screen on iOS).
 */
function AutoplayVideoLoop({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const kick = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;
    el.defaultMuted = true;
    el.muted = true;
    el.volume = 0;
    el.playsInline = true;
    el.loop = true;
    el.setAttribute("playsinline", "true");
    el.setAttribute("webkit-playsinline", "true");
    el.setAttribute("x5-playsinline", "true");
    const playPromise = el.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        /* Watchdog retries — never surface a play control */
      });
    }
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    const onReady = () => kick();
    const events = [
      "loadedmetadata",
      "loadeddata",
      "canplay",
      "canplaythrough",
      "playing",
    ] as const;
    events.forEach((evt) => el.addEventListener(evt, onReady));

    kick();
    const delays = [0, 50, 120, 300, 800, 1600, 3000].map((ms) =>
      window.setTimeout(kick, ms),
    );
    const watchId = window.setInterval(() => {
      if (el.paused || el.ended) {
        try {
          if (el.ended) el.currentTime = 0;
        } catch {
          /* ignore */
        }
        kick();
      }
    }, 600);

    const onVis = () => {
      if (!document.hidden) kick();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pageshow", onVis);

    // Silent unlock on first gesture (still no play button)
    const unlock = () => kick();
    const gestureEvents = ["touchstart", "pointerdown"] as const;
    gestureEvents.forEach((evt) =>
      window.addEventListener(evt, unlock, { passive: true, once: true }),
    );

    return () => {
      events.forEach((evt) => el.removeEventListener(evt, onReady));
      delays.forEach(clearTimeout);
      window.clearInterval(watchId);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pageshow", onVis);
      gestureEvents.forEach((evt) =>
        window.removeEventListener(evt, unlock),
      );
      el.pause();
    };
  }, [kick, src]);

  return (
    <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden>
      <video
        ref={videoRef}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-85"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        // @ts-expect-error legacy iOS / Android WebView autoplay attrs
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="false"
      />
    </div>
  );
}

export function SplashScreen({ onReveal, onComplete }: SplashScreenProps) {
  const reduceMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, []);

  const startExit = useCallback(() => {
    if (exiting) return;
    onReveal?.();
    setExiting(true);
  }, [exiting, onReveal]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "";
        onComplete();
      }}
    >
      {!exiting ? (
        <motion.div
          key="splash"
          role="dialog"
          aria-modal="true"
          aria-label="Bienvenida DM Ceuticals"
          tabIndex={0}
          className="fixed inset-0 z-[100] h-[100dvh] w-screen touch-manipulation overflow-hidden bg-black"
          initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={
            reduceMotion
              ? { opacity: 0, transition: { duration: 0.35, ease: PREMIUM_EASE } }
              : {
                  scale: 1.8,
                  opacity: 0,
                  filter: "blur(20px)",
                  transition: { duration: 1.2, ease: PREMIUM_EASE },
                }
          }
          onClick={startExit}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              startExit();
            }
          }}
        >
          <AutoplayVideoLoop src="/videos/dna-intro.mp4" />

          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"
            aria-hidden
          />

          <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center sm:px-8">
            <motion.div
              className="mb-6 sm:mb-8"
              animate={
                reduceMotion
                  ? undefined
                  : { scale: [1, 1.05, 1], opacity: [0.9, 1, 0.9] }
              }
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <DmLogo
                inverted
                className="h-11 w-auto drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:h-14 md:h-16"
              />
            </motion.div>

            <p className="mx-auto mb-8 max-w-[22rem] text-sm font-medium leading-relaxed tracking-wide text-white/85 sm:mb-10 sm:max-w-md sm:text-base md:text-lg">
              Descubre lo que tu piel intenta comunicar.
            </p>

            <button
              type="button"
              className="cta-interactive cta-shine cta-shine-soft inline-flex max-w-[min(100%,22rem)] items-center justify-center gap-2.5 rounded-full border border-white/50 bg-white/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_0_40px_rgba(255,255,255,0.18)] backdrop-blur-md transition-shadow hover:bg-white/40 hover:shadow-[0_0_48px_rgba(255,255,255,0.3)] active:scale-[0.98] sm:max-w-none sm:gap-3 sm:px-7 sm:py-3.5 sm:text-xs sm:tracking-[0.14em]"
              onClick={(e) => {
                e.stopPropagation();
                startExit();
              }}
            >
              <span className="relative z-[1] text-center leading-snug">
                Descubre ahora
              </span>
              <span
                className="relative z-[1] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black text-[11px] text-white sm:h-7 sm:w-7"
                aria-hidden
              >
                ↗
              </span>
            </button>

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-white/45 sm:mt-8">
              Toca para entrar
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
