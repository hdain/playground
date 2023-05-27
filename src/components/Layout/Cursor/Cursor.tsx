import { useMousePosition } from "../../../hooks";

import styles from "./Cursor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Cursor = () => {
  const { x, y } = useMousePosition();

  return (
    <div
      style={{
        left: `
  ${x}px`,
        top: `${y}px`,
      }}
      className={cx("cursor")}
    ></div>
  );
};

export default Cursor;
