import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";

/**
 * Routes are code-split with React.lazy so heavy pages (especially the
 * Monaco-backed Playground / Problem / Test / Mock) load on demand rather than
 * bloating the initial bundle. A Suspense boundary in <Layout> renders the
 * fallback while a route chunk loads.
 */
const named = <M extends Record<string, unknown>>(imp: Promise<M>, key: keyof M) =>
  imp.then((m) => ({ default: m[key] as React.ComponentType }));

const Home = lazy(() => named(import("@/pages/Home"), "Home"));
const Learn = lazy(() => named(import("@/pages/Learn"), "Learn"));
const Languages = lazy(() => named(import("@/pages/Languages"), "Languages"));
const LanguageCourse = lazy(() => named(import("@/pages/LanguageCourse"), "LanguageCourse"));
const Patterns = lazy(() => named(import("@/pages/Patterns"), "Patterns"));
const Challenges = lazy(() => named(import("@/pages/Challenges"), "Challenges"));
const ChallengeTrack = lazy(() => named(import("@/pages/ChallengeTrack"), "ChallengeTrack"));
const MockInterview = lazy(() => named(import("@/pages/MockInterview"), "MockInterview"));
const Review = lazy(() => named(import("@/pages/Review"), "Review"));
const CaseStudies = lazy(() => named(import("@/pages/CaseStudies"), "CaseStudies"));
const CaseStudy = lazy(() => named(import("@/pages/CaseStudy"), "CaseStudy"));
const SdCertification = lazy(() => named(import("@/pages/SdCertification"), "SdCertification"));
const SdMockInterview = lazy(() => named(import("@/pages/SdMockInterview"), "SdMockInterview"));
const Playground = lazy(() => named(import("@/pages/Playground"), "Playground"));
const Dashboard = lazy(() => named(import("@/pages/Dashboard"), "Dashboard"));
const Badges = lazy(() => named(import("@/pages/Badges"), "Badges"));
const Settings = lazy(() => named(import("@/pages/Settings"), "Settings"));
const Lesson = lazy(() => named(import("@/pages/Lesson"), "Lesson"));
const Problem = lazy(() => named(import("@/pages/Problem"), "Problem"));
const Checkpoint = lazy(() => named(import("@/pages/Checkpoint"), "Checkpoint"));
const Test = lazy(() => named(import("@/pages/Test"), "Test"));
const NotFound = lazy(() => named(import("@/pages/NotFound"), "NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "learn", element: <Learn /> },
      { path: "languages", element: <Languages /> },
      { path: "languages/:courseId", element: <LanguageCourse /> },
      { path: "lesson/:moduleId", element: <Lesson /> },
      { path: "checkpoint/:moduleId", element: <Checkpoint /> },
      { path: "test/:moduleId", element: <Test /> },
      { path: "problem/:slug", element: <Problem /> },
      { path: "patterns", element: <Patterns /> },
      { path: "challenges", element: <Challenges /> },
      { path: "challenges/:trackId", element: <ChallengeTrack /> },
      { path: "mock", element: <MockInterview /> },
      { path: "review", element: <Review /> },
      { path: "cases", element: <CaseStudies /> },
      { path: "case/:caseId", element: <CaseStudy /> },
      { path: "sd-mock", element: <SdMockInterview /> },
      { path: "sd-cert", element: <SdCertification /> },
      { path: "playground", element: <Playground /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "badges", element: <Badges /> },
      { path: "settings", element: <Settings /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
