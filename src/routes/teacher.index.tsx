import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ClipboardCheck, FlaskConical, Users } from "lucide-react";
import {
  Chip,
  DataTable,
  LabButton,
  Meter,
  PageHeader,
  Panel,
  StatCard,
  statusTone,
} from "@/components/chem/kit";
import { experiments, scoreTrend, students, subjectProgress } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/")({
  head: () => ({
    meta: [
      { title: "Teacher Dashboard — ChemLab Virtual" },
      { name: "description", content: "Monitor class activity, experiment completion and student performance." },
      { property: "og:title", content: "Teacher Dashboard — ChemLab Virtual" },
      { property: "og:description", content: "Monitor class activity, experiment completion and student performance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherDashboard,
});

function TeacherDashboard() {
  const max = Math.max(...scoreTrend.map((s) => s.score));

  return (
    <div className="p-6">
      <PageHeader
        title="Class Overview"
        subtitle="Wednesday · Form 5A Chemistry · Term 3"
        actions={
          <>
            <Link to="/teacher/experiments">
              <LabButton variant="outline">Assign Experiment</LabButton>
            </Link>
            <Link to="/teacher/reports">
              <LabButton>Export Report</LabButton>
            </Link>
          </>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard icon={Users} value="32" label="Students enrolled" hint="28 active this week" />
        <StatCard icon={FlaskConical} value="118" label="Experiments run" hint="+14 vs last week" />
        <StatCard icon={ClipboardCheck} value="81%" label="Class average" hint="Target 75%" />
        <StatCard icon={Activity} value="6" label="Pending reviews" hint="Lab reports awaiting grading" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Panel title="Class Performance Trend" icon={Activity}>
          <div className="flex h-44 items-end gap-4">
            {scoreTrend.map((p) => (
              <div key={p.label} className="flex flex-1 flex-col items-center gap-2">
                <span className="text-[11px] font-medium text-accent">{p.score}%</span>
                <div className="flex w-full flex-1 items-end">
                  <div
                    className="w-full rounded-t-md bg-accent/70"
                    style={{ height: `${(p.score / max) * 100}%` }}
                  />
                </div>
                <span className="text-[11px] text-muted-foreground">{p.label}</span>
              </div>
            ))}
          </div>
        </Panel>

        <Panel title="Mastery by Topic">
          <div className="space-y-4">
            {subjectProgress.map((s) => (
              <Meter key={s.label} label={s.label} value={s.value} />
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Panel title="Recent Student Activity" bodyClassName="p-0">
          <DataTable
            columns={["Student", "Class", "Completed", "Average", "Last active", "Status"]}
            rows={students.map((s) => [
              <Link key={s.id} to="/teacher/students" className="font-medium hover:text-accent">
                {s.name}
              </Link>,
              s.class,
              s.done,
              s.avg,
              s.last,
              <Chip tone={statusTone(s.status)}>{s.status}</Chip>,
            ])}
          />
        </Panel>

        <Panel title="Assigned Experiments">
          <ul className="space-y-2.5">
            {experiments.slice(0, 5).map((e) => (
              <li
                key={e.id}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-medium">{e.name}</span>
                  <Chip tone="accent">{e.difficulty}</Chip>
                </div>
                <div className="mt-2">
                  <Meter value={e.progress} right={`${e.progress}% class completion`} />
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
