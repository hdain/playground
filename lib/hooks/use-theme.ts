import { useCallback, useEffect } from "react";

import useLocalStorage from "./use-local-storage";
import useMediaQuery from "./use-media-query";

type Theme = "light" | "dark";
type ToggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => void;

export default function useTheme(): [Theme, ToggleTheme] {
  const matches = useMediaQuery("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useLocalStorage<Theme>(
    "theme",
    matches ? "dark" : "light"
  );

  const toggleTheme = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const updateTheme = theme === "light" ? "dark" : "light";
      document.body.setAttribute("data-color-mode", updateTheme);
      setTheme(updateTheme);
    },
    [theme, setTheme]
  );

  useEffect(() => {
    document.body.setAttribute("data-color-mode", theme);
  }, [theme]);

  return [theme, toggleTheme];
}
