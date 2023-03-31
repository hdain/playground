import { Post } from "../../hooks";

import styles from "./TagList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TagListProps = Pick<Post, "tags"> & {
  onClick?: (tag: React.MouseEvent<HTMLSpanElement>) => void;
};

const TagList = (props: TagListProps) => {
  const { tags, onClick } = props;
  const uniqueTags = [...new Set(tags)];

  return (
    <div className={cx("tag-list")}>
      {uniqueTags?.map((tag) => (
        <span key={tag} onClick={onClick}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default TagList;
