import Page from "../../components/Page/Page";
import styles from "./HomePage.module.css";

const HomePage = () => (
  <Page
    id="home"
    content={
      <div>
        <h1 className={styles.title}>SÉRGIO VERÍSSIMO</h1>
        <h3 className={styles.subtitle}>
          SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.
        </h3>
      </div>
    }
  />
);

export default HomePage;
