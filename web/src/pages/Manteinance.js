import React from "react";
import { useHistory } from "react-router-dom";

const PageManteinance = () => {
  return (
    <>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">AA Lúdica</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              ¡Hola! Estamos trabajando en el nuevo sitio de AA Lúdica. Mientras
              tanto, te dejamos los precios actualizados de nuestros juegos.{" "}
              <br />
              Además, podes seguirnos en{" "}
              <a
                href="https://www.instagram.com/aa.ludica/"
                target="_blank"
                rel="noreferrer"
                style={{ color: "#FFFFFF" }}
              >
                @aa.ludica
              </a>{" "}
              o escribirnos a &nbsp;
              <a
                href="mailto:info@aaludica.com.ar"
                style={{ color: "#FFFFFF" }}
              >
                info@aaludica.com.ar
              </a>
            </p>
          </div>
        </div>
      </header>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/ars_domino.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Ars Domino</h5>
                    $1.600
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    El dominó de las obras de arte.
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/nom_noms.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Nom Noms</h5>
                    $550
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">Gorditos y bonitos.</div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_combo_4444.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">
                      Combo Sucesos Argentinos – Amigos son los amigos{" "}
                    </h5>
                    $3.100
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    4 Volumenes 4: Cambalache y un mate de regalo.
                  </div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_combo_1234.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">
                      Combo Sucesos Argentinos – coleccion completa{" "}
                    </h5>
                    $3.100
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    Volumenes 1,2,3 y 4 y un mate de regalo.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_vol1.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sucesos Argentinos Vol 1</h5>
                    $850
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">"Gobiernos y Conflictos"</div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_vol2.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sucesos Argentinos Vol 2</h5>
                    $850
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">"Economía y Sociedad"</div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_vol3.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sucesos Argentinos Vol 3</h5>
                    $850
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">"Ciencia y Cultura"</div>
                </div>
              </div>
            </div>

            <div className="col mb-5">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src="images/products/sa_vol4.png"
                  alt="..."
                />
                <div className="card-body p-4">
                  <div className="text-center">
                    <h5 className="fw-bolder">Sucesos Argentinos Vol 4</h5>
                    $850
                  </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">"Cambalache"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">2021</p>
        </div>
      </footer>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default PageManteinance;
