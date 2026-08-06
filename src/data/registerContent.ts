/**
 * Central content registration. Importing this module (once, from main.tsx)
 * populates the curriculum registry. Each content phase adds its own
 * `register…()` call here.
 */
import { registerSamples } from "./samples";
import { registerFoundations } from "./foundations";
import { registerStage2 } from "./stage2";
import { registerStage3 } from "./stage3";
import { registerStage4 } from "./stage4";
import { registerStage5 } from "./stage5";
import { registerStage6 } from "./stage6";
import { registerExpert } from "./expert";
import { registerSystemDesign } from "./systemdesign";

registerSamples();
registerFoundations();
registerStage2();
registerStage3();
registerStage4();
registerStage5();
registerStage6();
registerExpert();
registerSystemDesign();
