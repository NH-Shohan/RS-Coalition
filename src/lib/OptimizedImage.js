"use client";

import NextImage from "next/image";
import { useEffect } from "react";
import { usePreload } from "./PreloadProvider";

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  ...props
}) {
  const { addToPreloadQueue } = usePreload();

  useEffect(() => {
    if (typeof window !== "undefined") {
      addToPreloadQueue(src);
    }
  }, [src, addToPreloadQueue]);

  return (
    <NextImage
      src={src}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      {...props}
    />
  );
}
