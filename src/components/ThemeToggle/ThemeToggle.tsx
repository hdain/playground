import styles from "./ThemeToggle.module.scss";
import classNames from "classnames/bind";
import { useCallback, useEffect, useState } from "react";

const cx = classNames.bind(styles);

type Theme = "light" | "dark";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const updateTheme = theme === "light" ? "dark" : "light";
      setTheme(updateTheme);
      document.body.setAttribute("data-color-mode", updateTheme);
      localStorage.setItem("theme", updateTheme);
    },
    [theme]
  );

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") as Theme;

    if (currentTheme) {
      document.body.setAttribute("data-color-mode", currentTheme);
      setTheme(currentTheme);
    } else {
      const localTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      localStorage.setItem("theme", localTheme);
      document.body.setAttribute("data-color-mode", localTheme);
      setTheme(localTheme);
    }
  }, []);

  return (
    <button onClick={handleClick}>{theme === "light" ? "🌝" : "🌞"}</button>
  );
};

export default ThemeToggle;
