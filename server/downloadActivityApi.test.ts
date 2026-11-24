import {
  beforeAll,
  beforeEach,
  afterAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import express from "express";
import { createServer, type Server } from "node:http";
import { readFileSync } from "node:fs";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

// No database connection or writes: the HTTP/access suite mocks storage only.
vi.mock("./downloadActivityDb", async importOriginal => ({
  ...(await importOriginal<typeof import("./downloadActivityDb")>()),
  recordDownloadActivity: vi.fn(),
  getDownloadActivitySummary: vi.fn(),
}));
import {
  recordDownloadActivity,
  getDownloadActivitySummary,
  isApprovedDownloadDatabase,
} from "./downloadActivityDb";
import { appRouter } from "./routers";
import { registerDownloadActivityGuards } from "./downloadActivityGuards";

const packet = {
  kind: "arrival",
  visitId: "d0879d3b-50f0-4d13-9705-c9f29e1ddcb2",
  platform: "other",
};
let server: Server;
let base: string;
const largeParser = vi.fn();
beforeAll(async () => {
  const app = express();
  registerDownloadActivityGuards(app);
  app.use((_req, _res, next) => {
    largeParser();
    next();
  });
  app.use(express.json({ limit: "50mb" }));
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext: ({ req, res }) => ({ req, res, user: null }),
    })
  );
  server = createServer(app);
  await new Promise<void>(resolve => server.listen(0, "127.0.0.1", resolve));
  base = `http://127.0.0.1:${(server.address() as { port: number }).port}`;
});
afterAll(async () => {
  server.closeAllConnections();
  await new Promise<void>(resolve => server.close(() => resolve()));
});
beforeEach(() => {
  vi.clearAllMocks();
  vi.mocked(recordDownloadActivity).mockResolvedValue();
  vi.mocked(getDownloadActivitySummary).mockResolvedValue({
    visits: 3,
    allTimeVisits: 3,
    days: 30,
    start: 0,
    end: 1,
    startedAt: 0,
    redirectAttempts: 1,
    storeClicks: 1,
    platforms: [],
    stores: [],
    daily: [],
  });
});

