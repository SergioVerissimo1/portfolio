import { Anchor, ConfigProvider } from "antd";
import HomePage from "../../pages/HomePage/HomePage";
import styles from "./Navbar.module.css";
import ContactPage from "../../pages/ContactPage/ContactPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ExperiencePage from "../../pages/ExperiencePage/ExperiencePage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

export default function NavBar() {
  return (
    <div style={{ backgroundColor: "#282c34" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Anchor
          style={{
            fontWeight: "bold",
            marginTop: "20px",
          }}
          direction="horizontal"
          affix={true}
          // showInkInFixed={true}
          targetOffset={500}
          items={[
            {
              key: "home",
              href: "#home",
              title: "// home",
            },
            {
              key: "about",
              href: "#about",
              title: "// about me",
            },
            {
              key: "projects",
              href: "#projects",
              title: "// projects",
            },
            {
              key: "experience",
              href: "#experience",
              title: "// experience",
            },
            {
              key: "contact",
              href: "#contact",
              title: "// contact",
            },
          ]}
        />
      </div>
      <div>
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
        <ContactPage />
      </div>
    </div>
  );
}
