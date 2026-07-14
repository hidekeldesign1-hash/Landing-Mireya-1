import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
  eyebrow,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-forest">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-sans text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl lg:text-[2.5rem]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
