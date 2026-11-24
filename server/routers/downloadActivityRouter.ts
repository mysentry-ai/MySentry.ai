import { TRPCError } from "@trpc/server";
import { publicProcedure, router } from "../_core/trpc";
import { downloadActivityPacketSchema } from "../../shared/download-activity";
import { recordDownloadActivity } from "../downloadActivityDb";
import {
  isSameOriginDownloadActivity,
  shouldIgnoreDownloadActivity,
} from "../downloadActivityGuards";

let activeWrites = 0;
export const downloadActivityRouter = router({
  record: publicProcedure
    .input(downloadActivityPacketSchema)
    .mutation(async ({ ctx, input }) => {
      if (!isSameOriginDownloadActivity(ctx.req))
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "Same-origin activity required",
        });
      if (shouldIgnoreDownloadActivity(ctx.req))
        return { recorded: false, ignored: true };
      if (activeWrites >= 16)
        throw new TRPCError({
          code: "TOO_MANY_REQUESTS",
          message: "Activity storage is busy",
        });
      activeWrites++;
      try {
        await recordDownloadActivity(input);
        return { recorded: true, ignored: false };
      } catch (error) {
        if (error instanceof TRPCError) throw error;
        throw new TRPCError({
          code: "SERVICE_UNAVAILABLE",
          message:
            "Download activity storage is unavailable. The store link still works.",
        });
      } finally {
        activeWrites--;
      }
    }),
});
