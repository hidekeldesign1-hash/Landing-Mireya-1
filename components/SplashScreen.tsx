"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DmLogo } from "@/components/brand/DmLogo";

type SplashScreenProps = {
  onReveal?: () => void;
  onComplete: () => void;
};

/**
 * iPhone Safari blocks autoplay / shows a giant ▶ when a parent has CSS
 * transform/filter (Framer Motion). Keep the video in a plain fixed layer,
 * force muted+playsInline, and hide native media controls.
 */
function AutoplayVideoLoop({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const kick = useCallback(() => {
    const el = videoRef.current;
    if (!el) return;

    el.defaultMuted = true;
    el.muted = true;
    el.volume = 0;
    el.autoplay = true;
    el.loop = true;
    el.playsInline = true;
    el.controls = false;
    el.removeAttribute("controls");
    el.setAttribute("muted", "");
    el.setAttribute("autoplay", "");
    el.setAttribute("loop", "");
    el.setAttribute("playsinline", "");
    el.setAttribute("webkit-playsinline", "true");
    el.setAttribute("x5-playsinline", "true");
    el.setAttribute("x5-video-player-type", "h5");
    el.setAttribute("x5-video-player-fullscreen", "false");
    el.setAttribute("controlslist", "nodownload nofullscreen noremoteplayback");
    el.disablePictureInPicture = true;

    const tryPlay = () => {
      const p = el.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();
  }, []);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    kick();

    const onReady = () => kick();
    const events = [
      "loadedmetadata",
      "loadeddata",
      "canplay",
      "canplaythrough",
      "suspend",
      "stalled",
    ] as const;
    events.forEach((evt) => el.addEventListener(evt, onReady));

    const delays = [0, 60, 200, 500, 1000, 2000, 4000].map((ms) =>
      window.setTimeout(kick, ms),
    );

    const watchId = window.setInterval(() => {
      if (el.paused) kick();
    }, 500);

    const onVis = () => {
      if (!document.hidden) kick();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pageshow", onVis);

    const unlock = () => kick();
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("touchend", unlock, { passive: true });
    window.addEventListener("pointerdown", unlock, { passive: true });

    return () => {
      events.forEach((evt) => el.removeEventListener(evt, onReady));
      delays.forEach(clearTimeout);
      window.clearInterval(watchId);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pageshow", onVis);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("touchend", unlock);
      window.removeEventListener("pointerdown", unlock);
      el.pause();
    };
  }, [kick, src]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black" aria-hidden>
      <video
        ref={videoRef}
        className="splash-video pointer-events-none absolute inset-0 h-full w-full object-cover opacity-85"
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        tabIndex={-1}
      />
    </div>
  );
}

export function SplashScreen({ onReveal, onComplete }: SplashScreenProps) {
  const reduceMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, []);

  // Exit zoom via WAAPI — applied only after click, so iOS autoplay is never blocked by transform
  useEffect(() => {
    if (!exiting || !rootRef.current) return;

    const node = rootRef.current;
    const duration = reduceMotion ? 350 : 1200;
    const easing = reduceMotion
      ? "ease-out"
      : "cubic-bezier(0.16, 1, 0.3, 1)";

    const anim = node.animate(
      reduceMotion
        ? [{ opacity: 1 }, { opacity: 0 }]
        : [
            { opacity: 1, transform: "scale(1)", filter: "blur(0px)" },
            { opacity: 0, transform: "scale(1.8)", filter: "blur(20px)" },
          ],
      { duration, easing, fill: "forwards" },
    );

    anim.onfinish = () => {
      document.body.style.overflow = "";
      onComplete();
    };

    return () => {
      anim.cancel();
    };
  }, [exiting, onComplete, reduceMotion]);

  const startExit = useCallback(() => {
    if (exiting) return;
    onReveal?.();
    setExiting(true);
  }, [exiting, onReveal]);

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label="Bienvenida DM Ceuticals"
      tabIndex={0}
      className="fixed inset-0 z-[100] h-[100dvh] w-screen touch-manipulation overflow-hidden bg-black"
      // No transform/filter here while playing — critical for iPhone autoplay
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/65"
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
    </div>
  );
}
