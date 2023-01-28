import classNames from "classnames/bind";
import styles from "./Post.module.scss";
import { PostList } from "../../components/PostList";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

const Post = () => {
  return (
    <div className={cx("post")}>
      <div className={cx("head")}>
        <h3>Post</h3>
        <NavLink to={"/write"}>Write</NavLink>
      </div>
      <PostList />
    </div>
  );
};

export default Post;
