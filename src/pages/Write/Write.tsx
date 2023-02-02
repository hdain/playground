import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import { Editor } from "../../components/Editor";
import React, { useState } from "react";

const cx = classNames.bind(styles);

const Write = () => {
  const [title, setTitle] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return (
    <div className={cx("write")}>
      <div className={cx("title")}>
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={handleChange}
        />
      </div>
      <Editor />
    </div>
  );
};

export default Write;
