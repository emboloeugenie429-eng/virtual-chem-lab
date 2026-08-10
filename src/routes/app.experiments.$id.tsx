import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AlertTriangle, ArrowRight, Beaker, ListChecks, Target, TestTubes } from "lucide-react";
import { Burette, ConicalFlask, Pipette } from "@/components/chem/apparatus";
import { Chip, LabButton, PageHeader, Panel, SafetyAlert } from "@/components/chem/kit";
import { chemicals, experiments, procedure } from "@/lib/chem-data";

export const Route = createFileRoute("/app/experiments/$id")({
  loader: ({ params }) => {
    const experiment = experiments.find((e) => e.id === params.id);
    if (!experiment) throw notFound();
    return { experiment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Experiment Unavailable — ChemLab Virtual" }, { name: "robots", content: "noindex" }] };
    }
    const { experiment } = loaderData;
    return {
      meta: [
        { title: `${experiment.name} — ChemLab Virtual` },
        { name: "description", content: experiment.description },
        { property: "og:title", content: `${experiment.name} — ChemLab Virtual` },
        { property: "og:description", content: experiment.description },
      ],
    };
  },
  component: ExperimentDetails,
});

const objectives = [
  "Understand how acids and bases react with each other",
  "Identify the neutralization point using an indicator",
  "Measure and interpret pH during the reaction",
  "Observe indicator colour changes and record observations",
];

const required = ["Burette", "Conical flask", "Pipette", "Beaker", "Measuring cylinder", "Dropper"];

function ExperimentDetails() {
  const { experiment } = Route.useLoaderData();

  return (
    <div className="p-6">
      <PageHeader
        title={experiment.name}
        subtitle={experiment.description}
        actions={
          <Link to="/app/laboratory">
            <LabButton>
              Enter Virtual Laboratory
              <ArrowRight className="h-4 w-4" />
            </LabButton>
          </Link>
        }
      />

      <div className="mb-5 flex flex-wrap gap-2">
        <Chip tone="primary">Chemistry</Chip>
        <Chip tone={experiment.difficulty === "Beginner" ? "success" : experiment.difficulty === "Intermediate" ? "warning" : "danger"}>
          {experiment.difficulty}
        </Chip>
        <Chip>{experiment.duration}</Chip>
        <Chip>{experiment.topic}</Chip>
      </div>

      <div className="grid gap-4 xl:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4">
          <Panel title="Learning Objectives" icon={Target}>
            <ul className="space-y-2">
              {objectives.map((o) => (
                <li key={o} className="flex gap-2.5 text-[13px] text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {o}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Procedure" icon={ListChecks}>
            <ol className="space-y-3">
              {procedure.map((step, i) => (
                <li key={step} className="flex gap-3 rounded-lg border border-border bg-surface-2 p-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-accent/15 text-[11px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  <span className="text-[13px] text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </Panel>

          <Panel title="Safety Information" icon={AlertTriangle}>
            <div className="grid gap-3 md:grid-cols-2">
              <SafetyAlert title="⚠ Corrosive Chemicals" tone="warning">
                Handle hydrochloric acid and sodium hydroxide carefully. Avoid contact with skin and eyes.
              </SafetyAlert>
              <SafetyAlert title="⚠ PPE Required" tone="danger">
                Wear safety goggles, a lab coat and gloves before starting the experiment.
              </SafetyAlert>
              <SafetyAlert title="ℹ Spillage" tone="accent">
                Neutralise small acid spills with sodium bicarbonate and report them immediately.
              </SafetyAlert>
              <SafetyAlert title="✓ Waste Disposal" tone="success">
                Neutralised solutions may be washed down the sink with plenty of running water.
              </SafetyAlert>
            </div>
          </Panel>
        </div>

        <div className="space-y-4">
          <Panel title="Required Apparatus" icon={Beaker}>
            <div
              className="mb-4 flex h-40 items-end justify-center gap-4 rounded-lg border border-border"
              style={{ backgroundImage: "var(--gradient-lab)" }}
            >
              <Pipette className="h-28 w-8" />
              <Burette className="h-36 w-12" fill={0.7} />
              <ConicalFlask className="h-28 w-20" fill={0.4} liquid="var(--accent-soft)" />
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {required.map((r) => (
                <li key={r} className="rounded-md border border-border bg-surface-2 px-2.5 py-2 text-[12px]">
                  {r}
                </li>
              ))}
            </ul>
          </Panel>

          <Panel title="Chemicals" icon={TestTubes}>
            <ul className="space-y-2">
              {chemicals.slice(0, 4).map((c) => (
                <li
                  key={c.name}
                  className="flex items-center justify-between rounded-md border border-border bg-surface-2 px-3 py-2"
                >
                  <span className="text-[12px]">
                    {c.name} <span className="font-mono text-muted-foreground">{c.formula}</span>
                  </span>
                  <Chip tone={c.hazard === "Safe" || c.hazard === "Low" ? "success" : "danger"}>{c.hazard}</Chip>
                </li>
              ))}
            </ul>
            <Link to="/app/safety" className="mt-4 block">
              <LabButton variant="outline" className="w-full">
                Open Safety Data Sheet
              </LabButton>
            </Link>
          </Panel>
        </div>
      </div>
    </div>
  );
}
