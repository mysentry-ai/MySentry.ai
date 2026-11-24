import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const html = fs.readFileSync(path.join(process.cwd(), "client/public/mysentry-homepage-v17.html"), "utf8");
const tag = '<meta name="facebook-domain-verification" content="zybf8i6ichc8jxbdnecqe9szzc017j" />';

describe("owner-approved Meta homepage domain verification", () => {
  it("places the exact supplied tag once inside the initial HTML head, never in the body", () => {
    const headStart = html.indexOf("<head>");
    const headEnd = html.indexOf("</head>");
    const tagStart = html.indexOf(tag);
    expect(headStart).toBeGreaterThanOrEqual(0);
    expect(tagStart).toBeGreaterThan(headStart);
    expect(tagStart).toBeLessThan(headEnd);
    expect(html.match(/name="facebook-domain-verification"/g)).toHaveLength(1);
    expect(html.slice(html.indexOf("<body>"))).not.toContain("facebook-domain-verification");
  });

  it("preserves every prior GitHub main homepage byte except the single approved metadata line", () => {
    const withoutVerification = html.replace(`${tag}\n`, "");
    expect(createHash("sha256").update(withoutVerification).digest("hex"))
      .toBe("b3e3190799551a91dfa9ee33f5a367df61a995cc66695309edd5d443133d83a9");
  });
});
