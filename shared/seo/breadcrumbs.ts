import { ROUTE_META } from "./route-meta";
import { CANONICAL_REDIRECTS } from "./redirects";

const SITE_ORIGIN = "https://mysentry.ai";

/** Schema navigation must describe real pages, not invented path segments. */
export function buildCanonicalBreadcrumbs(path: string): Array<{ name: string; url: string }> {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/+$/, "");
  const parts = canonicalPath.split("/").filter(Boolean);
  const items = [{ name: "Home", url: SITE_ORIGIN }];
  let current = "";
  for (let index = 0; index < parts.length; index++) {
    const part = parts[index];
    current += `/${part}`;
    const isLeaf = index === parts.length - 1;
    if (!isLeaf && (!Object.hasOwn(ROUTE_META, current) || Object.hasOwn(CANONICAL_REDIRECTS, current))) continue;
    items.push({
      name: part.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
      url: `${SITE_ORIGIN}${current}`,
    });
  }
  return items;
}
