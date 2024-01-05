import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const SectionNavSA = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" fixed="top">
    <Container>
      <Navbar.Brand href="#home">
        <img src="./images/banner_sa.png" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">El juego</Nav.Link>
          <Nav.Link href="#link">Descargas</Nav.Link>
          <Nav.Link href="#link">Más información</Nav.Link>
          <Nav.Link href="#link">Comprar</Nav.Link>
          <Nav.Link href="/aa">Otros juegos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>);
};

export default SectionNavSA;
