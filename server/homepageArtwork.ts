import express, { type Express } from "express";
import { createHash } from "node:crypto";
import fs from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

/** Preview parity. Production uses the same files packaged into dist/public. */
export function registerHomepageArtworkPreview(app: Express) {
  const raw = fs.readFileSync(path.resolve("shared/homepage-artwork-manifest.json"));
  const digest = createHash("sha256").update(raw).digest("hex").slice(0, 16);
  app.use("/homepage-art", express.static(path.join(tmpdir(), "mysentry-homepage-art-" + digest), {
    immutable: true,
    maxAge: "1y",
    fallthrough: false,
  }));
}
