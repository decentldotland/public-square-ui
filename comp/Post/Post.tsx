import { HeartIcon, MessageIcon, ShareIcon } from "@iconicicons/react";
import { title } from "process";
import styles from "./Post.module.sass";
import Link from "next/link";

export default function Post({ id, url, poster, description }: PostProps) {
  return (
    <div className={styles.posts}>
      <div className={styles.title}>{title}</div>
      <div className={styles.poster}>
        <img src={`https://arweave.net/${poster}`} />
      </div>
      <div className={styles.url}>
        <Link href={url}>{url}</Link>{" "}
      </div>
      <div className={styles.nft}>
        <Link href={`https://koi.rocks/content-detail/${id}`}></Link>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}

interface PostProps {
  id?: string;
  url?: string;
  poster?: string;
  description?: string;
}
