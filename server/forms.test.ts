import { describe, expect, it, vi, beforeEach } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";

// Mock the database functions
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue({ id: 1 }),
  createPartnerApplication: vi.fn().mockResolvedValue({ id: 1 }),
  createDemoRequest: vi.fn().mockResolvedValue({ id: 1 }),
  createNewsletterSubscription: vi.fn().mockResolvedValue({ id: 1, alreadySubscribed: false, reactivated: false }),
  createTrialSignup: vi.fn().mockResolvedValue({ id: 1 }),
  unsubscribeNewsletter: vi.fn().mockResolvedValue({ success: true }),
}));

// Mock the notification function
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
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

  it("records deliberate SMS consent with an optional Privacy Policy acknowledgment", async () => {
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

    expect(result).toEqual({ success: true, id: 1 });
    expect(createContactSubmission).toHaveBeenCalledWith(expect.objectContaining({
      name: "SMS Consent User",
      email: "consent@example.com",
      phone: "+1 614 555 0123",
      subject: "SMS Consent Confirmation",
      source: "privacy-policy",
      message: expect.stringContaining("SMS Communication Consent: confirmed"),
    }));
    expect(notifyOwner).toHaveBeenCalledWith(expect.objectContaining({
      title: "New SMS Consent Confirmation",
      content: expect.stringContaining("Privacy Policy acknowledgment: confirmed"),
    }));
  });

  it("rejects unconfirmed SMS consent but accepts an unselected Privacy Policy acknowledgment", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.smsConsent.submit({
        name: "SMS Consent User",
        email: "consent@example.com",
        phone: "+1 614 555 0123",
        smsConsent: false,
        privacyAcknowledged: true,
        source: "sms-consent-page",
      })
    ).rejects.toThrow();

    await expect(caller.smsConsent.submit({
      name: "SMS Consent User",
      email: "consent@example.com",
      phone: "+1 614 555 0123",
      smsConsent: true,
      privacyAcknowledged: false,
      source: "sms-consent-page",
    })).resolves.toEqual({ success: true, id: 1 });

    expect(createContactSubmission).toHaveBeenLastCalledWith(expect.objectContaining({
      message: expect.stringContaining("Privacy Policy acknowledgment: not selected"),
    }));
    expect(notifyOwner).toHaveBeenLastCalledWith(expect.objectContaining({
      content: expect.stringContaining("Privacy Policy acknowledgment: not selected"),
    }));
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
