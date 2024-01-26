"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "@/styles/components/layout/nav-item.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type NavItemProps = {
  label: string;
  href: string;
  onClick: () => void;
};

export default function NavItem(props: NavItemProps) {
  const { label, href, onClick } = props;
  const pathname = usePathname();

  return (
    <li key={label} className={cx("nav-item")} onClick={onClick}>
      <Link href={href} className={`${pathname === href ? cx("active") : ""}`}>
        {label}
      </Link>
    </li>
  );
}
