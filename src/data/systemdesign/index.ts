import { registerModule, registerComplexityQuestion } from "@/data/curriculum";
import { sdFoundationModules, sdFoundationMcqs } from "./foundations";
import { sdFoundationModules2, sdFoundationMcqs2 } from "./foundations2";
import { sdLabModules } from "./labs";
import { sdLabModules2 } from "./labs2";

/** Register System Design content — Phase 14 (Foundations) + Phase 15 (Build Labs). */
export function registerSystemDesign(): void {
  [...sdFoundationMcqs, ...sdFoundationMcqs2].forEach(registerComplexityQuestion);
  [
    ...sdFoundationModules, ...sdFoundationModules2,
    ...sdLabModules, ...sdLabModules2,
  ].forEach(registerModule);
}
