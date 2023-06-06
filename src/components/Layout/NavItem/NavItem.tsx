import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type NavItemProps = {
  label: string;
  href: string;
  onClick: () => void;
};

const NavItem = (props: NavItemProps) => {
  const { label, href, onClick } = props;

  return (
    <li key={label} className={cx("nav-item")} onClick={onClick}>
      <NavLink to={href} className={({ isActive }) => cx({ active: isActive })}>
        {label}
      </NavLink>
    </li>
  );
};

export default NavItem;
