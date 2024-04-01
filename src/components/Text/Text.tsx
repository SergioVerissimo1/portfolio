import styles from "./Text.module.css";

export default function Text(props: { text: string }) {
  return <p className={styles.text}>{props.text}</p>;
}
