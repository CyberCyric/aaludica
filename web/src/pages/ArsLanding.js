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
              src="images/ars/fichas.png"
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
            <div className="row box-text-juega">
              <br />
              <br />
              <div className="col-8">
              <h1 className="">¿Cómo se juega? </h1>
              <h3 className="copete">
                Uní las fichas con obras de arte del mismo período.
                </h3>
                <p className="texto">
                Ars Domino es un juego para 2 a 4 jugadores, que busca acercar a sus jugadores al mundo del arte mediante las mecánicas de un juego popular: el dominó. Las fichas en este juego representan 7 periodos del arte occidental.{" "}
              </p>
              <p className="texto">
              El juego incluye hojas de referencia que pueden ser consultadas durante la partida. Allí vas a encontrar encuentra el periodo correspondiente a cada obra, su nombre y su autor. {" "}
              </p>{" "}
                </div>
                <div className="col-4">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/yiZBNZm1v24" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
              <div className="mt-5 mb-5"></div>
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
              <div className="row text-center">
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
