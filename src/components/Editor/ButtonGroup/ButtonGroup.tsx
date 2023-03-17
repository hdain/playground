import styles from "./ButtonGroup.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ButtonGroupProps = {
  handleBackClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const { handleBackClick, handleSaveClick } = props;

  return (
    <div className={cx("button-group")}>
      <button onClick={handleBackClick}>back</button>
      <button onClick={handleSaveClick}>save</button>
    </div>
  );
};

export default ButtonGroup;
