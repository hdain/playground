"use client";

import { useContext } from "react";

import Link from "next/link";

import PostList from "@/components/post/post-list";
import { AuthContext } from "@/contexts/auth-context";

import styles from "@/styles/pages/post.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Post() {
  const { user } = useContext(AuthContext);

  return (
    <div className={cx("post")}>
      <div className={cx("head")}>
        <h1>Post</h1>
        {user && <Link href={"/write"}>Write</Link>}
      </div>
      <PostList />
    </div>
  );
}
