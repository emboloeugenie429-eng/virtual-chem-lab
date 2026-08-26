import { createFileRoute } from "@tanstack/react-router";
import { HelpCircle, Plus } from "lucide-react";
import { Chip, LabButton, PageHeader, Panel } from "@/components/chem/kit";
import { quizQuestions } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/questions")({
  head: () => ({
    meta: [
      { title: "Question Bank — ChemLab Virtual Teacher" },
      { name: "description", content: "Build and edit multiple-choice questions used in ChemLab assessments." },
      { property: "og:title", content: "Question Bank — ChemLab Virtual Teacher" },
      { property: "og:description", content: "Build and edit multiple-choice questions used in ChemLab assessments." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherQuestions,
});

function TeacherQuestions() {
  return (
    <div className="p-6">
      <PageHeader
        title="Question Bank"
        subtitle={`${quizQuestions.length} questions · Acid-Base Neutralization`}
        actions={
          <LabButton>
            <Plus className="h-4 w-4" />
            Add Question
          </LabButton>
        }
      />

      <div className="space-y-4">
        {quizQuestions.map((q, i) => (
          <Panel key={i} title={`Question ${i + 1}`} icon={HelpCircle}>
            <p className="text-sm font-medium">{q.question}</p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((o, j) => (
                <li
                  key={o}
                  className={
                    j === q.correct
                      ? "flex items-center justify-between gap-2 rounded-lg border border-success/45 bg-success/10 px-3 py-2 text-xs text-foreground"
                      : "flex items-center justify-between gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs text-muted-foreground"
                  }
                >
                  <span>
                    <span className="mr-2 font-mono text-[11px] text-muted-foreground">
                      {String.fromCharCode(65 + j)}
                    </span>
                    {o}
                  </span>
                  {j === q.correct && <Chip tone="success">Correct</Chip>}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
              <span className="font-semibold text-accent">Explanation: </span>
              {q.explanation}
            </p>
            <div className="mt-3 flex gap-2">
              <LabButton variant="outline">Edit</LabButton>
              <LabButton variant="danger">Delete</LabButton>
            </div>
          </Panel>
        ))}
      </div>
    </div>
  );
}
