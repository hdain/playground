import { Link } from "react-router-dom";

import { Nav } from "../Nav";
import { ThemeToggle } from "../ThemeToggle";

import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <Link to="/">
          <h1>多IN</h1>
        </Link>
        <div>
          <ThemeToggle />
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
