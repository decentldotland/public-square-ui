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
import dayjs from "dayjs";
import useUITheme from "../utils/dark_mode";
import Head from "next/head";
import useArConnect from "../utils/arconnect";
import { explorePlatforms } from "../utils/platforms";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { red } from "@mui/material/colors";

const Explore = () => {
  const [darkMode] = useUITheme();
  const [platform, setPlatform] = useState<string>();
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [address] = useArConnect();

  useEffect(() => setPlatform(explorePlatforms[0].val), []);

  useEffect(() => {
    (async () => {
      if (!platform) return;
      setLoading(true);

      if (platform === "permacast") {
        const res = await (
          await fetch(
            "https://whispering-retreat-94540.herokuapp.com/feeds/allcontent"
          )
        ).json();

        setDatas(res.res.slice(0, 15));
      }
      if (
        platform === "ardrive" ||
        platform === "abc" ||
        platform === "mirror"
      ) {
        const res = await (
          await fetch("https://shielded-cove-06097.herokuapp.com/protocols")
        ).json();

        setDatas(res[platform]);
      } else {
        const res = await getWeaveAggregator(platform, address);
        setDatas(res);
      }

      setLoading(false);
    })();
  }, [platform, address]);

  function formatAddress(addr: string, length = 26) {
    if (!addr) return "";

    return (
      addr.substring(0, length / 2) +
      "..." +
      addr.substring(addr.length - length / 2, addr.length)
    );
  }

  function timestamp(timestamp: number = 0) {
    const timeStampLength = timestamp.toString().length;
    const date = new Date(timestamp * Math.pow(10, 13 - timeStampLength));

    return dayjs(date).format("MMM DD, YYYY");
  }

  return (
    <>
      <Head>
        <title>Public Square - Explore</title>
      </Head>
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
            <select onChange={(e) => setPlatform(e.target.value)}>
              {explorePlatforms.map((platform, i) => (
                <option value={platform.val} key={i}>
                  {platform.name}
                </option>
              ))}
            </select>
            Permaweb Explorer
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
                    <div className={styles.arweave_save} key={i}>
                      <div className={styles.save_data}>
                        <img
                          src={darkMode ? "/arweave_dark.png" : "/arweave.png"}
                          alt="arweave"
                        />
                        <div className={styles.texts}>
                          <h1>{data.title}</h1>
                          <a href={data.url}>{formatAddress(data.url)}</a>
                        </div>
                      </div>
                      <a
                        href={`https://arweave.net/${data.sid}`}
                        className={styles.link_icon}
                      >
                        <ShareIcon />
                      </a>
                    </div>
                  );

                case "koii":
                  return (
                    <div className={styles.posts} key={i}>
                      <div className={styles.titles}>
                        <p className={styles.nft_title}>{data.title}</p>
                        <p className={styles.else}>NFT</p>
                      </div>
                      <div className={styles.details_1}>
                        <p className={styles.else}>{data.ticker}</p>
                        <p>
                          <a
                            className={styles.nft_poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {formatAddress(data.poster, 10)}
                          </a>
                        </p>
                      </div>
                      <p className={styles.post_content}>{data.description}</p>
                      <div className={styles.img_div}>
                        <img src={`https://arweave.net/${data.id}`} alt="" />
                      </div>
                    </div>
                  );

                case "ardrive":
                  return (
                    <div className={styles.arweave_save} key={i}>
                      <div className={styles.save_data}>
                        <img src="/ardrive.png" alt="ardrive" />
                        <div className={styles.texts}>
                          <h1>{formatAddress(data.metadata)}</h1>
                          <a
                            href={`https://viewblock.io/arweave/tx/${data.metadata}`}
                          >
                            {timestamp(data.timestamp)}
                          </a>
                        </div>
                      </div>
                      <a href={data.url} className={styles.link_icon}>
                        <ShareIcon />
                      </a>
                    </div>
                  );

                case "permacast":
                  return (
                    <div className={styles.iframe_container} key={i}>
                      <iframe
                        src={`https://whispering-retreat-94540.herokuapp.com/embed/${data.eid}`}
                        key={i}
                      ></iframe>
                    </div>
                  );
                case "pianity":
                  return (
                    <div className={styles.posts} key={i}>
                      <div className={styles.titles}>
                        <p className={styles.nft_title}>{data.title}</p>
                        <p>
                          <h1 className={styles.timestamp}>
                            {timestamp(data.timestamp)}
                          </h1>
                        </p>
                      </div>
                      <div className={styles.details_1}>
                        <p>
                          <a href={`https://arweave.net/${data.url}`}>
                            Download
                          </a>
                        </p>
                        <p>
                          <a
                            className={styles.nft_poster}
                            href={`https://viewblock.io/arweave/address/${data.poster}`}
                          >
                            {formatAddress(data.poster, 5)}
                          </a>
                        </p>
                      </div>
                      <div className={styles.details}>
                        <div className={styles.thumnail}>
                          <iframe
                            src={`https://arweave.net/${data.thumnail}`}
                            key={i}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  );

                case "lens":
                  if (!data?.profile?.url || !data?.metadata?.content)
                    return <></>;

                  return (
                    <div className={styles.posts} key={i}>
                      <div className={styles.upper_post}>
                        <a
                          className={styles.profile_datas}
                          href={data.profile.url}
                          rel="noopener noreferer"
                          target="_blank"
                        >
                          <div className={styles.profile_div}>
                            <img
                              src={
                                data.profile.pfp
                                  ? data.profile.pfp
                                  : "profile.png"
                              }
                            />
                          </div>
                          <div className={styles.data_user}>
                            <div className={styles.profile_name}>
                              @{data.profile.handle}
                            </div>
                          </div>
                        </a>
                        <div className={styles.right_section}>
                          <div className={styles.time}>
                            {timestamp(new Date(data.createdAt).getTime())}
                          </div>
                        </div>
                      </div>
                      <div className={styles.post_content}>
                        <ReactMarkdown
                          className={styles.post_content}
                          children={data.metadata.content}
                          remarkPlugins={[remarkGfm]}
                        />
                        {data.metadata.media.map((media: any, i: number) => {
                          if (media.original.mimeType.includes("image")) {
                            return <img src={media.original.url} alt="" />;
                          } else {
                            return (
                              <video muted={true} autoPlay>
                                <source
                                  src={media.original.url}
                                  type={media.original.mimeType}
                                />
                              </video>
                            );
                          }
                        })}
                      </div>
                    </div>
                  );
                case "ans-cache":
                  return (
                    <div className={styles.posts} key={i}>
                      <div className={styles.upper_post}>
                        <a
                          className={styles.profile_datas}
                          href={`https://${data.currentlabel}.ar.page`}
                          rel="noopener noreferer"
                          target="_blank"
                        >
                          <div className={styles.left_section}>
                            <div className={styles.profile_div}>
                              {data.avatar ? (
                                <img
                                  className={styles.ans_cache_avatar}
                                  style={{ color: `${data.address_color}` }}
                                  src={`https://arweave.net/${data.avatar}`}
                                />
                              ) : (
                                <div
                                  style={{
                                    color: `${data.address_color}`,
                                    background: `${data.address_color}`,
                                  }}
                                  className={styles.instead_of_avatar}
                                ></div>
                              )}
                            </div>
                            <div className={styles.data_user}>
                              <div className={styles.profile_name}>
                                @{data.currentLabel}
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className={styles.right_section}>
                          <p>
                            <a
                              className={styles.nft_poster}
                              href={`https://viewblock.io/arweave/address/${data.user}`}
                            >
                              {formatAddress(data.user, 10)}
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className={styles.post_content}>{data.bio}</div>
                    </div>
                  );
                case "mirror":
                  return (
                    <div className={styles.arweave_save} key={i}>
                      <div className={styles.save_data}>
                        <img
                          className={styles.cover_img}
                          src={data.cover_img}
                          alt="cover_img"
                        />
                        <div className={styles.texts}>
                          <a href={`https://arweave.net/${data.bid}`}>
                            <h1>{data.title}</h1>
                          </a>
                          <p className={styles.timestamp}>
                            {timestamp(data.timestamp)}
                          </p>
                        </div>
                      </div>
                      <a href={data.mirror_url} className={styles.link_icon}>
                        <ShareIcon />
                      </a>
                    </div>
                  );

                case "abc":
                  console.log(data);
                  return (
                    <div className={styles.posts} key={i}>
                      <div className={styles.titles}>
                        <p className={styles.nft_title}>{data.title}</p>
                        <p className={styles.else}>NFT</p>
                      </div>
                      <div className={styles.details_1}>
                        <p className={styles.else}>{data.ticker}</p>
                        <p>
                          <a
                            className={styles.nft_poster}
                            href={`https://viewblock.io/arweave/address/${data.creator}`}
                          >
                            {timestamp(data.timestamp)}
                          </a>
                        </p>
                      </div>
                      <p className={styles.post_content}>{data.desc}</p>
                      <div className={styles.img_div}>
                        {<img src={data.image} alt="" />}
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
