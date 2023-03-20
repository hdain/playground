import styles from "./PostPreview.module.scss";
import classNames from "classnames/bind";
import { Post } from "../../hooks";

const cx = classNames.bind(styles);

type PostPreviewProps = Pick<Post, "title" | "contents">;

const PostPreview = (props: PostPreviewProps) => {
  const { title, contents } = props;

  return (
    <article className={cx("post-preview")}>
      <h3>{title}</h3>
      <p>{contents}</p>
    </article>
  );
};

export default PostPreview;
