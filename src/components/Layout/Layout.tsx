import { useContext } from "react";
import { Outlet } from "react-router-dom";

import { AuthContext } from "../../contexts";
import { Cursor } from "../Cursor";
import { Header } from "./Header";

import styles from "./Layout.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Layout = () => {
  const { isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading ? (
        // TODO: loding UI ?
        ""
      ) : (
        <div>
          <Cursor />
          <Header />

          <div className={cx("contents")}>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
