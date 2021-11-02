import React, { useEffect, useState } from "react";
import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

const SucesosLanding = () => {
  const backgroundSucesos = { backgroundImage: `url(images/bkg-sucesos.jpg)` };
  const backgroundCartas = { backgroundImage: `url(images/cartas1.jpg)` };
  const backgroundPoncho = { backgroundImage: `url(images/bkg_poncho.jpg)` };
  const backgroundApp = { backgroundImage: `url(images/jugando.jpg)` };
  return (
    <>
      <div id="LandingPage">
        <div className="d-flex justify-content-evenly landing-sucesos-section-header">
          <div className="">
            <img
              src="images/logosucesos.png"
              hspace="5"
              className=""
              alt="Logo"
            />
          </div>
          <div className="">
            <h5 className="fjalla mt-5">
              La historia la aprenden los que juegan{" "}
            </h5>
          </div>
        </div>
        <div
          className="d-flex landing-sucesos-section-main align-items-center p-5"
          style={backgroundSucesos}
        >
          <div className="frase">
            <h1 className="fjalla">
              Deslumbrá a tus amigos con tu memoria y aprendé historia argentina
              jugando.{" "}
            </h1>
            <br />{" "}
            <h5 className="copete">
              Un juego donde se pone a prueba tu conocimiento, compitiendo con
              tus amigos por ser el primero en armar en el orden correcto una
              cadena con cartas que describen varios de los hitos de la historia
              de nuestro país.{" "}
            </h5>
          </div>
          <div>
            <img
              src="images/pack_defense.png"
              className="img-responsive pack"
              alt="Pack"
            />{" "}
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-sucesos-section-stats pt-5 pb-5">
          <div className="" align="center">
            <span className="stat-icon">
              <BsFillPeopleFill />
            </span>
            <h4 className="txt-beige fjalla copyico">de 2 a 4 jugadores</h4>{" "}
            <h6 className="txt-beige-sub">
              <sup>(*)</sup> hasta 6 con
              <br /> 2 o más mazos{" "}
            </h6>
          </div>

          <div className="" align="center">
            <span className="stat-icon">
              <BsFillClockFill />
            </span>
            <h4 className="txt-beige fjalla copyico">de 15 a 20 minutos </h4>{" "}
          </div>
          <div align="center">
            <div className="stat-text">10+</div>
            <h4 className="txt-beige fjalla stat-subtext">años </h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-sucesos-section-como pt-5 pb-5">
          <div
            className="row bkg-blanco redondeado backgroundCartas"
            style={backgroundCartas}
          >
            <div className="col-md-9 box-text-juega">
              <br />
              <br />
              <h1 className="fjalla">Cómo se juega? </h1>
              <h3 className="copete">
                Construí la línea de tiempo más extensa que puedas y ganá.
              </h3>
              <br />
              <br />
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
              <div className="row">
                <div
                  className="col-md-12 cursor"
                  align="center"
                  onclick="window.open('downloads/sucesos_reglamento.pdf','_blank')"
                >
                  <h5 className="">
                    <img
                      src="images/pdf.jpg"
                      align="absmiddle"
                      className=""
                      alt="PDF"
                    />{" "}
                    Descargá el reglamento{" "}
                  </h5>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-sucesos-section-volumenes pt-5 pb-5">
          <h1 className="fjalla">Contenido de los volúmenes </h1>
          <p className="">
            Cada Volumen de Sucesos Argentinos trae 75 cartas organizadas
            temáticamente:{" "}
          </p>
          <table className="tabla-sucesos-volumenes">
            <tr>
              <td>
                <img
                  src="images/caja01.jpg"
                  className="img-responsive"
                  alt="Vol1"
                />
              </td>
              <td>
                <img
                  src="images/caja02.jpg"
                  className="img-responsive"
                  alt="Vol2"
                />
              </td>
              <td>
                <img
                  src="images/caja03.jpg"
                  className="img-responsive"
                  alt="Vol3"
                />
              </td>
              <td>
                <img
                  src="images/caja03.jpg"
                  className="img-responsive"
                  alt="Vol4"
                />
              </td>
            </tr>
            <tr>
              <td>
                <h4 className="fjalla">Volumen 1: Gobiernos y Conflictos </h4>
              </td>
              <td>
                <h4 className="fjalla">Volumen 2: Economía y Sociedad </h4>
              </td>
              <td>
                <h4 className="fjalla">Volumen 3: Ciencia y Cultura </h4>
              </td>
              <td>
                <h4 className="fjalla">Volumen 4: Cambalache </h4>
              </td>
            </tr>
            <tr>
              <td>
                El preferido de los historiadores. Incluye cartas como{" "}
                <strong>“El Cruce de los Andes”</strong>,{" "}
                <strong>“Guerra de Malvinas”</strong> y{" "}
                <strong>“Declaración de la Independencia”</strong>.{" "}
              </td>
              <td>
                Los hechos que marcaron la idiosincracia popular, como{" "}
                <strong>“El Cordobazo”</strong>,{" "}
                <strong>“El Pacto de Olivos”</strong> y{" "}
                <strong>“La Inauguración del Primer Ferrocarril”</strong>{" "}
              </td>
              <td>
                ¡Esto también es historia! Incluye eventos como{" "}
                <strong>“Fundación de la UBA”</strong>,{" "}
                <strong>“Invención del by-pass”</strong> y{" "}
                <strong>“Segunda Copa FIFA Argentina”</strong>.{" "}
              </td>
              <td>
                {" "}
                La cultura popular que nos define. Incluye{" "}
                <strong>“Inauguración de Pumper Nic”</strong>,{" "}
                <strong>“Primer vuelo del Pulqui”</strong> y{" "}
                <strong>“Primera ascención al Aconcagua”</strong>.{" "}
              </td>
            </tr>
          </table>
          <div className="d-flex justify-content-center pt-5">
            <div>
              Podés combinar dos o más Volúmenes para agregar variedad al juego
              y ampliar la cantidad de jugadores hasta 6.
            </div>
          </div>
          <div className="d-flex justify-content-center pt-3">
            <Button variant="primary" size="lg">
              Conseguílos en nuestro Catálogo
            </Button>{" "}
          </div>
        </div>
        <div className="landing-sucesos-section-docentes pt-5 pb-5">
          <h1 className="fjalla">Información para docentes </h1>
          <hr className="" />
          <h4 className="copete">
            Sucesos Argentinos como herramienta educativa permite múltiples
            intervenciones a través del juego, todas ellas con potencial de
            provocar aprendizajes significativos.{" "}
          </h4>
          <hr className="" />
          <br />
          <p className="">
            <img src="images/mate.png" className="img-mate" alt="Mate" />
            Pueden trabajarse la temporalidad, la historia comparada y la
            seriación, además de aportar otros aprendizajes asociados a los
            distintos soportes documentales tales como cuadros, fotografías a
            color y blanco y negro, dibujos, que ayudan a situar distintos
            períodos de la histora de acuerdo a como fueron registrados. <br />
            Mediante la utilización de la expansión “Tus Sucesos” puede
            trabajarse la historia personal, la grupalidad, o puede secuenciarse
            un proceso histórico específico no detallado en el juego general
            como por ejemplo, “la Semana de Mayo”.{" "}
          </p>
        </div>
        <div
          className="landing-sucesos-section-poncho pt-4 pb-1 d-flex justify-content-center"
          style={backgroundPoncho}
        >
          <img src="images/poncho.jpg" alt="poncho" />
        </div>
        <div
          className="landing-sucesos-section-app pt-1 pb-1 d-flex justify-content-center"
          style={backgroundApp}
        >
          <section className="app bkg-marron">
            <div className="container lineablanca">
              <h1 className="txt-blanco" align="center">
                &nbsp;&nbsp;——— Además jugalo gratis en tus dispositivos ——{" "}
              </h1>
              <p className="txt-blanco" align="center">
                &nbsp;&nbsp; &nbsp;Podés jugar en tus dispositivos Android la
                versión digital para un sólo jugador.{" "}
              </p>
              <div
                className="box2 redondeado cursor"
                onclick="window.open('https://play.google.com/store/apps/details?id=ar.com.aaludica.SucesosArgentinos','_blank')"
              >
                <div className="row  ">
                  <div className="col-md-5" align="center">
                    <a
                      href="https://play.google.com/store/apps/details?id=ar.com.aaludica.SucesosArgentinos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="images/img01.png"
                        hspace="5"
                        className="img-responsive"
                        alt=""
                      />
                    </a>{" "}
                  </div>
                  <div className="col-md-5" align="center">
                    <a
                      href="https://play.google.com/store/apps/details?id=ar.com.aaludica.SucesosArgentinos"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src="images/img02.png"
                        hspace="5"
                        className="img-responsive"
                        alt=""
                      />
                    </a>{" "}
                  </div>
                  <div className="col-md-2">
                    <div className="" align="center">
                      <br />
                      <a
                        href="https://play.google.com/store/apps/details?id=ar.com.aaludica.SucesosArgentinos"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          src="images/googleplay.jpg"
                          className="img-responsive redondeado"
                          alt=""
                        />
                      </a>
                      <div
                        className="bkg-negro redondeado box txt-blanco"
                        align="center"
                      >
                        <a
                          href="https://play.google.com/store/apps/details?id=ar.com.aaludica.SucesosArgentinos"
                          target="_blank"
                          rel="noreferrer"
                          className="app-download-link"
                        >
                          Descargalo
                        </a>
                      </div>{" "}
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
          </section>
        </div>
      </div>
    </>
  );
};

export default SucesosLanding;
