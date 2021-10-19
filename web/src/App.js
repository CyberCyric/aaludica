import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import PageAboutUs from "./pages/AboutUs";
import PageCatalog from "./pages/Catalog";
import PageDetail from "./pages/Detail";
import PageCart from "./pages/Cart";
import PageAdmProducts from "./pages/AdmProducts";
import CartProvider from "./contexts/CartContext";
import { CartContext } from "./contexts/CartContext";

function App() {
  let cart = useContext(CartContext);
  console.log(cart);
  return (
    <CartProvider>
      <Router>
        <header>
          <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                <Link to="/">
                  <img
                    src="/images/logonavbar.png"
                    className="img-responsive navbar-logo"
                    data-original-title=""
                    alt="logo"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Sobre nosotros</Nav.Link>
                  <NavDropdown title="Nuestros Juegos" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Sucesos Argentinos
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">
                      Ars Domino
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.3">
                      Nom Noms
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#link">Contacto</Nav.Link>
                  <Nav.Link href="#link">Carrito</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <div className="section">
          <div className="">
            <main>
              <Switch>
                <Route exact path="/aboutus">
                  <PageAboutUs />
                </Route>
                <Route exact path="/catalog">
                  <PageCatalog />
                </Route>
                <Route exact path="/detail">
                  <PageDetail />
                </Route>
                <Route exact path="/cart">
                  <PageCart />
                </Route>
                <Route exact path="/admin/products">
                  <PageAdmProducts />
                </Route>

                <Redirect to="/aboutus" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
