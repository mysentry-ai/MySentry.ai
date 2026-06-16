import "dotenv/config";
import express from "express";
import fs from "fs";
import { createServer } from "http";
import net from "net";
import path from "path";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import shrinkRay from "shrink-ray-current";
import { serveStatic, setupVite } from "./vite";
import { registerSitemapRoutes } from "../sitemaps";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);
  // Brotli + gzip compression — must be first middleware so all responses are compressed
  app.use(shrinkRay());
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // Dynamic sitemaps + SEO routes
  registerSitemapRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // Use static serving if dist/public exists (production build is present),
  // otherwise fall back to Vite dev server. This is more robust than relying
  // solely on NODE_ENV which may not be set correctly in all deployment environments.
  const distPublicPath = path.resolve(process.cwd(), "dist", "public");
  const hasBuiltAssets = fs.existsSync(distPublicPath) && fs.existsSync(path.join(distPublicPath, "index.html"));
  if (process.env.NODE_ENV !== "development" && hasBuiltAssets) {
    serveStatic(app);
  } else {
    if (!hasBuiltAssets && process.env.NODE_ENV !== "development") {
      console.warn(`[Build] WARNING: dist/public not found at ${distPublicPath}. Falling back to Vite dev server.`);
    }
    await setupVite(app, server);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`[Build] Static assets served from: ${process.cwd()}/dist/public`);
    console.log(`[Build] Deployed at: ${new Date().toISOString()}`);
  });
}

startServer().catch(console.error);
