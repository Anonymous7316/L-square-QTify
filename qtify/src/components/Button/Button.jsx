import styles from "./Button.module.css";

export default function Button(props){
    return(
        <button className={styles.FeedbackBtn}>
            <span className={styles.text}>{props.children}</span>
        </button>
    )
}