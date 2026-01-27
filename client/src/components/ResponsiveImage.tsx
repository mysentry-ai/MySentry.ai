import { cn } from "@/lib/utils";
import { useState } from "react";

interface ResponsiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export default function ResponsiveImage({ 
  src, 
  alt, 
  className, 
  sizes = "(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px",
  ...props 
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  // Helper to generate srcset string
  const generateSrcSet = (originalSrc: string) => {
    // Skip for SVGs or external URLs
    if (originalSrc.endsWith('.svg') || originalSrc.startsWith('http')) {
      return undefined;
    }

    const ext = originalSrc.substring(originalSrc.lastIndexOf('.'));
    const base = originalSrc.substring(0, originalSrc.lastIndexOf('.'));
    
    // Check if we have resized versions (assuming they exist based on our script)
    // We'll generate the string optimistically
    return `${base}-480w${ext} 480w, ${base}-800w${ext} 800w, ${originalSrc} 1200w`;
  };

  return (
    <img
      src={src}
      srcSet={generateSrcSet(src)}
      sizes={sizes}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      {...props}
    />
  );
}
