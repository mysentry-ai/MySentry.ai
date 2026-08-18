import { Helmet } from "react-helmet-async";
import { ROUTE_META, SITE_NAME, DEFAULT_OG_IMAGE } from "@shared/seo/route-meta";

/**
 * SEO component — injects per-page meta tags via react-helmet-async.
 *
 * The Express SSR layer already injects the correct title, description,
 * og:*, canonical, and twitter:* tags into index.html before the page
 * is served to crawlers. This component updates those tags in the browser
 * after React hydrates, keeping the SPA experience correct for users.
 *
 * title and description are optional. When omitted, the component reads
 * from ROUTE_META[window.location.pathname] — the same source used by
 * the SSR middleware — so SSR and post-hydration Helmet produce identical
 * meta (Scenario A). This is the correct behaviour for JS-rendering
 * crawlers such as Googlebot and Semrush.
 *
 * Double-suffix fix: strips any trailing " | MySentry" from the incoming
 * title before re-appending it exactly once.
 */

const SITE_TITLE =
  "MySentry | 24/7 Personal Safety & Health Monitoring with Emergency Response";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

export default function SEO({
  title,
  description,
  canonical,
  image,
  type = "website",
  noindex = false,
  schema,
}: SEOProps) {
  // ── Title resolution ──────────────────────────────────────────────────────
  // Priority:
  //   1. Explicit title prop (from inline <SEO title="..."> or SEOPageTemplate)
  //   2. ROUTE_META[currentPathname] — same source as SSR middleware (Scenario A)
  //   3. Hardcoded SITE_TITLE as last-resort fallback
  const suffix = ` | ${SITE_NAME}`;

  let resolvedTitle: string | undefined = title;
  let resolvedDescription: string | undefined = description;
  let resolvedImage: string | undefined = image;

  if (typeof window !== "undefined") {
    const routeMeta = ROUTE_META[window.location.pathname];
    if (!resolvedTitle && routeMeta) {
      resolvedTitle = routeMeta.title;
    }
    if (!resolvedDescription && routeMeta) {
      resolvedDescription = routeMeta.description;
    }
    if (!resolvedImage && routeMeta?.ogImage) {
      resolvedImage = routeMeta.ogImage;
    }
  }

  // Strip any existing " | MySentry" suffix before re-appending once
  let fullTitle: string;
  if (!resolvedTitle || resolvedTitle === "Home") {
    fullTitle = SITE_TITLE;
  } else {
    const bare = resolvedTitle.endsWith(suffix)
      ? resolvedTitle.slice(0, -suffix.length)
      : resolvedTitle;
    fullTitle = `${bare}${suffix}`;
  }

  const finalImage = resolvedImage ?? DEFAULT_OG_IMAGE;

  // ── Canonical URL ─────────────────────────────────────────────────────────
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    if (typeof window === "undefined") return "https://mysentry.ai";
    return `https://mysentry.ai${window.location.pathname}`;
  };
  const canonicalUrl = getCanonicalUrl();

  // ── JSON-LD schemas ───────────────────────────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MySentry",
    url: "https://mysentry.ai",
    logo: "https://mysentry.ai/favicon.svg",
    description:
      "24/7 Safety and Health Monitoring with Emergency Response. Panic alarm, fall detection, crash detection, health alerts, emergency contacts, live video response, and professional monitoring.",
    sameAs: [
      "https://www.facebook.com/MySentryAi",
      "https://www.instagram.com/mysentry.ai/",
      "https://www.linkedin.com/company/mysentryai/",
      "https://www.youtube.com/@MySentry",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: "https://mysentry.ai/contact",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "MySentry",
    applicationCategory: "HealthApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "15.00",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "312",
      bestRating: "5",
      worstRating: "1",
    },
    description:
      "24/7 Safety and Health Monitoring app with panic alarm, fall detection, crash detection, health monitoring, live video response, and professional emergency monitoring.",
    url: "https://mysentry.ai",
  };

  const allSchemas: Record<string, unknown>[] = [
    organizationSchema,
    softwareSchema,
  ];
  if (schema) {
    if (Array.isArray(schema)) {
      allSchemas.push(...schema);
    } else {
      allSchemas.push(schema);
    }
  }

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      {resolvedDescription && (
        <meta name="description" content={resolvedDescription} />
      )}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="theme-color" content="#004F7B" />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      {resolvedDescription && (
        <meta property="og:description" content={resolvedDescription} />
      )}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {resolvedDescription && (
        <meta name="twitter:description" content={resolvedDescription} />
      )}
      <meta name="twitter:image" content={finalImage} />

      {/* Structured Data */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
