import baseline from './homepage-image-baseline.json';
import delivery from '../shared/performance-image-delivery.json';

const attributes = (tag: string) => Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g), m => [m[1], m[3]]));

/** Validate every original attribute; normalize only verified image-delivery additions. */
export function normalizeHomepageImages(html: string): string {
  let index = 0;
  const normalized = html.replace(/<img\b[^>]*>/g, tag => {
    const originalTag = baseline[index++];
    if (!originalTag) throw new Error('Unexpected additional homepage image');
    const old = attributes(originalTag), current = attributes(tag);
    const sourceAttribute = old['data-deferred-src'] ? 'data-deferred-src' : 'src';
    const source = old[sourceAttribute];
    const key = source?.startsWith('assets/') ? '/'+source : source;
    const image = (delivery as Record<string, any>)[key];
    if (!image) {
      if (tag !== originalTag) throw new Error('Unknown original image changed');
      return originalTag;
    }
    if (current[sourceAttribute] !== image.src || current['data-original-src'] !== source) throw new Error('Original artwork provenance changed');
    const added = new Set(['srcset','data-deferred-srcset','sizes','data-original-src','width','height','fetchpriority']);
    if (image.srcSet && current[old['data-deferred-src'] ? 'data-deferred-srcset' : 'srcset'] !== image.srcSet) throw new Error('Unverified responsive candidate');
    for (const [name, value] of Object.entries(old)) {
      if (name === sourceAttribute) continue;
      if (current[name] !== value) throw new Error('Protected image attribute changed: '+name);
    }
    for (const [name, value] of Object.entries(current)) {
      if (name in old) continue;
      if (!added.has(name)) throw new Error('Unapproved image attribute: '+name);
      if (name === 'width' && value !== String(image.width)) throw new Error('Incorrect image width');
      if (name === 'height' && value !== String(image.height)) throw new Error('Incorrect image height');
      if (name === 'fetchpriority' && (value !== 'high' || !source.includes('logo-tagline'))) throw new Error('Unapproved priority change');
    }
    return originalTag;
  });
  if (index !== baseline.length) throw new Error('A homepage image was removed');
  return normalized;
}
