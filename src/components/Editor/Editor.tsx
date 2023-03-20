import React, { useEffect, useReducer, useRef } from "react";
import styles from "./Editor.module.scss";
import classNames from "classnames/bind";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../../hooks";
import { TitleInput } from "./TitleInput";
import { ButtonGroup } from "./ButtonGroup";
import { TagGroup } from "./TagGroup";
import { MdEditor } from "./MdEditor";
import { ContextStore } from "@uiw/react-md-editor/src/Context";

const cx = classNames.bind(styles);

export type SaveItems = Pick<Post, "title" | "tags" | "contents">;

export type EditorProps = {
  isLoading?: boolean;
  post?: Post;
  onSave: (items: SaveItems) => Promise<void>;
};

const Editor = (props: EditorProps) => {
  const { isLoading, post, onSave } = props;

  const navigate = useNavigate();
  const tagRef = useRef<HTMLInputElement>(null);

  const [items, updateItems] = useReducer(
    (data: SaveItems, partialData: Partial<SaveItems>) => ({
      ...data,
      ...partialData,
    }),
    { title: "", tags: [], contents: "" }
  );
  const { title, tags, contents } = items;

  useEffect(() => {
    if (post) {
      updateItems({ ...post });
    }
  }, [post]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateItems({ title: e.target.value });
  };

  const handleContentsChange = (
    value?: string,
    e?: React.ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore
  ) => {
    updateItems({ contents: e?.target.value });
  };

  const handleTagKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && tagRef.current?.value) {
        updateItems({ tags: [...tags, tagRef.current.value] });
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

      if (!items.title) {
        alert("Title is required!");
        return;
      }

      try {
        await onSave({ ...items });
        alert("complete 👏");
        navigate("/post");
      } catch (e) {
        console.error(e);
      }
    },
    [items, navigate, onSave]
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("editor")}>
      <TitleInput title={title} onChange={handleTitleChange} />

      <TagGroup tags={tags} tagRef={tagRef} onKeyPress={handleTagKeyPress} />

      <MdEditor value={contents} onChange={handleContentsChange} />

      <ButtonGroup
        onBackClick={handleBackClick}
        onSaveClick={handleSaveClick}
      />
    </div>
  );
};

export default Editor;
