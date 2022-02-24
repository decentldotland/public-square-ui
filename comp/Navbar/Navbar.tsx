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

const Navbar = () => {
  return (
    <>
      <div className={styles.navbar_div}>
      <nav className={styles.navbar}>
        <div className={styles.upper_icons}>
          <div className={styles.icon_div}>
            <Link href="/">
              <HomeIcon className={styles.icon} />
            </Link>
          </div>
          <div className={styles.icon_div}>
            <Link href="/explore">
              <GlobeIcon className={styles.icon} />
            </Link>
          </div>
          <div className={styles.icon_div}>
            <Link href="/notifications">
              <BellIcon className={styles.icon} />
            </Link>
          </div>
          <div className={styles.icon_div}>
            <Link href="/user">
              <UserIcon className={styles.icon} />
            </Link>
          </div>
        </div>
        <div className={styles.below_icons}>
          <div className={styles.icon_div_moon}>
              <MoonIcon className={styles.icon} />
          </div>
        
        <div className={styles.picture}>
          <Link href="/user">
            <div className={styles.profile_div}>
              <img src="/profile.png" alt="" />
            </div>
          </Link>
        </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;
