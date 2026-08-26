import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, UserPlus } from "lucide-react";
import {
  Chip,
  DataTable,
  LabButton,
  PageHeader,
  Panel,
  inputClass,
  statusTone,
} from "@/components/chem/kit";
import { students } from "@/lib/chem-data";

export const Route = createFileRoute("/teacher/students")({
  head: () => ({
    meta: [
      { title: "Students — ChemLab Virtual Teacher" },
      { name: "description", content: "Manage enrolled students, track completion and review averages by class." },
      { property: "og:title", content: "Students — ChemLab Virtual Teacher" },
      { property: "og:description", content: "Manage enrolled students, track completion and review averages by class." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherStudents,
});

const classes = ["All classes", "Form 4A", "Form 5A", "Form 5B"];

function TeacherStudents() {
  const [query, setQuery] = useState("");
  const [klass, setKlass] = useState("All classes");

  const rows = students.filter(
    (s) =>
      (klass === "All classes" || s.class === klass) &&
      (s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase())),
  );

  return (
    <div className="p-6">
      <PageHeader
        title="Students"
        subtitle={`${students.length} learners enrolled across 3 classes`}
        actions={
          <LabButton>
            <UserPlus className="h-4 w-4" />
            Enrol Student
          </LabButton>
        }
      />

      <Panel bodyClassName="p-0">
        <div className="flex flex-wrap items-center gap-3 border-b border-border p-4">
          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className={`${inputClass} py-2 pl-9`}
              placeholder="Search by name or student ID…"
            />
          </div>
          <div className="flex items-center gap-1.5">
            {classes.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setKlass(c)}
                className={
                  c === klass
                    ? "rounded-lg border border-accent/50 bg-accent/12 px-3 py-1.5 text-[12px] font-medium text-accent"
                    : "rounded-lg border border-border px-3 py-1.5 text-[12px] text-muted-foreground hover:text-foreground"
                }
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <DataTable
          columns={["Student", "ID", "Class", "Experiments", "Average", "Last active", "Status", ""]}
          rows={rows.map((s) => [
            <span className="font-medium">{s.name}</span>,
            <span className="font-mono text-xs text-muted-foreground">{s.id}</span>,
            s.class,
            s.done,
            s.avg,
            s.last,
            <Chip tone={statusTone(s.status)}>{s.status}</Chip>,
            <button className="text-xs text-accent hover:underline">View</button>,
          ])}
        />
        {rows.length === 0 && (
          <p className="p-6 text-center text-sm text-muted-foreground">No students match this filter.</p>
        )}
      </Panel>
    </div>
  );
}
