import PostList from "@/components/post/post-list";

import styles from "@/styles/pages/tag.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export default function Tag({ params }: { params: { name: string } }) {
  return (
    <div className={cx("tag")}>
      <div className={cx("head")}>
        <h1># {params.name}</h1>
      </div>
      <PostList tag={params.name} />
    </div>
  );
}
