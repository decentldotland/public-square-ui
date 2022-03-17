import styles from "../styles/Explore.module.sass";
import Image from "next/image";
import { ShareIcon, HeartIcon, MessageIcon } from "@iconicicons/react";
import Link from "next/link";
import Button from "../comp/Button/Button";
import Post from "../comp/Post/Post";
import { useState, useEffect } from "react";
// @ts-ignore
import { getWeaveAggregator } from "weave-aggregator";
import { url } from "inspector";

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
  const [loading, setLoading] = useState(false);

  // useState-et használsz
  // ennek az értéke lesz az éppen kiválasztott platform által visszaadott érték

  useEffect(() => {
    (async () => {
      // api használata
      // https://github.com/decentldotland/weave-aggregator/#get-permacast-podcasts
      setLoading(true);
      setDatas(await getWeaveAggregator(platform));
      setLoading(false);
    })();
  }, [platform]);
  return (
    <>
      <div className={styles.page}>
        {/**        <h1>Popular communitites & profiles</h1>
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
  </div>**/}
        <div className={styles.trending_posts}>
          <h2 className={styles.explore_title}>
            Explore platforms
            <select onChange={(e) => setPlatform(e.target.value)}>
              {explorePlatforms.map((platform, i) => (
                <option value={platform.val} key={i}>
                  {platform.name}
                </option>
              ))}
            </select>
          </h2>
          {datas.map((data: any, i) => {
            switch (platform) {
              case "arweave-saves":
                return (
                  <div className={styles.posts} key={i}>
                    <h3>Arweave saves</h3>
                    <h4>{JSON.stringify(data.title)}</h4>
                    <a href={data.url}>URL / Link</a>
                  </div>
                );

              case "koii":
                return (
                  <div className={styles.posts} key={i}>
                    <div className={styles.details}>
                      <h3>Koii</h3>
                      <h4>{data.description}</h4>
                    </div>
                    <div className={styles.img_div}>
                      <img src={`https://arweave.net/${data.id}`} alt="" />
                    </div>
                  </div>
                );

              case "ardrive":
                return (
                  <div className={styles.posts} key={i}>
                    <h3>Ardrive</h3>
                    <a href={data.url}>URL / Link</a>
                  </div>
                );

              case "permacast":
                return (
                  <div className={styles.posts}>
                    <h3>Permacast</h3>
                    <iframe
                      src={`https://permacast-cache.herokuapp.com/embed/${data.id}`}
                      key={i}
                    ></iframe>
                  </div>
                );

              default:
                return <></>;
            }
          })}
          {loading && <p>Loading...</p>}
        </div>
      </div>
    </>
  );
};

export default Explore;
