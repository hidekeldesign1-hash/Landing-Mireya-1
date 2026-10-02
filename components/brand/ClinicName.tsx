import { cn } from "@/lib/utils";

type ClinicNameProps = {
  inverted?: boolean;
  className?: string;
};

export function ClinicName({ inverted = false, className }: ClinicNameProps) {
  return (
    <span
      className={cn(
        "flex flex-col leading-none",
        inverted ? "text-white" : "text-black",
        className,
      )}
    >
      <span className="text-[15px] font-black tracking-tight sm:text-base">
        Ana Karen
      </span>
      <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-coral">
        Odontopediatra
      </span>
    </span>
  );
}
