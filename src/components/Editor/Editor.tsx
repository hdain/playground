import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import { Post } from "../../hooks";

const cx = classNames.bind(styles);

type EditorProps = {
  isLoading?: boolean;
  post?: Post;
  onSave: (title: string, contents?: string) => Promise<void>;
};

const Editor = (props: EditorProps) => {
  const { isLoading, post, onSave } = props;

  const navigate = useNavigate();

  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string | undefined>("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContents(post.contents);
    }
  }, [post]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBackClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions,no-restricted-globals
    navigate(-1);
  };

  const handleSaveClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!title) {
      alert("Title is required!");
      return;
    }

    try {
      await onSave(title, contents);
      alert("complete 👏");
      navigate("/post");
    } catch (e) {
      console.error(e);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
