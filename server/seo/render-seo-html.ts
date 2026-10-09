import { DEFAULT_OG_IMAGE, SITE_NAME } from "../../shared/seo/route-meta";
import { canonicalizeBlogContentLinks } from "../../shared/seo/blog-assets";
import type { ResolvedMeta } from "./resolve-meta";

const SITE_ORIGIN = "https://mysentry.ai";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeJson(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

function replaceTitle(html: string, value: string): string {
  return html.replace(
    /<title(?:\s[^>]*)?>[\s\S]*?<\/title>/i,
    `<title data-rh="true">${escapeHtml(value)}</title>`
  );
}

function markHelmetOwned(tag: string): string {
  return /\sdata-rh=["'][^"']*["']/i.test(tag)
    ? tag
    : tag.replace(/\s*\/?>(?=[^>]*$)/, match => ` data-rh="true"${match}`);
}

function replaceMeta(
  html: string,
  selector: "name" | "property",
  key: string,
  value: string
): string {
  const escaped = escapeHtml(value);
  const expression = new RegExp(
    `<meta\\s+([^>]*?${selector}=["']${key}["'][^>]*?)>`,
    "i"
  );
  const match = html.match(expression);

  if (!match) {
    return html.replace(
      "</head>",
      `  <meta data-rh="true" ${selector}="${key}" content="${escaped}" />\n  </head>`
    );
  }

  const tag = match[0];
  const nextTag = /content=["'][^"']*["']/i.test(tag)
    ? tag.replace(/content=["'][^"']*["']/i, `content="${escaped}"`)
    : tag.replace(/>$/, ` content="${escaped}" />`);
  return html.replace(tag, markHelmetOwned(nextTag));
}

function replaceCanonical(html: string, canonicalUrl: string): string {
  const escaped = escapeHtml(canonicalUrl);
  const expression = /<link\s+[^>]*rel=["']canonical["'][^>]*>/i;
  const match = html.match(expression);
  if (!match) {
    return html.replace("</head>", `  <link data-rh="true" rel="canonical" href="${escaped}" />\n  </head>`);
  }
  const tag = match[0];
  const nextTag = /href=["'][^"']*["']/i.test(tag)
    ? tag.replace(/href=["'][^"']*["']/i, `href="${escaped}"`)
    : tag.replace(/>$/, ` href="${escaped}" />`);
  return html.replace(tag, markHelmetOwned(nextTag));
}

function buildBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const parts = path.split("/").filter(Boolean);
  const breadcrumbs = [{ name: "Home", url: SITE_ORIGIN }];
  let current = "";
  for (const part of parts) {
    current += `/${part}`;
    breadcrumbs.push({
      name: part
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
      url: `${SITE_ORIGIN}${current}`,
    });
  }
  return breadcrumbs;
}

function buildSchemas(meta: ResolvedMeta, canonicalUrl: string): Record<string, unknown>[] {
  if (meta.robots.startsWith("noindex")) return [];

  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_ORIGIN}/#organization`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: `${SITE_ORIGIN}/favicon.svg`,
      sameAs: [
        "https://www.facebook.com/MySentryAi",
        "https://www.instagram.com/mysentry.ai/",
        "https://www.linkedin.com/company/mysentryai/",
        "https://www.youtube.com/@MySentry",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      name: SITE_NAME,
      url: SITE_ORIGIN,
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
      about: { "@id": `${SITE_ORIGIN}/#organization` },
    },
  ];

  const breadcrumbItems = buildBreadcrumbs(meta.canonicalPath);
  if (breadcrumbItems.length > 1) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (meta.routeType === "article") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: meta.heading,
      description: meta.description,
      image: meta.ogImage,
      mainEntityOfPage: canonicalUrl,
      author: {
        "@type": "Organization",
        name: meta.authorName ?? "MySentry Editorial Team",
      },
      publisher: { "@id": `${SITE_ORIGIN}/#organization` },
      ...(meta.publishedAt ? { datePublished: meta.publishedAt } : {}),
      ...(meta.updatedAt ? { dateModified: meta.updatedAt } : {}),
    });
  }

  return schemas;
}

function buildFallback(meta: ResolvedMeta): string {
  const heading = escapeHtml(meta.heading);
  const summary = escapeHtml(meta.summary);
  const label = meta.routeType === "article" ? "MySentry article" : "MySentry";
  const articleBody =
    meta.routeType === "article" && meta.articleHtml
      ? `<div class="blog-content">${canonicalizeBlogContentLinks(meta.articleHtml)}</div>`
      : "";

  return `<main id="ssr-content" data-ssr-fallback="true" aria-label="${label}">
    <header>
      <a href="/" aria-label="MySentry home">MySentry</a>
      <nav aria-label="Primary">
        <a href="/how-it-works">How It Works</a>
        <a href="/features">Features</a>
        <a href="/pricing">Pricing</a>
        <a href="/blogs">Resources</a>
      </nav>
    </header>
    <article>
      <h1>${heading}</h1>
      <p>${summary}</p>
      ${articleBody}
      ${meta.found ? '<a href="/pricing">Review Plans</a>' : '<a href="/">Return to MySentry</a>'}
    </article>
  </main>`;
}

export function renderSeoHtml(template: string, meta: ResolvedMeta): string {
  const canonicalUrl = `${SITE_ORIGIN}${meta.canonicalPath}`;
  let html = replaceTitle(template, meta.title);
  html = replaceMeta(html, "name", "description", meta.description);
  html = replaceMeta(html, "name", "robots", meta.robots);
  html = replaceMeta(html, "property", "og:type", meta.ogType);
  html = replaceMeta(html, "property", "og:title", meta.title);
  html = replaceMeta(html, "property", "og:description", meta.description);
  html = replaceMeta(html, "property", "og:image", meta.ogImage || DEFAULT_OG_IMAGE);
  html = replaceMeta(html, "property", "og:url", canonicalUrl);
  html = replaceMeta(html, "name", "twitter:title", meta.title);
  html = replaceMeta(html, "name", "twitter:description", meta.description);
  html = replaceMeta(html, "name", "twitter:image", meta.ogImage || DEFAULT_OG_IMAGE);
  html = replaceCanonical(html, canonicalUrl);

  const schemaMarkup = buildSchemas(meta, canonicalUrl)
    .map((schema, index) => `<script data-rh="true" id="ssr-schema-${index}" type="application/ld+json">${escapeJson(schema)}</script>`)
    .join("\n    ");
  if (schemaMarkup) {
    html = html.replace("</head>", `    ${schemaMarkup}\n  </head>`);
  }
  html = html.replace(/<div id="root"><\/div>/i, `<div id="root">${buildFallback(meta)}</div>`);
  return html;
}
