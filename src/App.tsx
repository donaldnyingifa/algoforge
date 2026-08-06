import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "@/pages/Home";
import { Learn } from "@/pages/Learn";
import { Patterns } from "@/pages/Patterns";
import { Challenges } from "@/pages/Challenges";
import { ChallengeTrack } from "@/pages/ChallengeTrack";
import { MockInterview } from "@/pages/MockInterview";
import { Review } from "@/pages/Review";
import { Playground } from "@/pages/Playground";
import { Dashboard } from "@/pages/Dashboard";
import { Badges } from "@/pages/Badges";
import { Settings } from "@/pages/Settings";
import { Lesson } from "@/pages/Lesson";
import { Problem } from "@/pages/Problem";
import { Checkpoint } from "@/pages/Checkpoint";
import { Test } from "@/pages/Test";
import { NotFound } from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "learn", element: <Learn /> },
      { path: "lesson/:moduleId", element: <Lesson /> },
      { path: "checkpoint/:moduleId", element: <Checkpoint /> },
      { path: "test/:moduleId", element: <Test /> },
      { path: "problem/:slug", element: <Problem /> },
      { path: "patterns", element: <Patterns /> },
      { path: "challenges", element: <Challenges /> },
      { path: "challenges/:trackId", element: <ChallengeTrack /> },
      { path: "mock", element: <MockInterview /> },
      { path: "review", element: <Review /> },
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
