import { TagList, TagListProps } from "../../TagList";
import { TagInput, TagInputProps } from "../TagInput";

import styles from "./TagGroup.module.scss";
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
