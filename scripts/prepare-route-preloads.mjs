import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const source=await fs.readFile(path.join(root,'client/src/App.tsx'),'utf8');
const manifest=JSON.parse(await fs.readFile(path.join(root,'dist/public/.vite/manifest.json'),'utf8'));
const components=new Map();
for(const match of source.matchAll(/const\s+(\w+)\s*=\s*(?:lazyPublicPage|lazy)\(\s*\(\)\s*=>\s*import\(["']([^"']+)["']\)/g))components.set(match[1],match[2].replace(/^\.\//,'src/')+'.tsx');
const routes=[];
for(const match of source.matchAll(/<Route\s+path=["']([^"']+)["']\s+component=\{(\w+)\}/g)){
 const pattern=match[1];if(pattern==='/'||pattern.startsWith('/admin'))continue;
 const key=components.get(match[2]);if(!key||!manifest[key])continue;
 const seen=new Set(),files=new Set();
 function collect(k){if(seen.has(k))return;seen.add(k);const entry=manifest[k];if(!entry)return;if(entry.file)files.add('/'+entry.file);for(const css of entry.css||[])files.add('/'+css);for(const imp of entry.imports||[])collect(imp);}
 collect(key);routes.push({pattern,files:[...files]});
}
if(routes.length<30)throw new Error('Missing public lazy-route preload coverage: '+routes.length);
await fs.writeFile(path.join(root,'dist/route-preloads.json'),JSON.stringify(routes)+'\n');
console.log('[Route preloads] Prepared '+routes.length+' selected public routes. Admin and homepage remain excluded.');
