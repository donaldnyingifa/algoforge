/**
 * Mock interviews — timed, cross-pattern problem sets drawn from the whole
 * pattern library (Stages 4–7), scored like a real interview loop. Unlike a
 * module test there are no MCQs and no badge; the value is the timed, mixed
 * practice and the recorded history.
 */

import type { Problem, TestConfig } from "@/types";
import { allProblems } from "@/data/curriculum";
import { drawProblems } from "./testEngine";

export interface MockPreset {
  id: string;
  label: string;
  description: string;
  minutes: number;
  parMinutes: number;
  drawRules: { easy: number; medium: number; hard: number };
}

export const MOCK_PRESETS: MockPreset[] = [
  {
    id: "warmup",
    label: "Warm-up",
    description: "Two medium problems, 30 minutes — a quick mixed-pattern rep.",
    minutes: 30,
    parMinutes: 24,
    drawRules: { easy: 0, medium: 2, hard: 0 },
  },
  {
    id: "standard",
    label: "Standard Screen",
    description: "Two medium + one hard, 45 minutes — a typical phone screen.",
    minutes: 45,
    parMinutes: 38,
    drawRules: { easy: 0, medium: 2, hard: 1 },
  },
  {
    id: "onsite",
    label: "Onsite Round",
    description: "Two medium + two hard, 60 minutes — a demanding onsite loop.",
    minutes: 60,
    parMinutes: 50,
    drawRules: { easy: 0, medium: 2, hard: 2 },
  },
];

export function getMockPreset(id: string): MockPreset | undefined {
  return MOCK_PRESETS.find((p) => p.id === id);
}

/** Cross-pattern pool: every problem that carries at least one pattern tag. */
export function mockPool(): Problem[] {
  return allProblems().filter((p) => p.patternIds.length > 0);
}

/** Draw a mock interview's problem ids for a preset from the cross-pattern pool. */
export function drawMockProblems(preset: MockPreset): string[] {
  return drawProblems(mockPool(), preset.drawRules);
}

/** A synthetic TestConfig so a mock session fits the TestSession shape. */
export function mockConfig(preset: MockPreset): TestConfig {
  return {
    moduleId: `mock-${preset.id}`,
    drawRules: { ...preset.drawRules },
    timeLimitMinutes: preset.minutes,
    parTimeMinutes: preset.parMinutes,
    complexityMcqCount: 0,
  };
}
