"use client";

import { useCallback, useEffect } from "react";

import { child, push, ref, serverTimestamp, set } from "firebase/database";
import { useRouter } from "next/navigation";

import Editor, { SaveItems } from "@/components/editor/editor";
import { useAuthContext } from "@/contexts/auth-context";
import { database } from "@/lib/firebase/config";
import { slugify } from "@/lib/utils";

import styles from "@/styles/pages/write.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Write() {
  const router = useRouter();
  const { user, isLoading } = useAuthContext();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  const handleCreate = useCallback(async (items: SaveItems) => {
    const { title, tags, contents } = items;

    try {
      const slug = slugify(title);
      await set(push(child(ref(database), `posts`)), {
        slug,
        title,
        tags,
        contents,
        timestamp: serverTimestamp(),
      });
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={cx("write")}>
      <Editor onSave={handleCreate} />
    </div>
  );
}
