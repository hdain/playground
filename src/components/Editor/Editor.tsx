import { useEffect, useRef, useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../hooks";
import { TagInput } from "./TagInput";
import { TagList } from "../TagList";

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
  const [tags, setTags] = useState<Array<string>>([]);
  const [contents, setContents] = useState<string | undefined>("");

  const tagRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContents(post.contents);
    }
  }, [post]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleTagKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && tagRef.current?.value) {
        setTags([...tags, tagRef.current.value]);
        tagRef.current.value = "";
      }
    },
    [tags]
  );

  const handleBackClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      navigate(-1);
    },
    [navigate]
  );

  const handleSaveClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
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
    },
    [contents, navigate, title, onSave]
  );

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
          onChange={handleTitleChange}
        />
      </div>

      <div className={cx("tag-wrap")}>
        <TagList tags={tags} />
        <TagInput tagRef={tagRef} handleKeyPress={handleTagKeyPress} />
      </div>

      <MDEditor
        value={contents}
        onChange={setContents}
        extraCommands={[]}
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
