const EXPLICIT_NOINDEX_PATHS = new Set([
  "/pricing-legacy",
  "/features/secure-route",
  "/integrations/oura-ring",
]);

const REVIEW_COMPARISON_PATHS = new Set([
  "/compare/noonlight-vs-mysentry",
  "/compare/life360-vs-mysentry",
  "/compare/fallcall-vs-mysentry",
  "/compare/google-personal-safety-vs-mysentry",
  "/compare/sosecure-adt-vs-mysentry",
  "/compare/medical-alert-devices-vs-mysentry",
  "/compare/traditional-medical-alerts-vs-mysentry",
  "/compare/fitness-wearables-vs-mysentry",
]);

export function isNoindexPath(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return EXPLICIT_NOINDEX_PATHS.has(path)
    || path === "/admin"
    || path.startsWith("/admin/")
    || REVIEW_COMPARISON_PATHS.has(path)
    || path.startsWith("/case-studies/");
}
