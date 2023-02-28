import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { ref, set, serverTimestamp, get, child } from "firebase/database";
import { database } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import translatePostTitleToPath from "../../utils/translatePostTitleToPath";

const cx = classNames.bind(styles);

const Editor = () => {
  const { postTitle } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [contents, setContents] = useState<string | undefined>("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const snapshot = await get(child(ref(database), `posts/${postTitle}`));
        if (snapshot.exists()) {
          const { title, contents } = snapshot.val();
          setTitle(title);
          setContents(contents);
        } else {
          console.log("No data available");
        }
      } catch (e) {
        console.error(e);
      }
    };

    getPost();
  }, [postTitle]);

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
      const titleToPath = translatePostTitleToPath(title);
      await set(ref(database, `posts/${titleToPath}`), {
        path: titleToPath,
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