import { Anchor, ConfigProvider } from "antd";
import HomePage from "../../pages/HomePage/HomePage";
import styles from "./Navbar.module.css";
import ContactPage from "../../pages/ContactPage/ContactPage";
import AboutPage from "../../pages/AboutPage/AboutPage";
import ExperiencePage from "../../pages/ExperiencePage/ExperiencePage";
import ProjectsPage from "../../pages/ProjectsPage/ProjectsPage";

export default function NavBar() {
  return (
    <div className={styles.body}>
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        {/* <ConfigProvider
          theme={{
            token: {
              // Seed Token

              colorText: "white",
              fontSize: 24,
            },
          }}
        > */}
        <Anchor
          className={styles.navbar}
          direction="horizontal"
          affix={true}
          // showInkInFixed={true}
          offsetTop={100}
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
        {/* </ConfigProvider> */}
      </div>
      <div>
        <HomePage/>
        <AboutPage />
        <ProjectsPage />
        <ExperiencePage />
        <ContactPage />
      </div>
    </div>
  );
}
