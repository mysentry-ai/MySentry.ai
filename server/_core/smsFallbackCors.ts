import type { Express } from "express";

const ALLOWED_SMS_FALLBACK_ORIGINS = new Set([
  "https://mysentry.ai",
  "https://www.mysentry.ai",
]);

/**
 * Allows only the public MySentry custom domains to send an unauthenticated SMS
 * preference write to the managed backend. The route accepts no cookies or
 * credentials, and the rest of the browser cannot read any other API response.
 */
export function registerSmsFallbackCors(app: Express) {
  app.use("/api/trpc", (req, res, next) => {
    const origin = req.get("origin");

    if (!origin || !ALLOWED_SMS_FALLBACK_ORIGINS.has(origin)) {
      next();
      return;
    }

    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, x-blog-admin-token"
    );
    res.setHeader("Access-Control-Max-Age", "600");

    if (req.method === "OPTIONS") {
      res.status(204).end();
      return;
    }

    next();
  });
}
