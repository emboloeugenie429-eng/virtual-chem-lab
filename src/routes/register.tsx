import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { AuthAside } from "@/components/chem/AuthAside";
import { Field, LabButton, TitleBar, inputClass } from "@/components/chem/kit";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Create Student Account — ChemLab Virtual" },
      { name: "description", content: "Register a student account to access the ChemLab Virtual laboratory." },
      { property: "og:title", content: "Create Student Account — ChemLab Virtual" },
      { property: "og:description", content: "Join ChemLab Virtual and start performing safe virtual experiments." },
    ],
  }),
  component: RegisterPage,
});

function Rule({ ok, children }: { ok: boolean; children: string }) {
  return (
    <span className={`flex items-center gap-1.5 text-[11px] ${ok ? "text-success" : "text-destructive"}`}>
      {ok ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
      {children}
    </span>
  );
}

function RegisterPage() {
  const [password, setPassword] = useState("Chem2026!");
  const [confirm, setConfirm] = useState("Chem2026!");
  const strong = password.length >= 8 && /[A-Z]/.test(password) && /\d/.test(password);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TitleBar subtitle="Student Registration" />
      <main className="grid flex-1 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
        <AuthAside
          heading="Join the Virtual Laboratory"
          text="Create your student account to run experiments, record observations and track your progress."
        />
        <section className="flex items-center justify-center px-8 py-10">
          <div className="panel w-full max-w-[540px] p-7">
            <h1 className="text-[22px] font-semibold tracking-tight">Student Registration</h1>
            <p className="mt-1 text-sm text-muted-foreground">All fields are required unless marked optional.</p>

            <form className="mt-6 grid grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <Field label="Full Name">
                <input className={inputClass} placeholder="Eugenie Embolo" />
              </Field>
              <Field label="Student ID">
                <input className={inputClass} placeholder="STU-2041" />
              </Field>
              <Field label="Username">
                <input className={inputClass} placeholder="eugenie.e" />
              </Field>
              <Field label="Email">
                <input type="email" className={inputClass} placeholder="student@school.edu" />
              </Field>
              <Field label="Password" hint={<Rule ok={strong}>Password requirements satisfied</Rule>}>
                <input
                  type="password"
                  className={inputClass}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Field>
              <Field
                label="Confirm Password"
                hint={
                  confirm === password ? (
                    <Rule ok>Passwords match</Rule>
                  ) : (
                    <Rule ok={false}>Passwords do not match</Rule>
                  )
                }
              >
                <input
                  type="password"
                  className={inputClass}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                />
              </Field>
              <Field label="School">
                <input className={inputClass} placeholder="Government High School" />
              </Field>
              <Field label="Class / Level">
                <select className={inputClass} defaultValue="Form 5">
                  {["Form 3", "Form 4", "Form 5", "Lower Sixth", "Upper Sixth"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </Field>

              <div className="col-span-2 mt-1">
                <Link to="/app">
                  <LabButton className="w-full">Create Account</LabButton>
                </Link>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Already registered?{" "}
                  <Link to="/login" className="text-accent hover:underline">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
