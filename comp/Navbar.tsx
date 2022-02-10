import styles from "../styles/Navbar.module.sass";
import { HomeIcon, BellIcon, UserIcon, MoonIcon, GlobeIcon } from "@iconicicons/react"
import Link from "next/link";


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            
            <div className={styles.upper_icons}>
                <div className={styles.icon_div}><Link href="/"><HomeIcon className={styles.icon} /></Link></div>
                <div className={styles.icon_div}><Link href="/"><GlobeIcon className={styles.icon} /></Link></div>
                <div className={styles.icon_div}><Link href="/"><UserIcon className={styles.icon} /></Link></div>
                <div className={styles.icon_div}><Link href="/"><BellIcon className={styles.icon} /></Link></div>

            </div>
            <div className={styles.below_icons}>
                <div className={styles.icon_div}>
                    <Link href="/"><MoonIcon className={styles.icon } /></Link>
                </div>

            </div>
            




        </div>
    )


}

export default Navbar;