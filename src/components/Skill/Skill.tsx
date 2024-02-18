import styles from "./Skill.module.css";
import { Image } from "react-bootstrap";

const Skill = (props: { name: string; imageSrc: string }) => {
  const { name, imageSrc } = props;
  return (
    <div
      style={{
        textAlign: "right",
        marginTop: "10px",
        // marginBottom: "10px",
        width: "15%",
      }}
    >
      <Image
        src={imageSrc}
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
        rounded
      />
      <p>{name}</p>
    </div>
  );
};
export default Skill;
