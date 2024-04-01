import { ReactElement } from "react";

const Page = (props: { id: string; content: ReactElement }) => {
  const { id, content } = props;
  return (
    <section
      id={id}
      style={{
        width: "99.1vw",
        // height: "100vh",
        textAlign: "center",
        // border: "1px solid blue",
        paddingTop: "80px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 100,
      }}
    >
      {content}
    </section>
  );
};
export default Page;
