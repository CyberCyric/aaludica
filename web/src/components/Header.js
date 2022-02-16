import React,{ useContext } from "react";
import { Navbar, Container, Nav, NavDropdown, Button  } from "react-bootstrap";
import { HiShoppingCart, HiMail } from "react-icons/hi";
import { CartContext } from "../contexts/CartContext";
import {
    Link
  } from "react-router-dom";

const Header = () => {
    let cart = useContext(CartContext);
    return (
        <header> 
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Container>
                <Navbar.Brand>
                  <Link to="/">
                    <img
                      src="/images/aa-logo-navbar.png"
                      className="img-responsive navbar-logo"
                      data-original-title=""
                      alt="logo"
                    />
                    <div className="tagline-txt"><span className="logo-txt">AA Lúdica </span>Juegos de Mesa</div>
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                {
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      {/* 
                      <NavDropdown
                        title="Sobre nosotros"
                        id="basic-nav-dropdown2"
                      >
                        <NavDropdown.Item href="/aboutus">
                          Institucional
                        </NavDropdown.Item>
                        
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/manteinance">
                          Instagram
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/manteinance">
                          El Mapa de AA Lúdica
                        </NavDropdown.Item>
                        
                      </NavDropdown>
                      <NavDropdown
                        title="Nuestros juegos"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="/sucesosargentinos">
                          Sucesos Argentinos
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/arsdomino">
                          Ars Domino
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/nomnoms">
                          Nom Noms
                        </NavDropdown.Item>
                      </NavDropdown>
                      */}
                      <Nav.Link href="/catalog">Catálogo</Nav.Link>
                    </Nav>
                    <Nav>
                      <Button variant="secondary" className="navbar_button">
                        <Nav.Link href="/cart">
                          <HiShoppingCart /> 
                          {cart.items.length>0 && <span className="badge bg-danger">{cart.items.length}</span> }
                        </Nav.Link>
                      </Button>
                      <Button variant="secondary" className="navbar_button">
                        <Nav.Link href="/contact">
                          <HiMail /> 
                        </Nav.Link>
                      </Button>
                    </Nav>
                  </Navbar.Collapse>
                }
              </Container>
            </Navbar>
          </header>
    );
};

export default Header;
