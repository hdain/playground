import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Editor = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState<string | undefined>("**Contents...**");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className={cx("editor")}>
      <div className={cx("title")}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={handleChange}
        />
      </div>

      <MDEditor
        value={value}
        onChange={setValue}
        style={{ minHeight: "85vh", boxShadow: "none" }}
      />

      <div className={cx("button-wrap")}>
        <button>back</button>
        <button>save</button>
      </div>
    </div>
  );
};

export default Editor;
