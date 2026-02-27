import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, json, longtext } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Contact form submissions from the website
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  source: varchar("source", { length: 100 }), // Which page the form was submitted from
  status: mysqlEnum("status", ["new", "read", "responded", "archived"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Partner application submissions
 */
export const partnerApplications = mysqlTable("partner_applications", {
  id: int("id").autoincrement().primaryKey(),
  // Step 1: Business Information
  companyName: varchar("companyName", { length: 255 }).notNull(),
  contactName: varchar("contactName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  website: varchar("website", { length: 500 }),
  // Step 2: Partnership Details
  partnerType: varchar("partnerType", { length: 100 }).notNull(), // reseller, referral, integration, etc.
  industry: varchar("industry", { length: 100 }),
  companySize: varchar("companySize", { length: 50 }),
  currentSolutions: text("currentSolutions"),
  // Step 3: Additional Information
  targetMarket: text("targetMarket"),
  expectedVolume: varchar("expectedVolume", { length: 100 }),
  additionalInfo: text("additionalInfo"),
  howHeard: varchar("howHeard", { length: 255 }),
  // Status tracking
  status: mysqlEnum("status", ["pending", "reviewing", "approved", "rejected"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PartnerApplication = typeof partnerApplications.$inferSelect;
export type InsertPartnerApplication = typeof partnerApplications.$inferInsert;

/**
 * Demo request submissions
 */
export const demoRequests = mysqlTable("demo_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  company: varchar("company", { length: 255 }),
  jobTitle: varchar("jobTitle", { length: 255 }),
  companySize: varchar("companySize", { length: 50 }),
  industry: varchar("industry", { length: 100 }),
  useCase: varchar("useCase", { length: 100 }), // employer, senior, individual, family
  message: text("message"),
  preferredDate: varchar("preferredDate", { length: 100 }),
  preferredTime: varchar("preferredTime", { length: 100 }),
  status: mysqlEnum("status", ["pending", "scheduled", "completed", "cancelled"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type DemoRequest = typeof demoRequests.$inferSelect;
export type InsertDemoRequest = typeof demoRequests.$inferInsert;

/**
 * Newsletter subscriptions
 */
export const newsletterSubscriptions = mysqlTable("newsletter_subscriptions", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  source: varchar("source", { length: 100 }), // Which page they subscribed from
  isActive: boolean("isActive").default(true).notNull(),
  subscribedAt: timestamp("subscribedAt").defaultNow().notNull(),
  unsubscribedAt: timestamp("unsubscribedAt"),
});

export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;
export type InsertNewsletterSubscription = typeof newsletterSubscriptions.$inferInsert;

/**
 * Trial signups from the website
 */
export const trialSignups = mysqlTable("trial_signups", {
  id: int("id").autoincrement().primaryKey(),
  email: varchar("email", { length: 320 }).notNull(),
  name: varchar("name", { length: 255 }),
  phone: varchar("phone", { length: 50 }),
  planType: varchar("planType", { length: 50 }), // free, individual, family
  source: varchar("source", { length: 100 }), // Which page they signed up from
  status: mysqlEnum("status", ["pending", "activated", "expired", "converted"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrialSignup = typeof trialSignups.$inferSelect;
export type InsertTrialSignup = typeof trialSignups.$inferInsert;

/**
 * Blog categories (single-level)
 */
export const blogCategories = mysqlTable("blog_categories", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull().unique(),
  slug: varchar("slug", { length: 100 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogCategory = typeof blogCategories.$inferSelect;
export type InsertBlogCategory = typeof blogCategories.$inferInsert;

/**
 * Blog posts - full CMS schema
 */
export const blogPosts = mysqlTable("blog_posts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 500 }).notNull(),
  slug: varchar("slug", { length: 500 }).notNull().unique(),
  categoryId: int("categoryId"),
  status: mysqlEnum("status", ["draft", "published", "unpublished", "scheduled"]).default("draft").notNull(),
  excerpt: text("excerpt"),
  // Hero image
  heroImageUrl: text("heroImageUrl"),
  heroImageAlt: varchar("heroImageAlt", { length: 500 }),
  heroImageCaption: varchar("heroImageCaption", { length: 500 }),
  heroImageSource: mysqlEnum("heroImageSource", ["upload", "ai", "url"]).default("upload"),
  // Content
  contentHtml: longtext("contentHtml"),
  contentJson: json("contentJson"),
  // SEO fields
  metaTitle: varchar("metaTitle", { length: 200 }),
  metaDescription: text("metaDescription"),
  focusKeyword: varchar("focusKeyword", { length: 200 }),
  secondaryKeywords: json("secondaryKeywords"), // string[]
  tags: json("tags"), // string[]
  canonicalUrl: varchar("canonicalUrl", { length: 500 }),
  // Open Graph
  ogTitle: varchar("ogTitle", { length: 200 }),
  ogDescription: text("ogDescription"),
  ogImageUrl: text("ogImageUrl"),
  // Indexing
  isIndexed: boolean("isIndexed").default(true).notNull(),
  isFollowed: boolean("isFollowed").default(true).notNull(),
  // GEO
  geoRegion: varchar("geoRegion", { length: 100 }),
  geoAudience: varchar("geoAudience", { length: 200 }),
  // Author
  authorName: varchar("authorName", { length: 255 }).default("MySentry Editorial Team").notNull(),
  // Computed
  readTimeMinutes: int("readTimeMinutes").default(5),
  wordCount: int("wordCount").default(0),
  // Timestamps
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  publishedAt: timestamp("publishedAt"),
  scheduledAt: timestamp("scheduledAt"),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * Blog slug redirects (301 mapping when slug changes)
 */
export const blogRedirects = mysqlTable("blog_redirects", {
  id: int("id").autoincrement().primaryKey(),
  oldSlug: varchar("oldSlug", { length: 500 }).notNull().unique(),
  newSlug: varchar("newSlug", { length: 500 }).notNull(),
  postId: int("postId").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type BlogRedirect = typeof blogRedirects.$inferSelect;
export type InsertBlogRedirect = typeof blogRedirects.$inferInsert;
