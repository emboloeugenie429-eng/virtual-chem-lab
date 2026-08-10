import { createFileRoute } from "@tanstack/react-router";
import { Beaker } from "lucide-react";
import { apparatusRender } from "@/components/chem/apparatus";
import { Chip, LabButton, PageHeader, statusTone } from "@/components/chem/kit";
import { apparatus } from "@/lib/chem-data";

export const Route = createFileRoute("/app/apparatus")({
  head: () => ({
    meta: [
      { title: "Apparatus Library — ChemLab Virtual" },
      { name: "description", content: "Browse the 3D laboratory apparatus available on the virtual bench." },
      { property: "og:title", content: "Apparatus Library — ChemLab Virtual" },
      { property: "og:description", content: "Glassware, measuring, heating and support equipment in 3D." },
    ],
  }),
  component: ApparatusLibrary,
});

function ApparatusLibrary() {
  return (
    <div className="p-6">
      <PageHeader title="Apparatus Library" subtitle="3D laboratory equipment available for your experiments." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apparatus.map((a) => {
          const Art = apparatusRender[a.name];
          return (
            <article key={a.name} className="panel overflow-hidden">
              <div
                className="relative flex h-36 items-center justify-center border-b border-border"
                style={{ backgroundImage: "var(--gradient-lab)" }}
              >
                <div className="lab-grid absolute inset-0 opacity-30" />
                {Art ? <Art className="relative h-28 w-20" fill={0.45} selected={a.status === "Selected"} /> : <Beaker />}
                <span className="absolute right-2 top-2">
                  <Chip tone={statusTone(a.status)}>{a.status}</Chip>
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-semibold">{a.name}</h3>
                <div className="mt-1 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{a.capacity}</span>
                  <span>{a.category}</span>
                </div>
                <LabButton variant="outline" className="mt-3 w-full">
                  View Details
                </LabButton>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
