export const CANONICAL_REDIRECTS: Record<string, string> = {
  "/blog/protecting-teen-drivers": "/blogs",
  "/features/voice-activated-panic-alarm": "/features",
  "/features/health-monitoring-app-with-alerts": "/features/health-monitoring",
  "/compare/adt-vs-mysentry": "/compare/sosecure-adt-vs-mysentry",
  "/ring": "/integrations/ring",
  "/partner": "/partners",
  "/features/meetsafe-check-ins": "/features/safety-check-in-app",
  "/guides/professional-monitoring": "/features/24-7-professional-monitoring",
  "/medical-alert-system-for-seniors": "/use-cases/medical-alert-app-for-seniors",
  "/use-cases/home-healthcare-worker-safety": "/use-cases/lone-worker-safety-app",
  "/who-we-protect/seniors": "/use-cases/medical-alert-app-for-seniors",
  "/who-we-protect/women": "/use-cases/safety-app-for-women",
  "/who-we-protect/employers": "/use-cases/lone-worker-safety-app",
  "/who-we-protect/drivers": "/use-cases/teen-driver-safety",
  "/who-we-protect/students": "/use-cases/family-safety-app",
  "/who-we-protect/children-and-teens": "/use-cases/family-safety-app",
  "/solutions/home-healthcare": "/industries/home-healthcare",
  "/solutions/real-estate": "/industries/real-estate",
  "/solutions/construction": "/industries/construction",
  "/solutions/retail-workers": "/industries/retail",
  "/safety-for/women-living-alone": "/use-cases/safety-app-for-women",
  "/safety-for/seniors-aging-in-place": "/use-cases/medical-alert-app-for-seniors",
  "/compare/lively-vs-mysentry": "/compare/traditional-medical-alerts-vs-mysentry",
  "/compare/medical-guardian-vs-mysentry": "/compare/traditional-medical-alerts-vs-mysentry",
  "/compare/oura-ring-vs-mysentry": "/compare/fitness-wearables-vs-mysentry",
  "/compare/whoop-vs-mysentry": "/compare/fitness-wearables-vs-mysentry",
};

const MALFORMED_ACCOUNT_DELETION_PATH = "/https://mysentry.ai/account-deletion";

export function resolveMalformedAbsolutePath(
  pathname: string,
  originalUrl: string,
): string | null {
  if (pathname !== MALFORMED_ACCOUNT_DELETION_PATH) return null;

  const queryIndex = originalUrl.indexOf("?");
  const query = queryIndex >= 0 ? originalUrl.slice(queryIndex) : "";
  return `/account-deletion${query}`;
}
