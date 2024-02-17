import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Page from "../../components/Page/Page";
import styles from "./HomePage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactTyped } from "react-typed";

const HomePage = () => (
  <Page
    id="home"
    content={
      <div>
        <h1 className={styles.title}>SÉRGIO VERÍSSIMO</h1>
        <h3 className={styles.subtitle}>
          SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
        </h3>
         <ReactTyped
            className={styles.subtitle}
            strings={["SOFTWARE ENGINEER, FRONT END AND APP DEVELOPER."]}
            typeSpeed={100}
            cursorChar="/"
            startWhenVisible
          />
        <button className={styles.button}><FontAwesomeIcon className={styles.icon} icon={faDownload} />RESUME</button>
      </div>
    }
  />
);

export default HomePage;
