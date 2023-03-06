import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { usePost } from "../../hooks";
import { child, ref, remove } from "firebase/database";
import { database } from "../../firebase";
import { useCallback } from "react";

const cx = classNames.bind(styles);

const PostDetail = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const { postKey } = state;
  const { isLoading, post } = usePost(postKey);

  const handleDelete = useCallback(async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Want to delete?")) {
        await remove(child(ref(database), `posts/${postKey}`));
        navigate("/post");
      }
    } catch (e) {
      console.error(e);
    }
  }, [navigate, postKey]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {post && (
        <article className={cx("post-detail")}>
          <div className={cx("head")}>
            <h1>{post.title}</h1>
            <div>
              <span>{post.timestamp}</span>
              <div className={cx("button-wrap")}>
                <button onClick={() => navigate(`/edit/${postKey}`)}>
                  Edit
                </button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          </div>
          <MDEditor.Markdown source={post.contents} />
        </article>
      )}
    </>
  );
};

export default PostDetail;
