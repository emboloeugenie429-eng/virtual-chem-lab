import { Link, useRouterState } from "@tanstack/react-router";
import {
  Atom,
  Beaker,
  BookOpen,
  ClipboardList,
  FlaskConical,
  History,
  Home,
  LineChart,
  LogOut,
  Settings,
  ShieldAlert,
  TestTubes,
  Trophy,
  User,
  Users,
  FileBarChart,
  HelpCircle,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoLockup } from "./Logo";

type Item = { label: string; to: string; icon: LucideIcon };
type Group = { title: string; items: Item[] };

export const studentNav: Group[] = [
  {
    title: "Main",
    items: [
      { label: "Home", to: "/app", icon: Home },
      { label: "Experiments", to: "/app/experiments", icon: FlaskConical },
      { label: "Laboratory", to: "/app/laboratory", icon: Atom },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Apparatus", to: "/app/apparatus", icon: Beaker },
      { label: "Chemicals", to: "/app/chemicals", icon: TestTubes },
      { label: "Safety Data", to: "/app/safety", icon: ShieldAlert },
      { label: "Lab Notebook", to: "/app/notebook", icon: BookOpen },
    ],
  },
  {
    title: "Assessment",
    items: [
      { label: "Quizzes", to: "/app/quiz", icon: ClipboardList },
      { label: "Results", to: "/app/results", icon: Trophy },
      { label: "Reports & Grades", to: "/app/reports", icon: FileBarChart },
      { label: "Progress", to: "/app/progress", icon: LineChart },
      { label: "History", to: "/app/history", icon: History },
    ],
  },
  {
    title: "Account",
    items: [
      { label: "Profile", to: "/app/profile", icon: User },
      { label: "Settings", to: "/app/settings", icon: Settings },
    ],
  },
];

export const teacherNav: Group[] = [
  {
    title: "Teaching",
    items: [
      { label: "Dashboard", to: "/teacher", icon: LayoutDashboard },
      { label: "Students", to: "/teacher/students", icon: Users },
      { label: "Experiments", to: "/teacher/experiments", icon: FlaskConical },
      { label: "Questions", to: "/teacher/questions", icon: HelpCircle },
    ],
  },
  {
    title: "Analysis",
    items: [
      { label: "Results", to: "/teacher/results", icon: Trophy },
      { label: "Reports", to: "/teacher/reports", icon: FileBarChart },
      { label: "Settings", to: "/teacher/settings", icon: Settings },
    ],
  },
];

export function Sidebar({
  groups,
  user,
}: {
  groups: Group[];
  user: { name: string; role: string; initials: string };
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="flex w-[248px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar">
      <div className="border-b border-sidebar-border px-4 py-4">
        <LogoLockup />
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-3">
        {groups.map((group) => (
          <div key={group.title} className="mb-4">
            <div className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
              {group.title}
            </div>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const active = pathname === item.to || (item.to !== "/app" && item.to !== "/teacher" && pathname.startsWith(item.to));
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={cn(
                        "group relative flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] transition-colors",
                        active
                          ? "bg-accent/12 font-medium text-accent"
                          : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                      )}
                    >
                      {active && (
                        <span className="absolute left-0 top-1.5 bottom-1.5 w-[3px] rounded-full bg-accent" />
                      )}
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3 rounded-lg border border-border bg-surface-2 p-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
            {user.initials}
          </span>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-[13px] font-medium">{user.name}</div>
            <div className="text-[11px] text-muted-foreground">{user.role}</div>
          </div>
        </div>
        <Link
          to="/logout"
          className="mt-2 flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2 text-[13px] text-muted-foreground transition-colors hover:border-destructive/50 hover:text-destructive"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
