import { createFileRoute } from "@tanstack/react-router";
import { FlaskConical, Plus } from "lucide-react";
import { Chip, LabButton, Meter, PageHeader, Panel } from "@/components/chem/kit";
import { experiments } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/experiments")({
  head: () => ({
    meta: [
      { title: "Manage Experiments — ChemLab Virtual Teacher" },
      { name: "description", content: "Assign, publish and monitor virtual chemistry experiments for your classes." },
      { property: "og:title", content: "Manage Experiments — ChemLab Virtual Teacher" },
      { property: "og:description", content: "Assign, publish and monitor virtual chemistry experiments for your classes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherExperiments,
});

function TeacherExperiments() {
  return (
    <div className="p-6">
      <PageHeader
        title="Experiments"
        subtitle="Assign simulations and track class completion"
        actions={
          <LabButton>
            <Plus className="h-4 w-4" />
            New Experiment
          </LabButton>
        }
      />

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {experiments.map((e) => (
          <Panel key={e.id} title={e.title} icon={FlaskConical}>
            <p className="text-xs leading-relaxed text-muted-foreground">{e.description}</p>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <Chip tone="accent">{e.difficulty}</Chip>
              <Chip>{e.topic}</Chip>
            </div>
            <div className="mt-4">
              <Meter value={e.progress} label="Class completion" />
            </div>
            <div className="mt-4 flex items-center gap-2">
              <LabButton variant="outline" className="flex-1">
                Assign
              </LabButton>
              <LabButton variant="ghost">Edit</LabButton>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
