import { createFileRoute } from "@tanstack/react-router";
import { ShieldAlert } from "lucide-react";
import { Chip, PageHeader, Panel, SafetyAlert, statusTone } from "@/components/chem/kit";
import { chemicals } from "@/lib/chem-data";

export const Route = createFileRoute("/app/safety")({
  head: () => ({
    meta: [
      { title: "Safety Data Sheet — ChemLab Virtual" },
      { name: "description", content: "Hazard classification, handling, storage, first aid and disposal guidance." },
      { property: "og:title", content: "Safety Data Sheet — ChemLab Virtual" },
      { property: "og:description", content: "Read the SDS before handling laboratory reagents." },
    ],
  }),
  component: Safety,
});

const sections: [string, string][] = [
  ["Hazard Classification", "Skin corrosion category 1B. Causes severe skin burns and eye damage."],
  ["Physical Properties", "Colourless liquid · pH ≈ 1.1 (0.1 M) · Boiling point 110 °C · Density 1.02 g/cm³."],
  ["Handling", "Use in a ventilated area. Always add acid to water, never water to acid."],
  ["Storage", "Store in a labelled acid cabinet away from bases and oxidising agents."],
  ["First Aid", "Rinse affected skin with running water for 15 minutes and seek medical attention."],
  ["Disposal", "Neutralise with sodium bicarbonate before diluting and disposing to drain."],
];

function Safety() {
  return (
    <div className="p-6">
      <PageHeader title="Safety Data Sheet" subtitle="Hydrochloric Acid (HCl) · 0.1 M · Revision 3 · Aug 2026" />
      <div className="grid gap-4 xl:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <Panel title="Chemical Identification" icon={ShieldAlert}>
            <div className="grid grid-cols-2 gap-3 text-[13px] sm:grid-cols-4">
              {[
                ["Name", "Hydrochloric Acid"],
                ["Formula", "HCl"],
                ["Concentration", "0.1 M"],
                ["Hazard", "Corrosive"],
              ].map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border bg-surface-2 p-3">
                  <div className="text-[11px] text-muted-foreground">{k}</div>
                  <div className="mt-1 font-medium">{v}</div>
                </div>
              ))}
            </div>
          </Panel>
          {sections.map(([title, body]) => (
            <Panel key={title} title={title}>
              <p className="text-[13px] leading-relaxed text-muted-foreground">{body}</p>
            </Panel>
          ))}
        </div>
        <div className="space-y-4">
          <Panel title="Safety Precautions">
            <div className="space-y-3">
              <SafetyAlert title="⚠ PPE Required" tone="danger">
                Safety goggles, gloves and a lab coat must be worn at all times.
              </SafetyAlert>
              <SafetyAlert title="⚠ Spill Response" tone="warning">
                Contain the spill, neutralise with sodium bicarbonate and notify the supervisor.
              </SafetyAlert>
              <SafetyAlert title="ℹ Incompatibilities" tone="accent">
                Do not mix with bleach, strong bases or active metals.
              </SafetyAlert>
            </div>
          </Panel>
          <Panel title="Other Reagents">
            <ul className="space-y-2">
              {chemicals.map((c) => (
                <li key={c.name} className="flex items-center justify-between rounded-md border border-border bg-surface-2 px-3 py-2 text-[12px]">
                  <span>
                    {c.name} <span className="font-mono text-muted-foreground">{c.formula}</span>
                  </span>
                  <Chip tone={statusTone(c.hazard)}>{c.hazard}</Chip>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </div>
  );
}
