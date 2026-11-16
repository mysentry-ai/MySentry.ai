import { cn } from '@/lib/utils';
import { useState, type ImgHTMLAttributes } from 'react';
import PerformanceImage from './PerformanceImage';
import { resolvePerformanceImage } from '@shared/performance-images';

interface ResponsiveImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fetchPriority?: 'high' | 'low' | 'auto';
}

export default function ResponsiveImage({ src, alt, className, sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px', loading, fetchPriority, width, height, onLoad, onError, ...props }: ResponsiveImageProps) {
  const [loadedSrc, setLoadedSrc] = useState('');
  const image = resolvePerformanceImage(src);
  return <PerformanceImage
    {...props}
    src={src}
    alt={alt}
    sizes={sizes}
    loading={loading ?? 'lazy'}
    fetchPriority={fetchPriority}
    width={width ?? image?.width ?? 1200}
    height={height ?? image?.height ?? 675}
    ref={node => { if (node?.complete && node.naturalWidth > 0 && loadedSrc !== src) setLoadedSrc(src); }}
    onLoad={event => { setLoadedSrc(src); onLoad?.(event); }}
    onError={event => { setLoadedSrc(src); onError?.(event); }}
    className={cn('transition-opacity duration-300', loadedSrc === src ? 'opacity-100' : 'opacity-0', className)}
  />;
}
