import { Link } from "@/lib/router";
import { PageHeader, Card } from "@/components/ui";
import { useProgressStore } from "@/store/progressStore";

const PATHWAYS = [
  { title: "Zero to Hero", desc: "Work the stages in order, Foundations to Expert.", to: "/learn" },
  { title: "Programming Languages", desc: "Learn JavaScript fundamentals, then explore more languages as they arrive.", to: "/languages" },
  { title: "Pattern Mastery", desc: "Jump straight to any pattern module.", to: "/patterns" },
  { title: "Interview Sprint", desc: "Blind 75 and ordered challenge tracks.", to: "/challenges" },
  { title: "Playground", desc: "Scratch space to run JS, TS, or Python instantly.", to: "/playground" },
];

export function Home() {
  const rank = useProgressStore((s) => s.progress.rank);
  const xp = useProgressStore((s) => s.progress.xp);

  return (
    <div>
      <PageHeader
        title="Welcome to AlgoForge"
        subtitle="A path through data structures, algorithms, and system design. Start free with Foundations — sign in with Google to unlock the rest and back up your progress."
      />

      <Card className="mb-6 bg-gradient-to-br from-forge-500 to-forge-700 text-white">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-sm/relaxed opacity-90">Current rank</div>
            <div className="text-3xl font-bold">{rank}</div>
            <div className="text-sm opacity-90">{xp.toLocaleString()} XP earned</div>
          </div>
          <Link
            to="/learn"
            className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur transition hover:bg-white/25"
          >
            Start learning →
          </Link>
        </div>
      </Card>

      <h2 className="mb-3 text-lg font-semibold tracking-tight">Choose a pathway</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {PATHWAYS.map((p) => (
          <Link key={p.title} to={p.to}>
            <Card className="h-full transition hover:border-forge-400 hover:shadow-md">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
