"use client";

import { useImageLoading } from "@/lib/ImageLoadingContext";
import { LoadingSpinner } from "./LoadingSpinner";

export default function ClientLayout({ children }) {
  const { isLoading } = useImageLoading();
  return isLoading ? <LoadingSpinner /> : children;
}
