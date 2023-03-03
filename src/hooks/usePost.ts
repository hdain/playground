import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import { database } from "../firebase";

export type Post = {
  path: string;
  title: string;
  contents: string;
  timestamp: number;
};

export const usePost = (postKey: string | undefined) => {
  const [isLoading, setIsLoading] = useState(false);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);

      try {
        const snapshot = await get(child(ref(database), `posts/${postKey}`));
        if (snapshot.exists()) {
          const data = snapshot.val();
          setPost(data);
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
  }, [postKey]);

  return { isLoading, post };
};
