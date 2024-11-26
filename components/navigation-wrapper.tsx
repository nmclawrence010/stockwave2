"use client";

import { usePathname } from "next/navigation";
import Navigation from "./navigation";

export default function NavigationWrapper() {
  const pathname = usePathname();
  const showNavigation = pathname !== "/";

  if (!showNavigation) {
    return null;
  }

  return <Navigation />;
}
