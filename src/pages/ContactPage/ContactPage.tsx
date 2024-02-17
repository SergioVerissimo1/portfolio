import Page from "../../components/Page/Page";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ContactPage.module.css";
import PageTitle from "../../components/PageTitle/PageTitle";

const ContactPage = () => {
  const redirectTo = (url: string) => window.open(url, "_blank");
  return (
    <Page
      id="contact"
      content={
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <PageTitle title="Contact" />
          </div>
          <div style={{width: '1000px'}}>
            <p className={styles.subtitle}>
              Feel free to contact me by sending me an email and I will get back
              to you as soon as possible.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "300px",
              alignItems: "center",
              marginTop: "120px",
            }}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={faLinkedin}
              onClick={() =>
                redirectTo(
                  "https://www.linkedin.com/in/s%C3%A9rgio-ver%C3%ADssimo-1bb652192/"
                )
              }
            />
            <FontAwesomeIcon
              className={styles.icon}
              icon={faGithub}
              onClick={() => redirectTo("https://github.com/SergioVerissimo1")}
            />
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
          </div>
        </div>
      }
    />
  );
};
export default ContactPage;
