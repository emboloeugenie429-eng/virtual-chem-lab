import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Bell, HelpCircle, Search } from "lucide-react";
import { Sidebar, teacherNav } from "@/components/chem/Sidebar";
import { TitleBar, inputClass } from "@/components/chem/kit";

export const Route = createFileRoute("/teacher")({
  component: TeacherLayout,
});

function TeacherLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background">
      <TitleBar subtitle="Teacher Workspace" />
      <div className="flex min-h-0 flex-1">
        <Sidebar groups={teacherNav} user={{ name: "Dr. Samuel Fon", role: "Chemistry Teacher", initials: "SF" }} />
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex h-14 shrink-0 items-center justify-between gap-4 border-b border-border bg-surface px-5">
            <div className="relative w-full max-w-sm">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input className={`${inputClass} py-2 pl-9`} placeholder="Search students, experiments, questions…" />
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[11px] font-medium text-accent">
                Form 5A · 32 students
              </span>
              <button
                aria-label="Help"
                className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-accent"
              >
                <HelpCircle className="h-4 w-4" />
              </button>
              <button
                aria-label="Notifications"
                className="relative grid h-9 w-9 place-items-center rounded-lg border border-border text-muted-foreground hover:text-accent"
              >
                <Bell className="h-4 w-4" />
                <span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
              </button>
            </div>
          </div>
          <main className="min-h-0 flex-1 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
