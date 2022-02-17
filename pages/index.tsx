import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.sass";
import Navbar from "../comp/Navbar";
import { getFeed } from "public-square-api";
import Link from "next/link";
import profilePic from "../public/profile.jpg"

import {
  PhotoIcon,
  EmojiHappyIcon,
  SendIcon,
  HeartIcon,
  ShareIcon,
  MessageIcon
} from "@iconicicons/react";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home_page}>
        <div className={styles.top_container}>
          <div className={styles.upper_items}>
            <Link href="/">
              <div className={styles.profile_div}>
                <Image
                  width="100%"
                  height="100%"
                  src="/profile.jpg"
                  alt="profile-picutre"
                />
              </div>
            </Link>

            <input type="text" placeholder="What's happening?" />
          </div>
          <div className={styles.below_items}>
            <div className={styles.icons_div}>
              <PhotoIcon className={styles.emojis} />

              <EmojiHappyIcon className={styles.emojis} />
            </div>
            <div className={styles.weeve_button}>
              <button>
                Weeve!
                <SendIcon className={styles.weeve_icon} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.home_page_containers}>
          <div className={styles.upper_post}>
            <div className={styles.left_section}>
              <div className={styles.profile_div}> 
              <img src="/profile.png" alt="profile-picutre" />
              </div>
              <div className={styles.data_user}>
                <div className={styles.user_name}>Axel</div>
                <div className={styles.profile_name}>@bidetaggle</div>
              </div>
            </div>
            <div className={styles.right_section}>
              <div className={styles.time}>3 hours ago</div>
              <div className={styles.link_post}>
                <a>sf3ZF...eBCK4</a>
              </div>
            </div>
          </div>
          <div className={styles.post_content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className={styles.below_post}>
            <div className={styles.comment_section}> <MessageIcon className={styles.post_icons}/> 10 Comments</div>
            <div className={styles.like_section}>
              <HeartIcon className={styles.post_icons} />
              28 likes
            </div>
            <div className={styles.share_section}>
              <ShareIcon className={styles.post_icons} />
              share
            </div>
          </div>
        </div>
        <div className={styles.home_page_containers}>
          <div className={styles.upper_post}>
            <div className={styles.left_section}>
              <div className={styles.profile_div}>
                <Image
                  width="100%"
                  height="100%"
                  src="/profile.jpg"
                  alt="profile-picutre"
                />
              </div>
              <div className={styles.data_user}>
                <div className={styles.user_name}>Axel</div>
                <div className={styles.profile_name}>@bidetaggle</div>
              </div>
            </div>
            <div className={styles.right_section}>
              <div className={styles.time}>3 hours ago</div>
              <div className={styles.link_post}>
                <a>sf3ZF...eBCK4</a>
              </div>
            </div>
          </div>
          <div className={styles.post_content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className={styles.below_post}>
            <div className={styles.comment_section}> <MessageIcon className={styles.post_icons}/> 10 Comments</div>
            <div className={styles.like_section}>
              <HeartIcon className={styles.post_icons} />
              28 likes
            </div>
            <div className={styles.share_section}>
              <ShareIcon className={styles.post_icons} />
              share
            </div>
          </div>
        </div>
        <div className={styles.home_page_containers}>
          <div className={styles.upper_post}>
            <div className={styles.left_section}>
              <div className={styles.profile_div}>
                <Image
                  width="100%"
                  height="100%"
                  src="/profile.jpg"
                  alt="profile-picutre"
                />
              </div>
              <div className={styles.data_user}>
                <div className={styles.user_name}>Axel</div>
                <div className={styles.profile_name}>@bidetaggle</div>
              </div>
            </div>
            <div className={styles.right_section}>
              <div className={styles.time}>3 hours ago</div>
              <div className={styles.link_post}>
                <a>sf3ZF...eBCK4</a>
              </div>
            </div>
          </div>
          <div className={styles.post_content}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </div>
          <div className={styles.below_post}>
            <div className={styles.comment_section}> <MessageIcon className={styles.post_icons}/> 10 Comments</div>
            <div className={styles.like_section}>
              <HeartIcon className={styles.post_icons} />
              28 likes
            </div>
            <div className={styles.share_section}>
              <ShareIcon className={styles.post_icons} />
              share
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
