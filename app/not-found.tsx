import Link from "next/link";

import styles from "@/styles/pages/not-found.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function NotFound() {
  return (
    <div className={cx("not-found")}>
      <strong>💣</strong>
      <h1>Oops! 404 Page Not Found</h1>
      <Link href="/">Go Home</Link>
    </div>
  );
}
