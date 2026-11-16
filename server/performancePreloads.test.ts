import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import { injectRoutePreloads } from './routePreloads';
import { CANONICAL_REDIRECTS } from '../shared/seo/redirects';
const html='<html><head><title>Original title</title><link rel="canonical" href="https://mysentry.ai/families"></head><body>Original content</body></html>';
const routes=[{pattern:'/families',files:['/_app/Families.a1234.js','/_app/shared.a1234.js']},{pattern:'/blog/:slug',files:['/_app/BlogPost.a1234.js']}];
describe('selected-route parallel loading',()=>{
 it('preloads only the selected page and retains the original title, canonical, and body',()=>{
  const result=injectRoutePreloads(html,'/families',routes);expect(result).toContain('modulepreload');expect(result).toContain('/_app/Families.a1234.js');expect(result).not.toContain('BlogPost');expect(result.replace(/<link rel="modulepreload"[^>]*>/g,'')).toBe(html);
 });
 it('matches parameter routes without matching their sibling or unregistered paths',()=>{
  expect(injectRoutePreloads(html,'/blog/original-announcement',routes)).toContain('BlogPost');expect(injectRoutePreloads(html,'/blogs',routes)).toBe(html);expect(injectRoutePreloads(html,'/unknown',routes)).toBe(html);
 });
 it('never adds preload work to the exact homepage or an admin page',()=>{
  expect(injectRoutePreloads(html,'/',routes)).toBe(html);expect(injectRoutePreloads(html,'/admin/blog',routes)).toBe(html);
 });
 it('rejects remote, malformed, and non-script artifact URLs and avoids duplicates',()=>{
  const result=injectRoutePreloads(html,'/families',[{pattern:'/families',files:['https://evil.example/x.js','/_app/x"><script>.js','/private.js','/_app/one.js','/_app/one.js']}]);expect(result.match(/modulepreload/g)).toHaveLength(1);expect(result).not.toContain('evil.example');expect(result).not.toContain('<script>');
 });
 for(const [alias,target] of [['panic-alarm','panic-button-app'],['fall-detection','fall-detection-app'],['safety-check','safety-check-in-app']])it('keeps '+alias+' working without changing homepage buttons',()=>{
  expect(CANONICAL_REDIRECTS['/features/'+alias]).toBe('/features/'+target);expect(fs.readFileSync('client/src/App.tsx','utf8')).toContain('<Route path="/features/'+alias+'">{() => <RedirectRoute to="/features/'+target+'" />}</Route>');
 });
});
