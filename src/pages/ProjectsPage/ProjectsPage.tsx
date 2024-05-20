import { Fade } from 'react-awesome-reveal';
import Page from '../../components/Page/Page';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Text from '../../components/Text/Text';
import styles from './ProjectsPage.module.css';

const ProjectsPage = () => {
  return (
    <Page
      id="projects"
      content={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <PageTitle title="Projects" />
          <Text text="Here you will find some of my projects that I have created over the years" />
          <Fade cascade damping={0.1} fraction={0.3}>
            <ProjectSection
              eventKey="0"
              title="Território Participado"
              description="Its a web based platform that allows the local authorities to streamline the processes for handling incidents reported by citizens, 
            significantly reducing response times and bringing people closer to the institutions."
              tecnologies={['React', 'Typescript', 'Postgres SQL', 'Fastify', 'Node.js', 'Next.js', 'Ant Design']}
              imageSrc="../../../logos-projects/TerritorioParticipadoLaptop.png"
              orientation="left"
            />
            <ProjectSection
              eventKey="1"
              title="SocialTravel"
              description="Social network for travelers to share their experiences and travel tips."
              tecnologies={['Angular', 'ASP.net', 'SQL Server', 'Entity Framework']}
              imageSrc="../../../logos-projects/SocialTravelLaptop.png"
              orientation="right"
            />
            <ProjectSection
              eventKey="2"
              title="Computer Buddy"
              description="Website for a computer store and back-office inventory and order management software."
              tecnologies={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'MySQL',
                'PHP',
                'Materialize',
                'Bootstrap',
                'jQuery',
                'AJAX',
                'Java FX',
              ]}
              imageSrc="../../../logos-projects/ComputerBuddyCompleteLaptop.png"
              orientation="left"
            />
            <ProjectSection
              eventKey="3"
              title="Localizador de gado"
              description="IoT project to track cattle in real-time using GPS and LoRa technology."
              tecnologies={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'MySQL',
                'AJAX',
                'jQuery',
                'Bootstrap',
                'Express',
                'Node.js',
              ]}
              imageSrc="../../../logos-projects/LocalizadordeGadoLaptop.png"
              orientation="right"
            />
            <ProjectSection
              eventKey="4"
              title="Feed"
              description="Software solution to help automate orders of restaurants in large commercial centers."
              tecnologies={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'MySQL',
                'AJAX',
                'jQuery',
                'Bootstrap',
                'Express',
                'Node.js',
                'Arduino',
              ]}
              imageSrc="../../../logos-projects/FeedLaptop.png"
              orientation="left"
            />
            <ProjectSection
              eventKey="5"
              title="Classroom Manager"
              description="Software to manage classroom access, attendance registration, and access to the computers in the rooms of the Polytechnic Institute of Setúbal."
              tecnologies={[
                'HTML5',
                'CSS3',
                'JavaScript',
                'MySQL',
                'AJAX',
                'jQuery',
                'Bootstrap',
                'Express',
                'Node.js',
              ]}
              imageSrc="../../../logos-projects/ClassroomManagerLaptop.png"
              orientation="right"
            />
          </Fade>
        </div>
      }
    />
  );
};
export default ProjectsPage;
