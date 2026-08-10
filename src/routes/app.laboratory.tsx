import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  MousePointer2,
  Move3d,
  Pause,
  Play,
  Redo2,
  RotateCcw,
  RotateCw,
  Save,
  Search,
  Send,
  ShieldAlert,
  Sun,
  Undo2,
  Volume2,
  ZoomIn,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  Balance,
  Beaker,
  BunsenBurner,
  Burette,
  ConicalFlask,
  Cylinder,
  Pipette,
  RetortStand,
  TestTube,
  Thermometer,
  apparatusRender,
} from "@/components/chem/apparatus";
import { Chip, LabButton, Meter, SafetyAlert, inputClass } from "@/components/chem/kit";
import { apparatus, chemicals, procedure } from "@/lib/chem-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/laboratory")({
  head: () => ({
    meta: [
      { title: "3D Virtual Laboratory — ChemLab Virtual" },
      {
        name: "description",
        content:
          "Perform the acid-base neutralization in a 3D virtual laboratory: select apparatus, add reagents and watch pH change live.",
      },
      { property: "og:title", content: "3D Virtual Laboratory — ChemLab Virtual" },
      { property: "og:description", content: "Interactive 3D chemistry workspace with live simulation controls." },
    ],
  }),
  component: Laboratory,
});

const tools = [
  { icon: MousePointer2, label: "Select" },
  { icon: Move3d, label: "Move" },
  { icon: RotateCw, label: "Rotate" },
  { icon: ZoomIn, label: "Zoom" },
  { icon: RotateCcw, label: "Reset View" },
  { icon: Undo2, label: "Undo" },
  { icon: Redo2, label: "Redo" },
  { icon: Maximize2, label: "Fullscreen" },
  { icon: Volume2, label: "Sound" },
];

const categories = ["All", "Glassware", "Measuring", "Heating", "Support", "Safety"] as const;

