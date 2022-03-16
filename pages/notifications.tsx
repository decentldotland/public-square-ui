import styles from "../styles/Notifications.module.sass";
import {
  HeartIcon,
  UserPlusIcon,
  ShareIcon,
  MessageIcon,
} from "@iconicicons/react";
import Follow from "../comp/Follow_post/follow_post";
import Post from "../comp/Post/Post";

{
  /**const Notifications = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.notifications}>
          <h1>Notifications</h1>
          <div className={styles.notification + " " + styles.like_notification}>
            <h2>
              <HeartIcon className={styles.post_icons + " " + styles.heart} />
              <span> Marton Lederer</span> likes your post
            </h2>

            <Post
              notification
              id="sf3ZF...eBCK4"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
              user={{
                avatar: "/profile.png",
                name: "Axel",
                username: "bidataggle",
              }}
              interactions={{
                comments: 5,
                likes: 30,
              }}
            />
          </div>
          <div
            className={styles.notification + " " + styles.add_user_notification}
          >
            <h2>
              <UserPlusIcon
                className={styles.post_icons + " " + styles.plus_user}
              />
              <span> Marton Lederer</span> now follows you
            </h2>
            <Follow
              notification
              id="1"
              body="This is the users bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat neque qui id beatae rerum maiores quaerat, ducimus voluptates, exercitationem ipsam facere. Nam, libero maxime. Molestiae doloremque tempore placeat soluta."
              user={{
                avatar: "/profile.png",
                name: "Axel",
                username: "bidetaggle",
              }}
            />
          </div>
          <div
            className={styles.notification + " " + styles.reply_notification}
          >
            <h2>
              <ShareIcon className={styles.post_icons + " " + styles.comment} />{" "}
              <span> Marton Lederer</span> replied your post
            </h2>
            <Post
              notification
              id="sf3ZF...eBCK4"
              body="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged."
              user={{
                avatar: "/profile.png",
                name: "Axel",
                username: "bidataggle",
              }}
              interactions={{
                comments: 5,
                likes: 30,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
**/
}
