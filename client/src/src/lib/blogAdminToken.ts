/**
 * Simple global store for the blog admin token.
 * The httpBatchLink headers function reads from here on every request.
 */
const TOKEN_KEY = "blog_admin_token";

export function getBlogAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(TOKEN_KEY);
}

export function setBlogAdminToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearBlogAdminToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
