import { resolvePerformanceImage } from './performance-images';

/** Only known manifest images are changed; public copy, links and other markup stay intact. */
export function optimizePublicImageHtml(html: string): string {
  return html.replace(/<img\b[^>]*>/gi, tag => {
    const source = tag.match(/\bsrc=(['"])(.*?)\1/i);
    if (!source) return tag;
    const original = source[2].replace(/&amp;/g, '&');
    const image = resolvePerformanceImage(original);
    if (!image) return tag;
    let output = tag.replace(source[0], `src="${image.src}"`);
    const attribute = (name: string, value: string) => {
      const pattern = new RegExp('\\s'+name+'=([\\\'"])(.*?)\\1', 'i');
      output = pattern.test(output) ? output.replace(pattern, ` ${name}="${value}"`) : output.replace(/\/?\s*>$/, ` ${name}="${value}">`);
    };
    attribute('data-original-src', original.replace(/&/g, '&amp;').replace(/"/g, '&quot;'));
    if (image.srcSet) {
      attribute('srcset', image.srcSet);
      if (!/\bsizes=/.test(output)) attribute('sizes', '(max-width: 740px) 100vw, (max-width: 1279px) 60vw, 50vw');
    }
    if (image.width && !/\bwidth=/.test(output)) attribute('width', String(image.width));
    if (image.height && !/\bheight=/.test(output)) attribute('height', String(image.height));
    if (!/\bloading=/.test(output) && !/fetchpriority=['"]high/.test(output)) attribute('loading', 'lazy');
    return output;
  });
}
