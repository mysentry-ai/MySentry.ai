import { afterEach, describe, expect, it, vi } from "vitest";
import {
  isDatabaseUnavailableError,
  submitSmsConsentToManagedBackend,
} from "./smsConsentFallback";

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("managed SMS persistence fallback", () => {
  it("sends a completed SMS preference server-to-server to the managed backend", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify([
          {
            result: {
              data: {
                json: {
                  success: true,
                  id: 71,
                  smsConsent: false,
                },
              },
            },
          },
        ]),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    );
    vi.stubGlobal("fetch", fetchMock);

    await expect(
      submitSmsConsentToManagedBackend({
        name: "Managed Fallback User",
        email: "managed@example.com",
        phone: "+1 614 555 0164",
        smsConsent: false,
        privacyAcknowledged: false,
        source: "sms-consent-page",
      })
    ).resolves.toEqual({
      success: true,
      id: 71,
      smsConsent: false,
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://mysentry-5pk35fzr.manus.space/api/trpc/smsConsent.submit?batch=1",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
    );
    expect(JSON.parse(fetchMock.mock.calls[0][1].body)).toEqual({
      0: {
        json: expect.objectContaining({
          name: "Managed Fallback User",
          viaManagedFallback: true,
        }),
      },
    });
  });

  it("recognizes only database-availability errors as eligible for a retry", () => {
    expect(
      isDatabaseUnavailableError(new Error("Database not available"))
    ).toBe(true);
    expect(isDatabaseUnavailableError(new Error("Validation failed"))).toBe(
      false
    );
  });
});
