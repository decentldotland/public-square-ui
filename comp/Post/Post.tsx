import { HeartIcon, MessageIcon, ShareIcon } from "@iconicicons/react"
import styles from "./Post.module.sass";

export default function Post({ user, id, body, interactions, notification = false, className }: PostProps) {
  return (
    <div className={styles.posts + " " + (notification ? styles.plus_margin : "") + " " + (className || "")}>
          <div className={styles.upper_post}>
            <div className={styles.left_section}>
              <div className={styles.profile_div}>
                <img src={user.avatar} alt="profile-picutre" />
              </div>
              <div className={styles.data_user}>
                <div className={styles.user_name}>{user.name}</div>
                <div className={styles.profile_name}>@{user.username}</div>
              </div>
            </div>
            <div className={styles.right_section}>
              {/** TODO */}
              <div className={styles.time}>3 hours ago</div>
              <div className={styles.link_post}>
                <a>{id}</a>
              </div>
            </div>
          </div>
          <div className={styles.post_content}>
            {body}
          </div>
          <div className={styles.below_post}>
            <div className={styles.comment_section}>
              {" "}
              <MessageIcon className={styles.post_icons} /> {interactions.comments} Comments
            </div>
            <div className={styles.like_section}>
              <HeartIcon className={styles.post_icons} />
              {interactions.likes} likes
            </div>
            <div className={styles.share_section}>
              <ShareIcon className={styles.post_icons} />
              share
            </div>
          </div>
        </div>
  );
}

interface PostProps {

  id: string;
  user: {
    avatar: string;
    name: string;
    username: string; // usertag
  };
  date?: Date;
  body: string;
  interactions: {
    comments: number;
    likes: number;
  };
  notification?: boolean;
  className?: string;
}