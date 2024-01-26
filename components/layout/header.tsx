"use client";

import { useState } from "react";

import Link from "next/link";

import Hamburger from "@/components/layout/hamburger";
import Nav from "@/components/layout/nav";
import ThemeToggle from "@/components/layout/theme-toggle";

import styles from "@/styles/components/layout/header.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Header() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerActive(!isBurgerActive);
  };

  return (
    <header className={cx("header")}>
      <div className={cx("inner")}>
        <Link href="/" aria-label="hdain.dev">
          <strong>hdain.dev</strong>
        </Link>
        <div className={cx("menu", { active: isBurgerActive })}>
          <div>
            <ThemeToggle />
            <Nav onClick={handleBurgerClick} />
          </div>
        </div>
        <Hamburger isActive={isBurgerActive} onClick={handleBurgerClick} />
      </div>
    </header>
  );
}
