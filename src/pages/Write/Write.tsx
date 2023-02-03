import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import { Editor } from "../../components/Editor";

const cx = classNames.bind(styles);

const Write = () => (
  <div className={cx("write")}>
    <Editor />
  </div>
);

export default Write;
