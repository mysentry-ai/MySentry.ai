import express from "express";
import { readFileSync } from "node:fs";
import { createServer } from "node:http";
import path from "node:path";
import { afterEach, describe, expect, it, vi } from "vitest";
import { registerStorageProxy } from "./_core/storageProxy";

const originalFetch = globalThis.fetch;

afterEach(() => {
  globalThis.fetch = originalFetch;
  vi.restoreAllMocks();
});

async function withServer(
  run: (baseUrl: string) => Promise<void>,
): Promise<void> {
  const app = express();
  registerStorageProxy(app);
  const server = createServer(app);

  await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
  const address = server.address();
  if (!address || typeof address === "string") {
    server.close();
    throw new Error("Storage proxy test server did not expose a port");
  }

  try {
    await run(`http://127.0.0.1:${address.port}`);
  } finally {
    await new Promise<void>((resolve, reject) => {
      server.close(error => (error ? reject(error) : resolve()));
    });
  }
}

describe("durable storage proxy", () => {
  it("is registered in development and production server entry points", () => {
    const coreDir = path.resolve(process.cwd(), "server/_core");
    for (const entry of ["index.ts", "index.prod.ts"]) {
      const source = readFileSync(path.join(coreDir, entry), "utf8");
      expect(source).toContain(
        'import { registerStorageProxy } from "./storageProxy"',
      );
      expect(source).toContain("registerStorageProxy(app);");
    }
  });

  it("requests a signed URL and returns one temporary redirect", async () => {
    const forgeFetch = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ url: "https://signed.example/hero.jpg" }), {
        status: 200,
        headers: { "content-type": "application/json" },
      }),
    );
    globalThis.fetch = forgeFetch;

    await withServer(async baseUrl => {
      const response = await originalFetch(
        `${baseUrl}/manus-storage/ring_x_mysentry_1mb_5e0087b8.jpg`,
        { redirect: "manual" },
      );

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe(
        "https://signed.example/hero.jpg",
      );
      expect(response.headers.get("cache-control")).toBe("no-store");
      expect(forgeFetch).toHaveBeenCalledTimes(1);

      const requestedUrl = new URL(String(forgeFetch.mock.calls[0][0]));
      expect(requestedUrl.pathname).toContain("/v1/storage/presign/get");
      expect(requestedUrl.searchParams.get("path")).toBe(
        "ring_x_mysentry_1mb_5e0087b8.jpg",
      );
    });
  });

  it("returns a bounded error when the storage backend fails", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue(new Response("failure", { status: 503 }));

    await withServer(async baseUrl => {
      const response = await originalFetch(
        `${baseUrl}/manus-storage/ring_x_mysentry_1mb_5e0087b8.jpg`,
        { redirect: "manual" },
      );

      expect(response.status).toBe(502);
      expect(await response.text()).toBe("Storage backend error");
    });
  });
});
