import { cn } from "@/lib/utils";

type IconCircleProps = {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

export function IconCircle({
  children,
  className,
  size = "md",
}: IconCircleProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-black/10 bg-beige text-ink",
        sizes[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
