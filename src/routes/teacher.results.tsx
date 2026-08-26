import { createFileRoute } from "@tanstack/react-router";
import { Trophy } from "lucide-react";
import {
  Chip,
  DataTable,
  Meter,
  PageHeader,
  Panel,
  StatCard,
  statusTone,
} from "@/components/chem/kit";
import { recentExperiments, students, subjectProgress } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/results")({
  head: () => ({
    meta: [
      { title: "Results — ChemLab Virtual Teacher" },
      { name: "description", content: "Review submitted experiment results, scores and topic mastery per student." },
      { property: "og:title", content: "Results — ChemLab Virtual Teacher" },
      { property: "og:description", content: "Review submitted experiment results, scores and topic mastery per student." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherResults,
});

function TeacherResults() {
  return (
    <div className="p-6">
      <PageHeader title="Results" subtitle="Latest submissions awaiting review and published scores" />

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard icon={Trophy} value="81%" label="Class average" hint="Across 118 submissions" />
        <StatCard icon={Trophy} value="91%" label="Top score" hint="Aisha Njoya · Form 5B" />
        <StatCard icon={Trophy} value="6" label="Awaiting review" hint="Submitted in the last 48 h" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.5fr_1fr]">
        <Panel title="Recent Submissions" bodyClassName="p-0">
          <DataTable
            columns={["Experiment", "Date", "Duration", "Score", "Status"]}
            rows={recentExperiments.map((r) => [
              <span className="font-medium">{r.name}</span>,
              r.date,
              r.duration,
              r.score,
              <Chip tone={statusTone(r.status)}>{r.status}</Chip>,
            ])}
          />
        </Panel>

        <Panel title="Topic Mastery">
          <div className="space-y-4">
            {subjectProgress.map((s) => (
              <Meter key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </Panel>
      </div>

      <Panel title="Averages by Student" className="mt-5" bodyClassName="p-0">
        <DataTable
          columns={["Student", "Class", "Experiments", "Average", "Last active"]}
          rows={students.map((s) => [
            <span className="font-medium">{s.name}</span>,
            s.class,
            s.done,
            s.avg,
            s.last,
          ])}
        />
      </Panel>
    </div>
  );
}
