import { usePostList } from "../../../hooks";
import { PostPreview } from "../PostPreview";

import styles from "./PostList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type PostListProps = {
  tag?: string;
};

const PostList = (props: PostListProps) => {
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
};

export default PostList;
