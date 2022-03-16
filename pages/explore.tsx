import styles from "../styles/Explore.module.sass";
import Image from "next/image";
import { ShareIcon, HeartIcon, MessageIcon } from "@iconicicons/react";
import Link from "next/link";
import Button from "../comp/Button/Button";
import Post from "../comp/Post/Post";
import { useState, useEffect } from "react";
// @ts-ignore
import { getWeaveAggregator } from "weave-aggregator";

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
  ];

  const [platform, setPlatform] = useState(explorePlatforms[0].val);
  const [datas, setDatas] = useState([]);

  // useState-et használsz
  // ennek az értéke lesz az éppen kiválasztott platform által visszaadott érték

  useEffect(() => {
    (async () => {
      // api használata
      // https://github.com/decentldotland/weave-aggregator/#get-permacast-podcasts
      setDatas(await getWeaveAggregator(platform));
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
          <h2 className={styles.explore_title}>
            Explore platforms
            <select onChange={(e) => setPlatform(e.target.value)}>
              {explorePlatforms.map((platform, i) => (
                <option value={platform.val}>{platform.name}</option>
              ))}
            </select>
          </h2>
          {datas.map((data) => {
            return (
              <Post
                id="sf3ZF...eBCK4"
                body={JSON.stringify(data)}
                user={{
                  avatar: "/profile.png",
                  name: "Axel",
                  username: "bidataggle",
                }}
                interactions={{
                  comments: 5,
                  likes: 30,
                }}
              ></Post>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Explore;
