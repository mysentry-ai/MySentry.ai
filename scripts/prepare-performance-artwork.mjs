import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, rename, copyFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

const manifest = JSON.parse(await readFile(path.resolve('shared/performance-artwork-manifest.json'), 'utf8'));
const cache = path.join(tmpdir(), 'mysentry-performance-art');
const argument = process.argv.indexOf('--output');
const output = argument < 0 ? null : path.resolve(process.argv[argument + 1]);
await mkdir(cache, { recursive: true });
if (output) await mkdir(output, { recursive: true });
const valid = (bytes, asset) => bytes.length === asset.bytes && createHash('sha256').update(bytes).digest('hex') === asset.sha256;
let index = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (index < manifest.assets.length) {
    const asset = manifest.assets[index++];
    if (!/^[a-z0-9.-]+\.(webp|png|jpg|svg)$/.test(asset.file) || new URL(asset.url).origin !== 'https://files.manuscdn.com') throw new Error('Invalid public image manifest entry');
    const file = path.join(cache, asset.file);
    let bytes;
    try { bytes = await readFile(file); } catch {}
    if (!bytes || !valid(bytes, asset)) {
      let failure;
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          const response = await fetch(asset.url, { signal: AbortSignal.timeout(25000) });
          if (!response.ok) throw new Error('Image source returned '+response.status);
          bytes = Buffer.from(await response.arrayBuffer());
          if (!valid(bytes, asset)) throw new Error('Image checksum mismatch');
          const temporary = file+'.'+process.pid+'.tmp';
          await writeFile(temporary, bytes); await rename(temporary, file); failure = null; break;
        } catch (error) { failure = error; }
      }
      if (failure) throw new Error('Cannot package '+asset.file+': '+failure.message);
    }
    if (output) await copyFile(file, path.join(output, asset.file));
  }
}));
console.log('[Performance artwork] Verified '+manifest.assets.length+' files'+(output?' in '+output:' in preview cache'));
