"use client";

import { useCallback, useEffect } from "react";

import { child, ref, update } from "firebase/database";
import { useRouter } from "next/navigation";

import Editor from "@/components/editor/editor";
import { useAuthContext } from "@/contexts/auth-context";
import { database } from "@/lib/firebase/config";
import usePost, { Post } from "@/lib/hooks/use-post";
import { decodeSlug, slugify } from "@/lib/utils";

import styles from "@/styles/pages/edit.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type UpdateItems = Pick<Post, "title" | "tags" | "contents">;

export default function Edit({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { user, isLoading: isLoadingUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  const {
    isLoading: isLoadingPost,
    post,
    key,
  } = usePost(decodeSlug(params.slug));

  const handleUpdate = useCallback(
    async (items: UpdateItems) => {
      const { title, tags, contents } = items;

      try {
        const slug = slugify(title);
        await update(child(ref(database), `posts/${key}`), {
          slug,
          title,
          tags,
          contents,
        });
      } catch (e) {
        console.error(e);
      }
    },
    [key]
  );

  if (isLoadingUser || isLoadingPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("edit")}>
      <Editor isLoading={isLoadingPost} post={post} onSave={handleUpdate} />
    </div>
  );
}
