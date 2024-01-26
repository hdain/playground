"use client";

import useMousePosition from "@/lib/hooks/use-mouse-position";

import styles from "@/styles/components/layout/cursor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Cursor() {
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
}
