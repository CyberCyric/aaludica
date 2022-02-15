import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";

const ArsLanding = () => {
  const backgroundArs = { backgroundImage: `url(images/ars/bkg-domino.jpg)` };
  return (
    <>
      <div id="LandingPage">
        <div
          className="d-flex landing-ars-section-main align-items-center p-5"
          
        >
          <div className="frase">
            <img
              src="images/ars/logo-arsdomino.png"
              className="img-responsive "
              alt="Pack"
            />
            <h3 className="texto-header-ars mt-5">
              ¡Una colección de arte que cabe en una caja!{" "}
            </h3>
          </div>
          <div>
            <img
              src="images/ars/fichas.png"
              className="img-responsive "
              alt="Pack"
            />{" "}
          </div>
        </div>
        <div class="d-flex justify-content-evenly landing-ars-section-stats pt-5 pb-5">
          <div class="" align="center">
            <span class="stat-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 100-6 3 3 0 000 6zm-5.784 6A2.238 2.238 0 015 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 005 9c-4 0-5 3-5 4s1 1 1 1h4.216zM4.5 8a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h4 class="stat-text  copyico">de 2 a 4 jugadores</h4>{" "}
          </div>
          <div class="" align="center">
            <span class="stat-icon">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M16 8A8 8 0 110 8a8 8 0 0116 0zM8 3.5a.5.5 0 00-1 0V9a.5.5 0 00.252.434l3.5 2a.5.5 0 00.496-.868L8 8.71V3.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
            <h4 class="stat-text  copyico">15-20 minutos </h4>{" "}
          </div>
          <div align="center">
            <div class="stat-text-age">13+</div>
            <h4 class="stat-text copyico">años </h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-ars-section-como pt-5 pb-5" style={backgroundArs}>
          <div className="row bkg-blanco redondeado">
            <div className="box-text-juega">
              <br />
              <br />
              <h1 className="fjalla">¿Cómo se juega? </h1>
              <h3 className="copete">
              Uní las fichas con obras de arte del mismo período.
              </h3>
              <div className="text-center mt-4 iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/yiZBNZm1v24"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
              <p className="texto">
              Ars Domino es un juego para 2 a 4 jugadores, que busca acercar a sus jugadores al mundo del arte mediante las mecánicas de un juego popular: el dominó. Las fichas en este juego representan 7 periodos del arte occidental.
              </p>
              <p className="texto">
              El juego incluye hojas de referencia que pueden ser consultadas durante la partida. Allí vas a encontrar encuentra el periodo correspondiente a cada obra, su nombre y su autor.{" "}
              </p>{" "}
              <br />
              <div class="row">
                <h3 class="copete">Períodos artísticos de la versión "Historia del Arte":</h3>
                <div class="ars-periodos">
                  <div class="periodo-box">
                    <img src="images/ars/antiguedad.png" align="absmiddle" alt="ars Cartas" />
                    <h6>Antigüedad Clásica</h6>
                  </div>
                  <div class="periodo-box">
                    <img src="images/ars/medieval.png" align="absmiddle" alt="ars Cartas" />
                    <h6>Medievalismo Cristiano</h6>
                  </div>
                  <div class="periodo-box">
                    <img src="images/ars/renacimiento.png" align="absmiddle" alt="ars Cartas" />
                    <h6>Renacimiento</h6>
                  </div>
                  <div class="periodo-box">
                    <img src="images/ars/barroco.png" align="absmiddle" alt="ars Cartas" />
                    <h6>Barroco</h6></div>
                    <div class="periodo-box">
                      <img src="images/ars/romanticismo.png" align="absmiddle" alt="ars Cartas" />
                      <h6>Romanticismo</h6></div>
                      <div class="periodo-box"><img src="images/ars/impresionismo.png" align="absmiddle" alt="ars Cartas" /><h6>Impresionismo</h6></div><div class="periodo-box">
                        <img src="images/ars/vanguardias.png" align="absmiddle" alt="ars Cartas" /><h6>Vanguardias</h6></div></div></div>
              <div className="row">
                <div className="col-md-12 cursor" align="center">
                  <a
                    href="pdf/reglamento-ars-domino.pdf"
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
      </div>
    </>
  );
};

export default ArsLanding;
