import catalog from './performance-image-delivery.json';

export type ImageDelivery = { src: string; srcSet?: string; width?: number; height?: number; original: string };
const images = catalog as Record<string, ImageDelivery>;

export function resolvePerformanceImage(value?: string | null): ImageDelivery | undefined {
  if (!value) return undefined;
  const direct = images[value];
  if (direct) return direct;
  if (/^https?:\/\/(?:www\.)?mysentry\.ai\//i.test(value)) {
    try { return images[new URL(value).pathname]; } catch { return undefined; }
  }
  return undefined;
}
