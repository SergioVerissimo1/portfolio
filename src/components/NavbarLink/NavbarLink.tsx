import styles from "./NavbarLink.module.css";
import { Nav } from "react-bootstrap";
import { useState } from "react";

export default function NavBarLink(props: { name: string; id: string }) {
  const { name, id } = props;
  const [active, setActive] = useState(styles.link);
  return (
    <Nav.Link
      href={id}
      className={active}
      onMouseEnter={() => setActive(styles.link_active)}
      onMouseLeave={() => setActive(styles.link)}
    >
      ./{name}
    </Nav.Link>
  );
}
