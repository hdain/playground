import classNames from "classnames/bind";
import styles from "./Post.module.scss";
import { PostList } from "../../components";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts";

const cx = classNames.bind(styles);

const Post = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className={cx("post")}>
      <div className={cx("head")}>
        <h3>Post</h3>
        {user && <NavLink to={"/write"}>Write</NavLink>}
      </div>
      <PostList />
    </div>
  );
};

export default Post;
