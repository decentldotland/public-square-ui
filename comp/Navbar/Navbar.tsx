import styles from "../Navbar/Navbar.module.sass";
import {
  HomeIcon,
  BellIcon,
  UserIcon,
  MoonIcon,
  GlobeIcon,
  SunIcon,
  LogOutIcon,
  LogInIcon,
} from "@iconicicons/react";
import Link from "next/link";
import useUITheme from "../../utils/dark_mode";
import useArConnect from "../../utils/arconnect";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useUITheme();
  const [address, connect, disconnect] = useArConnect();

  const [ans, setAns] = useState<Record<string, any>>();

  useEffect(() => {
    (async () => {
      if (!address) return;
      const res = await (
        await fetch(`https://ans-testnet.herokuapp.com/profile/${address}`)
      ).json();

      setAns(res);
    })();
  }, [address]);

  return (
    <>
      <div className={styles.navbar_div}>
        <div className={styles.navbar}>
          <div className={styles.upper_icons}>
            <div className={styles.icon_div}>
              <Link href="/">
                <HomeIcon className={styles.icon} />
              </Link>
            </div>
            <div className={styles.icon_div}>
              <Link href="/">
                <GlobeIcon className={styles.icon} />
              </Link>
            </div>
            {/**<div className={styles.icon_div}>
              <Link href="/notifications">
                <BellIcon className={styles.icon} />
              </Link>
  </div>**/}
            <div className={styles.icon_div}>
              <a onClick={address ? disconnect : connect}>
                {/*<UserIcon className={styles.icon} />*/}
                {address ? (
                  <LogOutIcon className={styles.icon} />
                ) : (
                  <LogInIcon className={styles.icon} />
                )}
              </a>
            </div>
          </div>
          <div className={styles.below_icons}>
            <div
              className={styles.icon_div_moon}
              onClick={() => toggleDarkMode()}
            >
              {!darkMode && <MoonIcon className={styles.icon} />}
              {darkMode && <SunIcon className={styles.icon} />}
            </div>

            {address && (
              <div className={styles.picture}>
                <a
                  href={
                    ans?.currentLabel
                      ? `https://${ans.currentLabel}.ar.page`
                      : undefined
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className={styles.profile_div}>
                    <img
                      src={
                        ans?.avatar
                          ? `https://arweave.net/${ans.avatar}`
                          : "/profile.png"
                      }
                      alt=""
                    />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
