import { useCallback, useContext } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";

import MDEditor from "@uiw/react-md-editor";
import { child, ref, remove } from "firebase/database";

import { AuthContext } from "../../../contexts";
import { database } from "../../../firebase";
import { usePost } from "../../../hooks";
import { dateFormat } from "../../../utils";
import { TagList } from "../../Editor";

import styles from "./PostDetail.module.scss";
import classNames from "classnames/bind";

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
            <TagList tags={post.tags} />
            <div>
              <span>{dateFormat(post.timestamp)}</span>
              {user && (
                <div className={cx("button-wrap")}>
                  <NavLink to={`/edit/${state}`}>Edit</NavLink>
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
