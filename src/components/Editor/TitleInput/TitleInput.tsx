import styles from "./TitleInput.module.scss";
import classNames from "classnames/bind";
import { SaveItems } from "../Editor";

const cx = classNames.bind(styles);

type TitleInputProps = Pick<SaveItems, "title"> & {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TitleInput = (props: TitleInputProps) => {
  const { title, onChange } = props;

  return (
    <div className={cx("title-input")}>
      <input
        type="text"
        placeholder="Write a title"
        value={title}
        onChange={onChange}
      />
    </div>
  );
};

export default TitleInput;
