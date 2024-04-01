import { Collapse, Image } from "react-bootstrap";
import styles from "./ProjectSection.module.css";
import Tag from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faMinus,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { redirectTo } from "../../utils";
import Subtitle from "../Subtitle/Subtitle";

const ProjectSection = (props: {
  eventKey: string;
  title: string;
  website: string;
  description: string;
  tecnologies: string[];
  open?: boolean;
  imageSrc: string;
  onClick?: (eventKey: string) => void;
}) => {
  const {
    eventKey,
    title,
    website,
    description,
    tecnologies,
    open,
    imageSrc,
    onClick,
  } = props;

  const onToggle = () => onClick && onClick(eventKey);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Subtitle subtitle={title} />
      <div
        style={{
          textAlign: "left",
          marginTop: "10px",
          // marginBottom: "10px",
          width: "85%",
        }}
      >
        {description}
      </div>
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
      </div>

      <div style={{ textAlign: "left", marginTop: "20px" }}>
        {tecnologies.map((tecnology, index) => (
          <Tag key={index} content={tecnology} />
        ))}
      </div>
    </div>
  );
};
export default ProjectSection;
