import { cn } from "@/lib/utils";

export function Logo({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={cn("shrink-0", className)}
      role="img"
      aria-label="ChemLab Virtual logo"
    >
      <defs>
        <linearGradient id="clv-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-soft)" />
          <stop offset="100%" stopColor="var(--primary)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="13" fill="var(--surface-2)" stroke="var(--border-strong)" />
      <path
        d="M20 11h8v7.5l7.6 13.6A4 4 0 0 1 32.1 38H15.9a4 4 0 0 1-3.5-5.9L20 18.5V11z"
        fill="color-mix(in oklab, var(--accent) 14%, transparent)"
        stroke="url(#clv-g)"
        strokeWidth="1.8"
      />
      <path
        d="M15.6 29.5h16.8l3 5.4A2.4 2.4 0 0 1 33.3 38H14.7a2.4 2.4 0 0 1-2.1-3.1l3-5.4z"
        fill="color-mix(in oklab, var(--accent) 55%, transparent)"
      />
      <circle cx="24" cy="33" r="2" fill="var(--accent-soft)" />
      <circle cx="35" cy="13" r="2.6" fill="var(--accent)" />
      <circle cx="41" cy="19" r="1.6" fill="var(--accent-soft)" />
      <path d="M35 13l6 6" stroke="var(--accent)" strokeWidth="1.2" opacity="0.7" />
      <path d="M18 11h12" stroke="url(#clv-g)" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function LogoLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <Logo size={compact ? 30 : 38} />
      <div className="leading-tight">
        <div className={cn("font-semibold tracking-tight", compact ? "text-[15px]" : "text-lg")}>
          ChemLab <span className="text-accent">Virtual</span>
        </div>
        {!compact && (
          <div className="text-[11px] text-muted-foreground">Interactive Virtual Chemistry Laboratory</div>
        )}
      </div>
    </div>
  );
}
