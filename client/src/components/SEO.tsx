import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  image = "/images/og-image.jpg",
  type = "website" 
}: SEOProps) {
  const siteTitle = "MySentry | 24/7 Safety & Health Monitoring";
  const fullTitle = title === "Home" ? siteTitle : `${title} | MySentry`;
  const currentUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  // Structured Data for Organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MySentry",
    "url": "https://mysentry.ai",
    "logo": "https://mysentry.ai/images/logo.png",
    "sameAs": [
      "https://twitter.com/mysentry",
      "https://facebook.com/mysentry",
      "https://linkedin.com/company/mysentry"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0123",
      "contactType": "customer service"
    }
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <link rel="canonical" href={currentUrl} />
      <meta name="theme-color" content="#004F7B" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="MySentry" />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}
