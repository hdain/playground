import { useTheme } from "../../hooks";

import styles from "./ThemeToggle.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌝" : "🌞"}</button>
  );
};

export default ThemeToggle;
