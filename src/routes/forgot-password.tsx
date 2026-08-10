import { createFileRoute, Link } from "@tanstack/react-router";
import { KeyRound, Mail, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { AuthAside } from "@/components/chem/AuthAside";
import { Field, LabButton, TitleBar, inputClass } from "@/components/chem/kit";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Recover Your Account — ChemLab Virtual" },
      { name: "description", content: "Recover access to your ChemLab Virtual student account in three steps." },
      { property: "og:title", content: "Recover Your Account — ChemLab Virtual" },
      { property: "og:description", content: "Reset your ChemLab Virtual password and get back to the lab." },
    ],
  }),
  component: ForgotPasswordPage,
});

const steps = ["Identify Account", "Verify Code", "Reset Password"];

function ForgotPasswordPage() {
  const [step, setStep] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TitleBar subtitle="Account Recovery" />
      <main className="grid flex-1 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
        <AuthAside
          heading="Locked out of the lab?"
          text="Account recovery keeps your experiments, reports and grades safe."
        />
        <section className="flex items-center justify-center px-8 py-10">
          <div className="panel w-full max-w-[420px] p-7">
            <div className="mb-6 flex items-center gap-2">
              {steps.map((s, i) => (
                <div key={s} className="flex flex-1 flex-col gap-1.5">
                  <div className={`h-1 rounded-full ${i <= step ? "bg-accent" : "bg-surface-2"}`} />
                  <span className={`text-[10px] ${i <= step ? "text-accent" : "text-muted-foreground"}`}>{s}</span>
                </div>
              ))}
            </div>

            {step === 0 && (
              <>
                <h1 className="text-[22px] font-semibold tracking-tight">Forgot Password?</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Enter your email or student ID and we will help you recover your account.
                </p>
                <div className="mt-6 space-y-4">
                  <Field label="Email / Student ID">
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input className={`${inputClass} pl-9`} placeholder="student@school.edu" />
                    </div>
                  </Field>
                  <LabButton className="w-full" onClick={() => setStep(1)}>
                    Continue
                  </LabButton>
                </div>
              </>
            )}

            {step === 1 && (
              <>
                <h1 className="text-[22px] font-semibold tracking-tight">Verify Code</h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  We sent a 6-digit verification code to your registered email.
                </p>
                <div className="mt-6 flex gap-2">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <input
                      key={i}
                      maxLength={1}
                      className={`${inputClass} h-12 px-0 text-center font-mono text-lg`}
                    />
                  ))}
                </div>
                <LabButton className="mt-5 w-full" onClick={() => setStep(2)}>
                  Verify Code
                </LabButton>
                <button
                  className="mt-3 w-full text-center text-xs text-muted-foreground hover:text-accent"
                  onClick={() => setStep(0)}
                >
                  Use a different account
                </button>
              </>
            )}

            {step === 2 && (
              <>
                <h1 className="text-[22px] font-semibold tracking-tight">Reset Password</h1>
                <p className="mt-1 text-sm text-muted-foreground">Choose a new password for your account.</p>
                <div className="mt-6 space-y-4">
                  <Field label="New Password">
                    <div className="relative">
                      <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input type="password" className={`${inputClass} pl-9`} placeholder="••••••••" />
                    </div>
                  </Field>
                  <Field label="Confirm New Password">
                    <div className="relative">
                      <ShieldCheck className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <input type="password" className={`${inputClass} pl-9`} placeholder="••••••••" />
                    </div>
                  </Field>
                  <Link to="/login" className="block">
                    <LabButton className="w-full">Save New Password</LabButton>
                  </Link>
                </div>
              </>
            )}

            <p className="mt-6 text-center text-xs text-muted-foreground">
              <Link to="/login" className="text-accent hover:underline">
                Back to sign in
              </Link>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
