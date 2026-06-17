import { eq, desc, asc, like, and, or, sql, between, inArray } from "drizzle-orm";
import { getDb } from "./db";
import {
  blogPosts,
  blogCategories,
  blogRedirects,
  InsertBlogPost,
  InsertBlogCategory,
  InsertBlogRedirect,
  BlogPost,
  BlogCategory,
} from "../drizzle/schema";

// ==================== Utility ====================

function computeReadTime(html: string): number {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  const words = text.split(" ").filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function computeWordCount(html: string): number {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return text.split(" ").filter(Boolean).length;
}

// ==================== Categories ====================

export async function getAllCategories(): Promise<BlogCategory[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(blogCategories).orderBy(asc(blogCategories.name));
}

export async function getCategoryById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogCategories).where(eq(blogCategories.id, id)).limit(1);
  return result[0];
}

export async function getCategoryBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogCategories).where(eq(blogCategories.slug, slug)).limit(1);
  return result[0];
}

export async function createCategory(data: InsertBlogCategory) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const result = await db.insert(blogCategories).values(data);
  return { id: result[0].insertId };
}

export async function updateCategory(id: number, data: Partial<InsertBlogCategory>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.update(blogCategories).set(data).where(eq(blogCategories.id, id));
  return getCategoryById(id);
}

export async function deleteCategory(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  // Set posts in this category to null
  await db.update(blogPosts).set({ categoryId: null }).where(eq(blogPosts.categoryId, id));
  await db.delete(blogCategories).where(eq(blogCategories.id, id));
  return { success: true };
}

// ==================== Blog Posts ====================

export type BlogListFilters = {
  keyword?: string;
  categoryId?: number;
  status?: "draft" | "published" | "unpublished" | "scheduled";
  dateFrom?: Date;
  dateTo?: Date;
  limit?: number;
  offset?: number;
};

export async function getBlogPosts(filters: BlogListFilters = {}) {
  const db = await getDb();
  if (!db) return { posts: [], total: 0 };

  const conditions: any[] = [];

  if (filters.keyword) {
    const kw = `%${filters.keyword}%`;
    conditions.push(
      or(
        like(blogPosts.title, kw),
        like(blogPosts.contentHtml, kw),
        like(blogPosts.excerpt, kw)
      )
    );
  }
  if (filters.categoryId) {
    conditions.push(eq(blogPosts.categoryId, filters.categoryId));
  }
  if (filters.status) {
    conditions.push(eq(blogPosts.status, filters.status));
  }
  if (filters.dateFrom && filters.dateTo) {
    conditions.push(between(blogPosts.createdAt, filters.dateFrom, filters.dateTo));
  }

  const where = conditions.length > 0 ? and(...conditions) : undefined;
  const limit = filters.limit || 50;
  const offset = filters.offset || 0;

  const [posts, countResult] = await Promise.all([
    db
      .select()
      .from(blogPosts)
      .where(where)
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(blogPosts)
      .where(where),
  ]);

  return { posts, total: Number(countResult[0]?.count ?? 0) };
}

export async function getBlogPostById(id: number) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result[0];
}

export async function getBlogPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug)).limit(1);
  return result[0];
}

export async function isSlugUnique(slug: string, excludeId?: number): Promise<boolean> {
  const db = await getDb();
  if (!db) return true;
  const conditions: any[] = [eq(blogPosts.slug, slug)];
  if (excludeId) {
    conditions.push(sql`${blogPosts.id} != ${excludeId}`);
  }
  const result = await db.select({ count: sql<number>`count(*)` }).from(blogPosts).where(and(...conditions));
  return Number(result[0]?.count ?? 0) === 0;
}

export async function createBlogPost(data: InsertBlogPost) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Compute read time and word count from content
  const contentHtml = data.contentHtml || "";
  const readTimeMinutes = computeReadTime(contentHtml);
  const wordCount = computeWordCount(contentHtml);

  const result = await db.insert(blogPosts).values({
    ...data,
    readTimeMinutes,
    wordCount,
  });
  return { id: result[0].insertId };
}

export async function updateBlogPost(id: number, data: Partial<InsertBlogPost>) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const updateData: any = { ...data };

  // Recompute read time if content changed
  if (data.contentHtml) {
    updateData.readTimeMinutes = computeReadTime(data.contentHtml);
    updateData.wordCount = computeWordCount(data.contentHtml);
  }

  await db.update(blogPosts).set(updateData).where(eq(blogPosts.id, id));
  return getBlogPostById(id);
}

export async function deleteBlogPost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  // Also delete redirects pointing to this post
  await db.delete(blogRedirects).where(eq(blogRedirects.postId, id));
  await db.delete(blogPosts).where(eq(blogPosts.id, id));
  return { success: true };
}

export async function bulkUpdateStatus(ids: number[], status: "published" | "unpublished" | "draft") {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const updateData: any = { status };
  if (status === "published") {
    updateData.publishedAt = new Date();
  }

  await db.update(blogPosts).set(updateData).where(inArray(blogPosts.id, ids));
  return { success: true };
}

export async function bulkDeletePosts(ids: number[]) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  await db.delete(blogRedirects).where(inArray(blogRedirects.postId, ids));
  await db.delete(blogPosts).where(inArray(blogPosts.id, ids));
  return { success: true };
}

