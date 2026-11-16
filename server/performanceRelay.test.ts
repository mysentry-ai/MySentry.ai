import { afterEach, describe, expect, it, vi } from 'vitest';
import fs from 'node:fs';
vi.mock('./db',()=>({getDb:vi.fn(async()=>({}))}));
vi.mock('./blogDb',()=>({
  getRedirectByOldSlug:vi.fn(async()=>null),getPublishedPostBySlug:vi.fn(async()=>null),
  getPublishedPosts:vi.fn(async()=>({posts:[],total:0})),getAllCategories:vi.fn(async()=>[]),getRelatedPosts:vi.fn(async()=>[]),
}));
afterEach(()=>{vi.restoreAllMocks();vi.unstubAllEnvs();vi.resetModules();});
describe('public blog relay bound',()=>{
 it('never calls a managed origin again for a relay request, including unknown slugs',async()=>{
  const fetch=vi.spyOn(globalThis,'fetch').mockRejectedValue(new Error('Unexpected managed hop'));
  const r=await import('./publicBlogResolver');
  await r.listPublicBlogs({}, {skipManagedFallback:true});await r.listPublicBlogCategories({skipManagedFallback:true});await r.listPublicRelatedBlogs({categoryId:1,excludeId:-999},{skipManagedFallback:true});await r.resolvePublicBlogBySlug('unknown-published-source-not-in-catalog',{skipManagedFallback:true});expect(fetch).not.toHaveBeenCalled();
 });
 it('wires the guard only in public query handlers and marks outgoing managed reads',()=>{
  const router=fs.readFileSync('server/routers/blogRouter.ts','utf8');const publicPart=router.split('// ---- Public API ----')[1];expect(publicPart.match(/skipManagedFallback:/g)).toHaveLength(4);expect(router.split('// ---- Public API ----')[0]).not.toContain('skipManagedFallback');
  expect(fs.readFileSync('server/publicBlogResolver.ts','utf8')).toContain('"x-mysentry-public-relay": "1"');
 });
});
