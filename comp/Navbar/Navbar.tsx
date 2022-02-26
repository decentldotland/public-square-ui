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
import { useState, useEffect } from "react";

const Navbar = () => {
  function toggleDarkMode() {
    if (!window) return;
    setDarkMode((val) => {
      localStorage.setItem("DarkMode", String(!val));
      return !val;
    });
  }

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (!window) return;
    setDarkMode(localStorage.getItem("DarkMode") === "true");
  }, []);

  useEffect(() => {
    if (!window) return;
    if (darkMode) window.document.body.classList.add("DarkMode");
    else window.document.body.classList.remove("DarkMode");
  }, [darkMode]);

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
            <div
              className={styles.icon_div_moon}
              onClick={() => toggleDarkMode()}
            >
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