function Laboratory() {
  const [tool, setTool] = useState("Select");
  const [view, setView] = useState("3D");
  const [lighting, setLighting] = useState(72);
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [added, setAdded] = useState(0); // mL delivered 0..25
  const [selected, setSelected] = useState("Burette");
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [step, setStep] = useState(3);
  const [observation, setObservation] = useState("");

  useEffect(() => {
    if (!running) return undefined;
    const t = setInterval(() => {
      setAdded((v) => {
        const next = Math.min(25, v + 0.25 * speed);
        if (next >= 25) setRunning(false);
        return next;
      });
    }, 90);
    return () => clearInterval(t);
  }, [running, speed]);

  const ratio = added / 25;
  const pH = useMemo(() => {
    if (ratio >= 0.999) return 7;
    const value = 13 - Math.pow(ratio, 6) * 6;
    return Math.max(7, Number(value.toFixed(1)));
  }, [ratio]);
  const neutralised = ratio >= 0.999;
  const indicatorColor = neutralised
    ? "var(--accent-soft)"
    : `color-mix(in oklab, var(--destructive) ${Math.round(60 - ratio * 45)}%, var(--accent-soft))`;

  const equipment = apparatus.filter((a) => category === "All" || a.category === category);

  return (
    <div className="flex h-full min-h-0 flex-col">
      {/* Experiment context bar */}
      <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-surface px-5 py-2.5">
        <div className="flex items-center gap-3">
          <Link to="/app/experiments" className="text-muted-foreground hover:text-accent">
            <ChevronLeft className="h-4 w-4" />
          </Link>
          <div>
            <div className="text-[13px] font-semibold">Acid-Base Neutralization</div>
            <div className="text-[11px] text-muted-foreground">Step {step} of 5 · Beginner · 15 min</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Chip tone={neutralised ? "success" : "warning"}>{neutralised ? "Neutralization Point Reached" : "Reaction In Progress"}</Chip>
          <Chip tone="accent">pH {pH.toFixed(1)}</Chip>
          <Chip>Sim {speed}x</Chip>
        </div>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[240px_minmax(0,1fr)_290px]">
        {/* APPARATUS PANEL */}
        <aside className="flex min-h-0 flex-col border-r border-border bg-surface">
          <div className="border-b border-border px-3.5 py-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Laboratory Equipment
            </h2>
            <div className="relative mt-2.5">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input className={`${inputClass} py-1.5 pl-8 text-xs`} placeholder="Search equipment…" />
            </div>
            <div className="mt-2.5 flex flex-wrap gap-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px]",
                    category === c
                      ? "border-accent/50 bg-accent/12 text-accent"
                      : "border-border text-muted-foreground hover:text-foreground",
                  )}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
            {equipment.map((item) => {
              const Art = apparatusRender[item.name];
              const isSelected = selected === item.name;
              return (
                <button
                  key={item.name}
                  onClick={() => setSelected(item.name)}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border p-2 text-left transition-colors",
                    isSelected
                      ? "border-accent/60 bg-accent/10"
                      : "border-border bg-surface-2 hover:border-accent/40",
                  )}
                >
                  <span className="grid h-12 w-10 shrink-0 place-items-center rounded-md border border-border bg-background">
                    {Art ? <Art className="h-10 w-7" fill={0.5} /> : null}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-[12px] font-medium">{item.name}</span>
                    <span className="block text-[10px] text-muted-foreground">{item.capacity}</span>
                    <span className="mt-1 inline-block text-[10px] text-accent">Add to Bench</span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* VIEWPORT */}
        <section className="relative flex min-h-0 flex-col">
          <div
            className="relative min-h-0 flex-1 overflow-hidden"
            style={{ backgroundImage: "var(--gradient-lab)" }}
          >
            <div className="lab-grid absolute inset-0 opacity-45" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background: `radial-gradient(60% 50% at 50% 8%, color-mix(in oklab, var(--accent-soft) ${Math.round(lighting / 6)}%, transparent), transparent 70%)`,
              }}
            />

            {/* viewport chrome */}
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              <div className="glass-panel flex flex-col gap-1 p-1.5">
                {tools.map((t) => (
                  <button
                    key={t.label}
                    title={t.label}
                    aria-label={t.label}
                    onClick={() => setTool(t.label)}
                    className={cn(
                      "grid h-8 w-8 place-items-center rounded-md transition-colors",
                      tool === t.label ? "bg-accent/15 text-accent" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <t.icon className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
              <div className="glass-panel flex p-1">
                {["3D", "Front", "Side", "Top"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setView(v)}
                    className={cn(
                      "rounded-md px-2.5 py-1 text-[11px]",
                      view === v ? "bg-accent/15 text-accent" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {v}
                  </button>
                ))}
              </div>
              <div className="glass-panel w-48 p-3">
                <div className="mb-2 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <Sun className="h-3.5 w-3.5 text-warning" />
                  Laboratory Lighting
                </div>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={lighting}
                  onChange={(e) => setLighting(Number(e.target.value))}
                  className="w-full accent-[var(--accent)]"
                  aria-label="Laboratory lighting"
                />
                <div className="mt-1 flex justify-between text-[10px] text-muted-foreground">
                  <span>Low</span>
                  <span>High</span>
                </div>
              </div>
              <div className="glass-panel px-3 py-2 text-[10px] font-mono text-muted-foreground">
                Tool: <span className="text-accent">{tool}</span> · View: <span className="text-accent">{view}</span>
              </div>
            </div>

            {/* bench scene */}
            <div className="absolute inset-x-0 bottom-0 flex h-[78%] items-end justify-center gap-10 px-16 pb-16">
              <div className="flex items-end gap-3">
                <BunsenBurner className="h-24 w-14" label="Bunsen Burner" />
                <Balance className="h-16 w-24" label="Balance 0.01 g" />
              </div>

              <div className="relative flex items-end">
                <RetortStand className="h-64 w-24 opacity-90" />
                <div className="absolute left-[38px] top-2">
                  <Burette
                    className="h-56 w-16"
                    fill={0.9 - ratio * 0.55}
                    liquid="var(--warning)"
                    selected={selected === "Burette"}
                    label="Burette · HCl 0.1 M"
                  />
                </div>
                {/* dripping stream */}
                {running && (
                  <span className="absolute left-[68px] top-[210px] h-10 w-[3px] overflow-hidden">
                    <span className="animate-bubble absolute inset-x-0 top-6 h-2 rounded-full bg-warning" />
                  </span>
                )}
                <div className="absolute left-[46px] top-[240px]">
                  <ConicalFlask
                    className="h-32 w-28"
                    fill={0.32 + ratio * 0.28}
                    liquid={indicatorColor}
                    selected={selected === "Conical Flask"}
                    label="Conical Flask · NaOH + indicator"
                  />
                  {running && (
                    <>
                      <span className="animate-bubble absolute bottom-10 left-1/2 h-1.5 w-1.5 rounded-full bg-accent-soft" />
                      <span
                        className="animate-bubble absolute bottom-8 left-[42%] h-1 w-1 rounded-full bg-accent"
                        style={{ animationDelay: "0.7s" }}
                      />
                    </>
                  )}
                </div>
              </div>

              <div className="flex items-end gap-4">
                <Beaker className="h-28 w-20" fill={0.4} label="Beaker 100 mL" selected={selected === "Beaker"} />
                <Cylinder className="h-28 w-12" fill={0.35} label="Cylinder" selected={selected === "Measuring Cylinder"} />
                <Pipette className="h-28 w-9" label="Pipette 25 mL" selected={selected === "Pipette"} />
                <TestTube className="h-24 w-9" fill={0.5} liquid="var(--success)" label="Test Tube" />
                <Thermometer className="h-28 w-6" label="25 °C" />
              </div>
            </div>

            {/* bench surface */}
            <div
              className="absolute inset-x-0 bottom-0 h-16 border-t border-border"
              style={{ backgroundImage: "var(--gradient-bench)" }}
            />

            {/* live readouts */}
            <div className="glass-panel absolute bottom-24 left-4 w-56 p-3">
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Live Readout</div>
              <div className="mt-2 flex items-end justify-between">
                <span className="font-mono text-3xl text-accent">{pH.toFixed(1)}</span>
                <span className="text-[11px] text-muted-foreground">pH</span>
              </div>
              <div className="mt-2">
                <Meter value={Math.round(ratio * 100)} label="Titrant delivered" right={`${added.toFixed(1)} mL`} tone={neutralised ? "success" : "accent"} />
              </div>
              <div className="mt-2 text-[11px]">
                {neutralised ? (
                  <span className="text-success">✓ Neutralization point reached</span>
                ) : (
                  <span className="text-warning">⚠ Solution still basic — keep adding</span>
                )}
              </div>
            </div>

            <div className="absolute bottom-24 right-4 w-64">
              <SafetyAlert title="⚠ Safety Warning">
                Handle hydrochloric acid carefully. Avoid contact with skin and eyes. Goggles and gloves are required.
              </SafetyAlert>
            </div>
          </div>

          {/* CONTROL TOOLBAR */}
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-t border-border bg-surface px-4 py-2.5">
            <div className="flex items-center gap-1.5">
              <LabButton onClick={() => setRunning(true)} disabled={running || neutralised}>
                <Play className="h-4 w-4" />
                Start
              </LabButton>
              <LabButton variant="outline" onClick={() => setRunning(false)} disabled={!running}>
                <Pause className="h-4 w-4" />
                Pause
              </LabButton>
              <LabButton
                variant="outline"
                onClick={() => {
                  setRunning(false);
                  setAdded(0);
                }}
              >
                <RotateCcw className="h-4 w-4" />
                Reset
              </LabButton>
              <LabButton variant="ghost" onClick={() => setAdded((v) => Math.max(0, v - 2.5))}>
                <Undo2 className="h-4 w-4" />
                Undo
              </LabButton>
              <LabButton variant="ghost" onClick={() => setAdded((v) => Math.min(25, v + 2.5))}>
                <Redo2 className="h-4 w-4" />
                Redo
              </LabButton>
              <LabButton variant="accent" onClick={() => setAdded((v) => Math.min(25, v + 5))}>
                <ArrowLeftRight className="h-4 w-4" />
                Add Solution
              </LabButton>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg border border-border p-0.5">
                {[0.5, 1, 2].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={cn(
                      "rounded-md px-2 py-1 text-[11px]",
                      speed === s ? "bg-accent/15 text-accent" : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    {s}x
                  </button>
                ))}
              </div>
              <Link to="/app/quiz">
                <LabButton variant="outline">
                  <Send className="h-4 w-4" />
                  Submit Experiment
                </LabButton>
              </Link>
            </div>
          </div>
        </section>

        {/* INSTRUCTIONS + PARAMETERS */}
        <aside className="flex min-h-0 flex-col gap-0 overflow-y-auto border-l border-border bg-surface">
          <div className="border-b border-border p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Current Procedure</h2>
            <div className="mt-2 text-[11px] text-accent">Step {step} of 5</div>
            <p className="mt-2 rounded-lg border border-accent/30 bg-accent/8 p-3 text-[13px] leading-relaxed">
              {procedure[step - 1]}
            </p>
            <div className="mt-3">
              <Meter value={step * 20} label="Procedure progress" />
            </div>
            <div className="mt-3 flex gap-2">
              <LabButton variant="outline" className="flex-1" onClick={() => setStep((s) => Math.max(1, s - 1))}>
                <ChevronLeft className="h-4 w-4" />
                Previous
              </LabButton>
              <LabButton className="flex-1" onClick={() => setStep((s) => Math.min(5, s + 1))}>
                Next Step
                <ChevronRight className="h-4 w-4" />
              </LabButton>
            </div>
            <ol className="mt-3 space-y-1.5">
              {procedure.map((p, i) => (
                <li
                  key={p}
                  className={cn(
                    "flex gap-2 rounded-md px-2 py-1.5 text-[11px]",
                    i + 1 === step ? "bg-accent/10 text-accent" : "text-muted-foreground",
                  )}
                >
                  <span className="font-mono">{i + 1}.</span>
                  <span className="line-clamp-2">{p}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="border-b border-border p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Experiment Parameters
            </h2>
            <dl className="mt-3 space-y-2">
              {[
                ["Volume", `${(50 - added).toFixed(1)} mL`],
                ["Concentration", "0.1 mol/L"],
                ["Temperature", "25 °C"],
                ["pH", pH.toFixed(1)],
                ["Reaction Status", neutralised ? "Complete" : "Ongoing"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between rounded-md border border-border bg-surface-2 px-2.5 py-1.5">
                  <dt className="text-[11px] text-muted-foreground">{k}</dt>
                  <dd className="font-mono text-[12px]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="border-b border-border p-4">
            <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <ShieldAlert className="h-3.5 w-3.5 text-warning" />
              Reagents In Use
            </h2>
            <ul className="mt-3 space-y-1.5">
              {chemicals.slice(0, 4).map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-md border border-border bg-surface-2 px-2.5 py-1.5">
                  <span className="text-[11px]">
                    {c.name} <span className="font-mono text-muted-foreground">{c.concentration}</span>
                  </span>
                  <Chip tone={c.hazard === "Safe" || c.hazard === "Low" ? "success" : "danger"}>{c.hazard}</Chip>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Record Observation</h2>
            <textarea
              rows={4}
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              className={`${inputClass} mt-3 resize-none text-xs`}
              placeholder="Describe what you observe during the experiment…"
            />
            <input className={`${inputClass} mt-2 py-2 text-xs`} placeholder="Result" />
            <input className={`${inputClass} mt-2 py-2 text-xs`} placeholder="Conclusion" />
            <LabButton variant="accent" className="mt-3 w-full">
              <Save className="h-4 w-4" />
              Save Observation
            </LabButton>
          </div>
        </aside>
      </div>
    </div>
  );
}
