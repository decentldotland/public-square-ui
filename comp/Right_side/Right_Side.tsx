import { SearchIcon } from "@iconicicons/react";
import styles from "../Right_side/Right_Side.module.sass";
import Image from "next/image";

import Button from "../Button/Button";

const Right_Side = () => {
  return (
    <>
      <div className={styles.right_side}>
        <div className={styles.upper_section}>
          <div className={styles.searcher}>
            <input type="text" placeholder="@username / wallet id" disabled />
            <div className={styles.icon_div}>
              <SearchIcon className={styles.icon} />
            </div>
          </div>
          {/**         <div className={styles.suggestion_section}>
            <div className={styles.title_section}>
              <div className={styles.title}>Suggestions</div>
              <button className={styles.title_button}>See All</button>
            </div>
            <div className={styles.suggestions_div}>
              <div className={styles.suggestion_div}>
                <div className={styles.profile_data}>
                  <div className={styles.profile_div}>
                    <img src="/profile.png" alt="profile-picutre" />
                  </div>
                  <div className={styles.data_users}>
                    <div className={styles.user_name}>Marton Lederer</div>
                    <div className={styles.profile_name}>@martonlederer</div>
                  </div>
                </div>
                <Button outlined>Follow</Button>
              </div>

              <div className={styles.suggestion_div}>
                <div className={styles.profile_data}>
                  <div className={styles.profile_div}>
                    <img src="/profile.png" alt="profile-picutre" />
                  </div>
                  <div className={styles.data_users}>
                    <div className={styles.user_name}>Zsombor Nagy</div>
                    <div className={styles.profile_name}>@zsombinagy</div>
                  </div>
                </div>
                <Button outlined>Follow</Button>
              </div>
            </div>
        </div> **/}
        </div>
        <div className={styles.footer}>
          <div className={styles.left_footer}>
            {/*<a>Terms of Service</a>
            <a>Privacy Policy</a>*/}
          </div>
          <div className={styles.copyright}> &copy; 2021, Public Square</div>
        </div>
      </div>
    </>
  );
};

export default Right_Side;
