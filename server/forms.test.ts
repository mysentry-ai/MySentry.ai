import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { createContactSubmission, getContactSubmissions } from "./db";
import { notifyOwner } from "./_core/notification";
import { submitSmsConsentToManagedBackend } from "./smsConsentFallback";

// Mock the database functions
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  getContactSubmissions: vi.fn().mockResolvedValue([]),
  createPartnerApplication: vi.fn().mockResolvedValue({ id: 1 }),
  createDemoRequest: vi.fn().mockResolvedValue({ id: 1 }),
  createNewsletterSubscription: vi
    .fn()
    .mockResolvedValue({ id: 1, alreadySubscribed: false, reactivated: false }),
  createTrialSignup: vi.fn().mockResolvedValue({ id: 1 }),
  unsubscribeNewsletter: vi.fn().mockResolvedValue({ success: true }),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

vi.mock("./smsConsentFallback", () => ({
  isDatabaseUnavailableError: vi.fn(error =>
    String(error).toLowerCase().includes("database not available")
  ),
  submitSmsConsentToManagedBackend: vi.fn().mockResolvedValue({
    success: true,
    id: 91,
    smsConsent: false,
  }),
}));

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

function createBlogAdminContext(token: string): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: { "x-blog-admin-token": token },
    } as TrpcContext["req"],
    res: {
      clearCookie: vi.fn(),
    } as unknown as TrpcContext["res"],
  };
}

describe("contact.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a contact form", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
      subject: "Test Subject",
      message: "This is a test message",
      source: "homepage",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });

  it("validates required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "",
        email: "john@example.com",
        message: "Test message",
      })
    ).rejects.toThrow();
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submit({
        name: "John Doe",
        email: "invalid-email",
        message: "Test message",
      })
    ).rejects.toThrow();
  });
});

describe("smsConsent.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("records selected SMS consent with an optional Privacy Policy acknowledgment", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.smsConsent.submit({
      name: "SMS Consent User",
      email: "consent@example.com",
      phone: "+1 614 555 0123",
      smsConsent: true,
      privacyAcknowledged: true,
      source: "privacy-policy",
    });

    expect(result).toEqual({ success: true, id: 1, smsConsent: true });
    expect(createContactSubmission).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "SMS Consent User",
        email: "consent@example.com",
        phone: "+1 614 555 0123",
        subject: "SMS Communication Preferences",
        source: "privacy-policy",
        message: expect.stringContaining(
          "SMS Communication Consent: confirmed"
        ),
      })
    );
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: "New SMS Communication Preference",
        content: expect.stringContaining(
          "Privacy Policy acknowledgment: confirmed"
        ),
      })
    );
  });

  it("accepts unselected SMS consent and records that no SMS permission was granted", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.smsConsent.submit({
        name: "SMS Consent User",
        email: "consent@example.com",
        phone: "+1 614 555 0123",
        smsConsent: false,
        privacyAcknowledged: false,
        source: "sms-consent-page",
      })
    ).resolves.toEqual({ success: true, id: 1, smsConsent: false });

    expect(createContactSubmission).toHaveBeenLastCalledWith(
      expect.objectContaining({
        message: expect.stringMatching(
          /SMS Communication Consent: not selected[\s\S]*Privacy Policy acknowledgment: not selected/
        ),
      })
    );
    expect(notifyOwner).toHaveBeenLastCalledWith(
      expect.objectContaining({
        content: expect.stringMatching(
          /Privacy Policy acknowledgment: not selected[\s\S]*SMS consent: not selected/
        ),
      })
    );
  });

  it("retries a database-unavailable SMS request through the managed persistence backend", async () => {
    vi.mocked(createContactSubmission).mockRejectedValueOnce(
      new Error("Database not available")
    );
    const caller = appRouter.createCaller(createPublicContext());

    await expect(
      caller.smsConsent.submit({
        name: "Fallback Preference User",
        email: "fallback@example.com",
        phone: "+1 614 555 0188",
        smsConsent: false,
        privacyAcknowledged: false,
        source: "sms-consent-page",
      })
    ).resolves.toEqual({
      success: true,
      id: 91,
      smsConsent: false,
    });

    expect(submitSmsConsentToManagedBackend).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Fallback Preference User",
        email: "fallback@example.com",
        smsConsent: false,
      })
    );
  });
});

describe("blog.submissions.list", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("limits website and SMS records to an authenticated admin session", async () => {
    const publicCaller = appRouter.createCaller(createPublicContext());
    await expect(publicCaller.blog.submissions.list()).rejects.toThrow(
      "Admin authentication required"
    );

    const { token } = await publicCaller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });
    const adminCaller = appRouter.createCaller(createBlogAdminContext(token));
    const expectedSubmissions = [
      {
        id: 12,
        name: "SMS Preference User",
        email: "preference@example.com",
        phone: "+1 614 555 0123",
        subject: "SMS Communication Preferences",
        message:
          "SMS Communication Consent: confirmed\nPrivacy Policy acknowledgment: not selected",
        source: "sms-consent-page",
        status: "new",
        createdAt: new Date("2026-09-23T12:00:00.000Z"),
        updatedAt: new Date("2026-09-23T12:00:00.000Z"),
      },
    ];
    vi.mocked(getContactSubmissions).mockResolvedValueOnce(expectedSubmissions);

    await expect(
      adminCaller.blog.submissions.list({ limit: 25 })
    ).resolves.toEqual(expectedSubmissions);
    expect(getContactSubmissions).toHaveBeenCalledWith(25);
  });
});

describe("partner.submit", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a partner application", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.partner.submit({
      companyName: "Test Company",
      contactName: "Jane Doe",
      email: "jane@company.com",
      phone: "555-5678",
      website: "https://example.com",
      partnerType: "dealer",
      industry: "security",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });
});

describe("demo.request", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully submits a demo request", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.demo.request({
      name: "Bob Smith",
      email: "bob@company.com",
      phone: "555-9999",
      company: "Acme Inc",
      companySize: "50",
      useCase: "employer",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });
});

describe("newsletter.subscribe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully subscribes to newsletter", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.subscribe({
      email: "subscriber@example.com",
      name: "Newsletter User",
      source: "footer",
    });

    expect(result).toMatchObject({ success: true, id: 1 });
  });
});

describe("newsletter.unsubscribe", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully unsubscribes from newsletter", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.newsletter.unsubscribe({
      email: "subscriber@example.com",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("trial.signup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("successfully signs up for trial", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.trial.signup({
      email: "trial@example.com",
      name: "Trial User",
      planType: "individual",
      source: "pricing",
    });

    expect(result).toEqual({ success: true, id: 1 });
  });
});
