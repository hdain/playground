import styles from "@/styles/components/layout/hamburger.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type HamburgerProps = {
  isActive: boolean;
  onClick: () => void;
};

export default function Hamburger(props: HamburgerProps) {
  const { isActive, onClick } = props;

  return (
    <button
      className={cx("hamburger", { active: isActive }, { unactive: !isActive })}
      onClick={onClick}
      aria-label="Hamburger"
    >
      <span className={cx("bars")}>
        <span className={cx("bar")}></span>
        <span className={cx("bar")}></span>
        <span className={cx("bar")}></span>
      </span>
    </button>
  );
}
