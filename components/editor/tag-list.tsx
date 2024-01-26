import Link from "next/link";

import type { Post } from "@/lib/hooks/use-post";
import { slugify } from "@/lib/utils";

import styles from "@/styles/components/editor/tag-list.module.scss";
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
          <Link key={tag} href={`/tag/${slugify(tag)}`}>
            {tag}
          </Link>
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
