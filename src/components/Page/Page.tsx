import { ReactElement } from 'react';
import styles from './Page.module.css';

const Page = (props: { id: string; content: ReactElement; css?: boolean }) => {
  const { id, content, css } = props;
  return (
    <section
      id={id}
      style={{
        width: '99.1vw',
        // height: "100vh",
        minHeight: '100vh',
        textAlign: 'center',
        // border: "1px solid blue",
        // paddingTop: "80px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 100,
      }}
      className={css == undefined || css ? styles.page : undefined}
    >
      {content}
    </section>
  );
};
export default Page;
