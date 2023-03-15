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
  const { timestamp } = useParams();
  const { isLoading, post, key } = usePost(Number(timestamp));

  const handleUpdate = useCallback(
    async (title: string, contents?: string) => {
      try {
        const slug = slugify(title);
        await update(child(ref(database), `posts/${key}`), {
          slug,
          title,
          contents,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [key]
  );

  return (
    <div className={cx("edit")}>
      <Editor isLoading={isLoading} post={post} onSave={handleUpdate} />
    </div>
  );
};

export default Edit;
