import type { NextPage } from "next";
import Post from "../comp/Post/Post";

import styles from "../styles/Home.module.sass";

import Link from "next/link";

import {
  PhotoIcon,
  EmojiHappyIcon,
  SendIcon,
  HeartIcon,
  ShareIcon,
  MessageIcon,
} from "@iconicicons/react";
import Button from "../comp/Button/Button";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home_page}>
        <div className={styles.top_container}>
          <div className={styles.upper_items}>
            <Link href="/">
              <div className={styles.profile_div}>
                <img src="/profile.png" alt="profile-picutre" />
              </div>
            </Link>

            <input type="text" placeholder="What's happening?" />
          </div>
          <div className={styles.below_items}>
            <div className={styles.icons_div}>
              <PhotoIcon className={styles.emojis} />

              <EmojiHappyIcon className={styles.emojis} />
            </div>
            <div className={styles.posts_button}>
              <Button>
                Post!
                <SendIcon className={styles.icon} />
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.posts}></div>
      </div>
    </>
  );
};

export default Home;
