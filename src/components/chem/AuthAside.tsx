import { Beaker, Burette, ConicalFlask, TestTube, Thermometer } from "./apparatus";
import { Logo } from "./Logo";

export function AuthAside({ heading, text }: { heading: string; text: string }) {
  return (
    <aside
      className="relative hidden overflow-hidden border-r border-border lg:block"
      style={{ backgroundImage: "var(--gradient-lab)" }}
    >
      <div className="lab-grid absolute inset-0 opacity-40" />
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="animate-drift absolute rounded-full bg-accent"
          style={{
            left: `${(i * 41) % 92 + 4}%`,
            top: `${(i * 29) % 80 + 6}%`,
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            animationDelay: `${(i % 5) * 0.7}s`,
          }}
        />
      ))}

      <div className="relative flex h-full flex-col justify-between p-10">
        <Logo size={40} />

        <div className="flex items-end justify-center gap-5">
          <Thermometer className="h-32 w-6" />
          <Beaker className="h-36 w-24" fill={0.5} />
          <Burette className="h-52 w-16" fill={0.68} />
          <ConicalFlask className="h-40 w-28" fill={0.42} liquid="var(--accent-soft)" />
          <TestTube className="h-32 w-11" fill={0.5} liquid="var(--warning)" />
        </div>

        <div className="max-w-md">
          <div
            className="mb-5 h-5 w-full rounded-md border border-border"
            style={{ backgroundImage: "var(--gradient-bench)" }}
          />
          <h2 className="text-2xl font-semibold tracking-tight">{heading}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
          <div className="mt-6 flex gap-6 text-xs text-muted-foreground">
            <span>
              <strong className="block text-lg text-accent">11</strong>Experiments
            </span>
            <span>
              <strong className="block text-lg text-accent">15</strong>3D Apparatus
            </span>
            <span>
              <strong className="block text-lg text-accent">100%</strong>Safe Practice
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
