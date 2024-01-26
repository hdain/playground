"use client";

import { useContext } from "react";

import { AuthContext } from "@/contexts/auth-context";
import { signOut } from "@/lib/firebase/auth";

import NavItem from "./nav-item";

import styles from "@/styles/components/layout/nav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type NavProps = {
  onClick: () => void;
};

const Items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Post", href: "/post" },
];

export default function Nav(props: NavProps) {
  const { onClick } = props;
  const { user } = useContext(AuthContext);

  const handleLogout = async () => {
    const { error } = await signOut();

    if (error) {
      alert(`Failed to logout ${error}`);
    }
  };

  return (
    <nav className={cx("nav")}>
      <ul>
        {Items.map((item) => (
          <NavItem
            label={item.label}
            href={item.href}
            key={item.label}
            onClick={onClick}
          />
        ))}
        {user && <button onClick={handleLogout}>Logout</button>}
      </ul>
    </nav>
  );
}
