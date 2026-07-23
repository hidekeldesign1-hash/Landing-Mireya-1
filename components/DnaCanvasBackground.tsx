"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

/**
 * Full-viewport biomedical particle mesh, fixed behind content.
 * Hexagonal/network links only — no DNA ladder helices.
 */
export function DnaCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    const nodes: Node[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = Math.max(window.innerHeight, document.documentElement.clientHeight);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      nodes.length = 0;
      const count = Math.min(90, Math.max(48, Math.floor((width * height) / 18000)));
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r: 1.2 + Math.random() * 1.8,
        });
      }
    }

    function drawNetwork() {
      const linkDist = Math.min(160, width * 0.14);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < -10) n.x = width + 10;
          if (n.x > width + 10) n.x = -10;
          if (n.y < -10) n.y = height + 10;
          if (n.y > height + 10) n.y = -10;
        }

        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x;
          const dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.28;
            ctx!.beginPath();
            ctx!.moveTo(n.x, n.y);
            ctx!.lineTo(m.x, m.y);
            ctx!.strokeStyle = `rgba(45, 45, 50, ${alpha})`;
            ctx!.lineWidth = 0.9;
            ctx!.stroke();
          }
        }

        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(40, 40, 45, 0.4)";
        ctx!.fill();
      }
    }

    function frame() {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);
      drawNetwork();

      if (!reduceMotion) {
        raf = requestAnimationFrame(frame);
      }
    }

    function onVisibility() {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else {
        running = true;
        raf = requestAnimationFrame(frame);
      }
    }

    resize();
    if (reduceMotion) {
      frame();
    } else {
      raf = requestAnimationFrame(frame);
    }

    window.addEventListener("resize", resize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-screen opacity-50"
    />
  );
}
