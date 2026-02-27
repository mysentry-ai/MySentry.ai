import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// Helper to create a public context (no auth needed for public endpoints)
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

// Helper to create an admin context with blog admin token header
function createAdminContext(token: string): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {
        "x-blog-admin-token": token,
      },
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Blog CMS - Admin Auth", () => {
  it("rejects login with wrong credentials", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.blog.adminLogin({ username: "wrong", password: "wrong" })
    ).rejects.toThrow();
  });

  it("accepts login with correct credentials", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });

    expect(result).toHaveProperty("token");
    expect(typeof result.token).toBe("string");
    expect(result.token.length).toBeGreaterThan(0);
  });
});

describe("Blog CMS - Categories", () => {
  let adminToken: string;

  beforeAll(async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });
    adminToken = result.token;
  });

  it("lists categories (public)", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const categories = await caller.blog.public.categories();
    expect(Array.isArray(categories)).toBe(true);
    // We migrated 4 categories
    expect(categories.length).toBeGreaterThanOrEqual(4);
  });

  it("lists categories (admin)", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const categories = await caller.blog.categories.list();
    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThanOrEqual(4);
  });
});

describe("Blog CMS - Public Posts", () => {
  it("lists published posts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.public.list({});
    expect(result).toHaveProperty("posts");
    expect(result).toHaveProperty("total");
    expect(Array.isArray(result.posts)).toBe(true);
    // We migrated 18 posts
    expect(result.total).toBeGreaterThanOrEqual(18);
  });

  it("filters posts by category", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Get categories first
    const categories = await caller.blog.public.categories();
    const seniorCare = categories.find((c) => c.slug === "senior-care");
    expect(seniorCare).toBeDefined();

    if (seniorCare) {
      const result = await caller.blog.public.list({ categoryId: seniorCare.id });
      expect(result.posts.length).toBeGreaterThan(0);
      // All returned posts should have the correct categoryId
      for (const post of result.posts) {
        expect(post.categoryId).toBe(seniorCare.id);
      }
    }
  });

  it("fetches a post by slug", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.public.getBySlug({
      slug: "aging-with-confidence-independence",
    });

    expect(result.redirect).toBe(false);
    expect(result.post).toBeDefined();
    expect(result.post?.title).toContain("Aging with Confidence");
    expect(result.post?.status).toBe("published");
    expect(result.post?.contentHtml).toBeTruthy();
  });

  it("returns null for non-existent slug", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.public.getBySlug({
      slug: "this-slug-does-not-exist-at-all",
    });

    expect(result.redirect).toBe(false);
    expect(result.post).toBeNull();
  });

  it("fetches related posts", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Get a post first
    const listResult = await caller.blog.public.list({ limit: 1 });
    const post = listResult.posts[0];
    expect(post).toBeDefined();

    if (post && post.categoryId) {
      const related = await caller.blog.public.related({
        categoryId: post.categoryId,
        excludeId: post.id,
        limit: 3,
      });
      expect(Array.isArray(related)).toBe(true);
      // Related posts should not include the original post
      for (const rp of related) {
        expect(rp.id).not.toBe(post.id);
      }
    }
  });
});

describe("Blog CMS - Admin CRUD", () => {
  let adminToken: string;
  let createdPostId: number;

  beforeAll(async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);
    const result = await caller.blog.adminLogin({
      username: "admin",
      password: "MySentry2026",
    });
    adminToken = result.token;
  });

  it("rejects unauthenticated admin requests", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.blog.admin.list({})).rejects.toThrow("Admin authentication required");
  });

  it("lists posts (admin)", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.admin.list({});
    expect(result).toHaveProperty("posts");
    expect(result).toHaveProperty("total");
    expect(result.total).toBeGreaterThanOrEqual(18);
  });

  it("creates a new draft post", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.admin.create({
      title: "Test Post from Vitest",
      slug: "test-post-vitest-" + Date.now(),
      status: "draft",
      excerpt: "This is a test post created by vitest.",
      contentHtml: "<p>Test content for vitest.</p>",
    });

    expect(result).toHaveProperty("id");
    expect(typeof result.id).toBe("number");
    createdPostId = result.id;
  });

  it("fetches the created post by ID", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const post = await caller.blog.admin.get({ id: createdPostId });
    expect(post).toBeDefined();
    expect(post.title).toBe("Test Post from Vitest");
    expect(post.status).toBe("draft");
  });

  it("updates the post", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.admin.update({
      id: createdPostId,
      title: "Updated Test Post",
      status: "published",
    });

    // The update mutation returns the updated post object
    expect(result).toBeDefined();
    expect(result.title).toBe("Updated Test Post");
    expect(result.status).toBe("published");
  });

  it("deletes the post", async () => {
    const ctx = createAdminContext(adminToken);
    const caller = appRouter.createCaller(ctx);

    const result = await caller.blog.admin.delete({ id: createdPostId });
    expect(result.success).toBe(true);
  });
});
