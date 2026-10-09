import {
  STATIC_FALLBACK_PUBLIC_BLOGS,
  type StaticFallbackPublicBlog,
} from "@shared/seo/public-blog-catalog";

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: "Senior Care" | "Females" | "Families" | "Business";
  image: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
}

function toLegacyBlogPost(post: StaticFallbackPublicBlog): BlogPost {
  return {
    id: post.id,
    slug: post.slug,
    title: post.title,
    category: post.category,
    image: post.image,
    excerpt: post.excerpt,
    date: post.date,
    readTime: post.readTime,
    content: post.contentHtml,
  };
}

/**
 * Compatibility export for browser consumers. The shared public-blog catalog
 * is the source of truth for lifecycle and fallback content.
 */
export const blogs: BlogPost[] = STATIC_FALLBACK_PUBLIC_BLOGS.map(toLegacyBlogPost);
