"use client";

import { usePreload } from "@/lib/PreloadProvider";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export default function ClientLayout({ children }) {
  const { isLoading } = usePreload();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingSpinner />;

  return isLoading ? <LoadingSpinner /> : children;
  // return isLoading ? children : <LoadingSpinner />;
  // }
}
