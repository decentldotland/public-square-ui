import styles from "./Follow_post.module.sass";
import Button from "../Button/Button";

export default function Follow({
  id,
  user,
  body,
  notification = false,
  className,
}: FollowProps) {
  return (
    <div
      className={
        styles.notification_containers +
        " " +
        (notification ? styles.plus_margin : "") +
        " " +
        (className || "")
      }
    >
      <div className={styles.upper_post}>
        <div className={styles.profil_data}>
          <div className={styles.profile_div}>
            <img src={user.avatar} alt="profile-picutre" />
          </div>
          <div className={styles.data_user}>
            <div className={styles.user_name}>{user.name}</div>
            <div className={styles.profile_name}>@{user.username}</div>
          </div>
        </div>
        <Button outlined>Follow</Button>
      </div>
      <div className={styles.post_content}>{body}</div>
    </div>
  );
}

interface FollowProps {
  id: string;
  user: {
    avatar: string;
    name: string;
    username: string; //usertag
  };
  body: string;
  className?: string;
  notification?: boolean;
}
