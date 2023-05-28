import styles from "./Hamburger.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Hamburger = () => (
  <div className={cx("hamburger")}>
    <div className={cx("bars")}>
      <span className={cx("bar")}></span>
      <span className={cx("bar")}></span>
      <span className={cx("bar")}></span>
    </div>
  </div>
);

export default Hamburger;
