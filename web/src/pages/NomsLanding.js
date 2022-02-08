import { BsFillPeopleFill, BsFillClockFill } from "react-icons/bs";

const NomsLanding = () => {
  const backgroundNoms = { backgroundImage: `url(images/noms/bkg-noms.jpg)` };
  return (
    <>
      <div id="LandingPage">
        <div className="d-flex justify-content-evenly landing-noms-section-header">
          <div className="">
            <img
              src="images/noms/logo-nomnoms.png"
              hspace="5"
              className="logo-noms"
              alt="Logo"
            />
          </div>
          <div className="">
            <h5 className="texto-header-noms mt-5">¡Gorditos y bonitos! </h5>
          </div>
        </div>
        <div
          className="d-flex landing-noms-section-main align-items-center p-5"
          style={backgroundNoms}
        >
          <div className="frase">
            <h1 className="">
              Roedores hambrientos comen zanahorias, uvas, maíz y bananas....{" "}
            </h1>
            <br />{" "}
            <h5 className="copete">
              Pero atención, que no coman de más o ¡¡podrían empacharse!! Nom
              Noms es un juego muy sencillo para disfrutar en familia. Ideal
              para jugar con los peques..{" "}
            </h5>
          </div>
          <div>
            <img
              src="images/noms/cartas.png"
              className="img-responsive pack"
              alt="Pack"
            />{" "}
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-noms-section-stats pt-5 pb-5">
          <div className="" align="center">
            <span className="stat-icon">
              <BsFillPeopleFill />
            </span>
            <h4 className="  copyico">de 2 a 5 jugadores</h4>{" "}
          </div>

          <div className="" align="center">
            <span className="stat-icon">
              <BsFillClockFill />
            </span>
            <h4 className="  copyico">10 minutos </h4>{" "}
          </div>
          <div align="center">
            <div className="stat-text">6+</div>
            <h4 className="  stat-subtext">años </h4>
          </div>
        </div>
        <div className="d-flex justify-content-evenly landing-noms-section-como pt-5 pb-5">
          <div className="row bkg-blanco redondeado backgroundCartas">
            <div className="col-8 box-text-juega">
              <br />
              <br />
              <h1 className="">¿Cómo se juega? </h1>
              <h3 className="copete">
                Construí la línea de tiempo más extensa que puedas y ganá.
              </h3>
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
              <div className="row text-center">
                <a href="pdf/reglamento-nom-noms.pdf" target="_blank">
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
            <div className="col-4"><iframe width="560" height="315" src="https://www.youtube.com/embed/k5M3_-bDgyc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NomsLanding;
