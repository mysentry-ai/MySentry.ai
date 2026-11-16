export const PUBLIC_BLOG_DEADLINE_MS = 5000;

/** Public-read branch only. Includes body delivery; never wraps a mutation. */
export async function fetchPublicBlog(input: RequestInfo | URL, init?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const previous = init?.signal;
  const abort = () => controller.abort(previous?.reason);
  if (previous?.aborted) abort(); else previous?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(() => controller.abort(new Error('Public article request timed out.')), PUBLIC_BLOG_DEADLINE_MS);
  try {
    const response = await globalThis.fetch(input, { ...init, credentials: 'include', signal: controller.signal });
    const bytes = await response.arrayBuffer();
    return new Response(bytes, { status: response.status, statusText: response.statusText, headers: response.headers });
  } finally {
    clearTimeout(timeout); previous?.removeEventListener('abort', abort);
  }
}
