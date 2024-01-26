"use client";

import useTheme from "@/lib/hooks/use-theme";

import styles from "@/styles/components/layout/theme-toggle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function ThemeToggle() {
  const [theme, toggleTheme] = useTheme();

  return (
    <button className={cx("theme-toggle")} onClick={toggleTheme}>
      {theme === "light" ? "🌝" : "🌞"}
    </button>
  );
}
