import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import Header from "./components/Header";
import PageAboutUs from "./pages/AboutUs";
import PageCatalog from "./pages/Catalog";
import PageDetail from "./pages/Detail";
import PageCart from "./pages/Cart";
import PageAdmProducts from "./pages/AdmProducts";
import CartProvider from "./contexts/CartContext";
import SucesosLanding from "./pages/SucesosLanding";
import ArsLanding from "./pages/ArsLanding";
import NomsLanding from "./pages/NomsLanding";
import PageContact from "./pages/Contact";
import PageManteinance from "./pages/Manteinance";

function App() {
  return (
    <CartProvider>
      <Router>
        {
          <Header />
        }
        <div className="section">
          <div className="">
            <main>
              <Switch>
                <Route exact path="/aboutus">
                  <PageAboutUs />
                </Route>
                <Route exact path="/catalog/:categoryId">
                  <PageCatalog />
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

                <Redirect to="/catalog" />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
