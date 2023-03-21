import styles from "./Write.module.scss";
import classNames from "classnames/bind";
import { useCallback } from "react";
import { child, push, ref, serverTimestamp, set } from "firebase/database";
import { database } from "../../firebase";
import { Editor, SaveItems } from "../../components";
import { slugify } from "../../utils";

const cx = classNames.bind(styles);

const Write = () => {
  const handleCreate = useCallback(async (items: SaveItems) => {
    const { title, tags, contents } = items;

    try {
      const slug = slugify(title);
      await set(push(child(ref(database), `posts`)), {
        slug,
        title,
        tags,
        contents,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className={cx("write")}>
      <Editor onSave={handleCreate} />
    </div>
  );
};

export default Write;
