import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";

const NomsLanding = () => {
  const backgroundNoms = { backgroundImage: `url(images/noms/bkg-noms.jpg)` };
  return (
    <>
       <div id="LandingPage" style={backgroundNoms}>
        <div
          className="d-flex landing-noms-section-main align-items-center p-5"
          
        >
          <div className="frase">
            <img
              src="images/noms/logo-small.png"
              className="img-responsive "
              alt="Pack"
            />
            <h3 className="texto-header-ars mt-5">
            ¡Gorditos y bonitos!{" "}
            </h3>
          </div>
          <div>
            <img
              src="images/noms/roedores.png"
              className="img-responsive "
              alt="Pack"
            />{" "}
          </div>
        </div>
        <div class="d-flex justify-content-evenly landing-noms-section-stats pt-5 pb-5">
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
            <h4 class="stat-text  copyico">de 2 a 5 jugadores</h4>{" "}
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
            <h4 class="stat-text copyico">10 minutos </h4>{" "}
          </div>
          <div align="center">
            <div class="stat-text-age">6+</div>
            <h4 class="stat-text copyico">años </h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-ars-section-como pt-5 pb-5" >
          <div className="row bkg-blanco redondeado">
            <div className="box-text-juega">
              <br />
              <br />
              <h1 className="fjalla">¿Cómo se juega? </h1>
              <h3 className="copete">
              Roedores hambrientos comen zanahorias, uvas, maíz y bananas....Pero atención, que no coman de más o ¡¡podrían empacharse!! 
              </h3>
              <div className="text-center mt-4 iframe-container">
                <iframe
                  src="https://www.youtube.com/embed/k5M3_-bDgyc"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <br />
              <p className="texto">
              Nom Noms es un juego muy sencillo para disfrutar en familia. Ideal para jugar con los peques..
              </p>
              <p className="texto">
              Se trata de un juego de arriesgar, al estilo Black Jack o 7 y medio, pero con simpáticos roedores que se alimentan.
Cada jugador asume el papel de un roedor que elige entre las cartas disponibles (con maravillosas ilustraciones de Camila Reymundo). Luego se mezcla el mazo de cartas de comida y se lo coloca mirando hacia arriba. La ronda comienza cuando se saca la carta de abajo; una vez sobre la mesa cada jugador decide si continua comiendo o si se planta. Si se planta, apoya su roedor sobre la carta de comida. Si sigue, y la comida se repite… ¡queda indigestado!, y pierde la ronda.
              </p>{" "}
              <br />
              
              <div className="row">
                <div className="col-md-12 cursor" align="center">
                  <a
                    href="pdf/reglamento-nom-noms.pdf"
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

export default NomsLanding;
