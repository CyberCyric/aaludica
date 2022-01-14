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
import SucesosLanding from "./pages/SucesosLanding";
import ArsLanding from "./pages/ArsLanding";
import NomsLanding from "./pages/NomsLanding";
import { HiShoppingCart, HiMail } from "react-icons/hi";
import PageContact from "./pages/Contact";
import PageManteinance from "./pages/Manteinance";

function App() {
  let cart = useContext(CartContext);
  return (
    <CartProvider>
      <Router>
        {
          <header> 
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
              <Container>
                <Navbar.Brand href="/aboutus">
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
                      <Nav.Link href="/manteinance">Sobre nosotros</Nav.Link>
                      <NavDropdown
                        title="Nuestros juegos"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item href="/manteinance">
                          Sucesos Argentinos
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/manteinance">
                          Ars Domino
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/manteinance">
                          Nom Noms
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="/manteinance">Catálogo</Nav.Link>
                    </Nav>
                    <Nav>
                      <Nav.Link href="/manteinance">
                        <HiShoppingCart />
                      </Nav.Link>
                      <Nav.Link href="/manteinance">
                        <HiMail />
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                }
              </Container>
            </Navbar>
          </header>
        }
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
                <Route exact path="/sucesosargentinos">
                  <SucesosLanding />
                </Route>
                <Route exact path="/arsdomino">
                  <ArsLanding />
                </Route>
                <Route exact path="/nomnoms">
                  <NomsLanding />
                </Route>
                <Route exact path="/contact">
                  <PageContact />
                </Route>
                <Route exact path="/manteinance">
                  <PageManteinance />
                </Route>

                <Redirect to="/manteinance" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
