import styles from "./TagList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TagListProps = {
  tags: Array<string>;
};

const TagList = (props: TagListProps) => {
  const { tags } = props;
  const uniqueTags = [...new Set(tags)];

  return (
    <div className={cx("tag-list")}>
      {uniqueTags?.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default TagList;
