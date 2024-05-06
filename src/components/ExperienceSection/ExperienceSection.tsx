import { Collapse, Image } from "react-bootstrap";
import styles from "./ExperienceSection.module.css";
import Tag from "../Tag/Tag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faMinus,
  faSquareArrowUpRight,
} from "@fortawesome/free-solid-svg-icons";
import { redirectTo } from "../../utils";

const ExperienceSection = (props: {
  eventKey: string;
  title: string;
  period: string;
  address: string;
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
    period,
    address,
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
      <div className={styles.header} onClick={onToggle}>
        <div className={styles.title}>{title}</div>
        <div className={styles.period}>{period}</div>
        <div className={styles.toggleButtonDiv}>
          <FontAwesomeIcon
            className={styles.toggleButton}
            icon={open ? faMinus : faPlus}
            onClick={onToggle}
          />
        </div>
      </div>
      <Collapse in={open} timeout={2000}>
        <div className={styles.body}>
          <div style={{ display: "flex" }}>
            <div style={{ marginRight: "22px" }}>
              <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />
              <span>{address}</span>
            </div>
            <div>
              <FontAwesomeIcon
                className={styles.icon}
                icon={faSquareArrowUpRight}
              />
              <span
                className={styles.website}
                onClick={() => redirectTo(`https://www.${website}`)}
              >
                {website}
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.textDiv}>{description}</div>
            <div className={styles.imageDiv}>
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
          </div>
          <div style={{ textAlign: "left", marginTop: "20px" }}>
            {tecnologies.map((tecnology, index) => (
              <Tag key={index} content={tecnology} />
            ))}
          </div>
        </div>
      </Collapse>
    </div>
  );
};
export default ExperienceSection;
