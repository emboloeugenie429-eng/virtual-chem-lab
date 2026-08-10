import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { LabButton, PageHeader, Panel, inputClass } from "@/components/chem/kit";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/settings")({
  head: () => ({
    meta: [
      { title: "Settings — ChemLab Virtual" },
      { name: "description", content: "Configure rendering quality, audio, notifications, interface and offline data." },
      { property: "og:title", content: "Settings — ChemLab Virtual" },
      { property: "og:description", content: "Configure rendering quality, audio, notifications, interface and offline data." },
    ],
  }),
  component: Settings,
});

function Toggle({ label, defaultOn = true }: { label: string; defaultOn?: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-surface-2 px-3 py-2.5">
      <span className="text-[13px]">{label}</span>
      <button
        onClick={() => setOn((v) => !v)}
        aria-label={label}
        className={cn("relative h-5 w-9 rounded-full transition-colors", on ? "bg-accent" : "bg-border")}
      >
        <span
          className={cn(
            "absolute top-0.5 h-4 w-4 rounded-full bg-background transition-all",
            on ? "left-[18px]" : "left-0.5",
          )}
        />
      </button>
    </div>
  );
}

function Choice({ label, options }: { label: string; options: string[] }) {
  const [value, setValue] = useState(options[1] ?? options[0]!);
  return (
    <div className="rounded-lg border border-border bg-surface-2 px-3 py-2.5">
      <div className="mb-2 text-[13px]">{label}</div>
      <div className="flex gap-1.5">
        {options.map((o) => (
          <button
            key={o}
            onClick={() => setValue(o)}
            className={cn(
              "rounded-md border px-2.5 py-1 text-[11px]",
              value === o ? "border-accent/60 bg-accent/12 text-accent" : "border-border text-muted-foreground",
            )}
          >
            {o}
          </button>
        ))}
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6">
      <PageHeader title="Settings" subtitle="Tune the laboratory simulation to your computer and preferences." />
      <div className="grid gap-4 xl:grid-cols-2">
        <Panel title="Account">
          <div className="space-y-3">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Display Name</span>
              <input className={inputClass} defaultValue="Eugenie Embolo" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted-foreground">Password</span>
              <input type="password" className={inputClass} defaultValue="chemlab123" />
            </label>
          </div>
        </Panel>
        <Panel title="Laboratory">
          <div className="space-y-3">
            <Choice label="3D Rendering Quality" options={["Low", "Medium", "High"]} />
            <Choice label="Graphics Quality" options={["Low", "Medium", "High"]} />
            <Toggle label="Show apparatus selection outlines" />
          </div>
        </Panel>
        <Panel title="Audio">
          <div className="space-y-3">
            <Toggle label="Sound Effects" />
            <Toggle label="Background Audio" defaultOn={false} />
          </div>
        </Panel>
        <Panel title="Notifications">
          <div className="space-y-3">
            <Toggle label="Experiment notifications" />
            <Toggle label="Quiz reminders" />
          </div>
        </Panel>
        <Panel title="Interface">
          <div className="space-y-3">
            <Choice label="Theme" options={["Dark Lab", "Deep Navy", "High Contrast"]} />
            <Choice label="Language" options={["English", "French", "Bilingual"]} />
            <Toggle label="Interface animations" />
          </div>
        </Panel>
        <Panel title="Data">
          <div className="space-y-3">
            <Toggle label="Keep offline experiment data" />
            <div className="flex gap-2">
              <LabButton variant="outline" className="flex-1">
                Clear Cache
              </LabButton>
              <LabButton variant="danger" className="flex-1">
                Reset Application
              </LabButton>
            </div>
          </div>
        </Panel>
      </div>
    </div>
  );
}
