import styles from "./Nav.module.scss";
import classNames from "classnames/bind";
import { NavItem } from "../NavItem";
import { useContext } from "react";
import { AuthContext } from "../../../contexts";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase";

const cx = classNames.bind(styles);

const Items = [
  { label: "Home", href: "/" },
  { label: "Post", href: "/post" },
];

const Nav = () => {
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className={cx("nav")}>
      <ul>
        {Items.map((item) => (
          <NavItem label={item.label} href={item.href} key={item.label} />
        ))}

        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <NavItem label="Login" href="/login" />
        )}
      </ul>
    </nav>
  );
};

export default Nav;
