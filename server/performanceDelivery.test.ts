import { afterEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
import { resolvePerformanceImage } from '../shared/performance-images';
import { optimizePublicImageHtml } from '../shared/performance-image-html';
import { fetchPublicBlog, PUBLIC_BLOG_DEADLINE_MS } from '../client/src/lib/publicBlogTransport';
import manifest from '../shared/performance-artwork-manifest.json';
import delivery from '../shared/performance-image-delivery.json';

afterEach(() => { vi.restoreAllMocks(); vi.useRealTimers(); });

describe('verified performance delivery', () => {
  it('advertises only packaged, content-hashed image candidates and keeps approved originals', () => {
    const known = new Map(manifest.assets.map(a => ['/performance-art/'+a.file,a]));
    for (const image of Object.values(delivery)) {
      expect(known.has(image.src)).toBe(true); expect(known.has(image.original)).toBe(true);
      if ('srcSet' in image) for (const candidate of image.srcSet.split(', ')) {
        const [path,width] = candidate.split(' ');expect(known.has(path)).toBe(true);expect(width).toMatch(/^[1-9]\d*w$/);
      }
    }
    for (const asset of manifest.assets) { expect(asset.sha256).toMatch(/^[a-f0-9]{64}$/); expect(asset.bytes).toBeGreaterThan(0); expect(asset.url).toMatch(/^https:\/\//); expect(asset.url).not.toMatch(/X-Amz-Credential|X-Amz-Signature|Authorization|token=/i); }
  });
  it('never guesses nonexistent variants for unknown sources', () => {
    expect(resolvePerformanceImage('/images/unknown-photo.jpg')).toBeUndefined();
  });
  it('changes only image delivery in article HTML, retaining words, citations, and alt text', () => {
    const key=Object.keys(delivery)[0];const html='<p>Original announcement.</p><img src="'+key+'" alt="Approved image"><p><a href="https://ring.com/appstore/mysentry">Original citation</a></p>';
    const transformed=optimizePublicImageHtml(html);expect(transformed.replace(/<img[^>]*>/g,'')).toBe(html.replace(/<img[^>]*>/g,''));expect(transformed).toContain('alt="Approved image"');expect(transformed).toContain('/performance-art/');
  });
  it('retains the native authenticated transport for all mutations and admin reads', () => {
    const source=fs.readFileSync('client/src/main.tsx','utf8');expect(source).toContain('op.type === "query" && op.path.startsWith("blog.public.")');expect(source).toContain('extra["x-blog-admin-token"] = blogToken');expect(source).toContain('credentials: "include"');
  });
  it('includes JSON response-body delivery in the public-read timeout and clears its timer', async () => {
    vi.useFakeTimers();vi.spyOn(globalThis,'fetch').mockImplementation(async (_input,init) => ({ status:200,statusText:'OK',headers:new Headers(),arrayBuffer:()=>new Promise((_resolve,reject)=>init?.signal?.addEventListener('abort',()=>reject(new Error('timed out')),{once:true})) }) as Response);
    const pending=fetchPublicBlog('/api/trpc/blog.public.getPosts');const caught=pending.catch(e=>e.message);await vi.advanceTimersByTimeAsync(PUBLIC_BLOG_DEADLINE_MS);expect(await caught).toBe('timed out');expect(vi.getTimerCount()).toBe(0);
  });
  it('returns a successful public JSON response unchanged', async () => {
    vi.spyOn(globalThis,'fetch').mockResolvedValue(new Response('{"result":true}',{headers:{'Content-Type':'application/json'}}));expect(await (await fetchPublicBlog('/api/trpc/blog.public.getPosts')).json()).toEqual({result:true});
  });
});
