import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
}

export default function SEO({ title, description, canonical }: SEOProps) {
  const siteTitle = "MySentry | 24/7 Safety & Health Monitoring";
  const fullTitle = title === "Home" ? siteTitle : `${title} | MySentry`;
  const currentUrl = canonical || (typeof window !== "undefined" ? window.location.href : "");

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:site_name" content="MySentry" />
      <meta property="og:image" content="/images/og-image.jpg" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="/images/og-image.jpg" />
    </Helmet>
  );
}
