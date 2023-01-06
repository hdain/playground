import classNames from "classnames/bind";
import styles from "./Post.module.scss";

const cx = classNames.bind(styles);

const Post = () => {
  return <div className={cx("post")}>Post</div>;
};

export default Post;
