import TagInput from "./tag-input";
import type { TagInputProps } from "./tag-input";
import TagList from "./tag-list";
import type { TagListProps } from "./tag-list";

import styles from "@/styles/components/editor/tag-group.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TagGroupProps = TagListProps & TagInputProps;

const TagGroup = (props: TagGroupProps) => {
  const { tags, tagRef, onKeyPress, onClick } = props;

  return (
    <div className={cx("tag-group")}>
      <TagList tags={tags} onClick={onClick} />
      <TagInput tagRef={tagRef} onKeyPress={onKeyPress} />
    </div>
  );
};

export default TagGroup;
