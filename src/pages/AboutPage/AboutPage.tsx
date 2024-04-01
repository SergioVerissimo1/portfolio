import Page from "../../components/Page/Page";
import PageTitle from "../../components/PageTitle/PageTitle";
import Skill from "../../components/Skill/Skill";
import Subtitle from "../../components/Subtitle/Subtitle";
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
          <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
              <Subtitle subtitle="Get to know me!" />
              <p className={styles.paragraph}>
                I'm Sérgio Veríssimo, a full-stack Web Developer based in
                Sesimbra, Portugal. I'm passionate about creating beautiful,
                responsive and user-friendly web applications.
              </p>
              <p className={styles.paragraph}>
                I'm always looking for new challenges and opportunities to learn
                and grow. Feel free to explore my work and get in touch with me!
              </p>
            </div>
            <div className={styles.skillsContainer}>
              <Subtitle subtitle="My Skills" />
              <Skill imageSrc="../../../logos-about/react.svg" name="React" />
              <Skill
                imageSrc="../../../logos-about/nextjs.svg"
                name="Next.js"
              />
              <Skill
                imageSrc="../../../logos-about/javascript.svg"
                name="Javascript"
              />
              <Skill
                imageSrc="../../../logos-about/typescript.svg"
                name="Typecript"
              />
              <Skill imageSrc="../../../logos-about/html5.svg" name="HTML5" />
              <Skill imageSrc="../../../logos-about/css3.svg" name="CSS3" />
              {/* <Skill imageSrc="../../../logos-about/bootstrap.svg" name="Bootstrap" /> */}
              <Skill
                imageSrc="../../../logos-about/express.svg"
                name="Express"
              />
              <Skill imageSrc="../../../logos-about/mysql.svg" name="MySQL" />
              <Skill
                imageSrc="../../../logos-about/postgresql.svg"
                name="PostgreSQL"
              />
              <Skill imageSrc="../../../logos-about/git.svg" name="Git" />
              <Skill
                imageSrc="../../../logos-about/aspnet.svg"
                name="ASP.net"
              />
              <Skill
                imageSrc="../../../logos-about/nodejs.svg"
                name="Node.js"
              />
              <Skill
                imageSrc="../../../logos-about/fastify.svg"
                name="Fastify"
              />
              <Skill
                imageSrc="../../../logos-about/adobexd.svg"
                name="Adobe XD"
              />
              <Skill
                imageSrc="../../../logos-about/angular.svg"
                name="Angular"
              />
              <Skill imageSrc="../../../logos-about/csharp.svg" name="C#" />
              <Skill imageSrc="../../../logos-about/agile.svg" name="Agile" />
              <Skill imageSrc="../../../logos-about/ci-cd.svg" name="CI/CD" />
              <Skill imageSrc="../../../logos-about/php.svg" name="PHP" />
              <Skill
                imageSrc="../../../logos-about/flutter.svg"
                name="Flutter"
              />
            </div>
          </div>
        </div>
      }
    />
  );
};
export default AboutPage;
