import styles from './Navbar.module.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import NavBarLink from '../NavbarLink/NavbarLink';

export default function NavBar() {
  return (
    <Navbar /*expand="lg"*/ /*fixed="top"*/ className={styles.navbar}>
      <div className={styles.navbarRow}>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarToggle}/> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        {/* <Nav className="m-auto"> */}
        <NavBarLink name="Home" id="#home" />
        <NavBarLink name="About" id="#about" />
        <NavBarLink name="Experience" id="#experience" />
        <NavBarLink name="Projects" id="#projects" />
        <NavBarLink name="Contact" id="#contact" />
        {/* </Nav> */}
        {/* </Navbar.Collapse> */}
      </div>
    </Navbar>
  );
}
