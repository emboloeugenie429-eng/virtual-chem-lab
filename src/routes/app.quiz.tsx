import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ClipboardList, Timer } from "lucide-react";
import { useState } from "react";
import { Chip, LabButton, Meter, PageHeader, Panel } from "@/components/chem/kit";
import { quizQuestions } from "@/lib/chem-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/app/quiz")({
  head: () => ({
    meta: [
      { title: "Experiment Assessment — ChemLab Virtual" },
      { name: "description", content: "Answer five questions on the acid-base neutralization experiment and get scored instantly." },
      { property: "og:title", content: "Experiment Assessment — ChemLab Virtual" },
      { property: "og:description", content: "Answer five questions on the acid-base neutralization experiment and get scored instantly." },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const q = quizQuestions[index]!;

  return (
    <div className="p-6">
      <PageHeader
        title="Experiment Assessment"
        subtitle="Acid-Base Neutralization · 5 questions · 10 minutes"
        actions={
          <Chip tone="warning">
            <Timer className="h-3 w-3" />
            09:42
          </Chip>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[1fr_290px]">
        <Panel title={`Question ${index + 1} of ${quizQuestions.length}`} icon={ClipboardList}>
          <div className="mb-4">
            <Meter value={((index + 1) / quizQuestions.length) * 100} label="Quiz progress" />
          </div>
          <h2 className="text-[17px] font-medium leading-snug">{q.question}</h2>
          <div className="mt-4 space-y-2">
            {q.options.map((opt, i) => {
              const picked = answers[index] === i;
              return (
                <button
                  key={opt}
                  onClick={() => setAnswers((a) => ({ ...a, [index]: i }))}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg border px-3.5 py-3 text-left text-[13px] transition-colors",
                    picked ? "border-accent/60 bg-accent/12 text-accent" : "border-border bg-surface-2 hover:border-accent/40",
                  )}
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md border border-border text-[11px] font-semibold">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {opt}
                </button>
              );
            })}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <LabButton variant="outline" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
              <ChevronLeft className="h-4 w-4" />
              Previous
            </LabButton>
            {index === quizQuestions.length - 1 ? (
              <Link to="/app/results">
                <LabButton variant="accent">Submit Quiz</LabButton>
              </Link>
            ) : (
              <LabButton onClick={() => setIndex((i) => Math.min(quizQuestions.length - 1, i + 1))}>
                Next
                <ChevronRight className="h-4 w-4" />
              </LabButton>
            )}
          </div>
        </Panel>

        <Panel title="Question Navigator">
          <div className="grid grid-cols-5 gap-2">
            {quizQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={cn(
                  "grid h-9 place-items-center rounded-md border text-[12px]",
                  i === index
                    ? "border-accent bg-accent/15 text-accent"
                    : answers[i] !== undefined
                      ? "border-success/50 bg-success/10 text-success"
                      : "border-border text-muted-foreground",
                )}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
            Answered questions appear in green. You may revisit any question before submitting.
          </p>
        </Panel>
      </div>
    </div>
  );
}
