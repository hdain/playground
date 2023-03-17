import styles from "./TagList.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TagListProps = {
  tags: Array<string>;
};

const TagList = (props: TagListProps) => {
  const { tags } = props;

  return (
    <div className={cx("tag-list")}>
      {tags?.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  );
};

export default TagList;
