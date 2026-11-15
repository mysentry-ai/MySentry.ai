import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
import { registerExactHomepageAssetAliases } from "./exactHomepageAssetAliases";
import { renderSeoHtml } from "../seo/render-seo-html";
import { resolveMeta } from "../seo/resolve-meta";

export async function setupVite(app: Express, server: Server) {
  // Keep development preview parity with the owner-supplied v17 homepage
  // document used at production root. Vite continues to serve every asset and
  // all non-root SPA routes normally.
  app.get("/", (req, res, next) => {
    const accept = req.headers.accept ?? "";
    const acceptsHtml =
      accept === "" || accept.includes("text/html") || accept.includes("*/*");
    const exactHomepagePath = path.resolve(
      process.cwd(),
      "client",
      "public",
      "mysentry-homepage-v17.html"
    );

    if (!acceptsHtml || !fs.existsSync(exactHomepagePath)) return next();

    res
      .status(200)
      .set({ "Cache-Control": "no-cache", "Content-Type": "text/html" })
      .sendFile(exactHomepagePath);
  });

  registerExactHomepageAssetAliases(app);

  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  const renderPage: express.RequestHandler = async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      let page = await vite.transformIndexHtml(url, template);
      // Only this new utility needs production-style early script/SSR fallback
      // in preview. Preserve all existing Vite pages and exact homepage delivery.
      if (new URL(url, "https://mysentry.ai").pathname.replace(/\/+$/, "") === "/download") {
        page = renderSeoHtml(page, await resolveMeta("/download", "https://mysentry.ai"));
        res.set("X-Robots-Tag", "noindex, follow");
      }
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  };
  // Express also matches /download/ here. Only the new route bypasses Vite's
  // directory-index handler; existing route and asset middleware order is kept.
  app.get("/download", renderPage);
  app.use(vite.middlewares);
  app.use("*", renderPage);
}

export function serveStatic(app: Express) {
  // Use process.cwd() so the path is always relative to the project root,
  // regardless of where the compiled bundle lives in the deployment container.
  // import.meta.dirname can resolve to different locations depending on how
  // esbuild bundles and where the production server runs.
  const distPath = path.resolve(process.cwd(), "dist", "public");

  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // Serve hashed assets with long-lived cache headers first (before catch-all)
  app.use(
    "/_app",
    express.static(path.join(distPath, "_app"), {
      immutable: true,
      maxAge: "1y",
    })
  );

  app.use(express.static(distPath));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
