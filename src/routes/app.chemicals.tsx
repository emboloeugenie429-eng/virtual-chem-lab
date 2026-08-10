import { createFileRoute } from "@tanstack/react-router";
import { TestTubes } from "lucide-react";
import { Chip, DataTable, LabButton, PageHeader, Panel, statusTone } from "@/components/chem/kit";
import { chemicals } from "@/lib/chem-data";

export const Route = createFileRoute("/app/chemicals")({
  head: () => ({
    meta: [
      { title: "Chemical Library — ChemLab Virtual" },
      { name: "description", content: "Reagent inventory with formulas, concentrations, hazards and storage notes." },
      { property: "og:title", content: "Chemical Library — ChemLab Virtual" },
      { property: "og:description", content: "Browse reagents and add them to your experiment safely." },
    ],
  }),
  component: Chemicals,
});

function Chemicals() {
  return (
    <div className="p-6">
      <PageHeader title="Chemicals & Reagents" subtitle="Inventory of reagents available in the virtual laboratory." />
      <Panel title="Reagent Inventory" icon={TestTubes} bodyClassName="p-2">
        <DataTable
          columns={["Chemical", "Formula", "Concentration", "Quantity", "Hazard", "Storage", "Action"]}
          rows={chemicals.map((c) => [
            <span className="font-medium">{c.name}</span>,
            <span className="font-mono text-muted-foreground">{c.formula}</span>,
            c.concentration,
            c.quantity,
            <Chip tone={statusTone(c.hazard)}>{c.hazard}</Chip>,
            <span className="text-muted-foreground">{c.storage}</span>,
            <div className="flex gap-1.5">
              <LabButton variant="accent" className="px-2 py-1 text-[11px]">
                Add
              </LabButton>
              <LabButton variant="outline" className="px-2 py-1 text-[11px]">
                Safety Data
              </LabButton>
            </div>,
          ])}
        />
      </Panel>
    </div>
  );
}
