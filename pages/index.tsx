import type { NextPage } from "next";
import Post from "../comp/Post/Post";

import styles from "../styles/Home.module.sass";

import Link from "next/link";

import { PhotoIcon, EmojiHappyIcon, SendIcon } from "@iconicicons/react";
import Button from "../comp/Button/Button";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Public Square - Home</title>
      </Head>
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
        <div className={styles.posts}>
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
              name: "Name",
              username: "usename",
            }}
            interactions={{
              comments: 5,
              likes: 30,
            }}
          ></Post>

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
              name: "Name",
              username: "usename",
            }}
            interactions={{
              comments: 1,
              likes: 14,
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
              name: "Name",
              username: "usename",
            }}
            interactions={{
              comments: 8,
              likes: 40,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;

export function getServerSideProps() {
  return {
    redirect: {
      destination: "/explore",
      permanent: false,
    },
  };
}
