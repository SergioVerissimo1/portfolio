import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./ExperiencePage.module.css";

const ExperiencePage = () => {
  return (
    <Page
      id="experience"
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
            <PageTitle title="Experience" />
          </div>
        </div>
      }
    />
  );
};
export default ExperiencePage;
