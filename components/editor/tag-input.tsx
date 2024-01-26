import styles from "@/styles/components/editor/tag-input.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export type TagInputProps = {
  tagRef: React.LegacyRef<HTMLInputElement>;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TagInput = (props: TagInputProps) => {
  const { tagRef, onKeyPress } = props;

  return (
    <div className={cx("tag-input")}>
      <input
        type="text"
        placeholder="Write a tag"
        ref={tagRef}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default TagInput;
