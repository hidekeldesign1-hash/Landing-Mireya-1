import { cn } from "@/lib/utils";

type IconCircleProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-14 w-14",
  lg: "h-16 w-16",
};

export function IconCircle({
  children,
  className,
  size = "md",
}: IconCircleProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-gold/40 bg-cream text-gold",
        sizes[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
