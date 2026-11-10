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
import { TRPCError } from "@trpc/server";

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
beforeAll(async () => {
  const app = express();
  registerDownloadActivityGuards(app);
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
    { "Sec-GPC": "1" },
    { "User-Agent": "Googlebot" },
    { "Sec-Purpose": "prefetch" },
  ])(
    "ignores privacy/automated requests without recording: %j",
    async headers => {
      const response = await post(undefined, headers);
      expect(response.status).toBe(200);
      expect(recordDownloadActivity).not.toHaveBeenCalled();
    }
  );
  it.each([
    { Origin: "https://external.example" },
    { Origin: "" },
    { "Sec-Fetch-Site": "cross-site" },
  ])("rejects cross-site activity: %j", async headers => {
    const response = await post(undefined, headers);
    expect(response.status).toBe(403);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it("rejects malformed, oversized, invalid and extra data", async () => {
    expect((await post("{")).status).toBe(400);
    expect(
      (await post({ json: { ...packet, extra: "x".repeat(1100) } })).status
    ).toBe(413);
    expect(
      (await post({ json: { ...packet, visitId: "invalid" } })).status
    ).toBe(400);
    expect(
      (await post({ json: { ...packet, email: "private@example.invalid" } }))
        .status
    ).toBe(400);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it("rejects GET, non-JSON and attempts to bypass the guard through batching", async () => {
    expect(
      (await fetch(base + "/api/trpc/downloadActivity.record")).status
    ).toBe(405);
    expect(
      (await post("anything", { "Content-Type": "text/plain" })).status
    ).toBe(415);
    expect(
      (await post(undefined, {}, "/api/trpc/downloadActivity.record?batch=1"))
        .status
    ).toBe(400);
    expect(
      (
        await post(
          undefined,
          {},
          "/api/trpc/auth.logout,downloadActivity.record?batch=1"
        )
      ).status
    ).toBe(400);
    expect(recordDownloadActivity).not.toHaveBeenCalled();
  });
  it("reports unavailable rather than false success when storage fails", async () => {
    vi.mocked(recordDownloadActivity).mockRejectedValue(
      new Error("Database failed")
    );
    expect((await post()).status).toBe(503);
  });
  it("does not restrict unrelated API request bodies", async () => {
    const response = await fetch(
      base +
        "/api/trpc/blog.adminVerify?input=" +
        encodeURIComponent(JSON.stringify({ json: { token: "unknown" } }))
    );
    expect(response.status).toBe(200);
  });
  it("uses only the explicitly approved Manus tracking database", () => {
    expect(
      isApprovedDownloadDatabase(
        "mysql://user:password@gateway06.us-east-1.prod.aws.tidbcloud.com/5pk35fzRuLVvrjtZdt4C3R"
      )
    ).toBe(true);
    expect(
      isApprovedDownloadDatabase(
        "mysql://user:password@gateway06.us-east-1.prod.aws.tidbcloud.com/another_database"
      )
    ).toBe(false);
    expect(
      isApprovedDownloadDatabase(
        "mysql://user:password@db.dentasmart.ai/manus-mysentry"
      )
    ).toBe(false);
    expect(
      isApprovedDownloadDatabase(
        "mysql://user:password@unapproved.example/5pk35fzRuLVvrjtZdt4C3R"
      )
    ).toBe(false);
    expect(isApprovedDownloadDatabase(undefined)).toBe(false);
  });
  it("groups daily aggregates by their selected UTC-day alias", () => {
    const source = readFileSync("server/downloadActivityDb.ts", "utf8");
    expect(source).toMatch(/\.as\(\s*"utc_day"\s*\)/);
    expect(source).toContain('.groupBy(sql`utc_day`)');
    expect(source).toContain('.orderBy(sql`utc_day`)');
  });
  it("keeps aggregates inaccessible without a valid existing admin session and after logout", async () => {
    const path =
      "/api/trpc/blog.downloadActivitySummary?input=" +
      encodeURIComponent(JSON.stringify({ json: { days: 30 } }));
    const anonymous = await fetch(base + path);
    expect(anonymous.status).toBe(401);
    expect(getDownloadActivitySummary).not.toHaveBeenCalled();
    const source = readFileSync("server/routers/blogRouter.ts", "utf8");
    const username = source.match(/const ADMIN_USERNAME = "([^"]+)"/)![1];
    const password = source.match(/const ADMIN_PASSWORD = "([^"]+)"/)![1];
    const login = await fetch(base + "/api/trpc/blog.adminLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ json: { username, password } }),
    });
    const token = (await login.json()).result.data.json.token;
    const authorized = await fetch(base + path, {
      headers: { "x-blog-admin-token": token },
    });
    expect(authorized.status).toBe(200);
    expect(authorized.headers.get("cache-control")).toBe("no-store");
    expect(getDownloadActivitySummary).toHaveBeenCalledWith(30);
    await fetch(base + "/api/trpc/blog.adminLogout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ json: { token } }),
    });
    expect(
      (await fetch(base + path, { headers: { "x-blog-admin-token": token } }))
        .status
    ).toBe(401);
  });
  it("contains only a new table/index migration, with no unrelated ALTER or DROP", () => {
    const sql = readFileSync("drizzle/0003_wooden_korath.sql", "utf8");
    expect(sql).toContain("CREATE TABLE `download_activity_events`");
    expect(sql).not.toMatch(/\b(?:ALTER|DROP|DELETE|TRUNCATE)\b/i);
    expect(sql).not.toMatch(/email|userAgent|ipAddress|referrer/i);
  });
});
