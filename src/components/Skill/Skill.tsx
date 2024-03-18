import { Image } from "react-bootstrap";
import styles from "./Skill.module.css";

const Skill = (props: { name: string; imageSrc: string }) => {
  const { name, imageSrc } = props;
  return (
    <div className={styles.skill}>
      <Image src={imageSrc} className={styles.logo} rounded />
      <p className={styles.name}>{name}</p>
    </div>
  );
};
export default Skill;
