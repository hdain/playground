import { Post } from "../../../hooks";
import { dateFormat } from "../../../utils";
import { TagList } from "../../Editor";

import styles from "./PostPreview.module.scss";
import classNames from "classnames/bind";

const removeMd = require("remove-markdown");

const cx = classNames.bind(styles);

type PostPreviewProps = Pick<Post, "title" | "tags" | "contents" | "timestamp">;

const PostPreview = (props: PostPreviewProps) => {
  const { title, tags, contents, timestamp } = props;

  return (
    <article className={cx("post-preview")}>
      <small>{dateFormat(timestamp)}</small>
      <h3>{title}</h3>
      <p>{removeMd(contents)}</p>
      <TagList tags={tags} isLink />
    </article>
  );
};

export default PostPreview;
