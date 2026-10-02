"use client";

import { useEffect, useRef } from "react";

type ShapeKind = "star" | "heart" | "cloud" | "circle" | "blob";

type Shape = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rot: number;
  spin: number;
  kind: ShapeKind;
  color: string;
};

const COLORS = ["#e21878", "#2aa8dc", "#2ad4a2", "#ffc430", "#ff7a3c", "#8b5cf6"];
const KINDS: ShapeKind[] = ["star", "heart", "cloud", "circle", "blob"];

function drawStar(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  for (let i = 0; i < 5; i++) {
    const outer = (Math.PI / 2) * -1 + (i * 2 * Math.PI) / 5;
    const inner = outer + Math.PI / 5;
    ctx.lineTo(Math.cos(outer) * r, Math.sin(outer) * r);
    ctx.lineTo(Math.cos(inner) * r * 0.42, Math.sin(inner) * r * 0.42);
  }
  ctx.closePath();
}

function drawHeart(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.moveTo(0, r * 0.35);
  ctx.bezierCurveTo(-r, -r * 0.35, -r * 0.35, -r, 0, -r * 0.35);
  ctx.bezierCurveTo(r * 0.35, -r, r, -r * 0.35, 0, r * 0.35);
  ctx.closePath();
}

function drawCloud(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.arc(-r * 0.35, r * 0.1, r * 0.38, 0, Math.PI * 2);
  ctx.arc(0, -r * 0.12, r * 0.48, 0, Math.PI * 2);
  ctx.arc(r * 0.38, r * 0.08, r * 0.34, 0, Math.PI * 2);
  ctx.rect(-r * 0.55, r * 0.05, r * 1.15, r * 0.42);
  ctx.closePath();
}

function drawBlob(ctx: CanvasRenderingContext2D, r: number) {
  ctx.beginPath();
  ctx.moveTo(0, -r);
  ctx.bezierCurveTo(r, -r * 0.4, r * 0.9, r * 0.5, 0, r);
  ctx.bezierCurveTo(-r * 1.1, r * 0.4, -r * 0.7, -r * 0.2, 0, -r);
  ctx.closePath();
}

/**
 * Formas infantiles flotando detrás del contenido.
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
    const shapes: Shape[] = [];

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = Math.max(window.innerHeight, document.documentElement.clientHeight);
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      shapes.length = 0;
      const count = Math.min(22, Math.max(12, Math.floor(width / 90)));
      for (let i = 0; i < count; i++) {
        shapes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: -0.12 - Math.random() * 0.22,
          size: 18 + Math.random() * 36,
          rot: Math.random() * Math.PI * 2,
          spin: (Math.random() - 0.5) * 0.004,
          kind: KINDS[i % KINDS.length],
          color: COLORS[i % COLORS.length],
        });
      }
    }

    function paint(shape: Shape) {
      ctx!.save();
      ctx!.translate(shape.x, shape.y);
      ctx!.rotate(shape.rot);
      ctx!.fillStyle = shape.color;
      ctx!.globalAlpha = 0.42;
      if (shape.kind === "star") drawStar(ctx!, shape.size);
      else if (shape.kind === "heart") drawHeart(ctx!, shape.size);
      else if (shape.kind === "cloud") drawCloud(ctx!, shape.size);
      else if (shape.kind === "blob") drawBlob(ctx!, shape.size);
      else {
        ctx!.beginPath();
        ctx!.arc(0, 0, shape.size * 0.72, 0, Math.PI * 2);
      }
      ctx!.fill();
      ctx!.restore();
    }

    function frame() {
      if (!running) return;
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalAlpha = 1;

      for (const shape of shapes) {
        if (!reduceMotion) {
          shape.x += shape.vx;
          shape.y += shape.vy;
          shape.rot += shape.spin;
          if (shape.y < -80) shape.y = height + 60;
          if (shape.x < -80) shape.x = width + 60;
          if (shape.x > width + 80) shape.x = -60;
        }
        paint(shape);
      }

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
      className="pointer-events-none fixed inset-0 z-[1] h-[100dvh] w-screen"
    />
  );
}
