import { Anchor, ConfigProvider } from "antd";
import HomePage from "../../pages/HomePage/HomePage";
import styles from "./Navbar.module.css";

export default function NavBar() {
  return (
    <div className={styles.body}>
      <div
        style={{ padding: "20px", display: "flex", justifyContent: "center" }}
      >
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
             
              colorText:"white",
              fontSize: 24,
            },
          }}
        >
          <Anchor
            // className={styles.navbar}
            style={{ color: "white", width: "100vw", }}
            direction="horizontal"
            affix={true}
            // showInkInFixed={true}
            items={[
              {
                key: "home",
                href: "#home",
                title: "// home",
              },
              {
                key: "expertise",
                href: "#expertise",
                title: "// expertise",
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
        </ConfigProvider>
      </div>
      <div>
        <HomePage />

        <div
          id="expertise"
          style={{
            width: "100vw",
            height: "99.9vh",
            textAlign: "center",
          }}
        />
        <div
          id="experience"
          style={{
            width: "100vw",
            height: "99.9vh",
            textAlign: "center",
          }}
        />
        <div
          id="contact"
          style={{
            width: "100vw",
            height: "99.9vh",
            textAlign: "center",
          }}
        />
      </div>
    </div>
  );
}
