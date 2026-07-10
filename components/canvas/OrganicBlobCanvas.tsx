"use client";

/**
 * Reserved high-performance canvas slot for advanced organic visuals.
 * Currently unused in favor of lightweight CSS/SVG shapes to protect LCP.
 * Wire this component when image sequences or particle effects are needed.
 */
export function OrganicBlobCanvas({ className }: { className?: string }) {
  return (
    <canvas
      className={className}
      aria-hidden
      width={1}
      height={1}
      data-canvas-reserved="organic-blob"
    />
  );
}
