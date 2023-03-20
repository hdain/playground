import styles from "./TagGroup.module.scss";
import classNames from "classnames/bind";
import { TagList, TagListProps } from "../../TagList";
import { TagInput, TagInputProps } from "../TagInput";

const cx = classNames.bind(styles);

type TagGroupProps = TagListProps & TagInputProps;

const TagGroup = (props: TagGroupProps) => {
  const { tags, tagRef, onKeyPress } = props;

  return (
    <div className={cx("tag-group")}>
      <TagList tags={tags} />
      <TagInput tagRef={tagRef} onKeyPress={onKeyPress} />
    </div>
  );
};

export default TagGroup;
