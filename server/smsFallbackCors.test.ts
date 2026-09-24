import express from "express";
import type { Server } from "node:http";
import { afterEach, describe, expect, it } from "vitest";
import { registerSmsFallbackCors } from "./_core/smsFallbackCors";

let server: Server | undefined;

async function startServer() {
  const app = express();
  registerSmsFallbackCors(app);
  app.post("/api/trpc", (_req, res) => res.status(200).json({ ok: true }));

  server = await new Promise<Server>(resolve => {
    const started = app.listen(0, "127.0.0.1", () => resolve(started));
  });

  const address = server.address();
  if (!address || typeof address === "string") {
    throw new Error("Test server did not expose a TCP address");
  }
  return `http://127.0.0.1:${address.port}`;
}

afterEach(async () => {
  if (!server) return;
  await new Promise<void>((resolve, reject) => {
    server?.close(error => (error ? reject(error) : resolve()));
  });
  server = undefined;
});

describe("managed SMS fallback CORS", () => {
  it("allows only MySentry's public custom domains to submit a fallback request", async () => {
    const url = await startServer();
    const response = await fetch(`${url}/api/trpc/smsConsent.submit?batch=1`, {
      method: "OPTIONS",
      headers: {
        Origin: "https://mysentry.ai",
        "Access-Control-Request-Method": "POST",
        "Access-Control-Request-Headers": "content-type",
      },
    });

    expect(response.status).toBe(204);
    expect(response.headers.get("access-control-allow-origin")).toBe(
      "https://mysentry.ai"
    );
    expect(response.headers.get("access-control-allow-methods")).toBe(
      "POST, OPTIONS"
    );
    expect(response.headers.get("access-control-allow-credentials")).toBeNull();
  });

  it("does not grant a cross-origin response header to an unrelated origin", async () => {
    const url = await startServer();
    const response = await fetch(`${url}/api/trpc/smsConsent.submit?batch=1`, {
      method: "POST",
      headers: {
        Origin: "https://untrusted.example",
        "Content-Type": "application/json",
      },
      body: "{}",
    });

    expect(response.headers.get("access-control-allow-origin")).toBeNull();
  });
});
