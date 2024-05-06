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
            title="SocialTravel"
            description="Social network for travelers to share their experiences and travel tips."
            tecnologies={[
              "Angular",
              "ASP.net",
              "SQL Server",
              "Entity Framework",
            ]}
            imageSrc="../../../logos-projects/SocialTravelLaptop.png"
            orientation="left"
          />
          <ProjectSection
            eventKey="1"
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
            imageSrc={
              "../../../logos-projects/ComputerBuddyCompleteLaptop.png" /*[
              "../../../logos-projects/ComputerBuddyCompleteLaptop.png",
              "../../../logos-projects/ComputerBuddyJavaLaptop.png",
            ]*/
            }
            orientation="right"
          />
          <ProjectSection
            eventKey="2"
            title="Localizador de gado"
            description="IoT project to track cattle in real-time using GPS and LoRa technology."
            tecnologies={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "MySQL",
              "AJAX",
              "jQuery",
              "Bootstrap",
              "Express",
              "NodeJS",
            ]}
            imageSrc="../../../logos-projects/LocalizadordeGadoLaptop.png"
            orientation="left"
          />
        </div>
      }
    />
  );
};
export default ProjectsPage;
