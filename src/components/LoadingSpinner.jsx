"use client";

import { usePreload } from "@/lib/PreloadProvider";

export function LoadingSpinner() {
  const { progress, loadedCount, totalCount } = usePreload();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800">
      <div className="absolute top-4 right-4 text-sm text-neutral-600 dark:text-neutral-400">
        {loadedCount}/{totalCount}
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">
            {progress}%
          </span>
        </div>
      </div>

      <p className="absolute bottom-8 text-neutral-900 dark:text-neutral-100 animate-pulse">
        Ready for the magical experience?
      </p>
    </div>
  );
}
