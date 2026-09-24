const MANAGED_SMS_BACKEND_ORIGIN = "https://mysentry-5pk35fzr.manus.space";

export type SmsConsentFallbackInput = {
  name: string;
  email: string;
  phone: string;
  smsConsent: boolean;
  privacyAcknowledged: boolean;
  source: "sms-consent-page" | "privacy-policy";
  viaManagedFallback?: boolean;
};

type SmsConsentFallbackResult = {
  success: boolean;
  id: number;
  smsConsent: boolean;
};

function getTrpcResult(payload: unknown): unknown {
  if (!Array.isArray(payload) || payload.length !== 1) return undefined;
  const entry = payload[0] as {
    error?: { json?: { message?: string } };
    result?: { data?: { json?: unknown } | unknown };
  };

  if (entry.error?.json?.message) {
    throw new Error(entry.error.json.message);
  }

  const data = entry.result?.data;
  if (data && typeof data === "object" && "json" in data) {
    return (data as { json?: unknown }).json;
  }
  return data;
}

/**
 * Performs the retry from server to server. Browser CORS does not participate,
 * so a completed request is not discarded when the custom-domain server has no
 * usable database connection.
 */
export async function submitSmsConsentToManagedBackend(
  input: SmsConsentFallbackInput
): Promise<SmsConsentFallbackResult> {
  const response = await globalThis.fetch(
    `${MANAGED_SMS_BACKEND_ORIGIN}/api/trpc/smsConsent.submit?batch=1`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        0: {
          json: {
            ...input,
            viaManagedFallback: true,
          },
        },
      }),
    }
  );

  let payload: unknown;
  try {
    payload = await response.json();
  } catch {
    throw new Error("Managed SMS persistence returned an unreadable response");
  }

  if (!response.ok) {
    const result = getTrpcResult(payload);
    if (result === undefined) {
      throw new Error("Managed SMS persistence request failed");
    }
  }

  const result = getTrpcResult(payload);
  if (
    !result ||
    typeof result !== "object" ||
    typeof (result as { id?: unknown }).id !== "number" ||
    typeof (result as { smsConsent?: unknown }).smsConsent !== "boolean"
  ) {
    throw new Error("Managed SMS persistence returned an invalid response");
  }

  return {
    success: (result as { success?: unknown }).success === true,
    id: (result as { id: number }).id,
    smsConsent: (result as { smsConsent: boolean }).smsConsent,
  };
}

export function isDatabaseUnavailableError(error: unknown): boolean {
  const message = error instanceof Error ? error.message : String(error ?? "");
  return /database not available|database connection|connect.*database|ECONNREFUSED|ETIMEDOUT|ENOTFOUND/i.test(
    message
  );
}
