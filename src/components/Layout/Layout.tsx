import styles from "./Layout.module.scss";
import classNames from "classnames/bind";

import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { Cursor } from "../Cursor";

const cx = classNames.bind(styles);

const Layout = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading ? (
        // TODO: loding UI ?
        ""
      ) : (
        <>
          <Cursor />
          <Header />

          <div className={cx("contents")}>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
