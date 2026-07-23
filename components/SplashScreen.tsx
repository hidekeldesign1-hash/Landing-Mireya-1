"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { DmLogo } from "@/components/brand/DmLogo";

type SplashScreenProps = {
  onReveal?: () => void;
  onComplete: () => void;
};

/**
 * Safari iOS paints a giant ▶ on <video> when autoplay is deferred.
 * Fix: keep a real muted looping <video> for decoding, but draw frames to a
 * full-screen <canvas> on top so the native play control is never visible.
 */
function CanvasVideoLoop({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const kickPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.volume = 0;
    video.autoplay = true;
    video.loop = true;
    video.playsInline = true;
    video.controls = false;
    video.removeAttribute("controls");
    video.setAttribute("muted", "");
    video.setAttribute("autoplay", "");
    video.setAttribute("loop", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");
    video.setAttribute("x5-playsinline", "true");

    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let running = true;
    let w = 0;
    let h = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      if (!running) return;

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);

      if (video.readyState >= 2 && video.videoWidth > 0) {
        const vw = video.videoWidth;
        const vh = video.videoHeight;
        const scale = Math.max(w / vw, h / vh);
        const dw = vw * scale;
        const dh = vh * scale;
        const dx = (w - dw) / 2;
        const dy = (h - dh) / 2;
        ctx.globalAlpha = 0.85;
        ctx.drawImage(video, dx, dy, dw, dh);
        ctx.globalAlpha = 1;
      }

      raf = requestAnimationFrame(draw);
    };

    const onReady = () => kickPlay();
    ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"].forEach(
      (evt) => video.addEventListener(evt, onReady),
    );

    resize();
    kickPlay();
    raf = requestAnimationFrame(draw);

    const delays = [0, 80, 250, 600, 1200, 2500].map((ms) =>
      window.setTimeout(kickPlay, ms),
    );
    const watchId = window.setInterval(() => {
      if (video.paused) kickPlay();
    }, 700);

    const onVis = () => {
      if (!document.hidden) kickPlay();
    };
    const onResize = () => resize();

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("pageshow", onVis);
    // Any gesture unlocks autoplay on strict Safari / Low Power Mode
    window.addEventListener("touchstart", kickPlay, { passive: true });
    window.addEventListener("pointerdown", kickPlay, { passive: true });

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      delays.forEach(clearTimeout);
      window.clearInterval(watchId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pageshow", onVis);
      window.removeEventListener("touchstart", kickPlay);
      window.removeEventListener("pointerdown", kickPlay);
      ["loadedmetadata", "loadeddata", "canplay", "canplaythrough"].forEach(
        (evt) => video.removeEventListener(evt, onReady),
      );
      video.pause();
    };
  }, [kickPlay, src]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-black" aria-hidden>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
      />
      <video
        ref={videoRef}
        className="splash-video-source"
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
        aria-hidden
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
      onClick={startExit}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          startExit();
        }
      }}
    >
      <CanvasVideoLoop src="/videos/dna-intro.mp4" />

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
