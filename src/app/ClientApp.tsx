"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Layout } from "@/components/Layout";
import "@/data/registerContent";

const loading = () => (
  <div className="flex items-center justify-center py-20 text-sm text-slate-400" role="status" aria-live="polite">
    <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-300 border-t-forge-500" />
    Loading…
  </div>
);

const Home = dynamic(() => import("@/screens/Home").then((m) => m.Home), { loading });
const Learn = dynamic(() => import("@/screens/Learn").then((m) => m.Learn), { loading });
const Languages = dynamic(() => import("@/screens/Languages").then((m) => m.Languages), { loading });
const LanguageCourse = dynamic(() => import("@/screens/LanguageCourse").then((m) => m.LanguageCourse), { loading });
const Patterns = dynamic(() => import("@/screens/Patterns").then((m) => m.Patterns), { loading });
const Challenges = dynamic(() => import("@/screens/Challenges").then((m) => m.Challenges), { loading });
const ChallengeTrack = dynamic(() => import("@/screens/ChallengeTrack").then((m) => m.ChallengeTrack), { loading });
const MockInterview = dynamic(() => import("@/screens/MockInterview").then((m) => m.MockInterview), { loading });
const Review = dynamic(() => import("@/screens/Review").then((m) => m.Review), { loading });
const CaseStudies = dynamic(() => import("@/screens/CaseStudies").then((m) => m.CaseStudies), { loading });
const CaseStudy = dynamic(() => import("@/screens/CaseStudy").then((m) => m.CaseStudy), { loading });
const SdCertification = dynamic(() => import("@/screens/SdCertification").then((m) => m.SdCertification), { loading });
const SdMockInterview = dynamic(() => import("@/screens/SdMockInterview").then((m) => m.SdMockInterview), { loading });
const Playground = dynamic(() => import("@/screens/Playground").then((m) => m.Playground), { loading });
const Dashboard = dynamic(() => import("@/screens/Dashboard").then((m) => m.Dashboard), { loading });
const Badges = dynamic(() => import("@/screens/Badges").then((m) => m.Badges), { loading });
const Settings = dynamic(() => import("@/screens/Settings").then((m) => m.Settings), { loading });
const Lesson = dynamic(() => import("@/screens/Lesson").then((m) => m.Lesson), { loading });
const Problem = dynamic(() => import("@/screens/Problem").then((m) => m.Problem), { loading });
const Checkpoint = dynamic(() => import("@/screens/Checkpoint").then((m) => m.Checkpoint), { loading });
const Test = dynamic(() => import("@/screens/Test").then((m) => m.Test), { loading });
const NotFound = dynamic(() => import("@/screens/NotFound").then((m) => m.NotFound), { loading });

function CurrentPage() {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);
  const [head, value] = segments;

  if (path === "/") return <Home />;
  if (head === "learn" && !value) return <Learn />;
  if (head === "languages") return value ? <LanguageCourse /> : <Languages />;
  if (head === "lesson" && value) return <Lesson />;
  if (head === "checkpoint" && value) return <Checkpoint />;
  if (head === "test" && value) return <Test />;
  if (head === "problem" && value) return <Problem />;
  if (head === "patterns" && !value) return <Patterns />;
  if (head === "challenges") return value ? <ChallengeTrack /> : <Challenges />;
  if (head === "mock" && !value) return <MockInterview />;
  if (head === "review" && !value) return <Review />;
  if (head === "cases" && !value) return <CaseStudies />;
  if (head === "case" && value) return <CaseStudy />;
  if (head === "sd-mock" && !value) return <SdMockInterview />;
  if (head === "sd-cert" && !value) return <SdCertification />;
  if (head === "playground" && !value) return <Playground />;
  if (head === "dashboard" && !value) return <Dashboard />;
  if (head === "badges" && !value) return <Badges />;
  if (head === "settings" && !value) return <Settings />;
  return <NotFound />;
}

export function ClientApp() {
  return (
    <Layout>
      <CurrentPage />
    </Layout>
  );
}
