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
    "bg-forest text-cream hover:bg-forest-light border border-transparent shadow-sm",
  outline:
    "bg-transparent text-forest border border-forest hover:bg-forest hover:text-cream",
  gold: "bg-gold text-forest hover:bg-gold-light border border-transparent shadow-sm",
  ghost: "bg-transparent text-forest border border-transparent hover:bg-beige",
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
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
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
