import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { MySqlDialect } from "drizzle-orm/mysql-core";
import { getTableConfig } from "drizzle-orm/mysql-core";
import { getDb } from "./db";
import { downloadActivityEvents } from "../drizzle/schema";
import { DOWNLOAD_ACTIVITY_DAY_MS, type DownloadActivityEvent } from "../shared/download-activity";
import { recordDownloadActivity, getDownloadActivitySummary } from "./downloadActivityDb";

// No real DB transport exists in this suite. Exercise the actual repo helper,
// replacing only the shared getDb dependency. Production guard is not mocked.
vi.mock("./db", () => ({ getDb: vi.fn() }));
const approvedUrl = "mysql://test:placeholder@db.dentasmart.ai/manus-mysentry";
const packet = {
  kind: "arrival" as const,
  visitId: "d0879d3b-50f0-4d13-9705-c9f29e1ddcb2",
  platform: "ios" as const,
  autoStore: "ios" as const,
};
beforeEach(() => {
  vi.clearAllMocks();
  vi.stubEnv("DATABASE_URL", approvedUrl);
  vi.spyOn(Date, "now").mockReturnValue(1770000000000);
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.restoreAllMocks();
});
function memoryAdapter() {
  const rows = new Map<string, DownloadActivityEvent>();
  const duplicate = vi.fn(async (events: DownloadActivityEvent[], options: any) => {
    const setSql = new MySqlDialect().sqlToQuery(options.set.visitId);
    expect(setSql.sql).toBe("`download_activity_events`.`visitId`");
    expect(Object.keys(options.set)).toEqual(["visitId"]);
    for (const event of events) {
      const key = `${event.visitId}/${event.eventType}/${event.store}`;
      if (!rows.has(key)) rows.set(key, { ...event });
    }
  });
  const insert = vi.fn((table: unknown) => {
    expect(table).toBe(downloadActivityEvents);
    return { values: (events: DownloadActivityEvent[]) => ({
      onDuplicateKeyUpdate: (options: any) => duplicate(events, options),
    }) };
  });
  const transaction = vi.fn(async (callback: any) => callback({ insert }));
  vi.mocked(getDb).mockResolvedValue({ transaction } as unknown as NonNullable<Awaited<ReturnType<typeof getDb>>>);
  return { rows, duplicate, transaction };
}
describe("actual download storage helper, isolated from all databases", () => {
  it.each([
    undefined,
    "mysql://test:placeholder@localhost:13316/manus-mysentry",
    "mysql://test:placeholder@db.dentasmart.ai/other",
    "mysql://test:placeholder@gateway06.us-east-1.prod.aws.tidbcloud.com/5pk35fzRuLVvrjtZdt4C3R",
  ])("fails closed for %s before invoking the shared getDb", async url => {
    vi.stubEnv("DATABASE_URL", url);
    await expect(recordDownloadActivity(packet)).rejects.toMatchObject({ code: "SERVICE_UNAVAILABLE" });
    await expect(getDownloadActivitySummary(7)).rejects.toMatchObject({ code: "SERVICE_UNAVAILABLE" });
    expect(getDb).not.toHaveBeenCalled();
  });
  it("reports unavailable if the approved shared getDb is absent", async () => {
    vi.mocked(getDb).mockResolvedValue(null);
    await expect(recordDownloadActivity(packet)).rejects.toMatchObject({ code: "SERVICE_UNAVAILABLE" });
    expect(getDb).toHaveBeenCalledOnce();
  });
  it("deduplicates arrival/redirect/click keys in a transaction without replacing first receipt time", async () => {
    const db = memoryAdapter();
    await recordDownloadActivity(packet);
    vi.spyOn(Date, "now").mockReturnValue(1770000001000);
    await recordDownloadActivity(packet);
    const click = { kind: "store_click" as const, visitId: packet.visitId, platform: packet.platform, store: "ios" as const };
    await recordDownloadActivity(click);
    await recordDownloadActivity(click);
    await recordDownloadActivity({ ...click, store: "ring" });
    expect(db.rows.size).toBe(4);
    expect([...db.rows.values()].map(event => [event.eventType, event.store])).toEqual([
      ["visit", "none"], ["auto_redirect", "ios"], ["store_click", "ios"], ["store_click", "ring"],
    ]);
    expect(db.rows.get(`${packet.visitId}/visit/none`)?.receivedAt).toBe(1770000000000);
    expect(db.rows.get(`${packet.visitId}/auto_redirect/ios`)?.receivedAt).toBe(1770000000000);
    expect(db.transaction).toHaveBeenCalledTimes(5);
    expect(db.duplicate).toHaveBeenCalledTimes(5);
    // The DB, not just the adapter/client, enforces exactly these key columns.
    const config = getTableConfig(downloadActivityEvents);
    expect(config.primaryKeys[0].columns.map(column => column.name)).toEqual(["visitId", "eventType", "store"]);
    expect(config.columns.map(column => column.name)).toEqual(["visitId", "eventType", "platform", "store", "receivedAt"]);
  });
  it("allows repeat activity with a fresh navigation ID", async () => {
    const db = memoryAdapter();
    await recordDownloadActivity(packet);
    await recordDownloadActivity({ ...packet, visitId: "f0879d3b-50f0-4d13-9705-c9f29e1ddcb2" });
    expect(db.rows.size).toBe(4);
  });
  it("normalizes numeric aggregates and fills missing UTC days and stores", async () => {
    const now = Date.now();
    const day = Math.floor(now / DOWNLOAD_ACTIVITY_DAY_MS) * DOWNLOAD_ACTIVITY_DAY_MS;
    const results = [
      [{ visits: "12", startedAt: String(day - 10 * DOWNLOAD_ACTIVITY_DAY_MS) }],
      [{ visits: "3", redirects: "1", clicks: "2" }],
      [{ platform: "ios", visits: "3" }],
      [{ store: "ios", redirects: "1", clicks: "2" }],
      [{ day: String(day), visits: "3", redirects: "1", clicks: "2" }],
    ];
    let index = 0;
    const select = vi.fn(() => {
      const rows = results[index++];
      const query: any = {
        from: () => query, where: () => query, groupBy: () => query, orderBy: () => query,
        then: (resolve: any, reject: any) => Promise.resolve(rows).then(resolve, reject),
      };
      return query;
    });
    vi.mocked(getDb).mockResolvedValue({ select } as unknown as NonNullable<Awaited<ReturnType<typeof getDb>>>);
    const report = await getDownloadActivitySummary(7);
    expect(report).toMatchObject({ allTimeVisits: 12, visits: 3, redirectAttempts: 1, storeClicks: 2, days: 7 });
    expect(report.daily).toHaveLength(7);
    expect(report.daily[0]).toEqual({ day: day - 6 * DOWNLOAD_ACTIVITY_DAY_MS, visits: 0, redirectAttempts: 0, clicks: 0 });
    expect(report.daily[6]).toEqual({ day, visits: 3, redirectAttempts: 1, clicks: 2 });
    expect(report.platforms).toEqual([{ platform: "ios", visits: 3 }, { platform: "android", visits: 0 }, { platform: "other", visits: 0 }]);
    expect(report.stores[2]).toEqual({ store: "ring", redirectAttempts: 0, clicks: 0 });
    expect(select).toHaveBeenCalledTimes(5);
  });
});
