import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, FlaskConical, GraduationCap, Play, Timer, TrendingUp } from "lucide-react";
import { ConicalFlask, Burette } from "@/components/chem/apparatus";
import { Chip, DataTable, LabButton, Meter, PageHeader, Panel, StatCard, statusTone } from "@/components/chem/kit";
import { experiments, recentExperiments } from "@/lib/chem-data";

export const Route = createFileRoute("/app/")({
  head: () => ({
    meta: [
      { title: "Student Dashboard — ChemLab Virtual" },
      { name: "description", content: "Resume experiments, review scores and track your virtual chemistry progress." },
      { property: "og:title", content: "Student Dashboard — ChemLab Virtual" },
      { property: "og:description", content: "Your virtual chemistry laboratory at a glance." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="p-6">
      <PageHeader
        title="Good Morning, Eugenie"
        subtitle="Ready to continue your chemistry journey?"
        actions={
          <Link to="/app/experiments">
            <LabButton variant="outline">Browse Experiments</LabButton>
          </Link>
        }
      />

      <section
        className="panel relative mb-6 overflow-hidden p-6"
        style={{ backgroundImage: "var(--gradient-lab)" }}
      >
        <div className="lab-grid absolute inset-0 opacity-30" />
        <div className="relative flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <Chip tone="accent">Continue Experiment</Chip>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tight">Acid-Base Neutralization</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You stopped at step 3 of 5 — adding hydrochloric acid from the burette until the indicator turns
              colourless.
            </p>
            <div className="mt-5 max-w-sm">
              <Meter value={65} label="Experiment progress" right="65%" />
            </div>
            <div className="mt-5 flex gap-2">
              <Link to="/app/laboratory">
                <LabButton>
                  <Play className="h-4 w-4" />
                  Continue Experiment
                </LabButton>
              </Link>
              <Link to="/app/experiments/$id" params={{ id: "acid-base-neutralization" }}>
                <LabButton variant="outline">View Instructions</LabButton>
              </Link>
            </div>
          </div>
          <div className="flex items-end gap-4">
            <Burette className="h-40 w-14" fill={0.55} selected />
            <ConicalFlask className="h-32 w-24" fill={0.5} liquid="var(--accent-soft)" />
          </div>
        </div>
      </section>

      <section className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={FlaskConical} value="12" label="Experiments Completed" hint="+2 this week" />
        <StatCard icon={Timer} value="3" label="In Progress" hint="Resume from dashboard" />
        <StatCard icon={TrendingUp} value="86%" label="Average Score" hint="Above class average (78%)" />
        <StatCard icon={Clock} value="18.5h" label="Learning Time" hint="Target: 24h this term" />
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.6fr_1fr]">
        <Panel title="Recent Experiments" icon={GraduationCap} bodyClassName="p-2">
          <DataTable
            columns={["Experiment", "Date", "Score", "Status", "Action"]}
            rows={recentExperiments.map((r) => [
              <span className="font-medium">{r.name}</span>,
              <span className="text-muted-foreground">{r.date}</span>,
              <span className="font-mono">{r.score}</span>,
              <Chip tone={statusTone(r.status)}>{r.status}</Chip>,
              <Link to="/app/results" className="text-accent hover:underline">
                View
              </Link>,
            ])}
          />
        </Panel>

        <Panel title="Recommended Next" icon={FlaskConical}>
          <ul className="space-y-3">
            {experiments.slice(4, 8).map((e) => (
              <li key={e.id} className="rounded-lg border border-border bg-surface-2 p-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[13px] font-medium">{e.name}</span>
                  <Chip tone={e.difficulty === "Beginner" ? "success" : e.difficulty === "Intermediate" ? "warning" : "danger"}>
                    {e.difficulty}
                  </Chip>
                </div>
                <p className="mt-1 line-clamp-2 text-[11px] text-muted-foreground">{e.description}</p>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>{e.duration}</span>
                  <Link to="/app/experiments/$id" params={{ id: e.id }} className="text-accent hover:underline">
                    Open
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
      </div>
    </div>
  );
}
