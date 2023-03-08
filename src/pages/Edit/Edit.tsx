import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { child, ref, update } from "firebase/database";
import { database } from "../../firebase";
import { usePost } from "../../hooks";
import { Editor } from "../../components/Editor";
import { useCallback } from "react";
import { slugify } from "../../utils";

const cx = classNames.bind(styles);

const Edit = () => {
  const { postKey } = useParams();
  const { isLoading, post } = usePost(postKey);

  const handleUpdate = useCallback(
    async (title: string, contents?: string) => {
      try {
        const path = slugify(title);
        await update(child(ref(database), `posts/${postKey}`), {
          path,
          title,
          contents,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [postKey]
  );

  return (
    <div className={cx("edit")}>
      <Editor isLoading={isLoading} post={post} onSave={handleUpdate} />
    </div>
  );
};

export default Edit;
