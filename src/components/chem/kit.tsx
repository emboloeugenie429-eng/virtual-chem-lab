import type { LucideIcon } from "lucide-react";
import { Minus, Square, X } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { LogoLockup } from "./Logo";

export function TitleBar({ subtitle }: { subtitle?: string }) {
  return (
    <div className="flex h-11 shrink-0 items-center justify-between border-b border-border bg-surface px-3">
      <div className="flex items-center gap-3">
        <LogoLockup compact />
        {subtitle && (
          <>
            <span className="h-4 w-px bg-border" />
            <span className="text-xs text-muted-foreground">{subtitle}</span>
          </>
        )}
      </div>
      <div className="flex items-center gap-1">
        {[Minus, Square, X].map((Icon, i) => (
          <button
            key={i}
            type="button"
            aria-label={["Minimize", "Maximize", "Close"][i]}
            className={cn(
              "grid h-7 w-10 place-items-center rounded-sm text-muted-foreground transition-colors",
              i === 2 ? "hover:bg-destructive hover:text-destructive-foreground" : "hover:bg-surface-2 hover:text-foreground",
            )}
          >
            <Icon className="h-3.5 w-3.5" />
          </button>
        ))}
      </div>
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
        {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  );
}

export function Panel({
  title,
  icon: Icon,
  actions,
  children,
  className,
  bodyClassName,
}: {
  title?: string;
  icon?: LucideIcon;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("panel flex min-h-0 flex-col", className)}>
      {title && (
        <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
          <h2 className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            {Icon && <Icon className="h-4 w-4 text-accent" />}
            {title}
          </h2>
          {actions}
        </div>
      )}
      <div className={cn("min-h-0 flex-1 p-4", bodyClassName)}>{children}</div>
    </section>
  );
}

export function StatCard({
  icon: Icon,
  value,
  label,
  hint,
}: {
  icon: LucideIcon;
  value: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="panel p-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-2xl font-semibold tracking-tight">{value}</div>
          <div className="mt-0.5 text-xs text-muted-foreground">{label}</div>
        </div>
        <span className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface-2 text-accent">
          <Icon className="h-4 w-4" />
        </span>
      </div>
      {hint && <div className="mt-3 text-[11px] text-muted-foreground">{hint}</div>}
    </div>
  );
}

export function Meter({
  value,
  label,
  right,
  tone = "accent",
}: {
  value: number;
  label?: string;
  right?: string;
  tone?: "accent" | "success" | "warning" | "danger";
}) {
  const fill = {
    accent: "bg-accent",
    success: "bg-success",
    warning: "bg-warning",
    danger: "bg-destructive",
  }[tone];
  return (
    <div>
      {(label || right) && (
        <div className="mb-1.5 flex items-center justify-between text-xs">
          <span className="text-muted-foreground">{label}</span>
          <span className="font-medium">{right ?? `${value}%`}</span>
        </div>
      )}
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
        <div className={cn("h-full rounded-full transition-all", fill)} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

const toneMap = {
  accent: "border-accent/40 bg-accent/10 text-accent",
  success: "border-success/40 bg-success/10 text-success",
  warning: "border-warning/40 bg-warning/10 text-warning",
  danger: "border-destructive/40 bg-destructive/10 text-destructive",
  neutral: "border-border bg-surface-2 text-muted-foreground",
  primary: "border-primary/50 bg-primary/15 text-accent-soft",
} as const;

export type Tone = keyof typeof toneMap;

export function Chip({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        toneMap[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function statusTone(status: string): Tone {
  const s = status.toLowerCase();
  if (["completed", "safe", "active", "low", "complete", "on bench"].includes(s)) return "success";
  if (["in progress", "irritant", "selected", "pending"].includes(s)) return "warning";
  if (["corrosive", "oxidiser", "failed", "inactive", "danger"].includes(s)) return "danger";
  return "neutral";
}

export function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-border">
            {columns.map((c) => (
              <th
                key={c}
                className="px-3 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-border/60 transition-colors last:border-0 hover:bg-surface-2/70">
              {row.map((cell, j) => (
                <td key={j} className="px-3 py-2.5 align-middle">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function SafetyAlert({
  title,
  children,
  tone = "warning",
}: {
  title: string;
  children: ReactNode;
  tone?: "warning" | "danger" | "accent" | "success";
}) {
  const map = {
    warning: "border-warning/45 bg-warning/10",
    danger: "border-destructive/45 bg-destructive/10",
    accent: "border-accent/40 bg-accent/10",
    success: "border-success/45 bg-success/10",
  };
  const dot = {
    warning: "text-warning",
    danger: "text-destructive",
    accent: "text-accent",
    success: "text-success",
  };
  return (
    <div className={cn("rounded-lg border px-3.5 py-3", map[tone])}>
      <div className={cn("text-xs font-semibold", dot[tone])}>{title}</div>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{children}</p>
    </div>
  );
}

export function LabButton({
  children,
  variant = "primary",
  className,
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "accent" | "ghost" | "outline" | "danger";
}) {
  const styles = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/85",
    accent: "bg-accent text-accent-foreground hover:brightness-110",
    ghost: "text-muted-foreground hover:bg-surface-2 hover:text-foreground",
    outline: "border border-border bg-surface-2 text-foreground hover:border-accent/60 hover:text-accent",
    danger: "border border-destructive/50 bg-destructive/12 text-destructive hover:bg-destructive/22",
  }[variant];
  return (
    <button
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-[13px] font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-45",
        styles,
        className,
      )}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: ReactNode;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px]">{hint}</span>}
    </label>
  );
}

export const inputClass =
  "w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent/70 focus:ring-2 focus:ring-accent/25";
