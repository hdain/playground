import styles from "./ThemeToggle.module.scss";
import classNames from "classnames/bind";
import { useTheme } from "../../hooks";

const cx = classNames.bind(styles);

const ThemeToggle = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌝" : "🌞"}</button>
  );
};

export default ThemeToggle;
