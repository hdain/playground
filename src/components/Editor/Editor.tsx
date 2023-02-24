import { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { ref, set, serverTimestamp } from "firebase/database";
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

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-restricted-globals
    confirm("Do you really want to leave?") ? navigate(-1) : "";
  };

  const handleSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      await set(ref(database, "posts/" + title), {
        title,
        contents,
        timestamp: serverTimestamp(),
      });

      alert("complete 👏");
      navigate("/post");
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
