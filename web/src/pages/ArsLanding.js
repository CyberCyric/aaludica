import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";

const ArsLanding = () => {
  const backgroundars = { backgroundImage: `url(images/ars/bkg-domino.jpg)` };
  return (
    <>
      <div id="LandingPage " style={backgroundars}>
        <div className="d-flex landing-ars-section-main align-items-center p-5">
          <div className="frase">
            <img
              src="images/ars/logo-arsdomino.png"
              hspace="5"
              className="logo-ars"
              alt="Logo"
            />
            <br />{" "}
            <h5 className="texto-header-ars mt-5">
              ¡Una colección de arte que cabe en una caja!{" "}
            </h5>
          </div>
          <div>
            <img
              src="images/ars/caja-arsdomino.png"
              className="img-responsive pack"
              alt="Pack"
            />{" "}
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-ars-section-stats pt-5 pb-5">
          <div className="" align="center">
            <span className="stat-icon">
              <BsFillPeopleFill />
            </span>
            <h4 className="stat-text  copyico">de 2 a 4 jugadores</h4>{" "}
          </div>

          <div className="" align="center">
            <span className="stat-icon">
              <BsFillClockFill />
            </span>
            <h4 className="stat-text  copyico">15-20 minutos </h4>{" "}
          </div>
          <div align="center">
            <div className="stat-text-age">13+</div>
            <h4 className="stat-text copyico">años </h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-ars-section-como pt-5 pb-5">
          <div className="row bkg-blanco redondeado backgroundCartas">
            <div className="col-md-12 box-text-juega">
              <br />
              <br />
              <h1 className="">¿Cómo se juega? </h1>
              <h3 className="copete">
                Uní las fichas con obras de arte del mismo período.
              </h3>
              <br />
              <img
                src="images/ars/fichas.png"
                align="absmiddle"
                className="ars-fichas"
                alt="ars Cartas"
              />
              <p className="texto">
                La dinámica del juego es muy simple, primero repartimos una
                carta a cada jugador, con la cual iniciará su línea de tiempo y
                luego en el pozo sumaremos las misma cantidad de cartas que de
                jugadores, adicionando una extra o sea que si son 4 jugadores,
                en el pozo pondremos 5 cartas. La carta sobrante al finalizar la
                ronda se descarta.{" "}
              </p>
              <p className="texto">
                El jugador que inicia elige una de las cartas del pozo, y la
                ubica a la izquierda o a la derecha de su carta inicial, según
                la cronología de los sucesos, y así sucesivamente cada jugador
                va construyendo su línea de tiempo, hasta que se completan 5
                cartas en orden correcto, si más de un jugador lo logra, ellos
                desempatan hasta que sólo quede un ganador.{" "}
              </p>{" "}
              <br />
              <br />
              <br />
              <br />
              <div className="row">
                <h3 className="copete">
                  Períodos artísticos de la versión "Historia del Arte":
                </h3>
                <div className="ars-periodos">
                  <div className="periodo-box">
                    <img
                      src="images/ars/antiguedad.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Antigüedad Clásica</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/medieval.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Medievalismo Cristiano</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/renacimiento.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Renacimiento</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/barroco.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Barroco</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/romanticismo.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Romanticismo</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/impresionismo.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Impresionismo</h6>
                  </div>
                  <div className="periodo-box">
                    <img
                      src="images/ars/vanguardias.png"
                      align="absmiddle"
                      alt="ars Cartas"
                    />
                    <h6>Vanguardias</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <a href="pdf/reglamento-ars-domino.pdf" target="_blank">
                  <h5 className="">
                    <img
                      src="images/pdf.jpg"
                      align="absmiddle"
                      className=""
                      alt="PDF"
                    />
                    <br /> Descargá el reglamento{" "}
                  </h5>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArsLanding;
