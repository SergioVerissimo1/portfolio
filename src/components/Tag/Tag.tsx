import styles from "./Tag.module.css";

const Tag = (props: { content: string }) => {
  const { content } = props;
  return <span className={`badge ${styles.tag}`}>{content}</span>;
};
export default Tag;