function post(
  body: unknown = { json: packet },
  headers: Record<string, string> = {},
  path = "/api/trpc/downloadActivity.record"
) {
  return fetch(base + path, {
    method: "POST",
    headers: {
      Origin: base,
      "Content-Type": "application/json",
      "User-Agent": "Chrome browser",
      ...headers,
    },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

describe("download activity HTTP and access guards", () => {
  it("accepts the actual unbatched SuperJSON envelope and records only validated input", async () => {
    const response = await post();
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      result: { data: { json: { recorded: true, ignored: false } } },
    });
    expect(recordDownloadActivity).toHaveBeenCalledWith(packet);
    expect(response.headers.get("cache-control")).toBe("no-store");
  });
  it.each([
    { DNT: "1" },
    { DNT: "yes" },
    { "Sec-GPC": "1" },
    { "User-Agent": "Googlebot" },
    { "User-Agent": "facebookexternalhit/1.1" },
    { "User-Agent": "Lighthouse" },
    { "Sec-Purpose": "prefetch" },
    { Purpose: "prerender" },
    { "Sec-Purpose": "navigate", Purpose: "prefetch" },
  ])("ignores privacy/automated requests without recording: %j", async headers => {
    const response = await post(undefined, headers);
    expect(response.status).toBe(200);
    expect(await response.json()).toMatchObject({
      result: { data: { json: { recorded: false, ignored: true } } },
    });
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it.each([
    { Origin: "https://external.example" },
    { Origin: "" },
    { Origin: "null" },
    { Origin: "not-a-url" },
    { "Sec-Fetch-Site": "cross-site" },
  ])("rejects cross-site activity before the general parser: %j", async headers => {
    const response = await post(undefined, headers);
    expect(response.status).toBe(403);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
    expect(largeParser).not.toHaveBeenCalled();
  });
  it("rejects a same-host origin with the wrong scheme", async () => {
    const response = await post(undefined, { Origin: base.replace("http:", "https:") });
    expect(response.status).toBe(403);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
    expect(largeParser).not.toHaveBeenCalled();
  });
  it("rejects malformed, oversized, invalid, batched-array and extra data", async () => {
    expect((await post("{")).status).toBe(400);
    expect((await post({ json: { ...packet, extra: "x".repeat(1100) } })).status).toBe(413);
    expect((await post({ json: { ...packet, visitId: "invalid" } })).status).toBe(400);
    expect((await post({ json: { ...packet, email: "private@example.invalid" } })).status).toBe(400);
    expect((await post({ json: { ...packet, autoStore: "ios" } })).status).toBe(400);
    expect((await post([{ json: packet }])).status).toBe(400);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it("enforces the 1KB limit before the large upload parser", async () => {
    const response = await post({ json: { ...packet, extra: "x".repeat(4096) } });
    expect(response.status).toBe(413);
    expect(largeParser).not.toHaveBeenCalled();
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it("rejects GET, non-JSON and attempts to bypass the guard through batching", async () => {
    expect((await fetch(base + "/api/trpc/downloadActivity.record")).status).toBe(405);
    expect((await post("anything", { "Content-Type": "text/plain" })).status).toBe(415);
    for (const path of [
      "/api/trpc/downloadActivity.record?batch=1",
      "/api/trpc/auth.logout,downloadActivity.record?batch=1",
      "/api/trpc/downloadActivity.record,auth.logout?batch=1",
      "/api/trpc/auth.logout%2CdownloadActivity.record?batch=1",
      "/api/trpc/downloadActivity%2Erecord?batch=1",
      "/API/TRPC/downloadActivity.record",
      "/api/trpc//downloadActivity.record",
      "/api/trpc/extra/downloadActivity.record",
    ]) expect((await post(undefined, {}, path)).status).toBe(400);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
    expect(largeParser).not.toHaveBeenCalled();
  });
  it.each(["server/_core/index.ts", "server/_core/index.prod.ts"])(
    "%s registers the activity guard before the general JSON parser and tRPC middleware",
    entry => {
      const source = readFileSync(entry, "utf8");
      const guard = source.indexOf("registerDownloadActivityGuards(app)");
      expect(guard).toBeGreaterThan(-1);
      expect(guard).toBeLessThan(source.indexOf("app.use(express.json("));
      expect(guard).toBeLessThan(source.indexOf("createExpressMiddleware({"));
    }
  );
  it("reports unavailable rather than false success when storage fails", async () => {
    vi.mocked(recordDownloadActivity).mockRejectedValue(new Error("Database failed"));
    const response = await post();
    expect(response.status).toBe(503);
    expect(await response.text()).not.toContain("Database failed");
  });
  it("does not restrict unrelated API request bodies", async () => {
    const response = await fetch(
      base + "/api/trpc/blog.adminVerify?input=" +
        encodeURIComponent(JSON.stringify({ json: { token: "x".repeat(2048) } }))
    );
    expect(response.status).toBe(200);
    expect(largeParser).toHaveBeenCalledOnce();
  });
  it("allows only the exact owner-approved mysql host and database, not attached Manus storage or localhost", () => {
    expect(isApprovedDownloadDatabase("mysql://user:placeholder@db.dentasmart.ai/manus-mysentry")).toBe(true);
    expect(isApprovedDownloadDatabase("mysql://user:placeholder@db.dentasmart.ai:13316/manus-mysentry?ssl=true")).toBe(true);
    for (const url of [
      "mysql://user:placeholder@gateway06.us-east-1.prod.aws.tidbcloud.com/5pk35fzRuLVvrjtZdt4C3R",
      "mysql://user:placeholder@db.dentasmart.ai/another_database",
      "mysql://user:placeholder@unapproved.example/manus-mysentry",
      "mysql://user:placeholder@localhost/manus-mysentry",
      "mysql://user:placeholder@127.0.0.1:13316/manus-mysentry",
      "mysql://user:placeholder@[::1]/manus-mysentry",
      "mysql://user:placeholder@db.dentasmart.ai.evil.example/manus-mysentry",
      "mysql://user:placeholder@db.dentasmart.ai./manus-mysentry",
      "postgres://user:placeholder@db.dentasmart.ai/manus-mysentry",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?host=localhost",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?database=another_database",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?socketPath=/tmp/mysql.sock",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?uri=mysql://localhost/another_database",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?stream=override",
      "mysql://user:placeholder@db.dentasmart.ai/manus-mysentry?__proto__=%7B%22socketPath%22%3A%22%2Ftmp%2Fmysql.sock%22%7D",
      "malformed", "",
    ]) expect(isApprovedDownloadDatabase(url)).toBe(false);
    expect(isApprovedDownloadDatabase(undefined)).toBe(false);
  });
  it("groups daily aggregates by their selected UTC-day alias", () => {
    const source = readFileSync("server/downloadActivityDb.ts", "utf8");
    expect(source).toMatch(/\.as\(\s*"utc_day"\s*\)/);
    expect(source).toContain('.groupBy(sql`utc_day`)');
    expect(source).toContain('.orderBy(sql`utc_day`)');
  });
  it("keeps aggregates inaccessible without a valid existing admin session and after logout", async () => {
    const path = "/api/trpc/blog.downloadActivitySummary?input=" +
      encodeURIComponent(JSON.stringify({ json: { days: 30 } }));
    expect((await fetch(base + path)).status).toBe(401);
    expect((await fetch(base + path, { headers: { "x-blog-admin-token": "invalid" } })).status).toBe(401);
    expect(getDownloadActivitySummary).not.toHaveBeenCalled();
    // Exercise the existing login mechanism locally without duplicating or
    // exporting its credentials, or changing unrelated authentication code.
    const source = readFileSync("server/routers/blogRouter.ts", "utf8");
    const username = source.match(/const ADMIN_USERNAME = "([^"]+)"/)![1];
    const password = source.match(/const ADMIN_PASSWORD = "([^"]+)"/)![1];
    const login = await fetch(base + "/api/trpc/blog.adminLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ json: { username, password } }),
    });
    const token = (await login.json()).result.data.json.token;
    const authorized = await fetch(base + path, { headers: { "x-blog-admin-token": token } });
    expect(authorized.status).toBe(200);
    expect(authorized.headers.get("cache-control")).toBe("no-store");
    expect(getDownloadActivitySummary).toHaveBeenCalledWith(30);
    const invalidPeriod = await fetch(base + "/api/trpc/blog.downloadActivitySummary?input=" +
      encodeURIComponent(JSON.stringify({ json: { days: 365 } })), {
      headers: { "x-blog-admin-token": token },
    });
    expect(invalidPeriod.status).toBe(400);
    await fetch(base + "/api/trpc/blog.adminLogout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ json: { token } }),
    });
    expect((await fetch(base + path, { headers: { "x-blog-admin-token": token } })).status).toBe(401);
  });
  it("has a standalone CREATE-only table/index script, not legacy migration history or PII fields", () => {
    const sql = readFileSync("scripts/sql/create_download_activity_events.sql", "utf8");
    expect(sql).toContain("CREATE TABLE `download_activity_events`");
    expect(sql).toContain("INDEX `download_activity_received_at_idx`");
    expect(sql).not.toMatch(/\b(?:ALTER|DROP|DELETE|TRUNCATE|INSERT|UPDATE)\b/i);
    expect(sql).not.toMatch(/email|userAgent|ipAddress|referrer/i);
  });
});
