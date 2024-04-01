import { Image } from "react-bootstrap";
import styles from "./ProjectSection.module.css";
import Tag from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faMinus,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";

const ProjectSection = (props: {
  eventKey: string;
  title: string;
  description: string;
  tecnologies: string[];
  open?: boolean;
  imageSrc: string;
  orientation: "left" | "right";
  onClick?: (eventKey: string) => void;
}) => {
  const {
    eventKey,
    title,
    description,
    tecnologies,
    open,
    imageSrc,
    orientation,
    onClick,
  } = props;

  const onToggle = () => onClick && onClick(eventKey);

  const image = (
    <Image
      src={imageSrc}
      style={{
        width: "400px",
        height: "400px",
        objectFit: "contain",
      }}
      // rounded
    />
  );

  const content = (
    <div
      style={{
        textAlign: "left",
        marginTop: "10px",
        // marginBottom: "10px",
        width: "85%",
      }}
    >
      <Subtitle subtitle={title} />
      <Text text={description} />
      <div style={{ textAlign: "left", marginTop: "20px" }}>
        {tecnologies.map((tecnology, index) => (
          <Tag key={index} content={tecnology} />
        ))}
      </div>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      {orientation === "left" ? (
        <div className={styles.left}>{content}</div>
      ) : (
        <div className={styles.right}>{image}</div>
      )}
      {orientation === "right" ? (
        <div className={styles.right}>{content}</div>
      ) : (
        <div className={styles.left}>{image}</div>
      )}
    </div>
  );
};
export default ProjectSection;