export async function duplicateBlogPost(id: number) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const original = await getBlogPostById(id);
  if (!original) throw new Error("Post not found");

  // Generate unique slug
  let newSlug = `${original.slug}-copy`;
  let counter = 1;
  while (!(await isSlugUnique(newSlug))) {
    newSlug = `${original.slug}-copy-${counter}`;
    counter++;
  }

  const { id: _id, createdAt, updatedAt, publishedAt, scheduledAt, ...rest } = original;
  const result = await db.insert(blogPosts).values({
    ...rest,
    title: `${original.title} (Copy)`,
    slug: newSlug,
    status: "draft",
    publishedAt: null,
    scheduledAt: null,
  });

  return { id: result[0].insertId };
}

// ==================== Redirects ====================

export async function createRedirect(data: InsertBlogRedirect) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  // Remove existing redirect for this old slug
  await db.delete(blogRedirects).where(eq(blogRedirects.oldSlug, data.oldSlug));
  const result = await db.insert(blogRedirects).values(data);
  return { id: result[0].insertId };
}

export async function getRedirectByOldSlug(oldSlug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(blogRedirects).where(eq(blogRedirects.oldSlug, oldSlug)).limit(1);
  return result[0];
}

// ==================== Public API ====================

export async function getPublishedPosts(filters: { categoryId?: number; keyword?: string; limit?: number; offset?: number } = {}) {
  const db = await getDb();
  if (!db) return { posts: [], total: 0 };

  const conditions: any[] = [eq(blogPosts.status, "published")];

  if (filters.categoryId) {
    conditions.push(eq(blogPosts.categoryId, filters.categoryId));
  }
  if (filters.keyword) {
    const kw = `%${filters.keyword}%`;
    conditions.push(
      or(
        like(blogPosts.title, kw),
        like(blogPosts.contentHtml, kw),
        like(blogPosts.excerpt, kw)
      )
    );
  }

  const where = and(...conditions);
  const limit = filters.limit || 50;
  const offset = filters.offset || 0;

  const [posts, countResult] = await Promise.all([
    db
      .select()
      .from(blogPosts)
      .where(where)
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit)
      .offset(offset),
    db
      .select({ count: sql<number>`count(*)` })
      .from(blogPosts)
      .where(where),
  ]);

  return { posts, total: Number(countResult[0]?.count ?? 0) };
}

export async function getPublishedPostBySlug(slug: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db
    .select()
    .from(blogPosts)
    .where(and(eq(blogPosts.slug, slug), eq(blogPosts.status, "published")))
    .limit(1);
  return result[0];
}

export async function getRelatedPosts(
  categoryId: number,
  excludeId: number,
  tags: string[] | null,
  limit = 4
) {
  const db = await getDb();
  if (!db) return [];

  const collected: (typeof blogPosts.$inferSelect)[] = [];
  const collectedIds = new Set<number>([excludeId]);

  // Tier 1: posts sharing ≥1 tag with the current post, sorted by overlap count
  if (tags && tags.length > 0) {
    const tagConditions = tags.map(
      (tag) => sql`JSON_CONTAINS(${blogPosts.tags}, ${JSON.stringify(tag)})`
    );
    const tier1Rows = await db
      .select()
      .from(blogPosts)
      .where(
        and(
          eq(blogPosts.status, "published"),
          sql`${blogPosts.id} != ${excludeId}`,
          or(...tagConditions)
        )
      )
      .orderBy(desc(blogPosts.publishedAt))
      .limit(limit * 4);

    const scored = tier1Rows.map((row) => {
      const rowTags: string[] = Array.isArray(row.tags) ? (row.tags as string[]) : [];
      const overlap = rowTags.filter((t) => tags.includes(t)).length;
      return { row, overlap };
    });
    scored.sort((a, b) => b.overlap - a.overlap);

    for (const { row } of scored) {
      if (collected.length >= limit) break;
      if (!collectedIds.has(row.id)) {
        collected.push(row);
        collectedIds.add(row.id);
      }
    }
  }

  // Tier 2: same category fallback
  if (collected.length < limit) {
    const needed = limit - collected.length;
    const excludeList = Array.from(collectedIds);
    const tier2 = await db
      .select()
      .from(blogPosts)
      .where(
        and(
          eq(blogPosts.status, "published"),
          eq(blogPosts.categoryId, categoryId),
          sql`${blogPosts.id} NOT IN (${sql.raw(excludeList.join(","))})`
        )
      )
      .orderBy(desc(blogPosts.publishedAt))
      .limit(needed);

    for (const row of tier2) {
      if (collected.length >= limit) break;
      if (!collectedIds.has(row.id)) {
        collected.push(row);
        collectedIds.add(row.id);
      }
    }
  }

  // Tier 3: global fallback
  if (collected.length < limit) {
    const needed = limit - collected.length;
    const excludeList2 = Array.from(collectedIds);
    const tier3 = await db
      .select()
      .from(blogPosts)
      .where(
        and(
          eq(blogPosts.status, "published"),
          sql`${blogPosts.id} NOT IN (${sql.raw(excludeList2.join(","))})`
        )
      )
      .orderBy(desc(blogPosts.publishedAt))
      .limit(needed);

    for (const row of tier3) {
      if (collected.length >= limit) break;
      collected.push(row);
    }
  }

  return collected;
}
