import { Nav } from "../Nav";
import styles from "./Header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <h1>Title</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
