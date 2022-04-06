import styles from "../styles/Explore.module.sass";
import Image from "next/image";
import {
  ShareIcon,
  HeartIcon,
  MessageIcon,
  ColumnsHorizontalIcon,
} from "@iconicicons/react";
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
    {
      name: "Pianity",
      val: "pianity",
    },
  ];

  const [platform, setPlatform] = useState(explorePlatforms[0].val);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      if (platform === "permacast") {
        const res = await (
          await fetch("https://permacast-cache.herokuapp.com/feeds/allcontent")
        ).json();
        setDatas(res.res.slice(0, 15));
      } else {
        setDatas(await getWeaveAggregator(platform));
      }

      setLoading(false);
    })();
  }, [platform]);

  function TimeStamp(data: any) {
    let dateObj = new Date(data.timestamp * 1000);
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let day = dateObj.getDate();
    let hour = dateObj.getHours();
    let min = dateObj.getMinutes();

    return (
      <h1 className={styles.timestamp}>
        {(month < 10 ? "0" : "") + month}/{(day < 10 ? "0" : "") + day}/{year}{" "}
        {(hour < 10 ? "0" : "") + hour}:
        {(min < 10 ? "0" : "") + min + (hour < 12 ? "AM" : "PM")}
      </h1>
    );
  }
  return (
    <>
      <div className={styles.page}>
        {/**   <h1>Popular communitites & profiles</h1>
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
          {loading && (
            <div className={styles.circle}>
              <div className={styles.loading_container}>
                <div className={styles.dot + " " + styles.j1}></div>
                <div className={styles.dot + " " + styles.j2}></div>
                <div className={styles.dot + " " + styles.j3}></div>
              </div>
            </div>
          )}
          {!loading &&
            datas.map((data: any, i) => {
              switch (platform) {
                case "arweave-saves":
                  return (
                    <div className={styles.posts} key={i}>
                      <h3>Arweave saves</h3>
                      <div className={styles.details}>
                        <h4>{data.title}</h4>
                        <h5>
                          <a
                            className={styles.poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {data.poster}
                          </a>
                        </h5>
                        <a href={data.url}>Go to transaction</a>
                      </div>
                    </div>
                  );

                case "koii":
                  return (
                    <div className={styles.posts} key={i}>
                      <h3>Koii</h3>
                      <div className={styles.img_div}>
                        <img src={`https://arweave.net/${data.id}`} alt="" />
                      </div>
                      <div className={styles.details}>
                        <h4>{data.description}</h4>
                        <h5>
                          <a
                            className={styles.poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {data.poster}
                          </a>
                        </h5>
                      </div>
                    </div>
                  );

                case "ardrive":
                  return (
                    <div className={styles.posts} key={i}>
                      <h3 className={styles.title}>Ardrive</h3>
                      {TimeStamp(data)}
                      <div className={styles.details}>
                        <h5>
                          <a
                            className={styles.poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {data.poster}
                          </a>
                        </h5>
                        <h4>
                          <a
                            className={styles.metadata}
                            href={`https://viewblock.io/arweave/tx/${data.metadata}`}
                          >
                            {data.metadata}
                          </a>
                        </h4>
                        <a href={data.url}>See on Viewblock</a>
                      </div>
                    </div>
                  );

                case "permacast":
                  return (
                    <div className={styles.posts} key={i}>
                      <h3>Permacast</h3>
                      <div className={styles.iframe_container}>
                        <iframe
                          src={`https://permacast-cache.herokuapp.com/embed/${data.eid}`}
                          key={i}
                        ></iframe>
                      </div>
                    </div>
                  );
                case "pianity":
                  return (
                    <div className={styles.posts} key={i}>
                      <h3 className={styles.title}>Pianity</h3>
                      {TimeStamp(data)}
                      <div className={styles.details}>
                        <h4>{data.title}</h4>
                        <h5>
                          <a
                            className={styles.poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {data.poster}
                          </a>
                        </h5>
                        <div className={styles.thumnail}>
                          <iframe
                            src={`https://arweave.net/${data.thumnail}`}
                            key={i}
                          ></iframe>
                        </div>
                        <a href={`https://arweave.net/${data.url}`}>Download</a>
                      </div>
                    </div>
                  );

                default:
                  return <></>;
              }
            })}
        </div>
      </div>
    </>
  );
};

export default Explore;
