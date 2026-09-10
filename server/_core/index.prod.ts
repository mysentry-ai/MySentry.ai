import "dotenv/config";
import express from "express";
import { createRequire } from "module";
const _require = createRequire(import.meta.url);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const compression = _require("compression") as () => any;
import { createServer } from "http";
import net from "net";
import path from "path";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic } from "./serve-static";
import { registerSitemapRoutes } from "../sitemaps";
import { registerStorageProxy } from "./storageProxy";

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
  // Trust the X-Forwarded-* headers from the AWS ALB so that req.protocol,
  // req.secure, and req.ip reflect the real client values, not the ALB hop.
  app.set("trust proxy", 1);
  // HSTS: tell browsers to always use HTTPS
  app.use((_req, res, next) => {
    res.setHeader(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains'
    );
    next();
  });
  // Brotli + gzip compression via standard Express middleware
  app.use(compression());
  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // Durable project storage must resolve before auth and static fallbacks.
  registerStorageProxy(app);
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
  // Production entry: always serve static built assets.
  // The dev branch (setupVite) is intentionally absent. This entry point is
  // only used by the production build (esbuild target), ensuring vite and its
  // plugins are never imported and never required at runtime.
  serveStatic(app);

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
