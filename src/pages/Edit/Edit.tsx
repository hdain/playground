import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { Editor } from "../../components/Editor";

const cx = classNames.bind(styles);

const Edit = () => (
  <div className={cx("edit")}>
    <Editor />
  </div>
);

export default Edit;
