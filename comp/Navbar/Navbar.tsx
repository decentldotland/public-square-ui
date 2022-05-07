import styles from "../Navbar/Navbar.module.sass";
import {
  HomeIcon,
  BellIcon,
  UserIcon,
  MoonIcon,
  GlobeIcon,
  SunIcon,
} from "@iconicicons/react";
import Link from "next/link";
import useUITheme from "../../utils/dark_mode";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useUITheme();

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
              <Link href="/">
                <UserIcon className={styles.icon} />
              </Link>
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

            <div className={styles.picture}>
              <Link href="/">
                <div className={styles.profile_div}>
                  <img src="/profile.png" alt="" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
