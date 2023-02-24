import styles from "./PostList.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { child, get, ref } from "firebase/database";
import { Link } from "react-router-dom";
import { Post } from "../PostDetail";

const cx = classNames.bind(styles);

type PostListType = {
  [id: string]: Post;
};

const PostList = () => {
  const [postList, setPostList] = useState<PostListType | undefined>(undefined);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const snapshot = await get(child(ref(database), "posts"));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPostList(data);
        } else {
          console.log("No data available");
        }
      } catch (e) {
        console.error(e);
      }
    };

    getPostList();
  }, []);

  return (
    <div className={cx("post-list")}>
      {postList &&
        Object.keys(postList).map((key) => {
          const post = postList[key];
          return (
            <article key={post.title} className={cx("post-preview")}>
              <Link to={`/post/${post.path}`}>
                <h3>{post.title}</h3>
                <p>{post.contents}</p>
              </Link>
            </article>
          );
        })}
    </div>
  );
};

export default PostList;
