import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Download, Save } from "lucide-react";
import { Chip, LabButton, PageHeader, Panel, inputClass } from "@/components/chem/kit";
import { recentExperiments } from "@/lib/chem-data";

export const Route = createFileRoute("/app/notebook")({
  head: () => ({
    meta: [
      { title: "Lab Notebook — ChemLab Virtual" },
      { name: "description", content: "Write up your aim, method, observations, results and conclusions for each experiment." },
      { property: "og:title", content: "Lab Notebook — ChemLab Virtual" },
      { property: "og:description", content: "Write up your aim, method, observations, results and conclusions for each experiment." },
    ],
  }),
  component: Notebook,
});

function Notebook() {
  return (
    <div className="p-6">
      <PageHeader
        title="Lab Notebook"
        subtitle="Digital laboratory reports for every experiment you perform."
        actions={
          <>
            <LabButton variant="outline">
              <Download className="h-4 w-4" />
              Export Report
            </LabButton>
            <LabButton>
              <Save className="h-4 w-4" />
              Save Report
            </LabButton>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[300px_1fr]">
        <Panel title="Saved Experiments" icon={BookOpen}>
          <ul className="space-y-2">
            {recentExperiments.map((r, i) => (
              <li
                key={r.name}
                className={`rounded-lg border p-3 ${i === 0 ? "border-accent/50 bg-accent/10" : "border-border bg-surface-2"}`}
              >
                <div className="text-[13px] font-medium">{r.name}</div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{r.date} · {r.duration}</span>
                  <span className="font-mono">{r.score}</span>
                </div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Experiment Report">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-surface-2 p-3">
              <div className="text-[11px] text-muted-foreground">Experiment</div>
              <div className="mt-1 text-[14px] font-medium">Acid-Base Neutralization</div>
            </div>
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg border border-border bg-surface-2 p-3">
                <div className="text-[11px] text-muted-foreground">Date</div>
                <div className="mt-1 text-[14px] font-medium">Aug 9, 2026</div>
              </div>
              <div className="flex-1 rounded-lg border border-border bg-surface-2 p-3">
                <div className="text-[11px] text-muted-foreground">Score</div>
                <div className="mt-1 text-[14px] font-medium">85%</div>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Aim", "To determine the volume of hydrochloric acid required to neutralise 25 mL of sodium hydroxide."],
              ["Method", "A burette was filled with 0.1 M HCl and added dropwise to 25 mL of 0.1 M NaOH containing phenolphthalein."],
              ["Observation", "The pink solution turned colourless after 25.0 mL of acid had been delivered."],
              ["Result", "Volume of HCl required = 25.0 mL; pH at end point = 7.0."],
              ["Conclusion", "Equal volumes of equimolar strong acid and strong base neutralise completely."],
            ].map(([label, value]) => (
              <label key={label} className="block">
                <span className="mb-1.5 block text-xs font-medium text-muted-foreground">{label}</span>
                <textarea rows={label === "Aim" ? 2 : 3} defaultValue={value} className={`${inputClass} resize-none text-[13px]`} />
              </label>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2">
            <Chip tone="success">Report complete</Chip>
            <Chip>Auto-saved locally</Chip>
          </div>
        </Panel>
      </div>
    </div>
  );
}
