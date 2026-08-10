import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "@/components/chem/Logo";
import { Beaker, Burette, ConicalFlask, TestTube, Cylinder } from "@/components/chem/apparatus";
import { LabButton } from "@/components/chem/kit";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChemLab Virtual — Interactive Virtual Chemistry Laboratory" },
      {
        name: "description",
        content:
          "ChemLab Virtual is a desktop virtual chemistry laboratory for secondary school students: 3D apparatus, guided experiments, quizzes and progress tracking.",
      },
      { property: "og:title", content: "ChemLab Virtual — Interactive Virtual Chemistry Laboratory" },
      {
        property: "og:description",
        content: "Explore chemistry through realistic virtual experiments and interactive laboratory equipment.",
      },
    ],
  }),
  component: Splash,
});

const steps = [
  "Loading laboratory assets…",
  "Calibrating apparatus models…",
  "Mounting chemical inventory…",
  "Initializing Virtual Laboratory…",
];

function Splash() {
  const router = useRouter();
  const [progress, setProgress] = useState(6);

  useEffect(() => {
    const t = setInterval(() => setProgress((p) => (p >= 100 ? 100 : p + 2)), 55);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => router.navigate({ to: "/login" }), 500);
      return () => clearTimeout(t);
    }
  }, [progress, router]);

  const step = steps[Math.min(steps.length - 1, Math.floor(progress / 26))];

  return (
    <main
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
      style={{ backgroundImage: "var(--gradient-lab)" }}
    >
      <div className="lab-grid pointer-events-none absolute inset-0 opacity-40" />
      {Array.from({ length: 22 }).map((_, i) => (
        <span
          key={i}
          className="animate-drift pointer-events-none absolute rounded-full bg-accent"
          style={{
            left: `${(i * 37) % 96 + 2}%`,
            top: `${(i * 53) % 88 + 4}%`,
            width: `${3 + (i % 3) * 2}px`,
            height: `${3 + (i % 3) * 2}px`,
            animationDelay: `${(i % 7) * 0.6}s`,
            opacity: 0.35,
          }}
        />
      ))}

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center text-center">
        <Logo size={64} className="glow-ring rounded-2xl" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight">
          ChemLab <span className="text-gradient-accent">Virtual</span>
        </h1>
        <p className="mt-2 text-sm font-medium tracking-[0.18em] text-accent uppercase">
          Interactive Virtual Chemistry Laboratory
        </p>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Explore chemistry through realistic virtual experiments, interactive laboratory equipment and
          scientific simulations.
        </p>

        <div className="relative mt-10 flex w-full items-end justify-center gap-6">
          <div className="absolute bottom-0 h-6 w-[560px] max-w-full rounded-md border border-border"
            style={{ backgroundImage: "var(--gradient-bench)" }}
          />
          <Cylinder className="h-28 w-10" fill={0.4} />
          <Beaker className="relative h-32 w-20" fill={0.5} />
          <Burette className="relative h-44 w-14" fill={0.72} />
          <ConicalFlask className="relative h-36 w-24" fill={0.45} liquid="var(--accent-soft)" />
          <TestTube className="relative h-28 w-10" fill={0.55} liquid="var(--warning)" />
          <TestTube className="relative h-28 w-10" fill={0.35} liquid="var(--destructive)" />
        </div>

        <div className="mt-14 w-full max-w-md">
          <div className="mb-2 flex items-center justify-between text-xs text-muted-foreground">
            <span>{step}</span>
            <span className="font-mono text-accent">{progress}%</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2">
            <div className="h-full rounded-full bg-accent transition-all" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link to="/login">
              <LabButton variant="outline">Skip to Sign In</LabButton>
            </Link>
          </div>
          <p className="mt-6 text-[11px] text-muted-foreground">
            Version 1.0.0 · Final Year Project · Windows Desktop Edition
          </p>
        </div>
      </div>
    </main>
  );
}
