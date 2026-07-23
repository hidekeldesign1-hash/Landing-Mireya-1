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

const FADE_MS = 1200;
const FADE_SEC = FADE_MS / 1000;

function sleep(ms: number) {
  return new Promise<void>((r) => window.setTimeout(r, ms));
}

/**
 * Seamless DNA loop that cannot freeze:
 * - Two independent Blob URLs (avoids same-src decoder bugs)
 * - Crossfade handoff near the end
 * - Both layers keep `loop=true` as a hard safety net
 * - Watchdog restarts playback if time stalls
 */
function SeamlessVideoLoop({ src }: { src: string }) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let cancelled = false;
    let urlA = "";
    let urlB = "";
    let pollId = 0;
    let watchdogId = 0;
    let swapping = false;
    let lastTime = 0;
    let stallChecks = 0;

    const v1 = document.createElement("video");
    const v2 = document.createElement("video");
    let active = v1;
    let standby = v2;

    const styleVideo = (v: HTMLVideoElement, visible: boolean) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      v.preload = "auto";
      // Safety: native loop so a missed handoff never freezes on the last frame
      v.loop = true;
      v.disablePictureInPicture = true;
      v.style.cssText = [
        "position:absolute",
        "inset:0",
        "width:100%",
        "height:100%",
        "object-fit:cover",
        "pointer-events:none",
        `opacity:${visible ? 1 : 0}`,
        "transition:none",
      ].join(";");
    };

    const play = async (v: HTMLVideoElement) => {
      v.muted = true;
      try {
        await v.play();
      } catch {
        /* autoplay may unlock on splash tap */
      }
    };

    const waitReady = (v: HTMLVideoElement) =>
      new Promise<void>((resolve) => {
        if (v.readyState >= 2) {
          resolve();
          return;
        }
        const done = () => {
          v.removeEventListener("canplay", done);
          resolve();
        };
        v.addEventListener("canplay", done);
        window.setTimeout(done, 8000);
      });

    const swap = async () => {
      if (cancelled || swapping) return;
      swapping = true;

      try {
        // Rewind standby and start it under the fade
        standby.pause();
        standby.currentTime = 0;
        await play(standby);
        // If still not running, one more try after a tick
        if (standby.paused) {
          await sleep(50);
          standby.currentTime = 0;
          await play(standby);
        }

        standby.style.transition = `opacity ${FADE_MS}ms linear`;
        active.style.transition = `opacity ${FADE_MS}ms linear`;
        // Force reflow so the transition applies
        void standby.offsetHeight;
        standby.style.opacity = "1";
        active.style.opacity = "0";

        await sleep(FADE_MS);
        if (cancelled) return;

        active.style.transition = "none";
        standby.style.transition = "none";
        active.pause();
        active.currentTime = 0;

        const prev = active;
        active = standby;
        standby = prev;

        active.style.opacity = "1";
        standby.style.opacity = "0";
        await play(active);
        lastTime = active.currentTime;
        stallChecks = 0;
      } catch {
        // Absolute fallback: keep whichever layer is visible looping
        active.loop = true;
        active.style.transition = "none";
        standby.style.transition = "none";
        active.style.opacity = "1";
        standby.style.opacity = "0";
        standby.pause();
        if (active.paused || active.ended) {
          active.currentTime = 0;
          await play(active);
        }
      } finally {
        swapping = false;
      }
    };

    const boot = async () => {
      const res = await fetch(src, { cache: "force-cache" });
      const buffer = await res.arrayBuffer();
      // Two separate blobs → two independent media pipelines
      urlA = URL.createObjectURL(new Blob([buffer], { type: "video/mp4" }));
      urlB = URL.createObjectURL(
        new Blob([buffer.slice(0)], { type: "video/mp4" }),
      );

      if (cancelled) return;

      styleVideo(v1, true);
      styleVideo(v2, false);
      v1.src = urlA;
      v2.src = urlB;
      host.replaceChildren(v1, v2);

      await Promise.all([waitReady(v1), waitReady(v2)]);
      if (cancelled) return;

      await play(v1);
      active = v1;
      standby = v2;
      lastTime = v1.currentTime;

      // Handoff poll
      pollId = window.setInterval(() => {
        if (cancelled || swapping) return;
        const d = active.duration;
        if (!Number.isFinite(d) || d < 3) return;
        // Start blend before the native loop point
        if (active.currentTime >= d - FADE_SEC - 0.05) {
          void swap();
        }
      }, 100);

      // Stall watchdog — if time doesn't advance, force play / rewind
      watchdogId = window.setInterval(() => {
        if (cancelled || swapping) return;
        const t = active.currentTime;
        const d = active.duration;
        // Near the seam the clock can briefly pause — don't fight the crossfade
        if (Number.isFinite(d) && t >= d - FADE_SEC - 0.15) {
          lastTime = t;
          stallChecks = 0;
          return;
        }
        if (active.paused) {
          void play(active);
          return;
        }
        if (Math.abs(t - lastTime) < 0.01) {
          stallChecks += 1;
          if (stallChecks >= 8) {
            // ~1.6s stalled → hard recover (loop safety also covers this)
            stallChecks = 0;
            try {
              active.currentTime = 0;
            } catch {
              /* ignore */
            }
            void play(active);
          }
        } else {
          stallChecks = 0;
          lastTime = t;
        }
      }, 200);
    };

    void boot();

    const onVis = () => {
      if (!document.hidden && !cancelled) void play(active);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelled = true;
      window.clearInterval(pollId);
      window.clearInterval(watchdogId);
      document.removeEventListener("visibilitychange", onVis);
      v1.pause();
      v2.pause();
      v1.removeAttribute("src");
      v2.removeAttribute("src");
      v1.load();
      v2.load();
      if (urlA) URL.revokeObjectURL(urlA);
      if (urlB) URL.revokeObjectURL(urlB);
      host.replaceChildren();
    };
  }, [src]);

  return (
    <div
      ref={hostRef}
      className="pointer-events-none absolute inset-0 bg-black opacity-80"
      aria-hidden
    />
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
          <SeamlessVideoLoop src="/videos/dna-intro.mp4" />

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
