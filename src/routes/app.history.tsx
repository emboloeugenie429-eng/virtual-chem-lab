import { createFileRoute, Link } from "@tanstack/react-router";
import { History } from "lucide-react";
import { Chip, DataTable, PageHeader, Panel, statusTone } from "@/components/chem/kit";
import { recentExperiments } from "@/lib/chem-data";

export const Route = createFileRoute("/app/history")({
  head: () => ({
    meta: [
      { title: "Experiment History — ChemLab Virtual" },
      { name: "description", content: "A full log of every experiment you performed, with duration, score and status." },
      { property: "og:title", content: "Experiment History — ChemLab Virtual" },
      { property: "og:description", content: "A full log of every experiment you performed, with duration, score and status." },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <div className="p-6">
      <PageHeader title="Experiment History" subtitle="Every laboratory session recorded on this account." />
      <Panel title="Session Log" icon={History} bodyClassName="p-2">
        <DataTable
          columns={["Experiment", "Date", "Duration", "Score", "Status", "Action"]}
          rows={[...recentExperiments, ...recentExperiments.slice(0, 3)].map((r) => [
            <span className="font-medium">{r.name}</span>,
            <span className="text-muted-foreground">{r.date}</span>,
            r.duration,
            <span className="font-mono">{r.score}</span>,
            <Chip tone={statusTone(r.status)}>{r.status}</Chip>,
            <Link to="/app/results" className="text-accent hover:underline">
              View
            </Link>,
          ])}
        />
      </Panel>
    </div>
  );
}
