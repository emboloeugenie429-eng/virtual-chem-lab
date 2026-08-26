import { createFileRoute } from "@tanstack/react-router";
import { Bell, School, ShieldAlert, SlidersHorizontal } from "lucide-react";
import { Field, LabButton, PageHeader, Panel, SafetyAlert, inputClass } from "@/components/chem/kit";

export const Route = createFileRoute("/teacher/settings")({
  head: () => ({
    meta: [
      { title: "Teacher Settings — ChemLab Virtual" },
      { name: "description", content: "Configure class details, grading rules, lab safety limits and notifications." },
      { property: "og:title", content: "Teacher Settings — ChemLab Virtual" },
      { property: "og:description", content: "Configure class details, grading rules, lab safety limits and notifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeacherSettings,
});

function Toggle({ label, hint, defaultChecked }: { label: string; hint: string; defaultChecked?: boolean }) {
  return (
    <label className="flex items-start justify-between gap-4 rounded-lg border border-border bg-surface-2 px-3.5 py-3">
      <span>
        <span className="block text-[13px] font-medium">{label}</span>
        <span className="mt-0.5 block text-[11px] text-muted-foreground">{hint}</span>
      </span>
      <input type="checkbox" defaultChecked={defaultChecked} className="mt-1 accent-[var(--accent)]" />
    </label>
  );
}

function TeacherSettings() {
  return (
    <div className="p-6">
      <PageHeader
        title="Settings"
        subtitle="Class configuration, grading and laboratory safety"
        actions={<LabButton>Save Changes</LabButton>}
      />

      <div className="grid gap-5 xl:grid-cols-2">
        <Panel title="Class Details" icon={School}>
          <div className="space-y-4">
            <Field label="Teacher name">
              <input className={inputClass} defaultValue="Dr. Samuel Fon" />
            </Field>
            <Field label="Primary class">
              <input className={inputClass} defaultValue="Form 5A" />
            </Field>
            <Field label="School">
              <input className={inputClass} defaultValue="Government Bilingual High School" />
            </Field>
            <Field label="Academic term">
              <input className={inputClass} defaultValue="Term 3 · 2026" />
            </Field>
          </div>
        </Panel>

        <Panel title="Grading" icon={SlidersHorizontal}>
          <div className="space-y-4">
            <Field label="Pass mark (%)" hint={<span className="text-muted-foreground">Students below this are flagged for review.</span>}>
              <input className={inputClass} type="number" defaultValue={65} />
            </Field>
            <Field label="Maximum attempts per quiz">
              <input className={inputClass} type="number" defaultValue={3} />
            </Field>
            <Toggle label="Auto-grade quizzes" hint="Score multiple-choice submissions immediately." defaultChecked />
            <Toggle label="Publish results automatically" hint="Students see scores without manual release." />
          </div>
        </Panel>

        <Panel title="Laboratory Safety" icon={ShieldAlert}>
          <div className="space-y-4">
            <SafetyAlert title="Safety enforcement active" tone="success">
              Students must acknowledge hazard warnings before handling corrosive or oxidising reagents.
            </SafetyAlert>
            <Toggle label="Require goggles check" hint="Block simulation start until PPE is confirmed." defaultChecked />
            <Toggle label="Restrict concentrated acids" hint="Limit Form 4 classes to dilute reagents only." defaultChecked />
            <Toggle label="Allow offline experiments" hint="Students can run simulations without internet." defaultChecked />
          </div>
        </Panel>

        <Panel title="Notifications" icon={Bell}>
          <div className="space-y-4">
            <Toggle label="Submission alerts" hint="Notify me when a lab report is submitted." defaultChecked />
            <Toggle label="Low performance alerts" hint="Notify me when a student drops below the pass mark." defaultChecked />
            <Toggle label="Weekly summary email" hint="Send a class digest every Friday." />
          </div>
        </Panel>
      </div>
    </div>
  );
}
