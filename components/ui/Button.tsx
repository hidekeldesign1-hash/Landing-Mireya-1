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
  showArrow?: boolean;
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-800 border border-black",
  outline:
    "bg-white text-black border border-gray-200 hover:border-black hover:bg-gray-50",
  gold: "bg-black text-white hover:bg-gray-800 border border-black",
  ghost: "bg-transparent text-black border border-transparent hover:bg-gray-50",
};

function ArrowCircle({ light }: { light?: boolean }) {
  return (
    <span
      className={cn(
        "relative z-[1] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] leading-none",
        light ? "bg-white text-black" : "bg-black text-white",
      )}
      aria-hidden
    >
      ↗
    </span>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button",
  ariaLabel,
  showArrow = true,
}: ButtonProps) {
  const classes = cn(
    "cta-interactive cta-shine inline-flex items-center justify-center gap-3 rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.12em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
    variants[variant],
    className,
  );

  const content = (
    <>
      <span className="relative z-[1]">{children}</span>
      {showArrow ? (
        <ArrowCircle light={variant === "primary" || variant === "gold"} />
      ) : null}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          aria-label={ariaLabel}
          onClick={onClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel}>
      {content}
    </button>
  );
}
