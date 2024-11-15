"use client";

import { useImageLoading } from "@/lib/ImageLoadingContext";
import Image from "next/image";
import { useEffect } from "react";

export function TrackedImage({ src, alt, className, ...props }) {
  const { registerImage, markImageAsLoaded } = useImageLoading();
  const imageSrc = typeof src === "string" ? src : src.src;

  useEffect(() => {
    registerImage(imageSrc);

    return () => {
      markImageAsLoaded(imageSrc);
    };
  }, [imageSrc, registerImage, markImageAsLoaded]);

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      {...props}
      onLoad={() => markImageAsLoaded(imageSrc)}
    />
  );
}
