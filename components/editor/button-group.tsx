import styles from "@/styles/components/editor/button-group.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ButtonGroupProps = {
  onBackClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSaveClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const ButtonGroup = (props: ButtonGroupProps) => {
  const { onBackClick, onSaveClick } = props;

  return (
    <div className={cx("button-group")}>
      <button onClick={onBackClick}>back</button>
      <button onClick={onSaveClick}>save</button>
    </div>
  );
};

export default ButtonGroup;
