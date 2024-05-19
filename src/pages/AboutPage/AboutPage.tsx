import Page from '../../components/Page/Page';
import PageTitle from '../../components/PageTitle/PageTitle';
import Skill from '../../components/Skill/Skill';
import Subtitle from '../../components/Subtitle/Subtitle';
import styles from './AboutPage.module.css';

const AboutPage = () => {
  return (
    <Page
      id="about"
      content={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <PageTitle title="About Me" />
          </div>
          <div className={styles.aboutContainer}>
            <div className={styles.textContainer}>
              <Subtitle subtitle="Get to know me!" />
              <p className={styles.paragraph}>
                I'm an enthusiastic full stack developer with a passion for creating seamless web experiences.
              </p>
              <p className={styles.paragraph}>
                Proficient in both front-end and back-end technologies, I'm constantly eager to learn and grow in this
                dynamic field.
              </p>
              <p className={styles.paragraph}>
                Solving complex problems and delivering top-notch solutions drive my dedication.
              </p>
              <p className={styles.paragraph}>Let's collaborate and build something remarkable together.</p>
            </div>
            <div className={styles.skillsContainer}>
              <Subtitle subtitle="My Skills" />
              <Skill imageSrc="../../../logos-about/react.svg" name="React" />
              <Skill imageSrc="../../../logos-about/nextjs.svg" name="Next.js" />
              <Skill imageSrc="../../../logos-about/javascript.svg" name="Javascript" />
              <Skill imageSrc="../../../logos-about/typescript.svg" name="Typecript" />
              <Skill imageSrc="../../../logos-about/html5.svg" name="HTML5" />
              <Skill imageSrc="../../../logos-about/css3.svg" name="CSS3" />
              {/* <Skill imageSrc="../../../logos-about/bootstrap.svg" name="Bootstrap" /> */}
              <Skill imageSrc="../../../logos-about/express.svg" name="Express" />
              <Skill imageSrc="../../../logos-about/mysql.svg" name="MySQL" />
              <Skill imageSrc="../../../logos-about/postgresql.svg" name="PostgreSQL" />
              <Skill imageSrc="../../../logos-about/git.svg" name="Git" />
              <Skill imageSrc="../../../logos-about/aspnet.svg" name="ASP.net" />
              <Skill imageSrc="../../../logos-about/nodejs.svg" name="Node.js" />
              <Skill imageSrc="../../../logos-about/fastify.svg" name="Fastify" />
              <Skill imageSrc="../../../logos-about/adobexd.svg" name="Adobe XD" />
              <Skill imageSrc="../../../logos-about/angular.svg" name="Angular" />
              <Skill imageSrc="../../../logos-about/csharp.svg" name="C#" />
              <Skill imageSrc="../../../logos-about/agile.svg" name="Agile" />
              <Skill imageSrc="../../../logos-about/ci-cd.svg" name="CI/CD" />
              <Skill imageSrc="../../../logos-about/php.svg" name="PHP" />
              <Skill imageSrc="../../../logos-about/flutter.svg" name="Flutter" />
              <Skill imageSrc="../../../logos-about/antdesign.svg" name="Ant Design" />
            </div>
          </div>
        </div>
      }
    />
  );
};
export default AboutPage;
