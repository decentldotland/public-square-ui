import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.sass';
import Navbar from '../comp/Navbar';
import { getFeed } from "public-square-api";
import Link from 'next/link';
import { PhotoIcon, EmojiHappyIcon, SendIcon } from "@iconicicons/react";

const Home: NextPage = () => {



  return (
    <>
      <div className={styles.home_page}>
        <div className={styles.happening_container}>
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
          <form >
              <input 
                type="text"
                placeholder="What's happening?"
                />
          </form>
          <div className={styles.emojis}>
            <div className={styles.icon}><PhotoIcon /></div>
            <div className={styles.icon}><EmojiHappyIcon /></div>
            <div className={styles.weeve_button}>
            <button>
              Weeve! 
              <SendIcon className={styles.weeve_icon} />
            </button>  
            
          </div>
            
          </div>
        </div>
      </div>


    </>


  )
}

export default Home
