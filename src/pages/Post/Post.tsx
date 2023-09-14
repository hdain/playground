import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { PostList } from "../../components";
import { AuthContext } from "../../contexts";
import { setMetadata } from "../../utils";

import styles from "./Post.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Post = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setMetadata([
      {
        property: "title",
        content: `Post | ${import.meta.env.VITE_APP_TITLE}`,
      },
    ]);
  }, []);

  return (
    <div className={cx("post")}>
      <div className={cx("head")}>
        <h1>Post</h1>
        {user && <NavLink to={"/write"}>Write</NavLink>}
      </div>
      <PostList />
    </div>
  );
};

export default Post;
