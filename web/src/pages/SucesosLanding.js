import React from "react";
import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";

const SucesosLanding = () => {
  const backgroundSucesos = {
    backgroundImage: `url(images/sucesos/bkg.jpg)`,
  };
  const backgroundPoncho = {
    backgroundImage: `url(images/sucesos/bkg_poncho.jpg)`,
  };
  const backgroundApp = { backgroundImage: `url(images/sucesos/jugando.jpg)` };
  return (
    <>
      <div id="LandingPage">
        <div className="d-flex justify-content-evenly landing-sucesos-section-header">
          <div className="">
            <img
              src="images/sucesos/logo-sucesos-blanco.png"
              hspace="5"
              className=""
              alt="Logo"
            />
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
              ¡Poné a prueba tu conocimiento! Competí con tus amigos por ser el
              primero en armar la mayor línea de tiempo de sucesos políticos,
              económicos y populares de nuestro país.{" "}
            </h5>
          </div>
          <div>
            <img
              src="images/sucesos/cartas1.png"
              className="img-responsive "
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
          <div className="row bkg-blanco redondeado">
            <div className="box-text-juega">
              <br />
              <br />
              <h1 className="fjalla">¿Cómo se juega? </h1>
              <h3 className="copete">
                Construí la línea de tiempo más extensa que puedas y ganá.
              </h3>
              <div className="text-center mt-4 iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/8WPA2OZRm9M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
              <p className="texto">
                La dinámica del juego es muy simple: primero repartimos una
                carta a cada jugador que iniciará su línea de tiempo y luego en
                el centro de la mesa colocaremos la misma cantidad de cartas que
                de jugadores, adicionando una extra.{" "}
              </p>
              <p className="texto">
                El jugador que inicia elige una de las cartas del pozo, y la
                ubica a la izquierda o a la derecha de su carta inicial, según
                la cronología de los sucesos. El jugador que logre armar la
                línea de tiempo más larga sin equivocarse, será el ganador.{" "}
              </p>{" "}
              <br />
              <br />
              <div className="row">
                <div className="col-md-12 cursor" align="center">
                  <a
                    href="pdf/reglamento-sucesos-argentinos-3ed.pdf"
                    target="_blank"
                  >
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
        
        <div className="landing-sucesos-section-volumenes pt-5 pb-5">
          <h1 className="fjalla">Contenido de los volúmenes </h1>
          <p className="">
            Cada Volumen de Sucesos Argentinos trae 75 cartas organizadas
            temáticamente:{" "}
          </p>

          <div className="container">
            <div className="row">
            <div class="col-3">
              <img
                src="images/sucesos/vol01.jpg"
                className="img-fluid"
                alt="Vol1"
              />
              <h4 className="fjalla">Volumen 1: Gobiernos y Conflictos </h4>
              <div>
                {" "}
                El preferido de los historiadores. Incluye cartas como{" "}
                <i>“El Cruce de los Andes”</i>,{" "}
                <i>“Guerra de Malvinas”</i> y{" "}
                <i>“Declaración de la Independencia”</i>{" "}
              </div>
            </div>

            <div class="col-3">
              <img
                src="images/sucesos/vol02.jpg"
                className="img-fluid"
                alt="Vol2"
              />
              <h4 className="fjalla">Volumen 2: Economía y Sociedad </h4>
              <div>
                {" "}
                Los hechos que marcaron la idiosincracia popular, como{" "}
                <i>“El Cordobazo”</i>,{" "}
                <i>“El Pacto de Olivos”</i> y{" "}
                <i>“La Inauguración del Primer Ferrocarril”</i>{" "}
              </div>
            </div>

            <div className="col-3">
                <img
                        src="images/sucesos/vol03.jpg"
                        className="img-fluid"
                        alt="Vo3"
                      />
                      <h4 className="fjalla">Volumen 3: Ciencia y Cultura </h4>
                      <div>¡Esto también es historia! Incluye eventos como{" "}
                <i>“Fundación de la UBA”</i>,{" "}
                <i>“Invención del by-pass”</i> y{" "}
                <i>“Segunda Copa FIFA Argentina”</i>.{" "}</div>
                </div>

                <div className="col-3">
                <img
                        src="images/sucesos/vol04.jpg"
                        className="img-fluid"
                        alt="Vol4"
                      />
                      <h4 className="fjalla">Volumen 4: Cambalache </h4>
                      <div>La cultura popular que nos define. Incluye{" "}
                <i>“Inauguración de Pumper Nic”</i>,{" "}
                <i>“Primer vuelo del Pulqui”</i> y{" "}
                <i>“Primera ascención al Aconcagua”</i>.{" "}</div>
                </div>

                </div>
          </div>

          <div className="d-flex justify-content-center pt-5">
            <div>
              Podés combinar dos o más Volúmenes para agregar variedad al juego
              y ampliar la cantidad de jugadores hasta 6.
            </div>
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
            <img
              src="images/sucesos/combo-123.png"
              className="img-mate"
              alt="Mate"
            />
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
          <img src="images/sucesos/poncho.jpg" alt="poncho" className="img-fluid"/>
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
                        src="images/sucesos/app01.png"
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
                        src="images/sucesos/app02.png"
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
                          src="images/sucesos/googleplay.jpg"
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
