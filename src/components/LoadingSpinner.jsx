import { useImageLoading } from "@/lib/ImageLoadingContext";

export function LoadingSpinner() {
  const { loadedCount, totalCount } = useImageLoading();
  const progress = (loadedCount / totalCount) * 100;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-neutral-900">
      <div className="relative w-48 h-48">
        {/* Main rotating circle */}
        <div className="absolute inset-0 rounded-full border-8 border-blue-500 border-t-transparent animate-spin" />

        {/* Progress circle */}
        <div
          className="absolute inset-0 rounded-full border-8 border-blue-200 dark:border-blue-800"
          style={{
            clipPath: `polygon(0 0, 100% 0, 100% ${progress}%, 0 ${progress}%)`,
          }}
        />

        {/* Inner circle with count */}
        <div className="absolute inset-8 rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
          <div className="text-2xl font-bold text-blue-500">
            {Math.round(progress)}%
          </div>
        </div>
      </div>

      {/* Animated text */}
      <div className="mt-8 space-y-2 text-center">
        <p className="text-lg text-neutral-900 dark:text-neutral-100 animate-pulse">
          Loading your experience...
        </p>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {loadedCount}/{totalCount} images
        </p>
      </div>

      {/* Animated dots */}
      <div className="mt-4 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-blue-500"
            style={{
              animation: `bounce 1s ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
}
