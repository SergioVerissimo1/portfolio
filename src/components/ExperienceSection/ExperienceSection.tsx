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
}) => {
  const { title, period, address, website, description, tecnologies } = props;
  const [toggleButton, setToggleButton] = useState<IconDefinition>(faPlus);
  const [open, setOpen] = useState(props.open ?? false);
  return (
    // <Accordion.Item eventKey={eventKey}>
    //   <Accordion.Header className={styles.accordionHeader}>
    //     <div style={{ width: "75%" }}>{title}</div>
    //     <div style={{ width: "25%" }}>{period}</div>
    //   </Accordion.Header>
    //   <Accordion.Body className={styles.accordionBody}>
    //     <div>{description}</div>
    //     <div>
    //       {tecnologies.map((tecnology) => (
    //         <Tag content={tecnology} />
    //       ))}
    //     </div>
    //   </Accordion.Body>
    // </Accordion.Item>
    <div style={{display:"flex", justifyContent: 'center', flexDirection="row"}}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.period}>{period}</div>
        <FontAwesomeIcon
          className={styles.toggleButton}
          icon={toggleButton}
          onClick={() => {
            setToggleButton(toggleButton == faPlus ? faMinus : faPlus);
            setOpen(!open);
          }}
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
          <div>{description}</div>
          {tecnologies.map((tecnology) => (
            <Tag content={tecnology} />
          ))}
        </div>
      </Collapse>
    </div>
  );
};
export default ExperienceSection;
