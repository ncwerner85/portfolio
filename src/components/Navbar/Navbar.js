import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


function Navs() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand href="#home">Nicholas Werner</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about_me">About Me</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navs;
