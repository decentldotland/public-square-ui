import styles from "../styles/Notifications.module.sass";
import {
  HeartIcon,
  UserPlusIcon,
  ShareIcon,
  MessageIcon,
} from "@iconicicons/react";
import Image from "next/image";
import Button from "../comp/Button/Button";
import Post from "../comp/Post/Post";

const Notifications = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.notifications}>
          <h1>Notifications</h1>
          <div className={styles.notification + " " + styles.like_notification}>
            <h2>
              <HeartIcon className={styles.post_icons + " " + styles.heart} />
              <span> Marton Lederer</span> likes your weeve
            </h2>

            <Post notification
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
              username: "bidataggle"
            }}
          interactions={{
            comments: 5,
            likes: 30
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
            <div className={styles.notification_containers}>
              <div className={styles.upper_post}>
                <div className={styles.profil_data}>
                  <div className={styles.profile_div}>
                    <img src="/profile.png" alt="profile-picutre" />
                  </div>
                  <div className={styles.data_user2}>
                    <div className={styles.user_name}>Axel</div>
                    <div className={styles.profile_name}>@bidetaggle</div>
                  </div>
                </div>
                <Button outlined>Follow</Button>
              </div>
              <div className={styles.post_content}>
                This is the users bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugiat neque qui id beatae rerum maiores quaerat, ducimus voluptates, exercitationem ipsam facere. Nam, libero maxime. Molestiae doloremque tempore placeat soluta.
              </div>
            </div>
          </div>
          <div
            className={styles.notification + " " + styles.reply_notification}
          >
            <h2>
              <ShareIcon className={styles.post_icons + " " + styles.comment} />{" "}
              <span> Marton Lederer</span> replied your weeve
            </h2>

            <Post notification
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
              username: "bidataggle"
            }}
          interactions={{
            comments: 5,
            likes: 30
          }}
        />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
