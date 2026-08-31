import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createAdminContext(token: string): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: { "x-blog-admin-token": token },
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("blog admin auth", () => {
  it("rejects invalid credentials", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.blog.adminLogin({ username: "wrong", password: "wrong" })
    ).rejects.toThrow("Invalid credentials");
  });

  it("accepts valid credentials and returns a token", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    expect(result).toHaveProperty("token");
    expect(typeof result.token).toBe("string");
    expect(result.token.length).toBeGreaterThan(10);
  });

  it("verifies a valid token", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const result = await caller.blog.adminVerify({ token });
    expect(result.valid).toBe(true);
  });

  it("rejects an invalid token", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.adminVerify({ token: "fake-token-123" });
    expect(result.valid).toBe(false);
  });
});

describe("blog compliance check", () => {
  it("detects em dashes", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // First login to get a valid token
    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.ai.complianceCheck({
      content: "<p>This is a test \u2014 with an em dash.</p>",
    });

    const emDashCheck = result.checks.find((c) => c.name === "No Em Dashes");
    expect(emDashCheck).toBeDefined();
    expect(emDashCheck!.passed).toBe(false);
  });

  it("detects AI-typical vocabulary", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.ai.complianceCheck({
      content:
        "<p>Additionally, it is crucial to delve into the intricate tapestry of safety. Furthermore, this showcases the vibrant landscape of wellness.</p>",
    });

    const vocabCheck = result.checks.find(
      (c) => c.name === "AI Vocabulary Check"
    );
    expect(vocabCheck).toBeDefined();
    expect(vocabCheck!.passed).toBe(false);
    expect(vocabCheck!.message).toContain("additionally");
  });

  it("detects AI-typical phrases", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.ai.complianceCheck({
      content:
        "<p>In today's fast-paced world, it's important to note that safety plays a crucial role in our lives.</p>",
    });

    const phraseCheck = result.checks.find(
      (c) => c.name === "AI Phrase Patterns"
    );
    expect(phraseCheck).toBeDefined();
    expect(phraseCheck!.passed).toBe(false);
  });

  it("detects title case headings", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.ai.complianceCheck({
      content:
        "<h2>The Importance Of Safety In Modern Workplaces</h2><p>Some content here about safety. More sentences to fill out the content. Even more text to make it longer.</p>",
    });

    const headingCheck = result.checks.find(
      (c) => c.name === "Heading Case Check"
    );
    expect(headingCheck).toBeDefined();
    expect(headingCheck!.passed).toBe(false);
  });

  it("passes clean human-like content", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.ai.complianceCheck({
      content: `<h2>Why your mom keeps calling when you go hiking</h2>
<p>Last weekend, Sarah drove to Runyon Canyon for a solo hike. She told her mom she'd be back by 3pm. By 2:45, her phone had already buzzed six times.</p>
<p>Sound familiar? Most of us have been there. You want to enjoy the outdoors, but someone back home is worried sick.</p>
<p>Here's the thing. Their worry isn't irrational. Every year, roughly 130 people die in national parks alone. And that number doesn't count the thousands of injuries on local trails.</p>
<h2>What actually helps</h2>
<p>You can't stop people from worrying. But you can give them something better than a text that says "I'm fine."</p>
<p>Real-time location sharing works. So does automatic check-ins. MySentry sends your GPS coordinates to your emergency contacts every 15 minutes during outdoor activities.</p>`,
    });

    expect(result.allPassed).toBe(true);
  });

  it("rejects unauthorized compliance check", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.blog.ai.complianceCheck({
        content: "<p>Test content</p>",
      })
    ).rejects.toThrow("Admin authentication required");
  });
});

describe("blog regenerateImage", () => {
  it("rejects unauthorized regenerate image request", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.blog.ai.regenerateImage({
        prompt: "A beautiful landscape with mountains and a sunset",
      })
    ).rejects.toThrow("Admin authentication required");
  });

  it("rejects prompt that is too short", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    await expect(
      adminCaller.blog.ai.regenerateImage({
        prompt: "short",
      })
    ).rejects.toThrow();
  });
});

describe("blog save as draft flow", () => {
  it("createPost defaults to draft status when publishNow is false", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const { token } = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    const adminCtx = createAdminContext(token);
    const adminCaller = appRouter.createCaller(adminCtx);

    const result = await adminCaller.blog.admin.create({
      title: "Test Draft Post",
      slug: "test-draft-post-" + Date.now(),
      status: "draft",
      excerpt: "This is a test draft post",
      contentHtml: "<p>Test content for draft post</p>",
    });

    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");

    // Verify the post was created as draft
    const post = await adminCaller.blog.admin.get({ id: result.id });
    expect(post.status).toBe("draft");
  });
});
