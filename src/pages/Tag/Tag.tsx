import { useLocation, useParams } from "react-router-dom";

import { PostList } from "../../components";

import styles from "./Tag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tag = () => {
  const { slug } = useParams();
  const { state: tag } = useLocation();

  return (
    <div className={cx("tag")}>
      <div className={cx("head")}>
        <h1># {slug}</h1>
      </div>
      <PostList tag={tag} />
    </div>
  );
};

export default Tag;
