import styles from "../styles/User.module.sass";
import {
  ArrowLeftIcon,
  ShareIcon,
  HeartIcon,
  MessageIcon,
} from "@iconicicons/react";
import Link from "next/link";
import Button from "../comp/Button/Button";
import Post from "../comp/Post/Post";

const User = () => {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.top_section}>
          <div className={styles.left_section}>
            <Link href="/">
              <ArrowLeftIcon className={styles.arrow_icon} />
            </Link>

            <h2>Axel</h2>
          </div>
          <a>Viewblock</a>
        </div>
        <div className={styles.data_user1}>
          <div className={styles.picture_div}>
            <img src="/profile.png" alt="profile-picutre" />
          </div>
          <div className={styles.right_site}>
            <div className={styles.upper_section}>
              <div className={styles.data_name}>
                <div className={styles.user_name1}>Axel</div>
                <div className={styles.profile_name1}>@bidetaggle</div>
              </div>
              <div className={styles.edit_button}>
                <Button>Edit</Button>
              </div>
            </div>
            <div className={styles.bio}>
              This is a user bio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquid dolorem sed quia omnis aspernatur natus
              sunt nihil illum iusto consequatur ullam magni, officiis quasi at
              ea molestiae! Molestias, dolores velit?
            </div>
            <div className={styles.icons_div}></div>
          </div>
        </div>
        <div className={styles.users_weeves}>
          <h1>Weeves</h1>
          <Post 
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
        
        <Post 
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
            comments: 1,
            likes: 14
          }} />
        </div>
      </div>
    </>
  );
};

export default User;
