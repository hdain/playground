import { NavLink } from "react-router-dom";

import { Post } from "../../../hooks";
import { dateFormat } from "../../../utils";
import { TagList } from "../../Editor";

import styles from "./PostPreview.module.scss";
import classNames from "classnames/bind";

const removeMd = require("remove-markdown");

const cx = classNames.bind(styles);

type PostPreviewProps = Post;

const PostPreview = (props: PostPreviewProps) => {
  const { slug, title, tags, contents, timestamp } = props;

  return (
    <article className={cx("post-preview")}>
      <NavLink to={`/post/${slug}`} state={timestamp}>
        <small>{dateFormat(timestamp)}</small>
        <h3>{title}</h3>
        <p>{removeMd(contents)}</p>
      </NavLink>
      <TagList tags={tags} />
    </article>
  );
};

export default PostPreview;
