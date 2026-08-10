import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, EyeOff, Lock, User, WifiOff } from "lucide-react";
import { useState } from "react";
import { AuthAside } from "@/components/chem/AuthAside";
import { Field, LabButton, inputClass } from "@/components/chem/kit";
import { TitleBar } from "@/components/chem/kit";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign In — ChemLab Virtual" },
      { name: "description", content: "Sign in to ChemLab Virtual to continue your chemistry experiments." },
      { property: "og:title", content: "Sign In — ChemLab Virtual" },
      { property: "og:description", content: "Learn, experiment and discover in a safe virtual laboratory." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [show, setShow] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TitleBar subtitle="Authentication" />
      <main className="grid flex-1 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
        <AuthAside
          heading="Chemistry Without Limits"
          text="Learn, experiment and discover in a safe virtual laboratory."
        />

        <section className="flex items-center justify-center px-8 py-10">
          <div className="panel w-full max-w-[400px] p-7">
            <h1 className="text-[22px] font-semibold tracking-tight">Welcome Back</h1>
            <p className="mt-1 text-sm text-muted-foreground">Sign in to enter the virtual laboratory.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Student ID / Username">
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input className={`${inputClass} pl-9`} placeholder="STU-2041" defaultValue="STU-2041" />
                </div>
              </Field>

              <Field label="Password">
                <div className="relative">
                  <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type={show ? "text" : "password"}
                    className={`${inputClass} pl-9 pr-10`}
                    placeholder="••••••••"
                    defaultValue="chemlab123"
                  />
                  <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    aria-label="Show password"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-accent"
                  >
                    {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </Field>

              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-muted-foreground">
                  <input type="checkbox" defaultChecked className="accent-[var(--accent)]" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="text-accent hover:underline">
                  Forgot password?
                </Link>
              </div>

              <Link to="/app" className="block">
                <LabButton className="w-full">Sign In</LabButton>
              </Link>
              <Link to="/app" className="block">
                <LabButton variant="outline" className="w-full">
                  Continue as Guest
                </LabButton>
              </Link>
            </form>

            <div className="mt-5 flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-3 py-2 text-[11px] text-muted-foreground">
              <WifiOff className="h-3.5 w-3.5 text-success" />
              Offline Mode Available — experiments run locally without internet.
            </div>

            <p className="mt-5 text-center text-xs text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-accent hover:underline">
                Create one
              </Link>
            </p>
            <p className="mt-3 text-center text-[11px] text-muted-foreground">
              Teacher?{" "}
              <Link to="/teacher" className="text-accent hover:underline">
                Open teacher workspace
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
