import styles from "./TagGroup.module.scss";
import classNames from "classnames/bind";
import { TagList } from "../../TagList";
import { TagInput } from "../TagInput";

const cx = classNames.bind(styles);

type TagGroupProps = {
  tags: Array<string>;
  tagRef: React.LegacyRef<HTMLInputElement>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

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
