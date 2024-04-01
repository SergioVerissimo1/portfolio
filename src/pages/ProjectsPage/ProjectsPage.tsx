import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import ProjectSection from "../../components/ProjectSection/ProjectSection";
import Text from "../../components/Text/Text";
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
          <PageTitle title="Projects" />
          <Text text="Here you will find some of my projects that I have created over the years" />
          <ProjectSection
            eventKey="0"
            title="Computer Buddy"
            description="Website for a computer store and back-office inventory and order management software."
            tecnologies={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "MySQL",
              "PHP",
              "Materialize",
              "Bootstrap",
              "jQuery",
              "AJAX",
              "Java FX",
            ]}
            imageSrc="../../../logos-projects/computer-buddy.png"
            orientation="left"
          />
        </div>
      }
    />
  );
};
export default ProjectsPage;
