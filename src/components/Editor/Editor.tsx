import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { ref, set, push, serverTimestamp } from "firebase/database";
import { database } from "../../firebase";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

const Editor = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState<string | undefined>(
    "**Contents...**"
  );

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await set(push(ref(database, "posts")), {
        title: title,
        contents: contents,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
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
        value={contents}
        onChange={setContents}
        style={{ flex: 1, boxShadow: "none" }}
      />

      <div className={cx("button-wrap")}>
        <button onClick={handleBackClick}>back</button>
        <button onClick={handleSaveClick}>save</button>
      </div>
    </div>
  );
};

export default Editor;
