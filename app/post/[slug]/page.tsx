"use client";

import { useCallback, useContext } from "react";

import MDEditor from "@uiw/react-md-editor";
import { child, ref, remove } from "firebase/database";
import Link from "next/link";
import { useRouter } from "next/navigation";

import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

import TagList from "@/components/editor/tag-list";
import { AuthContext } from "@/contexts/auth-context";
import { database } from "@/lib/firebase/config";
import usePost from "@/lib/hooks/use-post";
import { decodeSlug, formatDate } from "@/lib/utils";

import styles from "@/styles/pages/post-detail.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function PostDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  const { isLoading, post, key } = usePost(decodeSlug(params.slug));

  const handleDelete = useCallback(async () => {
    try {
      if (confirm("Want to delete?")) {
        await remove(child(ref(database), `posts/${key}`));
        router.push("/post");
      }
    } catch (e) {
      console.error(e);
    }
  }, [key, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {post && (
        <article className={cx("post-detail")}>
          <div className={cx("head")}>
            <h1>{post.title}</h1>
            <TagList tags={post.tags} isLink />
            <div>
              <span>{formatDate(post.timestamp)}</span>
              {user && (
                <div className={cx("button-wrap")}>
                  <Link href={`/edit/${post.slug}`}>Edit</Link>
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
}
