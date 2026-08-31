import express, { type Express, type Request, type Response, type NextFunction } from "express";
import fs from "fs";
import path from "path";
import { resolveMeta } from "../seo/resolve-meta";
import { renderSeoHtml } from "../seo/render-seo-html";

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

  // 1. Hashed assets: long-lived immutable cache
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
    const isPageMethod = req.method === "GET" || req.method === "HEAD";
    const isHtmlRequest =
      accept === "" || accept.includes("text/html") || accept.includes("*/*");

    // Only intercept page requests. API routes and explicit non-HTML requests
    // keep their existing server behavior.
    if (!isPageMethod || req.path.startsWith("/api/") || !isHtmlRequest) {
      return next();
    }

    // Skip if the request looks like a real file (has an extension)
    const urlPath = req.path;
    if (/\.\w{2,5}$/.test(urlPath)) {
      return next();
    }

    try {
      const cleanPath = req.originalUrl.split("?")[0]; // strip query string

      // Resolve meta asynchronously; blog routes may use the database and a 60-second cache.
      const meta = await resolveMeta(cleanPath, "https://mysentry.ai");

      // Read template on every request so hot-reloads in staging work;
      // in production the OS page cache makes this effectively free.
      const template = fs.readFileSync(indexHtmlPath, "utf-8");

      const html = renderSeoHtml(template, meta);

      res
        .status(meta.found ? 200 : 404)
        .set("Content-Type", "text/html")
        .set("Cache-Control", "no-cache")
        .send(html);
    } catch (err) {
      console.error("[SSR] Meta injection failed:", err);
      res.status(500).set("Cache-Control", "no-cache").sendFile(indexHtmlPath);
    }
  });

  // ── 3. Static files (images, fonts, robots.txt, etc.) ────────────────────
  // index.html is never served by this middleware because the SSR middleware
  // above already handled all HTML requests.
  app.use(express.static(distPath, {
    maxAge: "1y",
    immutable: true,
    setHeaders(res, filePath) {
      // HTML, robots.txt, and sitemaps must always be re-fetched
      if (
        filePath.endsWith(".html") ||
        filePath.endsWith(".txt") ||
        filePath.endsWith(".xml")
      ) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  }));

  // ── 4. Final catch-all (should rarely be reached) ─────────────────────────
  app.use("*", (_req: Request, res: Response) => {
    res.status(404).type("text/plain").send("Not found");
  });
}
