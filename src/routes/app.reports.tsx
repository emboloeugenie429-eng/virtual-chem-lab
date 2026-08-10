import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { LabButton, Meter, PageHeader, Panel, StatCard } from "@/components/chem/kit";
import { Clock, FlaskConical, TrendingUp, Trophy } from "lucide-react";
import { scoreTrend, subjectProgress } from "@/lib/chem-data";

export const Route = createFileRoute("/app/reports")({
  head: () => ({
    meta: [
      { title: "Reports & Grades — ChemLab Virtual" },
      { name: "description", content: "Score progression, completion rate and subject performance charts for your chemistry work." },
      { property: "og:title", content: "Reports & Grades — ChemLab Virtual" },
      { property: "og:description", content: "Score progression, completion rate and subject performance charts for your chemistry work." },
    ],
  }),
  component: Reports,
});

const axis = { stroke: "var(--muted-foreground)", fontSize: 11 };

function Reports() {
  return (
    <div className="p-6">
      <PageHeader
        title="Reports & Grades"
        subtitle="Performance summary for the current term."
        actions={
          <LabButton variant="outline">
            <Download className="h-4 w-4" />
            Export Report
          </LabButton>
        }
      />
      <div className="mb-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard icon={Trophy} value="86%" label="Overall Score" />
        <StatCard icon={FlaskConical} value="12" label="Experiments Completed" />
        <StatCard icon={TrendingUp} value="+14%" label="Improvement This Term" />
        <StatCard icon={Clock} value="18.5h" label="Learning Hours" />
      </div>
      <div className="grid gap-4 xl:grid-cols-2">
        <Panel title="Score Progression">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={scoreTrend}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" {...axis} />
                <YAxis domain={[0, 100]} {...axis} />
                <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Line type="monotone" dataKey="score" stroke="var(--accent)" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Quiz Performance">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectProgress}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis dataKey="label" {...axis} />
                <YAxis domain={[0, 100]} {...axis} />
                <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="value" fill="var(--primary)" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Subject Performance" className="xl:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            {subjectProgress.map((s) => (
              <Meter key={s.label} value={s.value} label={s.label} tone={s.value >= 80 ? "success" : s.value >= 60 ? "accent" : "warning"} />
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
}
