import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { useLocation, useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { usePost } from "../../hooks";
import { child, ref, remove } from "firebase/database";
import { database } from "../../firebase";
import { useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { dateFormat } from "../../utils";

const cx = classNames.bind(styles);

const PostDetail = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { state } = useLocation();
  const { isLoading, post, key } = usePost(state);

  const handleDelete = useCallback(async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Want to delete?")) {
        await remove(child(ref(database), `posts/${key}`));
        navigate("/post");
      }
    } catch (e) {
      console.error(e);
    }
  }, [navigate, key]);

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
              <span>{dateFormat(post.timestamp)}</span>
              {user && (
                <div className={cx("button-wrap")}>
                  <button onClick={() => navigate(`/edit/${state}`)}>
                    Edit
                  </button>
                  <button onClick={handleDelete}>Delete</button>
                </div>
              )}
            </div>
          </div>
          <MDEditor.Markdown source={post.contents} />
        </article>
      )}
    </>
  );
};

export default PostDetail;
