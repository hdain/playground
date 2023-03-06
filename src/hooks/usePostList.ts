import { useEffect, useState } from "react";
import { get, orderByKey, query, ref } from "firebase/database";
import { database } from "../firebase";
import { Post } from "./usePost";

export type PostList = {
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
          setIsLoading(false);
        } else {
          console.log("No data available");
          setIsLoading(false);
        }
      } catch (e) {
        console.error(e);
        setIsLoading(false);
      }
    };

    getPostList?.();
  }, []);

  return { isLoading, postList };
};
