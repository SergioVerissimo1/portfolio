import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Page
      id="about"
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
            <PageTitle title="About Me" />
          </div>
        </div>
      }
    />
  );
};
export default AboutPage;
