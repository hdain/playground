import styles from "./TagInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TagInputProps = {
  tagRef: React.LegacyRef<HTMLInputElement>;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TagInput = (props: TagInputProps) => {
  const { tagRef, handleKeyPress } = props;

  return (
    <div className={cx("tag-input")}>
      <input
        type="text"
        placeholder="Write a tag"
        ref={tagRef}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default TagInput;
