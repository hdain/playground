import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import { setMetadata } from "../../utils";

import styles from "./NotFound.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const NotFound = () => {
  useEffect(() => {
    setMetadata([
      {
        property: "title",
        content: `404 Not Found | ${import.meta.env.VITE_APP_TITLE}`,
      },
    ]);
  }, []);

  return (
    <div className={cx("not-found")}>
      <strong>💣</strong>
      <h1>Oops! 404 Page Not Found</h1>
      <NavLink to="/">Go Home</NavLink>
    </div>
  );
};

export default NotFound;
