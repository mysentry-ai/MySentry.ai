import fs from 'node:fs/promises';
import path from 'node:path';
export type RoutePreload = { pattern: string; files: string[] };
export function injectRoutePreloads(html: string, pathname: string, routes: RoutePreload[]): string {
  if(pathname==='/'||pathname.startsWith('/admin'))return html;
  const segments=pathname.replace(/\/$/,'').split('/');
  const match=routes.find(route=>{const parts=route.pattern.split('/');return parts.length===segments.length&&parts.every((part,index)=>part.startsWith(':')?!!segments[index]:part===segments[index]);});
  if(!match)return html;
  const links=Array.from(new Set(match.files)).filter(file=>/^\/_app\/[A-Za-z0-9_.-]+\.(?:js|css)$/.test(file)&&!html.includes('href="'+file+'"'));
  const markup=links.map(file=>file.endsWith('.js')?'<link rel="modulepreload" crossorigin href="'+file+'">':'<link rel="preload" as="style" href="'+file+'">').join('');
  return html.replace('</head>',markup+'</head>');
}
export function createRoutePreloader(publicDir: string) {
 const loaded=fs.readFile(path.join(publicDir,'..','route-preloads.json'),'utf8').then(text=>JSON.parse(text) as RoutePreload[]).catch(()=>[] as RoutePreload[]);
 return async(html:string,pathname:string)=>injectRoutePreloads(html,pathname,await loaded);
}
