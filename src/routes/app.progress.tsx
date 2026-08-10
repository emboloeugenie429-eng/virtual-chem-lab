import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Clock, FlaskConical, GraduationCap, Trophy } from "lucide-react";
import { Meter, PageHeader, Panel, StatCard } from "@/components/chem/kit";
import { scoreTrend, subjectProgress } from "@/lib/chem-data";

export const Route = createFileRoute("/app/progress")({
  head: () => ({
    meta: [
      { title: "My Progress — ChemLab Virtual" },
      { name: "description", content: "Track completed experiments, average score, learning time and topic mastery." },
      { property: "og:title", content: "My Progress — ChemLab Virtual" },
      { property: "og:description", content: "Track completed experiments, average score, learning time and topic mastery." },
    ],
  }),
  component: Progress,
});

function Progress() {
  return (
    <div className="p-6">
      <PageHeader title="My Progress" subtitle="Your mastery across chemistry topics and experiments." />
      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={FlaskConical} value="12" label="Experiments Completed" />
        <StatCard icon={Trophy} value="86%" label="Average Score" />
        <StatCard icon={Clock} value="18.5h" label="Learning Time" />
        <StatCard icon={GraduationCap} value="Level 4" label="Current Level" hint="320 XP to Level 5" />
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.3fr_1fr]">
        <Panel title="Score Trend">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={scoreTrend}>
                <defs>
                  <linearGradient id="prog" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--accent)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" stroke="var(--muted-foreground)" fontSize={11} />
                <YAxis domain={[0, 100]} stroke="var(--muted-foreground)" fontSize={11} />
                <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="score" stroke="var(--accent)" strokeWidth={2.5} fill="url(#prog)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Topic Progress">
          <div className="space-y-4">
            {subjectProgress.map((s) => (
              <Meter key={s.label} value={s.value} label={s.label} tone={s.value >= 80 ? "success" : s.value >= 60 ? "accent" : "warning"} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
