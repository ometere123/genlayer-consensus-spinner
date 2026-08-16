import { readFile } from "node:fs/promises";

const [svg, css, tsx, demo] = await Promise.all([
  readFile(new URL("../src/genlayer-spinner.svg", import.meta.url), "utf8"),
  readFile(new URL("../src/genlayer-spinner.css", import.meta.url), "utf8"),
  readFile(new URL("../src/GenLayerSpinner.tsx", import.meta.url), "utf8"),
  readFile(new URL("../docs/index.html", import.meta.url), "utf8"),
]);

const left = "183,33 20,372 179,310 122,279 183,152";
const right = "218,33 218,151 280,281 222,310 382,373";
const core = "200,195 166,265 200,283 235,266";

const assertions = [
  ["canonical 400x400 viewBox", svg.includes('viewBox="0 0 400 400"')],
  ["exact left logo polygon", svg.includes(left)],
  ["exact right logo polygon", svg.includes(right)],
  ["exact core logo polygon", svg.includes(core)],
  ["left wing uses -118px / -44deg", svg.includes("translate(-118px, 16px) rotate(-44deg)")],
  ["right wing mirrors 118px / 44deg", svg.includes("translate(118px, 16px) rotate(44deg)")],
  ["left/right share 16%, 30%, 38% timing", (svg.match(/16%/g) || []).length >= 2 && (svg.match(/30%/g) || []).length >= 2 && (svg.match(/38%, 78%/g) || []).length >= 2],
  ["exact-logo finality hold exists", svg.includes("exact-logo") && svg.includes("64%, 80%")],
  ["currentColor theming", svg.includes("currentColor") && css.includes("currentColor")],
  ["duration CSS variable", svg.includes("--gl-spinner-duration") && css.includes("--gl-spinner-duration")],
  ["infinite loop", (svg.match(/infinite/g) || []).length >= 7],
  ["reduced-motion support", svg.includes("prefers-reduced-motion") && css.includes("prefers-reduced-motion")],
  ["React wrapper uses same geometry", tsx.includes(left) && tsx.includes(right) && tsx.includes(core)],
  ["demo includes light and dark surfaces", demo.includes("light-stage") && demo.includes("dark-stage")],
  ["demo tests all requested sizes", [16,20,24,32,48,64].every((n) => demo.includes(String(n)))],
];

let failed = false;
for (const [label, ok] of assertions) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}`);
  if (!ok) failed = true;
}
if (failed) process.exit(1);
console.log(`\n${assertions.length}/${assertions.length} checks passed.`);
