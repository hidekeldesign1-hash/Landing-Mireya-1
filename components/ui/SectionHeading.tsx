import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
  index?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  className,
  eyebrow,
  index,
}: SectionHeadingProps) {
  const label = [index, eyebrow?.toUpperCase()].filter(Boolean).join(" / ");

  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {(eyebrow || index) && (
        <span
          className={cn(
            "mb-5 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-gray-500",
            align === "center" && "justify-center",
          )}
        >
          <span aria-hidden>●</span>
          {label}
        </span>
      )}
      <h2 className="text-4xl font-black uppercase leading-none tracking-tighter text-black md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 max-w-xl text-xs leading-relaxed text-gray-600 md:text-sm">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
