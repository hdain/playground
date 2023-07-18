import { NavLink } from "react-router-dom";

import { Post } from "../../../hooks";
import { slugify } from "../../../utils";

import styles from "./TagList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TagListProps = Pick<Post, "tags"> & {
  onClick?: (tag: React.MouseEvent<HTMLSpanElement>) => void;
  isLink?: boolean;
};

const TagList = (props: TagListProps) => {
  const { tags, onClick, isLink } = props;
  const uniqueTags = [...new Set(tags)];

  if (isLink) {
    return (
      <div className={cx("tag-list")}>
        {uniqueTags?.map((tag) => (
          <NavLink key={tag} to={`/tag/${slugify(tag)}`} state={tag}>
            {tag}
          </NavLink>
        ))}
      </div>
    );
  }

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
