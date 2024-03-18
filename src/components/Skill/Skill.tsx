import { Image } from "react-bootstrap";

const Skill = (props: { name: string; imageSrc: string }) => {
  const { name, imageSrc } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      <Image
        src={imageSrc}
        style={{
          width: "50px",
          height: "50px",
          objectFit: "contain",
        }}
        rounded
      />
      <p
        style={{
          color: "white",
          fontFamily: "MyWebFont",
          textAlign: "center",
        }}
      >
        {name}
      </p>
    </div>
  );
};
export default Skill;
