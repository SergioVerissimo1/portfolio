import Page from '../../components/Page/Page';
import PageTitle from '../../components/PageTitle/PageTitle';
import styles from './ExperiencePage.module.css';
import ExperienceSection from '../../components/ExperienceSection/ExperienceSection';
import { useState } from 'react';

type Keys = '0' | '1' | '2';

const ExperiencePage = () => {
  const [eventKey, setEventKey] = useState<Keys | null>('0');
  const handleOpen = (key: Keys | null) => (eventKey === key ? true : false);
  const handleOnClick = (key: string) => setEventKey(key === eventKey ? null : (key as Keys));

  return (
    <Page
      id="experience"
      content={
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <PageTitle title="Professional Experience" />
          <ExperienceSection
            eventKey="0"
            onClick={handleOnClick}
            open={handleOpen('0')}
            title="Full stack developer & IoT consultant @ Albatroz Digital"
            period="2019 - Present"
            address="Caparica, Portugal"
            website="albatrozdigital.pt"
            description="Developing front-end and mobile app solutions (B2C, B2B) on React/Next.js framework and Flutter SDK."
            imageSrc="../../../logos-experience/albatrozdigital.png"
            tecnologies={[
              'React',
              'Node.js',
              'Javascript',
              'Next.js',
              'Flutter',
              'fastify',
              'PHP',
              'Express.js',
              'TypeScript',
              'kysely',
              'jsonschemas',
              'Dart',
              'PostgresSQL',
              'MySQL',
              'Ant Design',
              'Bootstrap',
              'cPanel',
            ]}
          />
          <ExperienceSection
            eventKey="1"
            onClick={handleOnClick}
            open={handleOpen('1')}
            title="Computer maintenance technician & network manager @ Escola Navegador Rodrigues Soromenho"
            period="2017 - 2017"
            address="Sesimbra, Portugal"
            website="aenrs.pt"
            description="Maintenance and management of computers and networks and customer support."
            imageSrc="../../../logos-experience/aenrs.png"
            tecnologies={[
              'Active Disk Image',
              'iTalc',
              'Teamviewer',
              'Microsoft Office',
              'Windows Installer',
              'Slim Drivers',
            ]}
          />
          <ExperienceSection
            eventKey="2"
            onClick={handleOnClick}
            open={handleOpen('2')}
            title="Computer maintenance technician & developer @ SERROALTO"
            period="2016 - 2016"
            address="Seixal, Portugal"
            website="serroalto.com"
            description="Computer maintenance and customer support."
            imageSrc="../../../logos-experience/serroalto.png"
            tecnologies={[
              'Microsoft Access',
              'Microsoft Office',
              'Acronis',
              'Check Disk',
              'Wamp Server',
              'Crystal Disk',
              'macOS Installer',
            ]}
          />
        </div>
      }
    />
  );
};
export default ExperiencePage;
