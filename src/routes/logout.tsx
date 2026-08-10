import { createFileRoute, Link } from "@tanstack/react-router";
import { LogOut } from "lucide-react";
import { LabButton, TitleBar } from "@/components/chem/kit";

export const Route = createFileRoute("/logout")({
  head: () => ({
    meta: [
      { title: "Sign Out — ChemLab Virtual" },
      { name: "description", content: "Confirm signing out of your ChemLab Virtual laboratory session." },
      { property: "og:title", content: "Sign Out — ChemLab Virtual" },
      { property: "og:description", content: "End your virtual laboratory session safely." },
    ],
  }),
  component: LogoutPage,
});

function LogoutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TitleBar subtitle="Session" />
      <main
        className="relative flex flex-1 items-center justify-center px-6"
        style={{ backgroundImage: "var(--gradient-lab)" }}
      >
        <div className="lab-grid absolute inset-0 opacity-30" />
        <div className="panel relative w-full max-w-[420px] p-7 text-center">
          <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-destructive/40 bg-destructive/10 text-destructive">
            <LogOut className="h-5 w-5" />
          </span>
          <h1 className="mt-4 text-xl font-semibold tracking-tight">Sign out of ChemLab Virtual?</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Unsaved observations in the current experiment will be stored locally and restored the next time you
            sign in.
          </p>
          <div className="mt-6 flex gap-2">
            <Link to="/app" className="flex-1">
              <LabButton variant="outline" className="w-full">
                Stay Signed In
              </LabButton>
            </Link>
            <Link to="/login" className="flex-1">
              <LabButton variant="danger" className="w-full">
                Sign Out
              </LabButton>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
