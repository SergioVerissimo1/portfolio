import { Collapse } from "react-bootstrap";
import styles from "./ExperienceSection.module.css";
import Tag from "../Tag/Tag";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPlus,
  faMinus,
  faSquareArrowUpRight,
  IconDefinition,
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
    onClick,
  } = props;
  const [toggleButton, setToggleButton] = useState<IconDefinition>(faPlus);
  // const [open, setOpen] = useState(props.open ?? false);
  const onToggle = () => {
    setToggleButton(toggleButton === faPlus ? faMinus : faPlus);
    // setOpen(!open);
    if (onClick) onClick(eventKey);
  };
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
        <FontAwesomeIcon
          className={styles.toggleButton}
          icon={toggleButton}
          onClick={onToggle}
        />
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
          <div
            style={{
              textAlign: "left",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            {description}
          </div>
          <div style={{ textAlign: "left" }}>
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
