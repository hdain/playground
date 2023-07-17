import { useEffect, useState } from "react";

import { get, orderByKey, query, ref } from "firebase/database";

import { Post } from "./usePost";
import { database } from "../firebase";

type PostList = {
  [id: string]: Post;
};

export const usePostList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState<PostList>({});

  useEffect(() => {
    const getPostList = async () => {
      setIsLoading(true);

      try {
        const snapshot = await get(query(ref(database, "posts"), orderByKey()));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPostList(data);
        } else {
          console.log("No data available");
        }
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getPostList?.();
  }, []);

  return { isLoading, postList };
};

export default usePostList;
