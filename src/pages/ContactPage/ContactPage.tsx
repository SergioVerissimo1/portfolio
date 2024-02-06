import Page from "../../components/Page/Page";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  return (
    <Page
      id="contact"
      content={
        <div>
          <p>
            Feel free to contact me by sending me an email and I will get back
            to you as soon as possible.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", width:"300px" }}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
            <FontAwesomeIcon className={styles.icon} icon={faGithub} />
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </div>
        </div>
      }
    />
  );
};
export default ContactPage;
