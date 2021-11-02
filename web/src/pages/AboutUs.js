import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useHistory } from "react-router-dom";

const PageAboutUs = () => {
  const history = useHistory();
  const backgroundImageStyle = {
    /*
    backgroundImage: `url(images/bkg-fade.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    */
  };
  const boxSucesosStyle = {
    backgroundImage: `url(images/bkg-sucesos.jpg)`,
  };
  const boxArsDominoStyle = {
    backgroundImage: `url(images/bkg-domino.jpg)`,
  };
  const boxNomNomsStyle = {
    backgroundImage: `url(images/bkg-noms.jpg)`,
  };

  const routeChangeSucesos = () => {
    let path = "sucesosargentinos";
    history.push(path);
  };

  const routeChangeNoms = () => {
    let path = "nomnoms";
    history.push(path);
  };

  return (
    <>
      <div id="AboutUsPage" style={backgroundImageStyle}>
        <div className="container-fluid second text-center">
          <div className="row mt-5  text-center">
            <div className="main-txt">
              <span className="salutation">¡Hola!</span> Somos AA L&uacute;dica,
              una editorial argentina de juegos dedicada a crear experiencias
              l&uacute;dicas que generen aprendizajes significativos y amenos.{" "}
              <br />
              <br /> Nacimos como el proyecto de un grupo de amigos que buscaba
              utilizar su hobbie para generar nuevas herramientas educativas.
              <br /> <br /> Nuestros juegos son diseñados y testeados por
              profesionales de la educación, integrando el contenido educativo
              con mecánicas de juegos de mesa modernos y clásicos.
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <Carousel fade controls={false} interval={4000} pause={false}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/slider/01.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/slider/02.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="images/slider/03.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4" align="center">
              <div className="team-member">
                <img
                  alt=""
                  className="mx-auto rounded-circle"
                  src="images/guido.jpg"
                />
                <p className="text-muted">Guido D. Cegarra</p>
              </div>
            </div>
            <div className="col-md-4" align="center">
              <div className="team-member">
                <img
                  alt=""
                  className="mx-auto rounded-circle"
                  src="images/santiago.jpg"
                />
                <p className="text-muted">Santiago Rodríguez</p>
              </div>
            </div>
            <div className="col-md-4" align="center">
              <div className="team-member">
                <img
                  alt=""
                  className="mx-auto rounded-circle"
                  src="images/juan.jpg"
                />
                <p className="text-muted">Juan Manuel Domínguez</p>
              </div>
            </div>
          </div>
          <div className="container-fluid second text-center">
            <div className="row mt-5">
              <div className="highlight">
                Creemos en el balance entre la diversión y el aprendizaje, para
                que los juegos "dejen algo", pero que además sean desafiantes y
                divertidos.{" "}
              </div>
              <div className="highlight  hidden-xs">
                Buscamos que los jugadores tomen decisiones relevantes y se
                sientan involucrados durante la partida, haciendo que la
                estrategia y el conocimiento sean igual de importantes.{" "}
              </div>
              <div className="highlight  hidden-xs">
                Nos esforzamos para crear juegos que sean a la vez llamativos y
                ricos en contenido, para que los jugadores, además de pasarla
                bien, adquieran conocimientos, o refuercen los conocimientos
                previos.{" "}
              </div>
              <div className="highlight  hidden-xs">yada yada yada </div>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12" align="center">
              <h1 className="title-txt">&#8212; Nuestros juegos &#8212;</h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row box-juegos">
            <div
              className="col-md-4 gameBox"
              style={boxSucesosStyle}
              onClick={routeChangeSucesos}
            >
              <div className="logo-sucesos" align="center">
                <img
                  alt=""
                  src="images/logo-sucesos.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-sucesos">
                <h3 className="fjalla">
                  Deslumbrá a tus amigos con tu memoria y aprendé historia
                  argentina jugando.{" "}
                </h3>
              </div>
              <img
                alt=""
                src="images/caja-sucesos.png"
                className="img-responsive about-game"
              />
            </div>
            <div className="col-md-4 gameBox" style={boxArsDominoStyle}>
              <div className="logo-arsdomino" align="center">
                <img
                  alt=""
                  src="images/logo-arsdomino.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-arsdomino">
                <h3 className="fjalla">
                  ¡Una colección de arte que cabe en una caja!
                </h3>
              </div>
              <img
                alt=""
                src="images/caja-arsdomino.png"
                className="img-responsive about-game"
              />
            </div>

            <div
              className="col-md-4 gameBox"
              style={boxNomNomsStyle}
              onClick={routeChangeNoms}
            >
              <div className="logo-nomnoms" align="center">
                <img
                  alt=""
                  src="images/logo-nomnoms.png"
                  className="img-responsive"
                />
              </div>
              <div className="tagline-nomnoms">
                <h3 className="verdegorditos">
                  Un juego de riesgos en el que tratás de convertirte en el
                  roedor más gordito de todos sin empacharte.{" "}
                </h3>
              </div>
              <img
                alt=""
                src="images/caja-nomnoms.png"
                className="img-responsive about-game"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAboutUs;
