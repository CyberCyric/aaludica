import React, { useEffect, useState } from "react";

const SucesosLanding = () => {
  const backgroundSucesos = { backgroundImage: `url(images/bkg-sucesos.jpg)` };
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
      </div>
    </>
  );
};

export default SucesosLanding;
