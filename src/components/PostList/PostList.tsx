import styles from "./PostList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const PostList = () => {
  return (
    <div className={cx("post-list")}>
      <p>post1</p>
      <p>post2</p>
      <p>post3</p>
    </div>
  );
};

export default PostList;
