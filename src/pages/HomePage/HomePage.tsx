import styles from "./HomePage.module.css";
export default function HomePage() {
  return (
    <div
      id="home"
      style={{
        width: "100vw",
        height: "99.9vh",
        textAlign: "center",
        backgroundColor: "darkblue !important"
      }}
    >
      <h1 className={styles.title}>SÉRGIO VERÍSSIMO</h1>
      <h3 className={styles.subtitle}>SOFTWARE ENGINEER, FRONT END & APP DEVELOPER.</h3>
    </div>
  );
}
