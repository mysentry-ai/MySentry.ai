import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import { TRPCError } from "@trpc/server";
import { invokeLLM } from "../_core/llm";
import { generateImage } from "../_core/imageGeneration";
import { storagePut } from "../storage";
import {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
  getBlogPosts,
  getBlogPostById,
  getBlogPostBySlug,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  duplicateBlogPost,
  bulkUpdateStatus,
  bulkDeletePosts,
  isSlugUnique,
  createRedirect,
  getRedirectByOldSlug,
  getPublishedPosts,
  getPublishedPostBySlug,
  getRelatedPosts,
} from "../blogDb";

// ==================== Admin Auth ====================

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "MySentry2026";

const adminSessionTokens = new Set<string>();

function generateToken(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let token = "";
  for (let i = 0; i < 64; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

function requireAdmin(ctx: any) {
  const token = ctx.req?.headers?.["x-blog-admin-token"];
  if (!token || !adminSessionTokens.has(token)) {
    throw new TRPCError({ code: "UNAUTHORIZED", message: "Admin authentication required" });
  }
}

// ==================== AI Prompts ====================

const AI_BLOG_WRITER_SYSTEM = `You are a seasoned freelance health and safety journalist writing for MySentry.ai. Your writing must read as if a real human expert wrote it from scratch. It must pass AI detection tools like GPTZero, Originality.ai, and Copyleaks.

CRITICAL ANTI-AI-DETECTION RULES (follow every single one):

1. BANNED VOCABULARY: Never use these words/phrases:
   - Additionally, furthermore, moreover, consequently, nevertheless
   - Crucial, pivotal, vital, significant, key (as adjective), groundbreaking
   - Delve, tapestry (figurative), landscape (figurative), interplay
   - Enhance, foster, garner, showcase, underscore (as verb), highlight (as verb)
   - Intricate/intricacies, enduring, vibrant, testament, valuable
   - Serves as, stands as, represents, marks (for importance)
   - Nestled, in the heart of, renowned, diverse array, rich (figurative)
   - Commitment to, exemplifies, ensuring, reflecting, symbolizing
   - Fostering, encompassing, align/resonate with, boasts, features (instead of "has")
   - In today's fast-paced world, in this day and age, at the end of the day
   - It's important to note, as we all know, in conclusion
   - Evolving landscape, focal point, indelible mark, deeply rooted

2. BANNED PATTERNS:
   - No em dashes (use periods or commas instead)
   - No rule-of-three lists ("X, Y, and Z" pattern used repeatedly)
   - No "Not only X but also Y" constructions
   - No "Despite challenges" formula
   - No boldfaced inline headers followed by colons in lists
   - No title case in headings (use sentence case)
   - No elegant variation (don't use synonyms to avoid repeating a word, just repeat it)
   - No vague attributions ("experts say", "studies show" without naming them)
   - No superficial analyses using "-ing" phrases at end of sentences
   - No promotional puffery or advertisement-like language

3. REQUIRED HUMAN WRITING STYLE:
   - Use simple "is", "are", "has" instead of fancy alternatives like "serves as" or "features"
   - Vary sentence length wildly: mix 4-word sentences with 25-word ones
   - Use contractions naturally (don't, can't, won't, it's, they're)
   - Start some sentences with "And", "But", "So", "Or"
   - Include 1-2 parenthetical asides per section
   - Use specific numbers and real statistics, not vague claims
   - Write some deliberately short paragraphs (single sentence)
   - Include at least one rhetorical question per section
   - Use colloquial phrases occasionally ("here's the thing", "let's be honest", "the truth is")
   - Vary paragraph lengths: some 1 sentence, some 4-5 sentences
   - Use "you" and "your" to address the reader directly
   - Occasionally use incomplete sentences for emphasis. Like this.
   - Reference specific real-world examples, named places, or named scenarios

4. STRUCTURE:
   - 500-700 words total (8th grade reading level)
   - Headings in sentence case (not title case)
   - Open with a specific, concrete scenario (not a generic statement)
   - Use the StoryBrand framework implicitly (problem, guide, plan, success) but never label sections with framework terms
   - Add line gaps between all headings, sections, and paragraphs
   - Include 1 actionable checklist or numbered steps section
   - Close with a natural CTA for MySentry's 7-day free trial

5. BRAND VOICE: calm, protective, practical, conversational. Not salesy or corporate.
6. No medical claims. Use safety and wellness framing only.

Must include:
- Title (H1): compelling, specific, not clickbait
- Excerpt (155-180 chars) for blog listing
- Body following the structure above
- Internal link suggestions (3-6) with anchor text + target URL from: /how-it-works, /seniors, /families, /employers, /females, /pricing, /blogs
- SEO pack: Meta title (50-60 chars), Meta description (150-160 chars), Focus keyword, 8-15 secondary keywords, 8-12 tags, 3 slug suggestions
- Image plan: Hero image concept (1), Inline image concepts (2-4), Alt text for each

Output format (strict JSON):
{
  "title": "",
  "excerpt": "",
  "category": "",
  "content_html": "",
  "internal_links": [{"anchor_text":"","url":""}],
  "seo": {
    "meta_title": "",
    "meta_description": "",
    "focus_keyword": "",
    "secondary_keywords": [],
    "tags": [],
    "slug_suggestions": []
  },
  "image_plan": {
    "hero": {"concept":"","alt_text":""},
    "inline": [{"concept":"","alt_text":""}]
  }
}`;

const AI_IMAGE_SYSTEM = `You are generating photorealistic, brand-aligned images for a MySentry.ai blog post.

Brand notes:
- clean, modern, trustworthy
- safety + calm vibe
- avoid fear-mongering
- no clutter, strong focal point
- Must be suitable for a safety/health tech website
- Avoid showing medical diagnosis scenes or anything graphic
- Prefer authentic people moments and real environments

Requirements:
- Photorealistic, high resolution
- Natural lighting
- Diverse representation when showing people
- No text baked into the image
- Leave negative space suitable for an H1 overlay (hero only)

Output format (strict JSON):
{
  "final_prompt": "",
  "alt_text": "",
  "style_notes": "",
  "do_not_include": []
}`;

// ==================== Router ====================

export const blogRouter = router({
  // ---- Admin Auth ----
  adminLogin: publicProcedure
    .input(z.object({
      username: z.string(),
      password: z.string(),
    }))
    .mutation(async ({ input }) => {
      if (input.username !== ADMIN_USERNAME || input.password !== ADMIN_PASSWORD) {
        throw new TRPCError({ code: "UNAUTHORIZED", message: "Invalid credentials" });
      }
      const token = generateToken();
      adminSessionTokens.add(token);
      return { token };
    }),

  adminLogout: publicProcedure
    .input(z.object({ token: z.string() }))
    .mutation(async ({ input }) => {
      adminSessionTokens.delete(input.token);
      return { success: true };
    }),

  adminVerify: publicProcedure
    .input(z.object({ token: z.string() }))
    .query(async ({ input }) => {
      return { valid: adminSessionTokens.has(input.token) };
    }),

  // ---- Categories ----
  categories: router({
    list: publicProcedure.query(async () => {
      return getAllCategories();
    }),

    create: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        slug: z.string().min(1),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        return createCategory(input);
      }),

    update: publicProcedure
      .input(z.object({
        id: z.number(),
        name: z.string().min(1).optional(),
        slug: z.string().min(1).optional(),
        description: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const { id, ...data } = input;
        return updateCategory(id, data);
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        return deleteCategory(input.id);
      }),
  }),

  // ---- Blog Posts (Admin) ----
  admin: router({
    list: publicProcedure
      .input(z.object({
        keyword: z.string().optional(),
        categoryId: z.number().optional(),
        status: z.enum(["draft", "published", "unpublished", "scheduled"]).optional(),
        dateFrom: z.string().optional(),
        dateTo: z.string().optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
      }).optional())
      .query(async ({ ctx, input }) => {
        requireAdmin(ctx);
        return getBlogPosts({
          ...input,
          dateFrom: input?.dateFrom ? new Date(input.dateFrom) : undefined,
          dateTo: input?.dateTo ? new Date(input.dateTo) : undefined,
        });
      }),

    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const post = await getBlogPostById(input.id);
        if (!post) throw new TRPCError({ code: "NOT_FOUND", message: "Post not found" });
        return post;
      }),

    create: publicProcedure
      .input(z.object({
        title: z.string().min(1),
        slug: z.string().min(1),
        categoryId: z.number().nullable().optional(),
        status: z.enum(["draft", "published", "unpublished", "scheduled"]).optional(),
        excerpt: z.string().optional(),
        heroImageUrl: z.string().optional(),
        heroImageAlt: z.string().optional(),
        heroImageCaption: z.string().optional(),
        heroImageSource: z.enum(["upload", "ai", "url"]).optional(),
        contentHtml: z.string().optional(),
        contentJson: z.any().optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        focusKeyword: z.string().optional(),
        secondaryKeywords: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        canonicalUrl: z.string().optional(),
        ogTitle: z.string().optional(),
        ogDescription: z.string().optional(),
        ogImageUrl: z.string().optional(),
        isIndexed: z.boolean().optional(),
        isFollowed: z.boolean().optional(),
        geoRegion: z.string().optional(),
        geoAudience: z.string().optional(),
        authorName: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        // Check slug uniqueness
        const unique = await isSlugUnique(input.slug);
        if (!unique) {
          throw new TRPCError({ code: "CONFLICT", message: "Slug already exists" });
        }
        const data: any = { ...input };
        if (input.status === "published") {
          data.publishedAt = new Date();
        }
        return createBlogPost(data);
      }),

    update: publicProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        slug: z.string().optional(),
        categoryId: z.number().nullable().optional(),
        status: z.enum(["draft", "published", "unpublished", "scheduled"]).optional(),
        excerpt: z.string().optional(),
        heroImageUrl: z.string().nullable().optional(),
        heroImageAlt: z.string().nullable().optional(),
        heroImageCaption: z.string().nullable().optional(),
        heroImageSource: z.enum(["upload", "ai", "url"]).optional(),
        contentHtml: z.string().optional(),
        contentJson: z.any().optional(),
        metaTitle: z.string().nullable().optional(),
        metaDescription: z.string().nullable().optional(),
        focusKeyword: z.string().nullable().optional(),
        secondaryKeywords: z.array(z.string()).nullable().optional(),
        tags: z.array(z.string()).nullable().optional(),
        canonicalUrl: z.string().nullable().optional(),
        ogTitle: z.string().nullable().optional(),
        ogDescription: z.string().nullable().optional(),
        ogImageUrl: z.string().nullable().optional(),
        isIndexed: z.boolean().optional(),
        isFollowed: z.boolean().optional(),
        geoRegion: z.string().nullable().optional(),
        geoAudience: z.string().nullable().optional(),
        authorName: z.string().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const { id, ...data } = input;

        // Handle slug change -> create redirect
        if (data.slug) {
          const existing = await getBlogPostById(id);
          if (existing && existing.slug !== data.slug) {
            const unique = await isSlugUnique(data.slug, id);
            if (!unique) {
              throw new TRPCError({ code: "CONFLICT", message: "Slug already exists" });
            }
            await createRedirect({
              oldSlug: existing.slug,
              newSlug: data.slug,
              postId: id,
            });
          }
        }

        // Set publishedAt when publishing
        const updateData: any = { ...data };
        if (data.status === "published") {
          const existing = await getBlogPostById(id);
          if (existing && !existing.publishedAt) {
            updateData.publishedAt = new Date();
          }
        }

        return updateBlogPost(id, updateData);
      }),

    delete: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        return deleteBlogPost(input.id);
      }),

    duplicate: publicProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        return duplicateBlogPost(input.id);
      }),

    bulkAction: publicProcedure
      .input(z.object({
        ids: z.array(z.number()),
        action: z.enum(["publish", "unpublish", "delete"]),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        if (input.action === "delete") {
          return bulkDeletePosts(input.ids);
        }
        const status = input.action === "publish" ? "published" : "unpublished";
        return bulkUpdateStatus(input.ids, status);
      }),

    checkSlug: publicProcedure
      .input(z.object({
        slug: z.string(),
        excludeId: z.number().optional(),
      }))
      .query(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const unique = await isSlugUnique(input.slug, input.excludeId);
        return { available: unique };
      }),

    uploadImage: publicProcedure
      .input(z.object({
        base64: z.string(),
        filename: z.string(),
        contentType: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const buffer = Buffer.from(input.base64, "base64");
        const suffix = Math.random().toString(36).substring(2, 10);
        const key = `blog-images/${Date.now()}-${suffix}-${input.filename}`;
        const { url } = await storagePut(key, buffer, input.contentType);
        return { url };
      }),
  }),

  // ---- AI Wizard ----
  ai: router({
    suggestTopics: publicProcedure
      .input(z.object({
        category: z.string(),
        icp: z.string(),
        goal: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are a freelance editorial strategist for MySentry.ai. Suggest 10 blog topic ideas for their safety and health blog. Each topic must sound like a real journalist pitched it, not an AI. Use specific, concrete angles (not generic). Avoid words like crucial, vital, pivotal, groundbreaking, landscape, tapestry. No em dashes. Titles should be in sentence case, not title case. Return a JSON array of objects with "title" and "description" fields.`,
            },
            {
              role: "user",
              content: `Category: ${input.category}\nTarget Audience (ICP): ${input.icp}\nGoal: ${input.goal}\n\nSuggest 10 blog topic ideas as JSON array.`,
            },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "topic_suggestions",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  topics: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        title: { type: "string" },
                        description: { type: "string" },
                      },
                      required: ["title", "description"],
                      additionalProperties: false,
                    },
                  },
                },
                required: ["topics"],
                additionalProperties: false,
              },
            },
          },
        });
        const content = response.choices[0]?.message?.content;
        if (typeof content === "string") {
          return JSON.parse(content);
        }
        return { topics: [] };
      }),

    generateOutline: publicProcedure
      .input(z.object({
        topic: z.string(),
        category: z.string(),
        icp: z.string(),
        goal: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are a freelance editorial strategist. Generate a blog post outline with H2 and H3 headings. Headings must be in sentence case (not title case). Avoid generic AI-sounding headings like "The importance of...", "Understanding...", "Challenges and future prospects". Use specific, concrete headings that a human journalist would write. No em dashes. Return a JSON object with "outline" (array of {heading, level, notes}).`,
            },
            {
              role: "user",
              content: `Topic: ${input.topic}\nCategory: ${input.category}\nAudience: ${input.icp}\nGoal: ${input.goal}\n\nGenerate a detailed outline.`,
            },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "blog_outline",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  outline: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        heading: { type: "string" },
                        level: { type: "string" },
                        notes: { type: "string" },
                      },
                      required: ["heading", "level", "notes"],
                      additionalProperties: false,
                    },
                  },
                },
                required: ["outline"],
                additionalProperties: false,
              },
            },
          },
        });
        const content = response.choices[0]?.message?.content;
        if (typeof content === "string") {
          return JSON.parse(content);
        }
        return { outline: [] };
      }),

    generateDraft: publicProcedure
      .input(z.object({
        topic: z.string(),
        category: z.string(),
        icp: z.string(),
        goal: z.string(),
        outline: z.string().optional(),
        wordCount: z.number().optional(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const userPrompt = `Category: ${input.category}
ICP / Audience: ${input.icp}
Primary goal: ${input.goal}
Topic: ${input.topic}
Word count target: ${input.wordCount || 1800}
${input.outline ? `Outline to follow:\n${input.outline}` : ""}
Must include CTA: "Start 7-Day Free Trial" (use natural wording, not spammy)`;

        const response = await invokeLLM({
          messages: [
            { role: "system", content: AI_BLOG_WRITER_SYSTEM },
            { role: "user", content: userPrompt },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "blog_draft",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  title: { type: "string" },
                  excerpt: { type: "string" },
                  category: { type: "string" },
                  content_html: { type: "string" },
                  internal_links: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        anchor_text: { type: "string" },
                        url: { type: "string" },
                      },
                      required: ["anchor_text", "url"],
                      additionalProperties: false,
                    },
                  },
                  seo: {
                    type: "object",
                    properties: {
                      meta_title: { type: "string" },
                      meta_description: { type: "string" },
                      focus_keyword: { type: "string" },
                      secondary_keywords: { type: "array", items: { type: "string" } },
                      tags: { type: "array", items: { type: "string" } },
                      slug_suggestions: { type: "array", items: { type: "string" } },
                    },
                    required: ["meta_title", "meta_description", "focus_keyword", "secondary_keywords", "tags", "slug_suggestions"],
                    additionalProperties: false,
                  },
                  image_plan: {
                    type: "object",
                    properties: {
                      hero: {
                        type: "object",
                        properties: {
                          concept: { type: "string" },
                          alt_text: { type: "string" },
                        },
                        required: ["concept", "alt_text"],
                        additionalProperties: false,
                      },
                      inline: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            concept: { type: "string" },
                            alt_text: { type: "string" },
                          },
                          required: ["concept", "alt_text"],
                          additionalProperties: false,
                        },
                      },
                    },
                    required: ["hero", "inline"],
                    additionalProperties: false,
                  },
                },
                required: ["title", "excerpt", "category", "content_html", "internal_links", "seo", "image_plan"],
                additionalProperties: false,
              },
            },
          },
        });
        const content = response.choices[0]?.message?.content;
        if (typeof content === "string") {
          return JSON.parse(content);
        }
        throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to generate draft" });
      }),

    generateSEO: publicProcedure
      .input(z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const response = await invokeLLM({
          messages: [
            {
              role: "system",
              content: `You are an SEO specialist. Generate an SEO pack for this MySentry.ai blog post. Meta titles and descriptions should sound natural and human-written, not keyword-stuffed. Avoid words like crucial, vital, pivotal, comprehensive, ultimate. No em dashes. Return strict JSON.`,
            },
            {
              role: "user",
              content: `Title: ${input.title}\nCategory: ${input.category}\nContent (first 500 chars): ${input.content.substring(0, 500)}\n\nGenerate SEO pack.`,
            },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "seo_pack",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  meta_title: { type: "string" },
                  meta_description: { type: "string" },
                  focus_keyword: { type: "string" },
                  secondary_keywords: { type: "array", items: { type: "string" } },
                  tags: { type: "array", items: { type: "string" } },
                  slug_suggestions: { type: "array", items: { type: "string" } },
                },
                required: ["meta_title", "meta_description", "focus_keyword", "secondary_keywords", "tags", "slug_suggestions"],
                additionalProperties: false,
              },
            },
          },
        });
        const content = response.choices[0]?.message?.content;
        if (typeof content === "string") {
          return JSON.parse(content);
        }
        return {};
      }),

    generateImage: publicProcedure
      .input(z.object({
        title: z.string(),
        icp: z.string(),
        category: z.string(),
        imageType: z.enum(["hero", "inline"]),
        concept: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);

        // First generate the image prompt
        const promptResponse = await invokeLLM({
          messages: [
            { role: "system", content: AI_IMAGE_SYSTEM },
            {
              role: "user",
              content: `Post title: ${input.title}\nAudience/ICP: ${input.icp}\nCategory: ${input.category}\nImage type: ${input.imageType}\nConcept: ${input.concept}\n\nGenerate the image prompt.`,
            },
          ],
          response_format: {
            type: "json_schema",
            json_schema: {
              name: "image_prompt",
              strict: true,
              schema: {
                type: "object",
                properties: {
                  final_prompt: { type: "string" },
                  alt_text: { type: "string" },
                  style_notes: { type: "string" },
                  do_not_include: { type: "array", items: { type: "string" } },
                },
                required: ["final_prompt", "alt_text", "style_notes", "do_not_include"],
                additionalProperties: false,
              },
            },
          },
        });

        const promptContent = promptResponse.choices[0]?.message?.content;
        if (typeof promptContent !== "string") {
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Failed to generate image prompt" });
        }

        const imagePrompt = JSON.parse(promptContent);

        // Generate the actual image
        const { url } = await generateImage({
          prompt: imagePrompt.final_prompt,
        });

        return {
          url,
          altText: imagePrompt.alt_text,
          styleNotes: imagePrompt.style_notes,
        };
      }),

    complianceCheck: publicProcedure
      .input(z.object({
        content: z.string(),
      }))
      .mutation(async ({ ctx, input }) => {
        requireAdmin(ctx);
        const checks: { name: string; passed: boolean; message: string }[] = [];

        // Check for em dashes
        const hasEmDash = input.content.includes("—") || input.content.includes("–");
        checks.push({
          name: "No Em Dashes",
          passed: !hasEmDash,
          message: hasEmDash ? "Found em dashes or en dashes. Replace with periods or commas." : "No em dashes found.",
        });

        // Check for repetitive phrases
        const words = input.content.toLowerCase().replace(/<[^>]*>/g, "").split(/\s+/);
        const phrases: Record<string, number> = {};
        for (let i = 0; i < words.length - 2; i++) {
          const phrase = `${words[i]} ${words[i + 1]} ${words[i + 2]}`;
          phrases[phrase] = (phrases[phrase] || 0) + 1;
        }
        const repetitive = Object.entries(phrases).filter(([_, count]) => count > 3);
        checks.push({
          name: "Repetitive Phrasing",
          passed: repetitive.length === 0,
          message: repetitive.length > 0
            ? `Found ${repetitive.length} repeated phrases: ${repetitive.map(([p]) => `"${p}"`).join(", ")}`
            : "No excessive repetition detected.",
        });

        // Reading level check (simple heuristic: avg sentence length)
        const sentences = input.content.replace(/<[^>]*>/g, "").split(/[.!?]+/).filter(Boolean);
        const avgSentenceLength = words.length / Math.max(sentences.length, 1);
        const readingLevelOk = avgSentenceLength <= 25;
        checks.push({
          name: "Reading Level",
          passed: readingLevelOk,
          message: readingLevelOk
            ? `Average sentence length: ${avgSentenceLength.toFixed(1)} words (good).`
            : `Average sentence length: ${avgSentenceLength.toFixed(1)} words (too complex, aim for under 25).`,
        });

        // AI Detection: check for banned AI vocabulary
        const aiVocab = [
          "additionally", "furthermore", "moreover", "consequently", "nevertheless",
          "crucial", "pivotal", "vital", "groundbreaking", "delve",
          "tapestry", "interplay", "intricate", "intricacies",
          "enduring", "vibrant", "testament", "underscore",
          "showcase", "foster", "garner", "enhance",
          "serves as", "stands as", "nestled", "in the heart of",
          "renowned", "diverse array", "exemplifies",
          "fostering", "encompassing", "resonate with",
          "evolving landscape", "focal point", "indelible mark", "deeply rooted",
        ];
        const contentLower = input.content.toLowerCase().replace(/<[^>]*>/g, "");
        const foundAiVocab = aiVocab.filter(w => contentLower.includes(w));
        checks.push({
          name: "AI Vocabulary Check",
          passed: foundAiVocab.length === 0,
          message: foundAiVocab.length > 0
            ? `Found ${foundAiVocab.length} AI-typical words: ${foundAiVocab.map(w => `"${w}"`).join(", ")}. Replace with simpler alternatives.`
            : "No AI-typical vocabulary detected.",
        });

        // AI Detection: check for common AI phrases
        const aiPhrases = [
          "in today's fast-paced world",
          "in conclusion",
          "it's important to note",
          "at the end of the day",
          "in this day and age",
          "as we all know",
          "not only but also",
          "despite its",
          "commitment to",
          "it is worth noting",
          "plays a crucial role",
          "it cannot be overstated",
          "a testament to",
          "the importance of",
        ];
        const foundAiPhrases = aiPhrases.filter(p => contentLower.includes(p));
        checks.push({
          name: "AI Phrase Patterns",
          passed: foundAiPhrases.length === 0,
          message: foundAiPhrases.length > 0
            ? `Found ${foundAiPhrases.length} AI-typical phrases: ${foundAiPhrases.map(p => `"${p}"`).join(", ")}`
            : "No common AI phrase patterns detected.",
        });

        // AI Detection: check for title case headings (AI pattern)
        const headingMatches = input.content.match(/<h[23][^>]*>([^<]+)<\/h[23]>/gi) || [];
        const titleCaseHeadings = headingMatches.filter(h => {
          const text = h.replace(/<[^>]*>/g, "").trim();
          const words = text.split(/\s+/);
          if (words.length < 3) return false;
          const capitalizedWords = words.filter(w => /^[A-Z]/.test(w) && !/^(I|A|MySentry|AI|CTA|SEO|FAQ|US|UK)$/.test(w));
          return capitalizedWords.length / words.length > 0.8;
        });
        checks.push({
          name: "Heading Case Check",
          passed: titleCaseHeadings.length === 0,
          message: titleCaseHeadings.length > 0
            ? `Found ${titleCaseHeadings.length} title-case headings (AI pattern). Use sentence case instead.`
            : "Headings use sentence case (human-like).",
        });

        const allPassed = checks.every(c => c.passed);
        return { checks, allPassed };
      }),
  }),

  // ---- Public API ----
  public: router({
    list: publicProcedure
      .input(z.object({
        categoryId: z.number().optional(),
        keyword: z.string().optional(),
        limit: z.number().optional(),
        offset: z.number().optional(),
      }).optional())
      .query(async ({ input }) => {
        return getPublishedPosts(input || {});
      }),

    getBySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        // First check for redirect
        const redirect = await getRedirectByOldSlug(input.slug);
        if (redirect) {
          return { redirect: true, newSlug: redirect.newSlug, post: null };
        }
        const post = await getPublishedPostBySlug(input.slug);
        if (!post) {
          return { redirect: false, newSlug: null, post: null };
        }
        return { redirect: false, newSlug: null, post };
      }),

    related: publicProcedure
      .input(z.object({
        categoryId: z.number(),
        excludeId: z.number(),
        limit: z.number().optional(),
      }))
      .query(async ({ input }) => {
        return getRelatedPosts(input.categoryId, input.excludeId, input.limit);
      }),

    categories: publicProcedure.query(async () => {
      return getAllCategories();
    }),
  }),
});
