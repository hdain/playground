import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import { child, push, ref, serverTimestamp, set } from "firebase/database";
import { database } from "../../firebase";
import translatePostTitleToPath from "../../utils/translatePostTitleToPath";
import { Editor } from "../../components/Editor";

const cx = classNames.bind(styles);

const Write = () => {
  const handleCreate = async (title: string, contents?: string) => {
    try {
      const titleToPath = translatePostTitleToPath(title);
      await set(push(child(ref(database), `posts`)), {
        path: titleToPath,
        title,
        contents,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={cx("write")}>
      <Editor onSave={handleCreate} />
    </div>
  );
};

export default Write;
