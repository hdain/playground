import styles from "./Nav.module.scss";
import classNames from "classnames/bind";
import { NavItem } from "../NavItem";

const cx = classNames.bind(styles);

const Items = [
  { label: "Home", href: "/" },
  { label: "Post", href: "/post" },
];

const Nav = () => (
  <nav className={cx("nav")}>
    <ul>
      {Items.map((item) => (
        <NavItem label={item.label} href={item.href} />
      ))}
    </ul>
  </nav>
);

export default Nav;
