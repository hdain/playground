import Link from "next/link";

import TagList from "@/components/editor/tag-list";
import type { Post } from "@/lib/hooks/use-post";
import { formatDate } from "@/lib/utils";

import styles from "@/styles/components/post/post-preview.module.scss";
import classNames from "classnames/bind";

const removeMd = require("remove-markdown");

const cx = classNames.bind(styles);

type PostPreviewProps = Post;

export default function PostPreview(props: PostPreviewProps) {
  const { slug, title, tags, contents, timestamp } = props;

  return (
    <article className={cx("post-preview")}>
      <Link href={`/post/${slug}`}>
        <small>{formatDate(timestamp)}</small>
        <strong>{title}</strong>
        <p>{removeMd(contents)}</p>
      </Link>
      <TagList tags={tags} isLink />
    </article>
  );
}
