import styles from "../Button/Button.module.sass";


export default function Button  ({
    children,
}) {
    return (
        <>
        <div className={styles.button_div} onClick={onclick}>
        <button>{children}</button>
        </div>
        </>
        
    )
}

