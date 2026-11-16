import express, { type Express } from 'express';
import { tmpdir } from 'node:os';
import path from 'node:path';
import delivery from '../shared/performance-image-delivery.json';

/** Public approved artwork only. Does not expose private uploads or change storage credentials. */
export function registerPerformanceArtwork(app: Express, preview = false) {
  const folder = preview ? path.join(tmpdir(), 'mysentry-performance-art') : path.resolve('dist/public/performance-art');
  app.use('/performance-art', express.static(folder, { immutable: true, maxAge: '1y', fallthrough: false }));
  const originals = new Map<string, string>();
  Object.entries(delivery as Record<string, { original: string }>).forEach(([source, asset]) => {
    if (source.startsWith('/manus-storage/')) originals.set(source, path.basename(asset.original));
  });
  originals.forEach((filename, route) => {
    app.get(route, (_req, res) => res.set('Cache-Control', 'public, max-age=3600').sendFile(path.join(folder, filename)));
  });
}
