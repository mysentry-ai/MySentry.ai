import express, { type Express, type Request } from "express";
import {
  DOWNLOAD_ACTIVITY_ENDPOINT,
  DOWNLOAD_ACTIVITY_MAX_BYTES,
  DOWNLOAD_BOT_PATTERN,
} from "../shared/download-activity";

export function shouldIgnoreDownloadActivity(
  req: Pick<Request, "headers">
): boolean {
  return (
    req.headers.dnt === "1" ||
    req.headers.dnt === "yes" ||
    req.headers["sec-gpc"] === "1" ||
    /prefetch|prerender/i.test(
      `${req.headers["sec-purpose"] || ""} ${req.headers.purpose || ""}`
    ) ||
    DOWNLOAD_BOT_PATTERN.test(String(req.headers["user-agent"] || ""))
  );
}
export function isSameOriginDownloadActivity(
  req: Pick<Request, "headers" | "protocol">
): boolean {
  if (req.headers["sec-fetch-site"] === "cross-site") return false;
  try {
    const origin = new URL(String(req.headers.origin || ""));
    return (
      ["https:", "http:"].includes(origin.protocol) &&
      origin.protocol === `${req.protocol}:` &&
      origin.host.toLowerCase() === String(req.headers.host || "").toLowerCase()
    );
  } catch {
    return false;
  }
}

export function registerDownloadActivityGuards(app: Express): void {
  const parser = express.json({
    limit: DOWNLOAD_ACTIVITY_MAX_BYTES,
    strict: true,
  });
  let minute = 0;
  let requests = 0;
  app.use((req, res, next) => {
    let route: string;
    try {
      route = decodeURIComponent(req.path);
    } catch {
      return next();
    }
    if (
      !/^\/api\/trpc(?:\/|$)/i.test(route) ||
      // Express mounts are case-insensitive, and tRPC resolves the final path
      // segment even under extra slashes/subpaths. Guard every resolvable
      // collector call, but accept only the canonical unbatched endpoint.
      !route.slice(route.lastIndexOf("/") + 1)
        .split(",")
        .includes("downloadActivity.record")
    )
      return next();
    res.setHeader("Cache-Control", "no-store");
    if (route !== DOWNLOAD_ACTIVITY_ENDPOINT || req.query.batch !== undefined) {
      res.status(400).json({ error: "Activity batching is not supported" });
      return;
    }
    if (req.method !== "POST") {
      res.status(405).json({ error: "POST required" });
      return;
    }
    if (!isSameOriginDownloadActivity(req)) {
      res.status(403).json({ error: "Same-origin activity required" });
      return;
    }
    if (!req.is("application/json")) {
      res.status(415).json({ error: "JSON required" });
      return;
    }
    const currentMinute = Math.floor(Date.now() / 60000);
    if (currentMinute !== minute) {
      minute = currentMinute;
      requests = 0;
    }
    if (++requests > 3000) {
      res.status(429).json({ error: "Activity temporarily rate limited" });
      return;
    }
    parser(req, res, error => {
      if (error) {
        res
          .status((error as { status?: number }).status === 413 ? 413 : 400)
          .json({ error: "Invalid or oversized activity JSON" });
        return;
      }
      next();
    });
  });
}
