import { cn } from "@/lib/utils";

type BellaSmileLogoProps = {
  className?: string;
  inverted?: boolean;
  title?: string;
};

export function BellaSmileLogo({
  className,
  inverted = false,
  title = "RM SONRISAS Consultorio",
}: BellaSmileLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 72"
      fill="none"
      role="img"
      aria-label={title}
      className={cn(
        "block h-8 w-auto shrink-0 text-black sm:h-9",
        inverted && "text-white",
        className,
      )}
    >
      <title>{title}</title>
      <text
        x="150"
        y="34"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="22"
        fontWeight="700"
        letterSpacing="0.06em"
      >
        RM SONRISAS
      </text>
      <line
        x1="108"
        y1="44"
        x2="192"
        y2="44"
        stroke="#c4a36a"
        strokeWidth="2"
      />
      <text
        x="150"
        y="58"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.22em"
      >
        CONSULTORIO
      </text>
    </svg>
  );
}
