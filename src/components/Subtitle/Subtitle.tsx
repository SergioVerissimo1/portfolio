import styles from "./Subtitle.module.css";

export default function Subtitle(props: { subtitle: string }) {
  return <h3 className={styles.subtitle}>{props.subtitle}</h3>;
}
