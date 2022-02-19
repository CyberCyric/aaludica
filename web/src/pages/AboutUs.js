import React from "react";
import AboutUsCarousel from "../components/AboutUsCarousel";
import { useHistory } from "react-router-dom";

const PageAboutUs = () => {
  const history = useHistory();
  const boxSucesosStyle = {
    backgroundImage: `url(images/sucesos/bkg.jpg)`,
  };
  const boxArsDominoStyle = {
    backgroundImage: `url(images/ars/bkg-domino.jpg)`,
  };
  const boxNomNomsStyle = {
    backgroundImage: `url(images/noms/bkg-noms.jpg)`,
  };

  const routeChangeSucesos = () => {
    let path = "sucesosargentinos";
    history.push(path);
  };

  const routeChangeArsDomino = () => {
    let path = "arsdomino";
    history.push(path);
  };

  const routeChangeNoms = () => {
    let path = "nomnoms";
    history.push(path);
  };

  return (
    <>
      <div id="AboutUsPage" className="container">
        <div className="container-fluid second text-center">
          <div className="row mb-4 text-center">
            <div className="main-txt p-4">
              <strong>¡Bienvenidos!</strong> Somos AA L&uacute;dica,
              una editorial argentina de juegos dedicada a crear experiencias
              l&uacute;dicas que generen aprendizajes significativos y amenos.{" "}
            </div>
          </div>
          <div className="carousel-container">
            <AboutUsCarousel />
          </div>
          <div className="row mt-5">
            <div className="about_us_team_members">
                <img
                  alt=""
                  className="mx-auto img-fluid"
                  src="images/integrantes/guido.png"
                />
                <img
                  alt=""
                  className="mx-auto img-fluid"
                  src="images/integrantes/santiago.png"
                />
                <img
                  alt=""
                  className="mx-auto img-fluid"
                  src="images/integrantes/juan.png"
                />
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
        <div className="container-fluid p-5">
          <div className="row gameBox " style={boxSucesosStyle} onClick={routeChangeSucesos}>
                <img
                  alt=""
                  src="images/sucesos/logo-small-sucesos.png"
                  className="img-responsive"
                />
            </div>

            <div className="row gameBox" style={boxArsDominoStyle} onClick={routeChangeArsDomino}>
                <img
                  alt=""
                  src="images/ars/logo-small.png"
                  className="img-responsive"
                />
             </div>

            <div className="row gameBox" style={boxNomNomsStyle} onClick={routeChangeNoms}>
                <img
                  alt=""
                  src="images/noms/logo-small.png"
                  className="img-responsive "
                />
            </div>
          </div>
        </div>
    </>
  );
};

export default PageAboutUs;
