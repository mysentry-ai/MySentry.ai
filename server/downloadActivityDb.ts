import { eq, sql } from "drizzle-orm";
import { TRPCError } from "@trpc/server";
import { downloadActivityEvents } from "../drizzle/schema";
import { getDb } from "./db";
import {
  downloadActivityEventsForPacket,
  DOWNLOAD_ACTIVITY_DAY_MS,
  type DownloadActivityPacket,
} from "../shared/download-activity";

export function isApprovedDownloadDatabase(
  connectionString: string | undefined
): boolean {
  if (!connectionString) return false;
  try {
    return (
      decodeURIComponent(new URL(connectionString).pathname.slice(1)) ===
      "manus-mysentry"
    );
  } catch {
    return false;
  }
}

async function activityDb() {
  // Never silently write this approved counter into the unrelated preview DB.
  if (!isApprovedDownloadDatabase(process.env.DATABASE_URL)) {
    throw new TRPCError({
      code: "SERVICE_UNAVAILABLE",
      message:
        "Download activity storage is not connected to the approved MySentry database.",
    });
  }
  const db = await getDb();
  if (!db)
    throw new TRPCError({
      code: "SERVICE_UNAVAILABLE",
      message: "Download activity storage is unavailable.",
    });
  return db;
}

export async function recordDownloadActivity(
  packet: DownloadActivityPacket
): Promise<void> {
  const db = await activityDb();
  const events = downloadActivityEventsForPacket(packet, Date.now());
  await db.transaction(async tx => {
    await tx
      .insert(downloadActivityEvents)
      .values(events)
      .onDuplicateKeyUpdate({
        set: { visitId: sql`${downloadActivityEvents.visitId}` },
      });
  });
}

export async function getDownloadActivitySummary(days: number) {
  const db = await activityDb();
  const now = Date.now();
  const start =
    Math.floor(now / DOWNLOAD_ACTIVITY_DAY_MS) * DOWNLOAD_ACTIVITY_DAY_MS -
    (days - 1) * DOWNLOAD_ACTIVITY_DAY_MS;
  const t = downloadActivityEvents;
  const visit = sql<number>`SUM(CASE WHEN ${t.eventType} = 'visit' THEN 1 ELSE 0 END)`;
  const redirects = sql<number>`SUM(CASE WHEN ${t.eventType} = 'auto_redirect' THEN 1 ELSE 0 END)`;
  const clicks = sql<number>`SUM(CASE WHEN ${t.eventType} = 'store_click' THEN 1 ELSE 0 END)`;
  const inRange = sql`${t.receivedAt} >= ${start} AND ${t.receivedAt} <= ${now}`;
  const [lifetime, totals, byPlatform, byStore, daily] = await Promise.all([
    db
      .select({
        visits: visit,
        startedAt: sql<number | null>`MIN(${t.receivedAt})`,
      })
      .from(t),
    db.select({ visits: visit, redirects, clicks }).from(t).where(inRange),
    db
      .select({ platform: t.platform, visits: visit })
      .from(t)
      .where(sql`${inRange} AND ${t.eventType} = 'visit'`)
      .groupBy(t.platform),
    db
      .select({ store: t.store, redirects, clicks })
      .from(t)
      .where(sql`${inRange} AND ${t.store} <> 'none'`)
      .groupBy(t.store),
    db
      .select({
        day: sql<number>`FLOOR(${t.receivedAt} / ${DOWNLOAD_ACTIVITY_DAY_MS}) * ${DOWNLOAD_ACTIVITY_DAY_MS}`,
        visits: visit,
        redirects,
        clicks,
      })
      .from(t)
      .where(inRange)
      .groupBy(sql`FLOOR(${t.receivedAt} / ${DOWNLOAD_ACTIVITY_DAY_MS})`)
      .orderBy(sql`FLOOR(${t.receivedAt} / ${DOWNLOAD_ACTIVITY_DAY_MS})`),
  ]);
  const number = (value: unknown) => Number(value || 0);
  const dailyMap = new Map(daily.map(row => [number(row.day), row]));
  return {
    days,
    start,
    end: now,
    startedAt:
      lifetime[0]?.startedAt == null ? null : number(lifetime[0].startedAt),
    allTimeVisits: number(lifetime[0]?.visits),
    visits: number(totals[0]?.visits),
    redirectAttempts: number(totals[0]?.redirects),
    storeClicks: number(totals[0]?.clicks),
    platforms: ["ios", "android", "other"].map(platform => ({
      platform,
      visits: number(byPlatform.find(x => x.platform === platform)?.visits),
    })),
    stores: ["ios", "android", "ring"].map(store => {
      const row = byStore.find(x => x.store === store);
      return {
        store,
        redirectAttempts: number(row?.redirects),
        clicks: number(row?.clicks),
      };
    }),
    daily: Array.from({ length: days }, (_, index) => {
      const day = start + index * DOWNLOAD_ACTIVITY_DAY_MS;
      const row = dailyMap.get(day);
      return {
        day,
        visits: number(row?.visits),
        redirectAttempts: number(row?.redirects),
        clicks: number(row?.clicks),
      };
    }),
  };
}
