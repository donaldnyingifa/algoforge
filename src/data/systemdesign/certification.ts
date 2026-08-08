import type { Module } from "@/types";
import { sdFoundationMcqs } from "./foundations";
import { sdFoundationMcqs2 } from "./foundations2";

const S = "sd-s4";

/** The exam pool: every System Design foundations MCQ. */
export const sdExamQuestionIds: string[] = [
  ...sdFoundationMcqs.map((q) => q.id),
  ...sdFoundationMcqs2.map((q) => q.id),
];

/** Module id / badge id used by the certification exam flow. */
export const SD_CERT_MODULE_ID = "m-sd-certification";
export const SD_CERT_BADGE_ID = "badge-sd-certified";

/** Number of questions drawn per exam attempt, and the time limit. */
export const SD_CERT_DRAW = 10;
export const SD_CERT_MINUTES = 15;

export const sdCertificationModule: Module = {
  id: SD_CERT_MODULE_ID,
  stageId: S,
  title: "System Design Certification",
  kind: "lesson",
  summary:
    "The capstone: a timed exam over the System Design foundations. Pass to earn a tiered certification badge.",
  lessonSections: [
    {
      heading: "What the certification covers",
      body: `The System Design certification is a **timed, multiple-choice exam** drawn from everything in the Foundations stage — the design framework, estimation, networking, core building blocks, API design, messaging, consistency, and reliability. It's the fastest way to confirm the vocabulary and tradeoffs are second nature before you walk into a real design round.

The best preparation is to work the **Foundations** lessons and the **Case Studies** first, then attempt a few **mock design interviews**. When you're ready, start the exam from the button below (or the "System Design Certification" card on the Learn page).`,
    },
    {
      heading: "How scoring works",
      body: `Each attempt draws **${SD_CERT_DRAW} questions** at random with a **${SD_CERT_MINUTES}-minute** limit. Your score maps to a tiered badge, exactly like the DSA module tests:

- Bronze ≥ 60%, Silver ≥ 75%, Gold ≥ 90%, Platinum = 100%.

Your **best tier is always kept**, and you can retake to improve. Nothing here is hard-locked — you can attempt the exam anytime, but you'll do best after the foundations and a case study or two.`,
    },
  ],
  drillProblemIds: [],
  testPoolProblemIds: [],
  badgeId: SD_CERT_BADGE_ID,
  prerequisiteModuleIds: ["m-sd-reliability"],
};
