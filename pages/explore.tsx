import styles from "../styles/Explore.module.sass";
import Image from "next/image";
import { ShareIcon, HeartIcon, MessageIcon } from "@iconicicons/react";
import Link from "next/link";
import Button from "../comp/Button/Button";
import Post from "../comp/Post/Post";
import { useState, useEffect } from "react";

/**
 * case "mirror-xyz":
      return await getMirror();

    case "argora-xyz":
      return await getArgora();

    case "arweave-saves":
      return await getArweaveSaves(option);

    case "ardrive":
      return await getPublicDrives(option);

    case "koii":
      return await getKoii(option);

    case "permacast":
      return await getPermacast();
      
    case "permacast-size":
      return await getTotalPermacastSize();
      
    case "pianity":
      return await getPianitySongs();

    case "uaru-pdf":
      return await getUkRuPdf();

    case "uaru-tweets":
      return await getUaRuTweets();
 
    case "uaru-reddit":
      return await getUaRuReddit();

    case "uaru-articles":
      return await getUaRuArticles();
 */

const Explore = () => {
  const explorePlatforms: { name: string; val: string }[] = [
    {
      name: "Mirror.xyz",
      val: "mirror-xyz",
    },
    {
      name: "Argora",
      val: "argora-xyz",
    },
    {
      name: "Arweave-saves",
      val: "arweave-saves",
    },
    {
      name: "Ardrive",
      val: "ardrive",
    },
    {
      name: "Koii",
      val: "koii",
    },
    {
      name: "Permacast",
      val: "permacast",
    },
    {
      name: "Permacast-size",
      val: "permacast-size",
    },
    {
      name: "Pianity",
      val: "pianity",
    },
    {
      name: "Uaru-pdf",
      val: "uaru-pdf",
    },
    {
      name: "Uaru-tweets",
      val: "uaru-tweets",
    },
    {
      name: "Uaru-reddit",
      val: "uaru-reddit",
    },
    {
      name: "Uaru-articles",
      val: "uaru-articles",
    },
  ];

  const [platform, setPlatform] = useState(explorePlatforms[0].val);

  // useState-et használsz
  // ennek az értéke lesz az éppen kiválasztott platform által visszaadott érték

  // useEffect-et használsz
  useEffect(() => {
    (async () => {
      // api használata
      // https://github.com/decentldotland/weave-aggregator/#get-permacast-podcasts
    })();
  }, [platform]);

  return (
    <>
      <div className={styles.page}>
        <h1>Popular communitites & profiles</h1>
        <div className={styles.popular_profiles}>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <img src="/profile.png" alt="" />
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button outlined>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button outlined>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button outlined>Follow</Button>
            </div>
          </div>
          <div className={styles.popular_profile_div}>
            <div className={styles.picture_div}>
              <Link href="/">
                <div className={styles.img}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
            <div className={styles.user_name}>Marton Lederer</div>
            <div className={styles.profile_name}>@martonlederer</div>
            <div className={styles.follow_button}>
              <Button outlined>Follow</Button>
            </div>
          </div>
        </div>
        <div className={styles.trending_posts}>
          <h2>
            Explore platforms
            <select>
              {explorePlatforms.map((platform, i) => (
                <option value={platform.val}>{platform.name}</option>
              ))}
            </select>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Explore;
