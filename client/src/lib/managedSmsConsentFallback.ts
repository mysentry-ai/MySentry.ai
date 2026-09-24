import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import superjson from "superjson";
import type { AppRouter } from "../../../server/routers";

/**
 * The managed deployment remains available as a database-backed fallback for
 * public SMS preference requests while a separate custom-domain deployment is
 * being brought into parity. This client intentionally sends no cookies or
 * credentials across origins.
 */
export const MANAGED_SMS_FALLBACK_ORIGIN =
  "https://mysentry-5pk35fzr.manus.space";

type SmsConsentInput = {
  name: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  privacyAcknowledged: boolean;
  source: "sms-consent-page" | "privacy-policy";
};

const managedSmsClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${MANAGED_SMS_FALLBACK_ORIGIN}/api/trpc`,
      transformer: superjson,
      fetch(input, init) {
        return globalThis.fetch(input, {
          ...(init ?? {}),
          credentials: "omit",
        });
      },
    }),
  ],
});

export async function submitSmsConsentToManagedBackend(input: SmsConsentInput) {
  return managedSmsClient.smsConsent.submit.mutate(input);
}
