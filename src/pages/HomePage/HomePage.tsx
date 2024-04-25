import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Page from "../../components/Page/Page";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const HomePage = () => (
  <Page
    id="home"
    content={
      <div>
        <h1 className={styles.title}>
          SÉRGI
          <span
            onDoubleClick={(e) => {
              e.preventDefault;
              // console.log("HELLO");
            }}
          >
            O
          </span>{" "}
          VERÍSSIMO
        </h1>
        <h3 className={styles.subtitle}>
          <ReactTyped
            strings={["SOFTWARE ENGINEER, FRONT END AND APP DEVELOPER."]}
            typeSpeed={100}
            cursorChar="/"
            startWhenVisible
          />
        </h3>

        <OverlayTrigger
          placement="top"
          offset={[0, 10]}
          overlay={
            <Tooltip placement="top" className={styles.tooltip}>
              <strong>AVAILABLE SOON!</strong>
            </Tooltip>
          }
        >
          <button className={styles.button}>
            <FontAwesomeIcon className={styles.icon} icon={faDownload} />
            RESUME
          </button>
        </OverlayTrigger>
      </div>
    }
  />
);

export default HomePage;
