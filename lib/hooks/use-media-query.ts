import { useEffect, useState } from "react";

const getMatches = (query: string): boolean =>
  typeof window !== "undefined" && window.matchMedia(query).matches;

export default function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = getMatches(query);
    setMatches(matchMedia);
  }, [query]);

  return matches;
}
