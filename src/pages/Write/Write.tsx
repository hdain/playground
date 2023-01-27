import styles from "./Write.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Write = () => {
  return <div className={cx("write")}>Write</div>;
};

export default Write;
