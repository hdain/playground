import { useEffect, useState } from "react";

const getMatches = (query: string): boolean => window.matchMedia(query).matches;

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(getMatches(query));

  useEffect(() => {
    const matchMedia = getMatches(query);
    setMatches(matchMedia);
  }, [query]);

  return matches;
};

export default useMediaQuery;
