import { ReactElement } from "react";

const Page = (props: { id: string; content: ReactElement }) => {
  const { id, content } = props;
  return (
    <div
      id={id}
      style={{
        width: "100vw",
        height: "99.9vh",
        textAlign: "center",
      }}
    >
      {content}
    </div>
  );
};
export default Page;
