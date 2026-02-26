import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
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
  image = "/images/og-image.jpg",
  type = "website",
  noindex = false,
  schema
}: SEOProps) {
  const siteTitle = "MySentry | 24/7 Safety & Health Monitoring";
  const fullTitle = title === "Home" ? siteTitle : `${title} | MySentry`;
  
  // Enforce canonical host: always use https://mysentry.ai
  const getCanonicalUrl = () => {
    if (canonical) return canonical;
    if (typeof window === "undefined") return "https://mysentry.ai";
    const path = window.location.pathname;
    return `https://mysentry.ai${path}`;
  };
  const canonicalUrl = getCanonicalUrl();

  // Organization schema (sitewide)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MySentry",
    "url": "https://mysentry.ai",
    "logo": "https://mysentry.ai/favicon.svg",
    "description": "24/7 Safety and Health Monitoring with Emergency Response. Panic alarm, fall detection, crash detection, health alerts, emergency contacts, live video response, and professional monitoring.",
    "sameAs": [
      "https://www.facebook.com/MySentryAi",
      "https://www.instagram.com/mysentry.ai/",
      "https://www.linkedin.com/company/mysentryai/",
      "https://www.youtube.com/@MySentry"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": "https://mysentry.ai/contact"
    }
  };

  // SoftwareApplication schema (sitewide)
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "MySentry",
    "applicationCategory": "HealthApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "15.00",
      "priceCurrency": "USD"
    },
    "description": "24/7 Safety and Health Monitoring app with panic alarm, fall detection, crash detection, health monitoring, live video response, and professional emergency monitoring.",
    "url": "https://mysentry.ai"
  };

  // Combine all schemas
  const allSchemas: Record<string, unknown>[] = [organizationSchema, softwareSchema];
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
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
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
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="MySentry" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
