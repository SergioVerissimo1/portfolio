import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import styles from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <Page
      id="about"
      content={
        <div
          style={
            {
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-between",
            }
          }
        >
          <div>
            <PageTitle title="About Me" />
          </div>
          <div
            style={{
              textAlign: "left",
              width: "60%",
              color: "white",
            }}
          >
            I'm Sérgio Veríssimo, a full-stack developer based in Lisbon,
            Portugal. I'm passionate about creating beautiful, responsive and
            user-friendly web applications. I'm always looking for new
            challenges and opportunities to learn and grow. Feel free to explore
            my work and get in touch with me!
          </div>
        </div>
      }
    />
  );
};
export default AboutPage;
