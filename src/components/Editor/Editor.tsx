import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Editor = () => {
  const [value, setValue] = useState<string | undefined>("**Contents...**");

  return (
    <div className={cx("editor")}>
      <MDEditor
        value={value}
        onChange={setValue}
        height={500}
        style={{ boxShadow: "none" }}
      />
    </div>
  );
};

export default Editor;
