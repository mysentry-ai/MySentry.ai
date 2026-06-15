import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";
import { resolveMeta } from "../seo/resolve-meta";

// Hardcoded production origin — never derive from req.protocol which returns
// 'http' when Express sits behind an AWS ALB that terminates SSL.
const SITE_ORIGIN = "https://mysentry.ai";

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Replace SSR placeholder pairs in the HTML template.
 * Pattern: <!--SSR_KEY-->default<!--/SSR_KEY-->
 */
function injectPlaceholder(html: string, key: string, value: string): string {
  // Escape the value so it's safe inside HTML attribute values and text nodes
  const escaped = value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const re = new RegExp(`<!--${key}-->[\\s\\S]*?<!--\\/${key}-->`, "g");
  return html.replace(re, escaped);
}

// ─── Main export ─────────────────────────────────────────────────────────────

export function serveStatic(app: Express) {
  // Use process.cwd() so the path is always relative to the project root,
  // regardless of where the compiled bundle lives in the deployment container.
  const distPath = path.resolve(process.cwd(), "dist", "public");
  const indexHtmlPath = path.resolve(distPath, "index.html");

  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // ── 1. Hashed assets — long-lived immutable cache ─────────────────────────
  app.use(
    "/_app",
    express.static(path.join(distPath, "_app"), {
      immutable: true,
      maxAge: "1y",
    })
  );

  // ── 2. SSR meta injection for HTML requests ───────────────────────────────
  // This middleware runs BEFORE express.static so that requests for "/" and
  // other SPA routes get per-route meta injected before the HTML is sent.
  // We only intercept requests that Accept text/html (browser navigation).
  // Requests for static assets (JS, CSS, images) are passed through.
  app.use(async (req: Request, res: Response, next: NextFunction) => {
    const accept = req.headers.accept ?? "";
    const isHtmlRequest = accept.includes("text/html");

    // Only intercept HTML requests; let asset requests fall through to static
    if (!isHtmlRequest) {
      return next();
    }

    // Skip if the request looks like a real file (has an extension)
    const urlPath = req.path;
    if (/\.\w{2,5}$/.test(urlPath)) {
      return next();
    }

    try {
      const cleanPath = req.originalUrl.split("?")[0]; // strip query string

      // Resolve meta (async — may hit DB for blog posts, cached 60s)
      const meta = await resolveMeta(cleanPath, SITE_ORIGIN);

      // Read template on every request so hot-reloads in staging work;
      // in production the OS page cache makes this effectively free.
      const template = fs.readFileSync(indexHtmlPath, "utf-8");

      // Always use SITE_ORIGIN so canonical/og:url are https:// even when
      // Express is behind an ALB that forwards over plain HTTP.
      const canonicalUrl = `${SITE_ORIGIN}${meta.canonicalPath}`;

      let html = template;
      html = injectPlaceholder(html, "SSR_TITLE", meta.title);
      html = injectPlaceholder(html, "SSR_DESCRIPTION", meta.description);
      html = injectPlaceholder(html, "SSR_OG_TYPE", meta.ogType);
      html = injectPlaceholder(html, "SSR_OG_IMAGE", meta.ogImage);
      html = injectPlaceholder(html, "SSR_CANONICAL", canonicalUrl);

      res
        .status(200)
        .set("Content-Type", "text/html")
        .send(html);
    } catch (err) {
      // Fallback: serve the raw template without injection
      console.error("[SSR] Meta injection failed:", err);
      res.sendFile(indexHtmlPath);
    }
  });

  // ── 3. Static files (images, fonts, robots.txt, etc.) ────────────────────
  // index.html is never served by this middleware because the SSR middleware
  // above already handled all HTML requests.
  app.use(express.static(distPath));

  // ── 4. Final catch-all (should rarely be reached) ─────────────────────────
  app.use("*", (_req: Request, res: Response) => {
    res.sendFile(indexHtmlPath);
  });
}
