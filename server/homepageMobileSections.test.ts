import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import before from "./homepage-content-first-baseline.json";

const html = fs.readFileSync(path.join(process.cwd(), "client/public/mysentry-homepage-v17.html"), "utf8");
const style = html.split('<style id="homepage-mobile-section-repair">')[1]?.split("</style>")[0] ?? "";

describe("focused homepage mobile repair", () => {
  it("retains every original byte outside the new scoped style and widget tag", () => {
    const original = html.replace(/<style id="homepage-mobile-section-repair">[\s\S]*?<\/style>\n/, "")
      .replace('<meta name="facebook-domain-verification" content="zybf8i6ichc8jxbdnecqe9szzc017j" />\n', "")
      .replace('<script defer src="/mysentry-chatbot.js"></script>\n', "")
      .replace(/<script id="homepage-deferred-images">[\s\S]*?<\/script>/, () => `<script id="homepage-deferred-images">${before.loader}</script>`);
    expect(createHash("sha256").update(original).digest("hex")).toBe("9df3e83c4644769ae1669e125a1ebf41dcc2e79e328fdf824e009e410d776e53");
    expect(style).not.toMatch(/\.site-header|\.site-footer|\.hero|@keyframes|animation:|transition:/);
  });
  it("lets the video frame own a responsive aspect ratio instead of a fixed height", () => {
    expect(style).toContain("#intro .intro-video-frame{width:100%;min-width:0;max-width:100%;height:auto;min-height:0;aspect-ratio:16/9");
    expect(style).toContain("#intro .video-launch{position:absolute;inset:0;");
    expect(style).toContain("overflow-wrap:break-word");
  });
  it("uses portrait, short portrait, and landscape arrangements with native CTAs", () => {
    expect(style).toContain("--mobile-stage-height");
    expect(style).toContain("(min-height:501px) and (max-height:620px)");
    expect(style).toContain("@media(max-width:740px) and (max-height:500px)");
    expect(style).toContain("--story-reference-width:min(88cqw,300px");
    expect(style).toContain("#support .reassurance-photos{position:absolute;");
    expect(style).toContain("#support .reassurance-copy{position:relative;");
    expect(style).toContain("grid-template-rows:auto var(--mobile-stage-height)");
    expect(style).toContain(".feature-inner>div:not(.feature-media){order:0;");
    expect(style).toContain("#support .reassurance-photos .rp-fam{left:2%;right:auto;top:24px;");
    expect(style).toContain("align-items:center;justify-content:center;text-align:center;");
  });
  it("loads the identical optional assistant on the root and SPA, without a blocking module", () => {
    const spa = fs.readFileSync(path.join(process.cwd(), "client/index.html"), "utf8");
    expect(html.match(/<script defer src="\/mysentry-chatbot.js"><\/script>/g)).toHaveLength(1);
    expect(spa.match(/<script defer src="\/mysentry-chatbot.js"><\/script>/g)).toHaveLength(1);
    expect(html).not.toContain('src="https://cdn.jsdelivr.net/npm/flowise-embed');
  });
});
