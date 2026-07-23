import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Shared glassmorphism surface for cards / modules */
export const glassCardClass =
  "glass-card overflow-hidden rounded-3xl border border-white/30 bg-white/20 backdrop-blur-xl shadow-[0_16px_48px_-24px_rgba(0,0,0,0.12)]";

export const glassCardSoftClass =
  "glass-card-soft rounded-2xl border border-white/30 bg-white/15 backdrop-blur-md";

