import { cn } from "@/lib/utils";

type DmLogoProps = {
  className?: string;
  /** White mark for dark backgrounds */
  inverted?: boolean;
  title?: string;
};

/** Official DM Ceuticals logo — SVG, transparent background, currentColor. */
export function DmLogo({
  className,
  inverted = false,
  title = "DM Ceuticals",
}: DmLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 340 100"
      fill="none"
      role="img"
      aria-label={title}
      className={cn(
        "h-8 w-auto shrink-0 text-black sm:h-9",
        inverted && "text-white",
        className,
      )}
    >
      <title>{title}</title>
      <path fill="currentColor" d="M0 0h42v16H16v68h26v16H0V0Z" />
      <rect x="42" y="47" width="268" height="5" fill="currentColor" />
      <text
        x="56"
        y="36"
        fill="currentColor"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        DM
      </text>
      <text
        x="56"
        y="84"
        fill="currentColor"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="20"
        fontWeight="400"
        letterSpacing="0.32em"
      >
        CEUTICALS
      </text>
    </svg>
  );
}
