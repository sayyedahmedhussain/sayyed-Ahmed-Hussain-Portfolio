import { useEffect, useState } from "react";

/**
 * Reports whether the viewport should be treated as "mobile" — used to
 * disable the custom cursor, mouse trail, and to lighten the 3D scene
 * so low-powered devices stay smooth.
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}
