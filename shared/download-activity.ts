import { z } from "zod";

export const DOWNLOAD_ACTIVITY_ENDPOINT = "/api/trpc/downloadActivity.record";
export const DOWNLOAD_ACTIVITY_MAX_BYTES = 1024;
export const DOWNLOAD_ACTIVITY_DAY_MS = 24 * 60 * 60 * 1000;
export const DOWNLOAD_BOT_PATTERN =
  /bot\b|crawler|spider|slurp|facebookexternalhit|facebot|twitterbot|linkedinbot|whatsapp|telegrambot|preview|lighthouse|googleother|bingpreview/i;

const common = {
  visitId: z.string().uuid(),
  platform: z.enum(["ios", "android", "other"]),
};
export const downloadActivityPacketSchema = z
  .discriminatedUnion("kind", [
    z
      .object({
        ...common,
        kind: z.literal("arrival"),
        autoStore: z.enum(["ios", "android"]).optional(),
      })
      .strict(),
    z
      .object({
        ...common,
        kind: z.literal("store_click"),
        store: z.enum(["ios", "android", "ring"]),
      })
      .strict(),
  ])
  .superRefine((packet, context) => {
    if (
      packet.kind === "arrival" &&
      packet.autoStore &&
      packet.autoStore !== packet.platform
    ) {
      context.addIssue({
        code: "custom",
        message: "Automatic store must match the detected mobile platform",
      });
    }
  });
export type DownloadActivityPacket = z.infer<
  typeof downloadActivityPacketSchema
>;
export type DownloadActivityEvent = {
  visitId: string;
  eventType: "visit" | "auto_redirect" | "store_click";
  platform: "ios" | "android" | "other";
  store: "none" | "ios" | "android" | "ring";
  receivedAt: number;
};

export function downloadActivityEventsForPacket(
  packet: DownloadActivityPacket,
  receivedAt: number
): DownloadActivityEvent[] {
  const base = {
    visitId: packet.visitId,
    platform: packet.platform,
    receivedAt,
  };
  const events: DownloadActivityEvent[] = [
    { ...base, eventType: "visit", store: "none" },
  ];
  if (packet.kind === "arrival" && packet.autoStore)
    events.push({
      ...base,
      eventType: "auto_redirect",
      store: packet.autoStore,
    });
  if (packet.kind === "store_click")
    events.push({ ...base, eventType: "store_click", store: packet.store });
  return events;
}
