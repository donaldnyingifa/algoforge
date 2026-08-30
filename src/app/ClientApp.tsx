"use client";

import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { Layout } from "@/components/Layout";
import { Spinner } from "@/components/ui";
import { SignInGate } from "@/components/SignInGate";
import "@/data/registerContent";

const loading = () => <Spinner />;

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

/**
 * Wraps a screen that has no free content at all — the whole thing requires
 * sign-in. See src/lib/access.ts and claude/firebase-auth-plan.md for which
 * routes these are and why (in particular, why Mock Interview is included
 * even though the user didn't name it explicitly).
 */
function Gated({ children }: { children: ReactNode }) {
  return <SignInGate allow={false}>{children}</SignInGate>;
}

function CurrentPage() {
  const path = usePathname();
  const segments = path.split("/").filter(Boolean);
  const [head, value] = segments;

  if (path === "/") return <Home />;
  if (head === "learn" && !value) return <Learn />;
  if (head === "languages") {
    return <Gated>{value ? <LanguageCourse /> : <Languages />}</Gated>;
  }
  if (head === "lesson" && value) return <Lesson />;
  if (head === "checkpoint" && value) return <Checkpoint />;
  if (head === "test" && value) return <Test />;
  if (head === "problem" && value) return <Problem />;
  if (head === "patterns" && !value) return <Gated><Patterns /></Gated>;
  if (head === "challenges") {
    return <Gated>{value ? <ChallengeTrack /> : <Challenges />}</Gated>;
  }
  if (head === "mock" && !value) return <Gated><MockInterview /></Gated>;
  if (head === "review" && !value) return <Review />;
  if (head === "cases" && !value) return <Gated><CaseStudies /></Gated>;
  if (head === "case" && value) return <Gated><CaseStudy /></Gated>;
  if (head === "sd-mock" && !value) return <Gated><SdMockInterview /></Gated>;
  if (head === "sd-cert" && !value) return <Gated><SdCertification /></Gated>;
  if (head === "playground" && !value) return <Gated><Playground /></Gated>;
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
