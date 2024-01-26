"use client";

import { useEffect, useState } from "react";

import { get, orderByKey, query, ref } from "firebase/database";

import { database } from "@/lib/firebase/config";

import { Post } from "./use-post";

type PostList = {
  [id: string]: Post;
};

export default function usePostList(tag?: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [postList, setPostList] = useState<PostList>({});

  useEffect(() => {
    const getPostList = async () => {
      setIsLoading(true);

      try {
        const snapshot = await get(query(ref(database, "posts"), orderByKey()));
        if (snapshot.exists()) {
          const data = snapshot.val();

          if (tag) {
            const filteredTag = Object.keys(data).filter((key) =>
              data[key].tags.includes(tag)
            );
            const filteredData = filteredTag.reduce(
              (acc, key) => ({ ...acc, [key]: data[key] }),
              {}
            );
            setPostList(filteredData);

            return;
          }

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
  }, [tag]);

  return { isLoading, postList };
}
