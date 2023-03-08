import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";
import { useNavigate, useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { usePost } from "../../hooks";
import { child, ref, remove } from "firebase/database";
import { database } from "../../firebase";
import { useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const cx = classNames.bind(styles);

const PostDetail = () => {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);
  const { slug } = useParams();
  const { isLoading, post } = usePost(slug);

  const handleDelete = useCallback(async () => {
    try {
      // eslint-disable-next-line no-restricted-globals
      if (confirm("Want to delete?")) {
        await remove(child(ref(database), `posts/${slug}`));
        navigate("/post");
      }
    } catch (e) {
      console.error(e);
    }
  }, [navigate, slug]);

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
              {user && (
                <div className={cx("button-wrap")}>
                  <button onClick={() => navigate(`/edit/${slug}`)}>
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
