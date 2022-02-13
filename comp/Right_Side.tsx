import { SearchIcon} from "@iconicicons/react"
import styles from "../styles/Right_Side.module.sass"
import Image from "next/image"

const Right_Side = () => {
    return (
        <>
            <div className={styles.right_side}>
                <div className={styles.searcher}>
                    <form >
                        <input 
                        type="text"
                        placeholder="@username / wallet id / community"
                        />
                    </form>
                    <div className={styles.icon_div}>
                        <SearchIcon className={styles.icon} />
                    </div>    
                </div>
                <div className={styles.suggestion_section}>
                    <div className={styles.title}>
                        Suggestion
                    </div>
                    <div className={styles.button}>
                        <button>See All</button>
                    </div>
                    <div className={styles.suggestions_div}>
                        <div className={styles.suggestion_div}>
                            <div className={styles.profile_div}>
                                <Image
                                    width="100%"
                                    height="100%"
                                    src="/profile.jpg"
                                    alt="profile-picutre"
                                />
                            </div>
                            <div className={styles.user_name}>
                                Marton Lederer
                            </div>
                            <div className={styles.profile_name}>
                                @martonlederer
                            </div>
                            <div className={styles.button_div}>
                                <button>Follow</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footer}>
                    <a>Terms of Service</a>
                    <a>Privacy Policy</a>
                    <p> &copy;2021,Argora</p>
                </div>

            </div>
        
        
        </>
    )
    
}

export default Right_Side;