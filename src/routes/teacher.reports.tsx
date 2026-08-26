import { createFileRoute } from "@tanstack/react-router";
import { Download, FileBarChart, Printer } from "lucide-react";
import { Chip, DataTable, LabButton, Meter, PageHeader, Panel } from "@/components/chem/kit";
import { scoreTrend, students } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/reports")({
  head: () => ({
    meta: [
      { title: "Reports — ChemLab Virtual Teacher" },
      { name: "description", content: "Generate class grade reports and export term performance summaries." },
      { property: "og:title", content: "Reports — ChemLab Virtual Teacher" },
      { property: "og:description", content: "Generate class grade reports and export term performance summaries." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherReports,
});

function grade(avg: string) {
  const n = parseInt(avg, 10);
  if (Number.isNaN(n)) return { letter: "—", tone: "neutral" as const };
  if (n >= 85) return { letter: "A", tone: "success" as const };
  if (n >= 75) return { letter: "B", tone: "accent" as const };
  if (n >= 65) return { letter: "C", tone: "warning" as const };
  return { letter: "D", tone: "danger" as const };
}

function TeacherReports() {
  const max = Math.max(...scoreTrend.map((s) => s.score));

  return (
    <div className="p-6">
      <PageHeader
        title="Reports & Grades"
        subtitle="Term 3 · Form 5A Chemistry"
        actions={
          <>
            <LabButton variant="outline">
              <Printer className="h-4 w-4" />
              Print
            </LabButton>
            <LabButton>
              <Download className="h-4 w-4" />
              Export CSV
            </LabButton>
          </>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <Panel title="Grade Sheet" icon={FileBarChart} bodyClassName="p-0">
          <DataTable
            columns={["Student", "ID", "Class", "Experiments", "Average", "Grade"]}
            rows={students.map((s) => {
              const g = grade(s.avg);
              return [
                <span className="font-medium">{s.name}</span>,
                <span className="font-mono text-xs text-muted-foreground">{s.id}</span>,
                s.class,
                s.done,
                s.avg,
                <Chip tone={g.tone}>{g.letter}</Chip>,
              ];
            })}
          />
        </Panel>

        <div className="space-y-5">
          <Panel title="Weekly Averages">
            <div className="flex h-40 items-end gap-3">
              {scoreTrend.map((p) => (
                <div key={p.label} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div className="w-full rounded-t-md bg-primary/70" style={{ height: `${(p.score / max) * 100}%` }} />
                  </div>
                  <span className="text-[11px] text-muted-foreground">{p.label}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel title="Distribution">
            <div className="space-y-4">
              <Meter label="A (85–100)" value={40} tone="success" right="2 students" />
              <Meter label="B (75–84)" value={20} tone="accent" right="1 student" />
              <Meter label="C (65–74)" value={20} tone="warning" right="1 student" />
              <Meter label="D (below 65)" value={20} tone="danger" right="1 student" />
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
