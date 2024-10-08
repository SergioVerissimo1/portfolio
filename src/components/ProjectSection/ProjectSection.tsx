import { Image } from "react-bootstrap";
import styles from "./ProjectSection.module.css";
import Tag from "../Tag/Tag";
import Subtitle from "../Subtitle/Subtitle";
import Text from "../Text/Text";

const ProjectSection = (props: {
  eventKey: string;
  title: string;
  description: string;
  tecnologies: string[];
  open?: boolean;
  imageSrc: string | string[];
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

  const images =
    imageSrc instanceof Array ? (
      <div
        style={{
          display: "flex",
          alignContent: "space-between",
          flexDirection: "column",
          width: `${100 / imageSrc.length}%`,
        }}
      >
        {imageSrc.map((iSrc) => (
          <Image
            src={iSrc}
            className={styles.image}
            // rounded
          />
        ))}
      </div>
    ) : (
      <Image
        src={imageSrc}
        className={styles.image}
        // rounded
      />
    );

  const content = (
    <div className={styles.content}>
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
    <div className={styles.body}>
      {orientation === "left" ? (
        <div className={styles.textDiv} style={{ left: 0 }}>
          {content}
        </div>
      ) : (
        <div className={styles.imageDiv}>{images}</div>
      )}
      {orientation === "right" ? (
        <div className={styles.textDiv} style={{ right: 0 }}>
          {content}
        </div>
      ) : (
        <div className={styles.imageDiv}>{images}</div>
      )}
    </div>
  );
};
export default ProjectSection;
