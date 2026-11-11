import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, copyFile, rename, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';

// Public source URLs are build inputs only. Browsers use packaged same-origin files.
const raw = await readFile(path.resolve('shared/homepage-artwork-manifest.json'));
const manifest = JSON.parse(raw.toString());
const cache = path.join(tmpdir(), 'mysentry-homepage-art-' + createHash('sha256').update(raw).digest('hex').slice(0, 16));
const outputIndex = process.argv.indexOf('--output');
const output = outputIndex < 0 ? null : path.resolve(process.argv[outputIndex + 1]);
await mkdir(cache, { recursive: true });
if (output) await mkdir(output, { recursive: true });
const valid = (bytes, asset) => bytes.length === asset.bytes && createHash('sha256').update(bytes).digest('hex') === asset.sha256;
let index = 0;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (index < manifest.assets.length) {
    const asset = manifest.assets[index++];
    if (!/^[a-z0-9.-]+\.webp$/.test(asset.file) || new URL(asset.url).origin !== 'https://files.manuscdn.com') throw new Error('Invalid public artwork manifest entry');
    const target = path.join(cache, asset.file);
    let bytes;
    try { bytes = await readFile(target); } catch {}
    if (!bytes || !valid(bytes, asset)) {
      let error;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const response = await fetch(asset.url, { signal: AbortSignal.timeout(25000) });
          if (!response.ok) throw new Error('Artwork source returned ' + response.status);
          bytes = Buffer.from(await response.arrayBuffer());
          if (!valid(bytes, asset)) throw new Error('Artwork checksum mismatch');
          const temporary = target + '.' + process.pid + '.tmp';
          await writeFile(temporary, bytes);
          await rename(temporary, target);
          error = null;
          break;
        } catch (caught) { error = caught; }
      }
      if (error) throw new Error('Cannot package ' + asset.file + ': ' + error.message);
    }
    if (output) await copyFile(target, path.join(output, asset.file));
  }
}));
console.log('[Homepage artwork] Verified ' + manifest.assets.length + ' files' + (output ? ' in ' + output : ' in preview cache'));
