import { blogs } from "./blogs";

export type PublicFallbackBlogPost = {
  id: number;
  slug: string;
  title: string;
  categoryId: number;
  excerpt: string;
  heroImageUrl: string;
  heroImageAlt: string;
  heroImageCaption: string | null;
  contentHtml: string;
  publishedAt: Date;
  updatedAt: Date;
  readTimeMinutes: number;
  tags: string[];
  authorName: string;
  metaTitle: string;
  metaDescription: string;
  ogImageUrl: string;
};

const categoryIdByName = {
  "Senior Care": 1,
  Females: 2,
  Families: 3,
  Business: 4,
} as const;

export const fallbackBlogCategories = Object.entries(categoryIdByName).map(([name, id]) => ({ id, name }));

function getReadTimeMinutes(readTime: string) {
  const minutes = Number.parseInt(readTime, 10);
  return Number.isFinite(minutes) ? minutes : 5;
}

export const fallbackBlogPosts: PublicFallbackBlogPost[] = blogs
  .map((blog, index) => ({
    id: 900_000 + index,
    slug: blog.slug,
    title: blog.title,
    categoryId: categoryIdByName[blog.category],
    excerpt: blog.excerpt,
    heroImageUrl: blog.image,
    heroImageAlt: blog.title,
    heroImageCaption: null,
    contentHtml: blog.content,
    publishedAt: new Date(blog.date),
    updatedAt: new Date(blog.date),
    readTimeMinutes: getReadTimeMinutes(blog.readTime),
    tags: [blog.category, "Personal safety"],
    authorName: "MySentry Editorial Team",
    metaTitle: `${blog.title} | MySentry Safety & Health Hub`,
    metaDescription: blog.excerpt,
    ogImageUrl: blog.image,
  }))
  .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());

export function getFallbackBlogPostBySlug(slug: string) {
  return fallbackBlogPosts.find((post) => post.slug === slug) ?? null;
}

export function getFallbackRelatedPosts(categoryId: number, excludeId: number, limit = 4) {
  return fallbackBlogPosts
    .filter((post) => post.categoryId === categoryId && post.id !== excludeId)
    .slice(0, limit);
}
