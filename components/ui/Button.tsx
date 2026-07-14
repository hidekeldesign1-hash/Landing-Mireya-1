import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "gold" | "ghost";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  ariaLabel?: string;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest text-white hover:bg-forest-light border border-transparent",
  outline:
    "bg-white text-forest border border-forest hover:bg-forest hover:text-white",
  gold: "bg-forest text-white hover:bg-forest-light border border-transparent",
  ghost: "bg-transparent text-ink border border-transparent hover:bg-beige",
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
