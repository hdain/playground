import { useEffect, useState } from "react";

import { child, get, ref } from "firebase/database";

import { database } from "../firebase";

export type Post = {
  slug: string;
  title: string;
  tags: Array<string>;
  contents: string;
  timestamp: number;
};

const usePost = (timestamp: number) => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<Post>();
  const [key, setKey] = useState<String | null>(null);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);

      try {
        const snapshot = await get(child(ref(database), `posts`));
        if (snapshot.exists()) {
          snapshot.forEach((data) => {
            if (data.val().timestamp === timestamp) {
              setPost(data.val());
              setKey(data.key);
            }
          });
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

    getPost?.();
  }, [timestamp]);

  return { isLoading, post, key };
};

export default usePost;
