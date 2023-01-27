import styles from "./Layout.module.scss";
import classNames from "classnames/bind";

import { Outlet } from "react-router-dom";
import { Header } from "./Header";

const cx = classNames.bind(styles);

const Layout = () => {
  return (
    <>
      <Header />

      <div className={cx("contents")}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
