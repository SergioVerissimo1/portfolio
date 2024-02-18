import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import Skill from "../../components/Skill/Skill";
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
          <div style={{ display: "flex", flexDirection: "row", width: "80vw" }}>
            <div
              style={{
                textAlign: "left",
                width: "50%",
                color: "white",
                fontFamily: "MyWebFont",
              }}
            >
              I'm Sérgio Veríssimo, a full-stack developer based in Lisbon,
              Portugal. I'm passionate about creating beautiful, responsive and
              user-friendly web applications. I'm always looking for new
              challenges and opportunities to learn and grow. Feel free to
              explore my work and get in touch with me!
            </div>
            <div
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className={styles.skillsRow}>
                <Skill imageSrc="../../../logos-about/react.svg" name="React" />
                <Skill
                  imageSrc="../../../logos-about/javascript.svg"
                  name="Javascript"
                />
                <Skill imageSrc="../../../logos-about/html5.svg" name="HTML5" />
                <Skill imageSrc="../../../logos-about/css3.svg" name="CSS3" />
                <Skill imageSrc="../../../logos-about/postman.svg" name="Postman" />
              </div>
              <div className={styles.skillsRow}>
                {/* <Skill imageSrc="../../../logos-about/bootstrap.svg" name="Bootstrap" />
              <Skill imageSrc="../../../logos-about/nodejs.svg" name="Node.js" />
              <Skill imageSrc="../../../logos-about/express.svg" name="Express" /> */}
                <Skill imageSrc="../../../logos-about/mysql.svg" name="MySQL" />
                <Skill
                  imageSrc="../../../logos-about/postgresql.svg"
                  name="PostgreSQL"
                />
                <Skill imageSrc="../../../logos-about/git.svg" name="Git" />
                <Skill
                  imageSrc="../../../logos-about/nextjs.svg"
                  name="Next.js"
                />
              </div>
              <div className={styles.skillsRow}>
                <Skill
                  imageSrc="../../../logos-about/adobexd.svg"
                  name="Adobe XD"
                />
                <Skill imageSrc="../../../logos-about/agile.svg" name="Agile" />
                <Skill imageSrc="../../../logos-about/php.svg" name="PHP" />
                <Skill imageSrc="../../../logos-about/flutter.svg" name="Flutter" />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};
export default AboutPage;
