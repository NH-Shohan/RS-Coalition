"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PreloadContext = createContext({});

export function PreloadProvider({ children }) {
  const [state, setState] = useState({
    loadedImages: new Set(),
    totalImages: new Set(),
    isLoading: true,
  });

  const addToPreloadQueue = (src) => {
    if (!state.totalImages.has(src) && typeof window !== "undefined") {
      setState((prev) => ({
        ...prev,
        totalImages: new Set([...prev.totalImages, src]),
      }));

      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setState((prev) => ({
          ...prev,
          loadedImages: new Set([...prev.loadedImages, src]),
        }));
      };
      img.onerror = () => {
        setState((prev) => ({
          ...prev,
          loadedImages: new Set([...prev.loadedImages, src]),
        }));
      };
    }
  };

  useEffect(() => {
    if (
      state.loadedImages.size > 0 &&
      state.loadedImages.size === state.totalImages.size
    ) {
      const timer = setTimeout(() => {
        setState((prev) => ({ ...prev, isLoading: false }));
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [state.loadedImages.size, state.totalImages.size]);

  const progress =
    state.totalImages.size === 0
      ? 0
      : Math.round((state.loadedImages.size / state.totalImages.size) * 100);

  return (
    <PreloadContext.Provider
      value={{
        addToPreloadQueue,
        isLoading: state.isLoading && state.totalImages.size > 0,
        progress,
        loadedCount: state.loadedImages.size,
        totalCount: state.totalImages.size,
      }}
    >
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreload = () => useContext(PreloadContext);
