const EXPLICIT_NOINDEX_PATHS = new Set([
  "/pricing-legacy",
  "/features/secure-route",
  "/integrations/oura-ring",
]);

export function isNoindexPath(pathname: string): boolean {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return EXPLICIT_NOINDEX_PATHS.has(path)
    || path === "/admin"
    || path.startsWith("/admin/")
    || path.startsWith("/compare/")
    || path.startsWith("/case-studies/");
}
