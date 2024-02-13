import styles from "./PageTitle.module.css";

const PageTitle = (props: { title: string }) => {
  const { title } = props;
  return <h1 className={styles.title}>{title}</h1>;
};
export default PageTitle;
