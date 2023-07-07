import styles from "./Hamburger.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type HamburgerProps = {
  isActive: boolean;
  onClick: () => void;
};

const Hamburger = (props: HamburgerProps) => {
  const { isActive, onClick } = props;

  return (
    <button
      className={cx("hamburger", { active: isActive }, { unactive: !isActive })}
      onClick={onClick}
    >
      <div className={cx("bars")}>
        <span className={cx("bar")}></span>
        <span className={cx("bar")}></span>
        <span className={cx("bar")}></span>
      </div>
    </button>
  );
};

export default Hamburger;
