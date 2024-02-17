import { Accordion } from "react-bootstrap";
import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./ExperiencePage.module.css";
import { Tag } from "antd";
import ExperienceSection from "../../components/ExperienceSection/ExperienceSection";

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
          <PageTitle title="Professional Experience" />
          <Accordion defaultActiveKey="0" className={styles.accordion}>
            <ExperienceSection
              eventKey="0"
              open={true}
              title="Full stack developer @ Albatroz Digital"
              period="2017 - Present"
              address="Caparica, Portugal"
              website="albatrozdigital.pt"
              description="Developing front-end and mobile app solutions (B2C, B2B) in Travel Tech on React/Next.js framework and Flutter SDK."
              tecnologies={[
                "React",
                "NodeJS",
                "Javascript",
                "NextJS",
                "Flutter",
                "PHP",
                "ExpressJS",
                "TypeScript",
                "kysely",
                "jsonschemas",
                "Dart",
                "PostgresSQL",
                "MySQL",
              ]}
            />
            <ExperienceSection
              eventKey="1"
              title="Computer maintenance technician and network manager @ Escola Navegador Rodrigues Soromenho"
              period="2017 - 2017"
              address="Sesimbra, Portugal"
              website="aenrs.pt"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              tecnologies={[
                "Active Disk Image",
                "iTalc",
                "Teamviewer",
                "Microsoft Office",
                "Windows Installer",
                "Slim Drivers",
              ]}
            />
            <ExperienceSection
              eventKey="2"
              title="Computer maintenance technician and developer @ SERROALTO"
              period="2016 - 2016"
              address="Seixal, Portugal"
              website="serroalto.com"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              tecnologies={[
                "Microsoft Access",
                "Microsoft Office",
                "Acronis",
                "Check Disk",
                "Wamp Server",
                "Crystal Disk",
                "macOS Installer",
              ]}
            />
          </Accordion>
        </div>
      }
    />
  );
};
export default ExperiencePage;
