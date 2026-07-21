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

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.17c-.24.68-1.4 1.25-1.93 1.33-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.26-4.79-4.2-4.94-4.39-.14-.19-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37h.57c.18 0 .42-.07.66.5.24.58.82 2 .89 2.15.07.15.12.32.02.52-.1.19-.15.32-.3.49-.15.17-.31.38-.45.51-.15.14-.3.29-.13.57.17.28.76 1.25 1.63 2.03 1.12 1 2.07 1.31 2.36 1.46.29.15.46.12.63-.07.17-.19.73-.85.93-1.14.2-.29.39-.24.66-.14.27.1 1.71.81 2 .95.29.15.49.22.56.34.07.12.07.71-.17 1.39z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={base(className)} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("h-5 w-5", className)} aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .55.04.81.1v-3.5a6.37 6.37 0 0 0-.81-.05A6.34 6.34 0 0 0 3.15 15.34 6.34 6.34 0 0 0 9.49 21.7a6.34 6.34 0 0 0 6.34-6.34V8.73a8.2 8.2 0 0 0 4.76 1.52V6.84a4.85 4.85 0 0 1-1-.15z" />
    </svg>
  );
}
