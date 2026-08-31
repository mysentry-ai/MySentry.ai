import { Express } from "express";
import { getDb } from "./db";
import { blogPosts } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { isHeldBlogSlug } from "../shared/seo/content-governance";
import { CANONICAL_REDIRECTS } from "../shared/seo/redirects";

// All known static pages with their priorities and change frequencies
const STATIC_PAGES = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/how-it-works", priority: "0.9", changefreq: "monthly" },
  { url: "/pricing", priority: "0.9", changefreq: "monthly" },
  { url: "/females", priority: "0.9", changefreq: "monthly" },
  { url: "/nurses", priority: "0.9", changefreq: "monthly" },
  { url: "/seniors", priority: "0.9", changefreq: "monthly" },
  { url: "/families", priority: "0.9", changefreq: "monthly" },
  { url: "/employers", priority: "0.9", changefreq: "monthly" },
  // Features
  { url: "/features", priority: "0.8", changefreq: "monthly" },
  { url: "/features/panic-button-app", priority: "0.8", changefreq: "monthly" },
  { url: "/features/fall-detection-app", priority: "0.8", changefreq: "monthly" },
  { url: "/features/crash-detection", priority: "0.8", changefreq: "monthly" },
  { url: "/features/24-7-professional-monitoring", priority: "0.8", changefreq: "monthly" },
  { url: "/features/emergency-contacts", priority: "0.8", changefreq: "monthly" },
  { url: "/features/live-video-response", priority: "0.8", changefreq: "monthly" },
  { url: "/features/health-monitoring", priority: "0.8", changefreq: "monthly" },
  { url: "/features/safety-check-in-app", priority: "0.8", changefreq: "monthly" },
  // Use Cases
  { url: "/use-cases", priority: "0.8", changefreq: "monthly" },
  { url: "/use-cases/safety-app-for-women", priority: "0.8", changefreq: "monthly" },
  { url: "/use-cases/family-safety-app", priority: "0.8", changefreq: "monthly" },
  { url: "/use-cases/medical-alert-app-for-seniors", priority: "0.8", changefreq: "monthly" },
  { url: "/use-cases/lone-worker-safety-app", priority: "0.8", changefreq: "monthly" },
  { url: "/use-cases/teen-driver-safety", priority: "0.8", changefreq: "monthly" },
  // Industries
  { url: "/industries", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/home-healthcare", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/construction", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/retail", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/hospitality", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/real-estate", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/education", priority: "0.7", changefreq: "monthly" },
  { url: "/industries/security-guarding", priority: "0.7", changefreq: "monthly" },
  // Comparison hub. Detail pages remain noindex until official-source review is complete.
  { url: "/compare", priority: "0.7", changefreq: "monthly" },
  // New Pillar & Audience Pages
  { url: "/personal-safety-app", priority: "0.9", changefreq: "monthly" },
  { url: "/medical-alert-system-for-seniors", priority: "0.9", changefreq: "monthly" },
  // Solutions (Vertical-Specific BOFU)
  { url: "/solutions/delivery-drivers", priority: "0.8", changefreq: "monthly" },
  // Safety For (Audience-Specific BOFU)
  { url: "/safety-for/solo-travelers", priority: "0.8", changefreq: "monthly" },
  // Resources
  { url: "/resources/employer-one-pager", priority: "0.7", changefreq: "monthly" },
  // Integrations (Wearable Pages)
  { url: "/integrations/apple-watch", priority: "0.8", changefreq: "monthly" },
  { url: "/integrations/samsung-galaxy-watch", priority: "0.8", changefreq: "monthly" },
  { url: "/integrations/ring", priority: "0.8", changefreq: "monthly" },
  // Guides (Authority Content)
  { url: "/guides/lone-worker-safety", priority: "0.7", changefreq: "monthly" },
  { url: "/guides/senior-safety-planning", priority: "0.7", changefreq: "monthly" },
  // Info pages
  { url: "/blogs", priority: "0.8", changefreq: "daily" },
  { url: "/about-us", priority: "0.6", changefreq: "monthly" },
  { url: "/contact", priority: "0.6", changefreq: "monthly" },
  { url: "/team", priority: "0.5", changefreq: "monthly" },
  { url: "/partners", priority: "0.6", changefreq: "monthly" },
  { url: "/privacy", priority: "0.3", changefreq: "yearly" },
  { url: "/terms", priority: "0.3", changefreq: "yearly" },
];

const BASE_URL = "https://mysentry.ai";

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatDate(date: Date | string | null): string {
  if (!date) return new Date().toISOString().split("T")[0];
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

export function registerSitemapRoutes(app: Express) {
  // ── Static 301 redirects ──
  Object.entries(CANONICAL_REDIRECTS).forEach(([source, target]) => {
    app.get(source, (_req, res) => {
      res.redirect(301, target);
    });
  });

  app.get("/blogs/:slug", (req, res) => {
    res.redirect(301, `/blog/${encodeURIComponent(req.params.slug)}`);
  });

  // ── www → non-www redirect (production only) ──
  // Redirect www.mysentry.ai to mysentry.ai to prevent duplicate content
  app.use((req, res, next) => {
    const host = req.get("host") || "";
    if (host.startsWith("www.")) {
      const newHost = host.replace(/^www\./, "");
      return res.redirect(301, `https://${newHost}${req.originalUrl}`);
    }
    next();
  });

  // ── Sitemap Index ──
  // /sitemap.xml is canonical; /sitemap_index.xml 301-redirects to it
  const serveSitemapIndex = (_req: any, res: any) => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap_pages.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap_blog.xml</loc>
  </sitemap>
</sitemapindex>`;
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  };
  app.get("/sitemap_index.xml", (_req, res) => {
    res.redirect(301, "/sitemap.xml");
  });
  app.get("/sitemap.xml", serveSitemapIndex);

  // ── Pages Sitemap (static pages) ──
  app.get("/sitemap_pages.xml", (_req, res) => {
    const urls = STATIC_PAGES.map(
      (page) => `  <url>
    <loc>${BASE_URL}${escapeXml(page.url)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    ).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
    res.set("Content-Type", "application/xml");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  // ── Blog Sitemap (dynamic from database) ──
  app.get("/sitemap_blog.xml", async (_req, res) => {
    try {
      const db = await getDb();
      if (!db) { res.status(500).send("Database unavailable"); return; }
      const posts = await db
        .select({
          slug: blogPosts.slug,
          publishedAt: blogPosts.publishedAt,
          updatedAt: blogPosts.updatedAt,
        })
        .from(blogPosts)
        .where(eq(blogPosts.status, "published"));

      const urls = posts
        .filter((post: { slug: string }) => !isHeldBlogSlug(post.slug))
        .map(
          (post: { slug: string; publishedAt: Date | null; updatedAt: Date | null }) => `  <url>
    <loc>${BASE_URL}/blog/${escapeXml(post.slug)}</loc>
    <lastmod>${formatDate(post.updatedAt || post.publishedAt)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
        )
        .join("\n");

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
      res.set("Content-Type", "application/xml");
      res.set("Cache-Control", "public, max-age=3600");
      res.send(xml);
    } catch (error) {
      console.error("Error generating blog sitemap:", error);
      res.status(500).send("Error generating sitemap");
    }
  });
}
