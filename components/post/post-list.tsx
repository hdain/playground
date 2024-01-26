"use client";

import PostPreview from "@/components/post/post-preview";
import usePostList from "@/lib/hooks/use-post-list";

import styles from "@/styles/components/post/post-list.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type PostListProps = {
  tag?: string;
};

export default function PostList(props: PostListProps) {
  const { tag } = props;
  const { isLoading, postList } = usePostList(tag ?? "");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("post-list")}>
      {Object.keys(postList)
        .reverse()
        .map((key) => {
          const post = postList[key];
          return <PostPreview {...post} key={key} />;
        })}
    </div>
  );
}
