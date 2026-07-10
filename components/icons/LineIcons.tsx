import { cn } from "@/lib/utils";

type IconProps = {
  className?: string;
};

function base(className?: string) {
  return cn("h-6 w-6 stroke-current", className);
}

export function BottleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M9 3h6M10 3v3.5L8 9v11a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9l-2-2.5V3"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FaceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
      <path d="M9 14c.8 1 2 1.5 3 1.5s2.2-.5 3-1.5" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="9.5" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="10.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MoneyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <rect x="3" y="6" width="18" height="12" rx="2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.5" strokeWidth="1.5" />
      <path d="M7 12h.01M17 12h.01" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
      <path d="M12 8v4l2.5 2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M4 5h2l2.2 10.2a1 1 0 0 0 1 .8h8.3a1 1 0 0 0 1-.8L20 8H7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1" fill="currentColor" stroke="none" />
      <circle cx="17" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M5 12.5 9.5 17 19 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <rect x="4" y="5" width="16" height="15" rx="2" strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4M4 10h16" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <rect x="6" y="4" width="12" height="16" rx="2" strokeWidth="1.5" />
      <path d="M9 4.5h6v2H9z" strokeWidth="1.5" />
      <path d="M9 11h6M9 15h4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <circle cx="12" cy="9" r="3.5" strokeWidth="1.5" />
      <path
        d="M6 19c1.5-3 4-4.5 6-4.5s4.5 1.5 6 4.5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function BookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 5.5V21.5" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14z"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 19c3-3 6-6 9-9" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path d="M6 6l12 12M18 6 6 18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path d="M15 6 9 12l6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path d="m9 6 6 6-6 6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <path
        d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
