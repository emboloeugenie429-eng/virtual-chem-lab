import { createFileRoute } from "@tanstack/react-router";
import { KeyRound, Pencil } from "lucide-react";
import { Chip, LabButton, PageHeader, Panel, StatCard } from "@/components/chem/kit";
import { Clock, FlaskConical, Trophy } from "lucide-react";

export const Route = createFileRoute("/app/profile")({
  head: () => ({
    meta: [
      { title: "Student Profile — ChemLab Virtual" },
      { name: "description", content: "Your student identity, school details and laboratory statistics." },
      { property: "og:title", content: "Student Profile — ChemLab Virtual" },
      { property: "og:description", content: "Your student identity, school details and laboratory statistics." },
    ],
  }),
  component: Profile,
});

const fields = [
  ["Full Name", "Eugenie Embolo"],
  ["Student ID", "STU-2041"],
  ["Username", "eugenie.e"],
  ["Email", "eugenie.embolo@school.edu"],
  ["School", "Government High School"],
  ["Class / Level", "Form 5A"],
];

function Profile() {
  return (
    <div className="p-6">
      <PageHeader
        title="Student Profile"
        subtitle="Manage your identity and account security."
        actions={
          <>
            <LabButton variant="outline">
              <KeyRound className="h-4 w-4" />
              Change Password
            </LabButton>
            <LabButton>
              <Pencil className="h-4 w-4" />
              Edit Profile
            </LabButton>
          </>
        }
      />
      <div className="grid gap-4 xl:grid-cols-[320px_1fr]">
        <Panel title="Identity">
          <div className="flex flex-col items-center py-2 text-center">
            <span className="grid h-24 w-24 place-items-center rounded-full border border-accent/40 bg-accent/12 text-2xl font-semibold text-accent">
              EE
            </span>
            <div className="mt-3 text-[16px] font-semibold">Eugenie Embolo</div>
            <div className="text-[12px] text-muted-foreground">STU-2041 · Form 5A</div>
            <Chip tone="success" className="mt-3">
              Active Student
            </Chip>
          </div>
        </Panel>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <StatCard icon={FlaskConical} value="12" label="Experiments Completed" />
            <StatCard icon={Trophy} value="86%" label="Average Score" />
            <StatCard icon={Clock} value="18.5h" label="Learning Hours" />
          </div>
          <Panel title="Account Details">
            <div className="grid gap-3 md:grid-cols-2">
              {fields.map(([k, v]) => (
                <div key={k} className="rounded-lg border border-border bg-surface-2 p-3">
                  <div className="text-[11px] text-muted-foreground">{k}</div>
                  <div className="mt-1 text-[13px] font-medium">{v}</div>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
