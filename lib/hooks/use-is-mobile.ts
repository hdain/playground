import { useEffect, useState } from "react";

const getIsSmallWindow = (): boolean =>
  typeof window !== "undefined" && window.innerWidth < 1024;

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(getIsSmallWindow());

  useEffect(() => {
    const onResize = () => setIsMobile(getIsSmallWindow());

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return isMobile;
}
