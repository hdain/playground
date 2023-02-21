import styles from "./PostList.module.scss";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { database } from "../../firebase";
import { child, get, ref } from "firebase/database";

const cx = classNames.bind(styles);

type PostType = {
  title: string;
  contents: string;
  timestamp: number;
};

type PostListType = {
  [id: string]: PostType;
};

const PostList = () => {
  const [postList, setPostList] = useState<PostListType | undefined>(undefined);

  useEffect(() => {
    const getPostList = async () => {
      try {
        const response = await get(child(ref(database), "posts"));
        if (response.exists()) {
          const data = response.val();
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
        Object.keys(postList).map((post) => (
          <div className={cx("post")}>
            <h3>{postList[post].title}</h3>
            <div>{postList[post].contents}</div>
          </div>
        ))}
    </div>
  );
};

export default PostList;
