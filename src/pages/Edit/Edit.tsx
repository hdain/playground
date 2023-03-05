import styles from "./Edit.module.scss";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import { child, ref, update } from "firebase/database";
import { database } from "../../firebase";
import { usePost } from "../../hooks";
import translatePostTitleToPath from "../../utils/translatePostTitleToPath";
import { Editor } from "../../components/Editor";

const cx = classNames.bind(styles);

const Edit = () => {
  const { postKey } = useParams();
  const { isLoading, post } = usePost(postKey);

  const handleUpdate = async (title: string, contents?: string) => {
    try {
      const titleToPath = translatePostTitleToPath(title);
      await update(child(ref(database), `posts/${postKey}`), {
        path: titleToPath,
        title,
        contents,
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={cx("edit")}>
      <Editor isLoading={isLoading} post={post} onSave={handleUpdate} />
    </div>
  );
};

export default Edit;
