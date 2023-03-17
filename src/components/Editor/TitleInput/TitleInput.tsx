import styles from "./TitleInput.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type TitleInputProps = {
  title: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TitleInput = (props: TitleInputProps) => {
  const { title, handleChange } = props;

  return (
    <div className={cx("title-input")}>
      <input
        type="text"
        placeholder="Write a title"
        value={title}
        onChange={handleChange}
      />
    </div>
  );
};

export default TitleInput;
