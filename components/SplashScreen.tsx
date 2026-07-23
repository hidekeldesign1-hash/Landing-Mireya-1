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

const VIDEO_SRC = "/videos/dna-intro.mp4";
const FADE_MS = 1200;
const FADE_SEC = FADE_MS / 1000;

function sleep(ms: number) {
  return new Promise<void>((r) => window.setTimeout(r, ms));
}

function isMobileLike() {
  if (typeof window === "undefined") return true;
  const ua = navigator.userAgent || "";
  const iOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const android = /Android/i.test(ua);
  const coarse = window.matchMedia("(pointer: coarse)").matches;
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  return iOS || android || coarse || narrow;
}

function prepVideo(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.playsInline = true;
  el.autoplay = true;
  el.loop = true;
  el.setAttribute("muted", "");
  el.setAttribute("playsinline", "");
  el.setAttribute("webkit-playsinline", "true");
  el.setAttribute("x-webkit-airplay", "deny");
  el.disablePictureInPicture = true;
  el.preload = "auto";
}

async function playSafe(el: HTMLVideoElement | null) {
  if (!el) return;
  prepVideo(el);
  try {
    // iOS: seek 0 if stalled at end
    if (el.ended) el.currentTime = 0;
    await el.play();
  } catch {
    /* unlocked on first gesture */
  }
}

/**
 * Mobile / iOS / Android: one native looping <video> with a direct file URL.
 * Blob dual-buffers often render black on Safari iOS — this path avoids that.
 */
function MobileVideoLoop({
  src,
  playSignal,
}: {
  src: string;
  playSignal: number;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    prepVideo(el);
    void playSafe(el);

    const kick = () => void playSafe(el);
    el.addEventListener("loadeddata", kick);
    el.addEventListener("canplay", kick);
    el.addEventListener("suspend", kick);
    el.addEventListener("stalled", kick);

    // Soften the native loop seam with a brief opacity dip
    let last = 0;
    const onTime = () => {
      const d = el.duration;
      if (!Number.isFinite(d) || d < 2) return;
      const t = el.currentTime;
      if (t < last - 1) {
        // wrapped
        el.style.opacity = "0.55";
        window.setTimeout(() => {
          el.style.opacity = "0.85";
        }, 180);
      } else if (t >= d - 0.35) {
        el.style.opacity = "0.7";
      } else if (t > 0.5 && Number(el.style.opacity) < 0.85) {
        el.style.opacity = "0.85";
      }
      last = t;
    };
    el.addEventListener("timeupdate", onTime);

    const id = window.setInterval(() => {
      if (el.paused) void playSafe(el);
    }, 800);

    return () => {
      el.removeEventListener("loadeddata", kick);
      el.removeEventListener("canplay", kick);
      el.removeEventListener("suspend", kick);
      el.removeEventListener("stalled", kick);
      el.removeEventListener("timeupdate", onTime);
      window.clearInterval(id);
    };
  }, [src]);

  useEffect(() => {
    void playSafe(ref.current);
  }, [playSignal]);

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      style={{ opacity: 0.85 }}
      aria-hidden
    />
  );
}

/**
 * Desktop: dual direct-URL layers (no Blob fetch) with crossfade near the end.
 */
function DesktopSeamlessLoop({
  src,
  playSignal,
}: {
  src: string;
  playSignal: number;
}) {
  const aRef = useRef<HTMLVideoElement>(null);
  const bRef = useRef<HTMLVideoElement>(null);
  const activeIdx = useRef(0);
  const busy = useRef(false);
  const [opA, setOpA] = useState(1);
  const [opB, setOpB] = useState(0);

  useEffect(() => {
    const a = aRef.current;
    const b = bRef.current;
    if (!a || !b) return;

    const vids = [a, b];
    let cancelled = false;
    let poll = 0;

    prepVideo(a);
    prepVideo(b);
    a.loop = true;
    b.loop = true;

    const setOps = (active: number, blend = 1) => {
      if (active === 0) {
        setOpA(blend);
        setOpB(1 - blend);
      } else {
        setOpB(blend);
        setOpA(1 - blend);
      }
    };

    const swap = async () => {
      if (cancelled || busy.current) return;
      busy.current = true;
      const from = activeIdx.current;
      const to = 1 - from;
      const cur = vids[from];
      const next = vids[to];

      try {
        next.currentTime = 0;
        await playSafe(next);
        const start = performance.now();
        await new Promise<void>((resolve) => {
          const step = (now: number) => {
            if (cancelled) {
              resolve();
              return;
            }
            const t = Math.min(1, (now - start) / FADE_MS);
            const e = t * t * (3 - 2 * t);
            setOps(from, 1 - e);
            if (t < 1) requestAnimationFrame(step);
            else resolve();
          };
          requestAnimationFrame(step);
        });
        if (cancelled) return;
        cur.pause();
        cur.currentTime = 0;
        activeIdx.current = to;
        setOps(to, 1);
        await playSafe(next);
      } catch {
        activeIdx.current = from;
        setOps(from, 1);
        await playSafe(cur);
      } finally {
        busy.current = false;
      }
    };

    void (async () => {
      await playSafe(a);
      activeIdx.current = 0;
      setOps(0, 1);
      poll = window.setInterval(() => {
        if (cancelled || busy.current) return;
        const active = vids[activeIdx.current];
        if (active.paused) void playSafe(active);
        const d = active.duration;
        if (Number.isFinite(d) && d > 3 && active.currentTime >= d - FADE_SEC) {
          void swap();
        }
      }, 120);
    })();

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      a.pause();
      b.pause();
    };
  }, [src]);

  useEffect(() => {
    void playSafe(aRef.current);
    void playSafe(bRef.current);
  }, [playSignal]);

  const cls =
    "pointer-events-none absolute inset-0 h-full w-full object-cover";

  return (
    <>
      <video
        ref={aRef}
        src={`${src}?layer=a`}
        autoPlay
        muted
        playsInline
        preload="auto"
        className={cls}
        style={{ opacity: opA * 0.85 }}
        aria-hidden
      />
      <video
        ref={bRef}
        src={`${src}?layer=b`}
        muted
        playsInline
        preload="auto"
        className={cls}
        style={{ opacity: opB * 0.85 }}
        aria-hidden
      />
    </>
  );
}

function SplashVideo({ playSignal }: { playSignal: number }) {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    setMobile(isMobileLike());
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 bg-black" aria-hidden>
      {/* Fallback atmosphere so iOS never sits on pure black while decoding */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,#3a3a3e_0%,#111113_55%,#000_100%)]"
        aria-hidden
      />
      {mobile ? (
        <MobileVideoLoop src={VIDEO_SRC} playSignal={playSignal} />
      ) : (
        <DesktopSeamlessLoop src={VIDEO_SRC} playSignal={playSignal} />
      )}
    </div>
  );
}

export function SplashScreen({ onReveal, onComplete }: SplashScreenProps) {
  const reduceMotion = useReducedMotion();
  const [exiting, setExiting] = useState(false);
  const [playSignal, setPlaySignal] = useState(0);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, []);

  // Any touch/pointer on the splash unlocks autoplay policies (iOS/Safari)
  const nudgePlayback = useCallback(() => {
    setPlaySignal((n) => n + 1);
  }, []);

  const startExit = useCallback(() => {
    if (exiting) return;
    nudgePlayback();
    onReveal?.();
    setExiting(true);
  }, [exiting, onReveal, nudgePlayback]);

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
          onPointerDown={nudgePlayback}
          onClick={startExit}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              startExit();
            }
          }}
        >
          <SplashVideo playSignal={playSignal} />

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
