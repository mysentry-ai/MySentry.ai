const LOCAL_BLOG_IMAGE_PREFIX = "/images/blog/";
const LEGACY_CDN_HOSTS = ["cloudfront.net", "manuscdn.com"];
import { CANONICAL_REDIRECTS } from "./redirects";

export function normalizeBlogImagePath(value?: string | null): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  if (trimmed.startsWith(LOCAL_BLOG_IMAGE_PREFIX)) return trimmed;

  try {
    const parsed = new URL(trimmed, "https://mysentry.ai");
    if (LEGACY_CDN_HOSTS.some(host => parsed.hostname.endsWith(host))) {
      const filename = decodeURIComponent(parsed.pathname.split("/").filter(Boolean).pop() ?? "");
      return filename ? `${LOCAL_BLOG_IMAGE_PREFIX}${filename}` : undefined;
    }
  } catch {
    return trimmed;
  }

  return trimmed;
}

export function absoluteBlogImageUrl(value?: string | null): string | undefined {
  const normalized = normalizeBlogImagePath(value);
  if (!normalized) return undefined;
  if (/^https?:\/\//i.test(normalized)) return normalized;
  return `https://mysentry.ai${normalized.startsWith("/") ? normalized : `/${normalized}`}`;
}

export function canonicalizeBlogContentLinks(html: string): string {
  return html.replace(
    /href=(["'])(?:https?:\/\/(?:www\.)?mysentry\.ai)?(\/[^"'#?]*)([^"']*)\1/gi,
    (match, quote: string, path: string, suffix: string) => {
      const target = CANONICAL_REDIRECTS[path];
      return target ? `href=${quote}${target}${suffix}${quote}` : match;
    },
  );
}
