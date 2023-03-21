import { Fragment } from "react";
import styles from "./PostList.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { PostPreview } from "../PostPreview";
import { usePostList } from "../../../hooks";

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
          return (
            <Fragment key={key}>
              <Link to={`/post/${post.slug}`} state={post.timestamp}>
                <PostPreview title={post.title} contents={post.contents} />
              </Link>
            </Fragment>
          );
        })}
    </div>
  );
};

export default PostList;
