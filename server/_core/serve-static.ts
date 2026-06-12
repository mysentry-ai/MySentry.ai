import express, { type Express } from "express";
import fs from "fs";
import path from "path";

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
