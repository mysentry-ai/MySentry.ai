import { forwardRef, useEffect, useState, type ImgHTMLAttributes } from 'react';
import { resolvePerformanceImage } from '@shared/performance-images';

export default forwardRef<HTMLImageElement, ImgHTMLAttributes<HTMLImageElement>>(function PerformanceImage(
  { src, srcSet, sizes, width, height, loading, fetchPriority, onError, ...props }, ref,
) {
  const delivery = resolvePerformanceImage(src);
  const [failed, setFailed] = useState(false);
  useEffect(() => { setFailed(false); }, [src]);
  return <img
    {...props}
    ref={ref}
    src={failed ? delivery?.original || src : delivery?.src || src}
    srcSet={failed ? undefined : srcSet || delivery?.srcSet}
    sizes={sizes || (delivery?.srcSet ? '(max-width: 740px) 100vw, (max-width: 1279px) 60vw, 50vw' : undefined)}
    width={width ?? delivery?.width}
    height={height ?? delivery?.height}
    loading={loading ?? (fetchPriority === 'high' ? 'eager' : 'lazy')}
    fetchPriority={fetchPriority}
    data-original-src={delivery ? src : undefined}
    onError={event => {
      if (delivery && !failed) setFailed(true);
      onError?.(event);
    }}
  />;
});
