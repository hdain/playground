import { Fragment } from "react";
import { Link } from "react-router-dom";

import { usePostList } from "../../../hooks";
import { PostPreview } from "../PostPreview";

import styles from "./PostList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostList = () => {
  const { isLoading, postList } = usePostList();

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
};

export default PostList;
