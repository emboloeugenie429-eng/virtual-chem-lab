import { cn } from "@/lib/utils";

type Props = {
  fill?: number; // 0..1 liquid level
  liquid?: string; // css color value
  selected?: boolean;
  className?: string;
  label?: string;
};

const glass = "color-mix(in oklab, var(--accent-soft) 10%, transparent)";
const edge = "color-mix(in oklab, var(--accent-soft) 55%, transparent)";

function Frame({
  children,
  selected,
  className,
  label,
  viewBox = "0 0 80 140",
}: Props & { children: React.ReactNode; viewBox?: string }) {
  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg viewBox={viewBox} className="h-full w-full overflow-visible">
        <defs>
          <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.28" />
            <stop offset="35%" stopColor="white" stopOpacity="0.04" />
            <stop offset="100%" stopColor="white" stopOpacity="0.14" />
          </linearGradient>
        </defs>
        {children}
      </svg>
      {label && (
        <span
          className={cn(
            "mt-1 rounded px-1.5 text-[10px] tracking-wide",
            selected ? "bg-accent/15 text-accent" : "text-muted-foreground",
          )}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export function Beaker(p: Props) {
  const f = p.fill ?? 0.45;
  const top = 118 - 78 * f;
  return (
    <Frame {...p}>
      <ellipse cx="40" cy="130" rx="26" ry="5" fill="black" opacity="0.35" />
      <path d="M18 38h44v78a8 8 0 0 1-8 8H26a8 8 0 0 1-8-8V38z" fill={glass} stroke={edge} strokeWidth="2" />
      <path
        d={`M19 ${top}h42v${116 - top}a7 7 0 0 1-7 7H26a7 7 0 0 1-7-7z`}
        fill={p.liquid ?? "var(--accent)"}
        opacity="0.62"
      />
      <ellipse cx="40" cy={top} rx="21" ry="3.4" fill={p.liquid ?? "var(--accent)"} opacity="0.9" />
      <rect x="24" y="42" width="6" height="76" fill="url(#shine)" />
      <path d="M16 38h48" stroke={edge} strokeWidth="3" strokeLinecap="round" />
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1="50" x2="60" y1={118 - 78 * t} y2={118 - 78 * t} stroke={edge} strokeWidth="1.2" />
      ))}
      {p.selected && (
        <rect x="10" y="30" width="60" height="102" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function ConicalFlask(p: Props) {
  const f = p.fill ?? 0.4;
  const top = 122 - 52 * f;
  return (
    <Frame {...p}>
      <ellipse cx="40" cy="130" rx="30" ry="5" fill="black" opacity="0.35" />
      <path
        d="M34 20h12v34l20 58a8 8 0 0 1-7 12H21a8 8 0 0 1-7-12l20-58V20z"
        fill={glass}
        stroke={edge}
        strokeWidth="2"
      />
      <path
        d={`M${40 - (122 - top) * 0.34 - 4} ${top} h${(122 - top) * 0.68 + 8} l${((124 - top) * 0.06).toFixed(1)} ${123 - top}a6 6 0 0 1-6 8H22a6 6 0 0 1-6-8z`}
        fill={p.liquid ?? "var(--accent-soft)"}
        opacity="0.6"
      />
      <ellipse cx="40" cy={top} rx={(122 - top) * 0.35 + 4} ry="3.2" fill={p.liquid ?? "var(--accent-soft)"} opacity="0.92" />
      <path d="M32 22h16" stroke={edge} strokeWidth="3" strokeLinecap="round" />
      <path d="M31 58l-13 44" stroke="url(#shine)" strokeWidth="5" />
      {p.selected && (
        <rect x="8" y="12" width="64" height="122" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function Burette(p: Props) {
  const f = p.fill ?? 0.7;
  const top = 104 - 88 * f;
  return (
    <Frame {...p} viewBox="0 0 60 160">
      <rect x="22" y="8" width="16" height="104" rx="4" fill={glass} stroke={edge} strokeWidth="2" />
      <rect x="23" y={top} width="14" height={112 - top} fill={p.liquid ?? "var(--warning)"} opacity="0.6" />
      <rect x="26" y="12" width="3" height="96" fill="url(#shine)" />
      <path d="M22 112h16l-4 10h-8z" fill={glass} stroke={edge} strokeWidth="1.6" />
      <rect x="18" y="108" width="24" height="6" rx="3" fill="var(--border-strong)" />
      <circle cx="14" cy="111" r="4" fill="var(--accent)" />
      <rect x="28.5" y="122" width="3" height="14" rx="1.5" fill={glass} stroke={edge} strokeWidth="1" />
      {[0.2, 0.4, 0.6, 0.8].map((t) => (
        <line key={t} x1="38" x2="46" y1={104 - 88 * t} y2={104 - 88 * t} stroke={edge} strokeWidth="1.1" />
      ))}
      {p.selected && (
        <rect x="8" y="2" width="46" height="140" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function TestTube(p: Props) {
  const f = p.fill ?? 0.5;
  const top = 116 - 72 * f;
  return (
    <Frame {...p} viewBox="0 0 44 140">
      <path d="M13 16h18v92a9 9 0 0 1-18 0V16z" fill={glass} stroke={edge} strokeWidth="2" />
      <path d={`M14 ${top}h16v${106 - top}a8 8 0 0 1-16 0z`} fill={p.liquid ?? "var(--success)"} opacity="0.6" />
      <rect x="16" y="20" width="3" height="80" fill="url(#shine)" />
      <path d="M11 16h22" stroke={edge} strokeWidth="3" strokeLinecap="round" />
      {p.selected && (
        <rect x="4" y="10" width="36" height="112" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function Cylinder(p: Props) {
  const f = p.fill ?? 0.35;
  const top = 112 - 76 * f;
  return (
    <Frame {...p} viewBox="0 0 56 140">
      <path d="M18 20h20v92h-20z" fill={glass} stroke={edge} strokeWidth="2" />
      <rect x="19" y={top} width="18" height={112 - top} fill={p.liquid ?? "var(--primary)"} opacity="0.6" />
      <path d="M10 118h36l-4 8H14z" fill="var(--border-strong)" />
      <rect x="22" y="24" width="3" height="84" fill="url(#shine)" />
      {[0.25, 0.5, 0.75].map((t) => (
        <line key={t} x1="38" x2="45" y1={112 - 76 * t} y2={112 - 76 * t} stroke={edge} strokeWidth="1.1" />
      ))}
      {p.selected && (
        <rect x="6" y="14" width="44" height="118" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function Pipette(p: Props) {
  return (
    <Frame {...p} viewBox="0 0 40 140">
      <path d="M17 8h6v34c6 4 8 10 8 18s-2 14-8 18v54h-6V78c-6-4-8-10-8-18s2-14 8-18V8z" fill={glass} stroke={edge} strokeWidth="1.8" />
      <ellipse cx="20" cy="60" rx="9" ry="16" fill="var(--accent)" opacity="0.35" />
      <rect x="18" y="12" width="2.5" height="30" fill="url(#shine)" />
      {p.selected && (
        <rect x="4" y="2" width="32" height="136" rx="8" fill="none" stroke="var(--accent)" strokeDasharray="5 4" />
      )}
    </Frame>
  );
}

export function Thermometer(p: Props) {
  return (
    <Frame {...p} viewBox="0 0 30 140">
      <rect x="10" y="10" width="9" height="110" rx="4.5" fill={glass} stroke={edge} strokeWidth="1.8" />
      <rect x="12" y="60" width="5" height="58" fill="var(--destructive)" opacity="0.75" />
      <circle cx="14.5" cy="124" r="8" fill="var(--destructive)" opacity="0.8" />
      {[20, 40, 60, 80, 100].map((y) => (
        <line key={y} x1="19" x2="25" y1={y} y2={y} stroke={edge} strokeWidth="1" />
      ))}
    </Frame>
  );
}

export function BunsenBurner(p: Props) {
  return (
    <Frame {...p} viewBox="0 0 70 140">
      <ellipse cx="35" cy="132" rx="24" ry="5" fill="black" opacity="0.35" />
      <path d="M18 122h34l-3 10H21z" fill="var(--border-strong)" />
      <rect x="30" y="52" width="10" height="70" fill="var(--secondary)" />
      <path
        d="M35 12c7 12 11 18 11 26 0 8-5 14-11 14s-11-6-11-14c0-8 4-14 11-26z"
        fill="var(--accent)"
        opacity="0.55"
      />
      <path d="M35 24c4 8 6 12 6 17s-3 8-6 8-6-3-6-8 2-9 6-17z" fill="var(--accent-soft)" opacity="0.85" />
    </Frame>
  );
}

export function Balance(p: Props) {
  return (
    <Frame {...p} viewBox="0 0 100 90">
      <rect x="10" y="40" width="80" height="34" rx="7" fill="var(--surface-2)" stroke={edge} strokeWidth="1.6" />
      <rect x="22" y="26" width="56" height="12" rx="3" fill="var(--border-strong)" />
      <rect x="24" y="50" width="34" height="14" rx="3" fill="var(--background)" stroke="var(--accent)" strokeWidth="1" />
      <text x="41" y="61" textAnchor="middle" fontSize="9" fill="var(--accent)" fontFamily="monospace">
        24.86 g
      </text>
      <circle cx="72" cy="57" r="4" fill="var(--success)" />
    </Frame>
  );
}

export function RetortStand(p: Props) {
  return (
    <Frame {...p} viewBox="0 0 90 160">
      <rect x="10" y="140" width="70" height="10" rx="3" fill="var(--border-strong)" />
      <rect x="20" y="14" width="8" height="128" fill="var(--secondary)" />
      <rect x="24" y="30" width="46" height="7" rx="3" fill="var(--secondary)" />
      <rect x="24" y="96" width="40" height="7" rx="3" fill="var(--secondary)" />
    </Frame>
  );
}

export const apparatusRender: Record<string, (p: Props) => React.JSX.Element> = {
  Beaker,
  "Conical Flask": ConicalFlask,
  Burette,
  Pipette,
  "Test Tube": TestTube,
  "Measuring Cylinder": Cylinder,
  Thermometer,
  "Digital Balance": Balance,
  "Bunsen Burner": BunsenBurner,
  "Retort Stand": RetortStand,
  "Tripod Stand": RetortStand,
  Funnel: ConicalFlask,
};
