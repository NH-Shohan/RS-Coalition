"use client";

import { createContext, useCallback, useContext, useState } from "react";

const ImageLoadingContext = createContext({});

export function ImageLoadingProvider({ children }) {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [totalImages, setTotalImages] = useState(new Set());

  const registerImage = useCallback((src) => {
    setTotalImages((prev) => new Set([...prev, src]));
  }, []);

  const markImageAsLoaded = useCallback((src) => {
    setLoadedImages((prev) => new Set([...prev, src]));
  }, []);

  const loadedCount = loadedImages.size;
  const totalCount = totalImages.size;
  const isLoading = totalCount > 0 && loadedCount < totalCount;

  return (
    <ImageLoadingContext.Provider
      value={{
        registerImage,
        markImageAsLoaded,
        isLoading,
        loadedCount,
        totalCount,
      }}
    >
      {children}
    </ImageLoadingContext.Provider>
  );
}

export const useImageLoading = () => useContext(ImageLoadingContext);
