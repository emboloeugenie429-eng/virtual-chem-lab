import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, RotateCcw, TriangleAlert } from "lucide-react";
import { Chip, LabButton, PageHeader, Panel, StatCard } from "@/components/chem/kit";
import { Clock, Target, Trophy } from "lucide-react";

export const Route = createFileRoute("/app/results")({
  head: () => ({
    meta: [
      { title: "Experiment Results — ChemLab Virtual" },
      { name: "description", content: "See your score, accuracy, feedback and improvement areas after each experiment." },
      { property: "og:title", content: "Experiment Results — ChemLab Virtual" },
      { property: "og:description", content: "See your score, accuracy, feedback and improvement areas after each experiment." },
    ],
  }),
  component: Results,
});

function Ring({ value }: { value: number }) {
  const r = 62;
  const c = 2 * Math.PI * r;
  return (
    <svg viewBox="0 0 150 150" className="h-40 w-40">
      <circle cx="75" cy="75" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="12" />
      <circle
        cx="75"
        cy="75"
        r={r}
        fill="none"
        stroke="var(--accent)"
        strokeWidth="12"
        strokeLinecap="round"
        strokeDasharray={`${(value / 100) * c} ${c}`}
        transform="rotate(-90 75 75)"
      />
      <text x="75" y="80" textAnchor="middle" fontSize="30" fill="var(--foreground)" fontWeight="600">
        {value}%
      </text>
    </svg>
  );
}

function Results() {
  return (
    <div className="p-6">
      <PageHeader title="Experiment Completed!" subtitle="Acid-Base Neutralization · Aug 9, 2026" />
      <div className="grid gap-4 xl:grid-cols-[1fr_1.2fr]">
        <Panel title="Your Score">
          <div className="flex flex-col items-center py-4">
            <Ring value={85} />
            <Chip tone="success" className="mt-4">
              Grade A — Very Good
            </Chip>
          </div>
        </Panel>
        <div className="grid gap-4">
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon={Target} value="17/20" label="Correct Answers" />
            <StatCard icon={Trophy} value="85%" label="Experiment Accuracy" />
            <StatCard icon={Clock} value="12 min" label="Time Spent" />
          </div>
          <Panel title="Feedback">
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              Good work! You demonstrated a good understanding of the neutralization process and used the burette
              accurately.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-lg border border-success/40 bg-success/10 p-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-success">
                  <CheckCircle2 className="h-4 w-4" />
                  What You Did Well
                </div>
                <ul className="mt-2 space-y-1 text-[12px] text-muted-foreground">
                  <li>Correct burette technique and readings</li>
                  <li>Accurate identification of the end point</li>
                  <li>Clear written observations</li>
                </ul>
              </div>
              <div className="rounded-lg border border-warning/40 bg-warning/10 p-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-warning">
                  <TriangleAlert className="h-4 w-4" />
                  Areas to Improve
                </div>
                <ul className="mt-2 space-y-1 text-[12px] text-muted-foreground">
                  <li>Add titrant more slowly near the end point</li>
                  <li>Revise pH calculations for strong acids</li>
                  <li>Record initial burette reading before starting</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link to="/app/laboratory">
                <LabButton variant="outline">
                  <RotateCcw className="h-4 w-4" />
                  Try Again
                </LabButton>
              </Link>
              <Link to="/app/notebook">
                <LabButton variant="outline">View Report</LabButton>
              </Link>
              <Link to="/app">
                <LabButton>Back to Dashboard</LabButton>
              </Link>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
