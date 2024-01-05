import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";

const ContentAA = () => {
  return (
    <div className="contentContainer">
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        className="navbarHeader"
      >
        <Container>
          <Navbar.Brand href="/aa" className="m-auto">
            <img src="./images/logo_aa.png" alt="logo" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link
              href="https://www.instagram.com/aa.ludica/?hl=es"
              target="_blank"
            >
              <img src="./images/icon_ig.png" alt="instagram" />
            </Nav.Link>
            <Nav.Link href="">
              <img src="./images/icon_wa.png" alt="whatsapp" />
            </Nav.Link>
            <Nav.Link href="#email">
              <img src="./images/icon_email.png" alt="email" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="containerWithNavbar">
        <Row lg={3}>
          <Col className="d-flex">
            <Card className="productCard">
              <Card.Img variant="top" src="images/thumb_sa.png" />
              <Card.Body className="text-center">
                <img src="images/titulo_sa.png" alt="titulo"></img>
                <Card.Text>
                  Un juego donde se pone a prueba tu conocimiento, compitiendo
                  con tus amigos por ser el primero en armar en una línea de
                  tiempo con cartas que describen varios de los hitos de la
                  historia de nuestro país.
                </Card.Text>
                <Button variant="danger">Comprar</Button>
                <Button variant="warning" className="m-2" href="/sa">
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="productCard">
              <Card.Img variant="top" src="images/thumb_ad.png" />
              <Card.Body className="text-center">
                <img src="images/titulo_ad.png" alt="titulo"></img>
                <Card.Text>
                  Ars Domino te permite conocer algunas de las obras más
                  importantes del arte universal de forma amena. Utiliza las
                  reglas del dominó tradicional, pero para poder jugar tus
                  fichas tendrás que saber a qué período pertenecen.
                </Card.Text>{" "}
                <span className="divAgotado">SIN STOCK</span>
                <Button variant="warning" className="m-2" href="/ad">
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="d-flex">
            <Card className="productCard">
              <Card.Img variant="top" src="images/thumb_nn.png" />
              <Card.Body className="text-center">
                <img src="images/titulo_nn.png" alt="titulo"></img>
                <Card.Text>
                  Un juego de riesgos en el que tratás de convertirte en el
                  roedor más gordito de todos. Pero cuidado, comer mucho de la
                  misma comida te pueda caer mal.
                </Card.Text>{" "}
                <Button variant="danger">Comprar</Button>
                <Button variant="warning" className="m-2" href="/nn">
                  Ver más
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default ContentAA;
