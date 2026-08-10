import { createFileRoute, Link } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { apparatusRender, Beaker as BeakerArt } from "@/components/chem/apparatus";
import { Chip, LabButton, Meter, PageHeader, inputClass } from "@/components/chem/kit";
import { experiments } from "@/lib/chem-data";

export const Route = createFileRoute("/app/experiments/")({
  head: () => ({
    meta: [
      { title: "Experiment Library — ChemLab Virtual" },
      { name: "description", content: "Browse 11 guided chemistry experiments and enter the virtual laboratory." },
      { property: "og:title", content: "Experiment Library — ChemLab Virtual" },
      { property: "og:description", content: "Choose an experiment and enter the virtual laboratory." },
    ],
  }),
  component: ExperimentLibrary,
});

const filters = ["All", "Beginner", "Intermediate", "Advanced", "Completed", "In Progress"] as const;

const art: Record<string, keyof typeof apparatusRender> = {
  "acid-base-neutralization": "Conical Flask",
  "flame-test": "Bunsen Burner",
  "solubility-test": "Beaker",
  "separation-of-mixtures": "Funnel",
  "acid-base-titration": "Burette",
  "redox-reaction": "Test Tube",
  "preparation-of-solutions": "Digital Balance",
  "chemical-reaction-rates": "Measuring Cylinder",
  electrochemistry: "Retort Stand",
  equilibrium: "Thermometer",
  "reaction-kinetics": "Pipette",
};

function ExperimentLibrary() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const list = useMemo(
    () =>
      experiments.filter((e) => {
        const matchesQuery = e.name.toLowerCase().includes(query.toLowerCase());
        const matchesFilter =
          filter === "All"
            ? true
            : filter === "Completed"
              ? e.progress === 100
              : filter === "In Progress"
                ? e.progress > 0 && e.progress < 100
                : e.difficulty === filter;
        return matchesQuery && matchesFilter;
      }),
    [filter, query],
  );

  return (
    <div className="p-6">
      <PageHeader title="Experiments" subtitle="Choose an experiment and enter the virtual laboratory." />

      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div className="relative w-full max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className={`${inputClass} py-2 pl-9`}
            placeholder="Search experiments..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                filter === f
                  ? "border-accent/50 bg-accent/12 text-accent"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((e) => {
          const Art = apparatusRender[art[e.id] ?? "Beaker"] ?? BeakerArt;
          return (
            <article key={e.id} className="panel flex flex-col overflow-hidden">
              <div
                className="relative flex h-40 items-center justify-center border-b border-border"
                style={{ backgroundImage: "var(--gradient-lab)" }}
              >
                <div className="lab-grid absolute inset-0 opacity-30" />
                <Art className="relative h-32 w-24" fill={0.45} />
                <span className="absolute left-3 top-3">
                  <Chip
                    tone={
                      e.difficulty === "Beginner" ? "success" : e.difficulty === "Intermediate" ? "warning" : "danger"
                    }
                  >
                    {e.difficulty}
                  </Chip>
                </span>
                <span className="absolute right-3 top-3 rounded-full border border-border bg-surface/80 px-2 py-0.5 text-[11px] text-muted-foreground">
                  {e.duration}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-[15px] font-semibold tracking-tight">{e.name}</h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed text-muted-foreground">{e.description}</p>
                <div className="mt-4">
                  <Meter value={e.progress} label={e.progress === 100 ? "Completed" : "Progress"} />
                </div>
                <Link to="/app/experiments/$id" params={{ id: e.id }} className="mt-4">
                  <LabButton variant="outline" className="w-full">
                    View Experiment
                  </LabButton>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
