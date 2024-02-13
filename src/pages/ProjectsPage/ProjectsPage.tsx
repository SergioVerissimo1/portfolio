import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./ProjectsPage.module.css";

const ProjectsPage = () => {
  return (
    <Page
      id="projects"
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
            <PageTitle title="Projects" />
          </div>
        </div>
      }
    />
  );
};
export default ProjectsPage;
