import { cn } from "@/lib/utils";

type BellaSmileLogoProps = {
  className?: string;
  inverted?: boolean;
  title?: string;
};

export function BellaSmileLogo({
  className,
  inverted = false,
  title = "BellaSmile Clínica Dental",
}: BellaSmileLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 248 72"
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
        x="124"
        y="34"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="0.04em"
      >
        BellaSmile
      </text>
      <text
        x="124"
        y="58"
        fill="currentColor"
        textAnchor="middle"
        fontFamily="var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif"
        fontSize="11"
        fontWeight="500"
        letterSpacing="0.28em"
      >
        CLÍNICA DENTAL
      </text>
    </svg>
  );
}
