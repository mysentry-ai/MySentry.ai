import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const template = fs.readFileSync(path.join(process.cwd(), "client/public/mysentry-homepage-v17.html"), "utf8");
const hash = (value: string) => crypto.createHash("sha256").update(value).digest("hex");
const perimeterStyle = template.split('<style id="homepage-notification-perimeter">')[1]?.split("</style>")[0];

describe("homepage notification perimeter adjustment", () => {
  it("limits new styles to the two requested notification arrangements", () => {
    expect(perimeterStyle).toBeTruthy();
    expect(perimeterStyle).toContain(".ring-picture{padding-block:68px 66px;min-height:0}");
    expect(perimeterStyle).toContain('.auto-chip-bottom[data-scene="3"]{left:50%');
    expect(perimeterStyle).toContain("@media(min-width:1101px) and (max-height:820px)");
    expect(perimeterStyle).not.toMatch(/\.scene-art|\.scene-stage\s*\{|\.hero|\.site-header|\.site-footer|animation:|transition:|@keyframes/);
  });

  it("adds four decorative Ring icons while preserving each original label", () => {
    const pills = template.match(/<div class="ring-(?:callout|bubble ring-bubble-(?:top|mid|bottom))">[\s\S]*?<\/div>/g) ?? [];
    expect(pills).toHaveLength(4);
    for (const label of ["Ring live video inside MySentry", "Panic trigger", "Live video", "Emergency contacts"]) {
      expect(pills.filter(pill => pill.includes(`>${label}</span>`))).toHaveLength(1);
    }
    for (const pill of pills) {
      expect(pill).toContain('class="notification-icon" aria-hidden="true"');
      expect(pill).toContain('<svg aria-hidden="true" focusable="false"');
    }
  });

  it("keeps the Automated Call state/labels and adds clock, exit, and shield SVGs", () => {
    const pills = template.match(/<div class="auto-chip auto-chip-(?:left|right|bottom)" data-scene="3">[\s\S]*?<\/div>/g) ?? [];
    expect(pills).toHaveLength(3);
    for (const label of ["Scheduled call", "Discreet exit", "Stay in control"]) {
      expect(pills.filter(pill => pill.includes(`<span class="chip-label">${label}</span>`))).toHaveLength(1);
    }
    for (const pill of pills) expect(pill).toContain('<svg aria-hidden="true" focusable="false"');
  });

  it("preserves all earlier styles and scripts byte-for-byte, including mockup sizing and animation", () => {
    const styles = (template.match(/<style[^>]*>[\s\S]*?<\/style>/g) ?? []).filter(style => !style.includes('id="homepage-notification-perimeter"')).join("");
    const scripts = (template.match(/<script[^>]*>[\s\S]*?<\/script>/g) ?? []).join("");
    expect(hash(styles)).toBe("dbcb0a59dd9ab4825a53e5a84bf8be3227355eceb7522092654aa08fb8537c38");
    expect(hash(scripts)).toBe("aace01648b8e1c448091af7241987fd3a07576c00b5364f55efb88c2f00354ec");
  });
});
