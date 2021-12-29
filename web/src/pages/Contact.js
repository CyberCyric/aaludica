import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { FaRegLaughWink } from "react-icons/fa";

const PageContact = () => {
  const d = new Date();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedProvince, setSelectedProvince] = useState(1);
  const [provinces, setProvinces] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("https://www.aaludica.com.ar/api/provinces");
      const results = await response.json();
      setProvinces(results);
    })();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const sendMessage = async () => {
    const data = {
      name: name,
      email: email,
      phone: phone,
      province: selectedProvince,
      content: content,
    };

    console.log("Envio el mensaje: ", data);

    const res = await axios.post(
      "https://www.aaludica.com.ar/api/message",
      data
    );
    if (res.status === 200) {
      Swal.fire({
        title: "Mensaje enviado",
        text: "¡Muchas gracias!",
        icon: "info",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        title: "Error",
        text: "Hubo un error en el envío:" + res.statusText,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const handleFormSubmit = (e) => {
    // eslint-disable-next-line eqeqeq
    if (name == "" || email == "" || content == "") {
      Swal.fire({
        title: "Error",
        text: "Por favor, complete los datos faltantes",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    } else {
      Swal.fire({
        showDenyButton: true,
        title: "Confirmación",
        text: "¿Enviar el mensaje?",
        icon: "warning",
        confirmButtonText: "Enviar",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          sendMessage();
        }
      });
    }
  };

  return (
    <div className="container" id="CartPage">
      <div className="row">
        <div className="section-title">
          <h4>¡Contactate con nosotros!</h4>
          <h6>
            Escribinos acá por cualquier consulta, comentario, duda sobre los
            juegos o las reglas, crítica constructiva, y sobre todo
            felicitaciones <FaRegLaughWink />{" "}
          </h6>
        </div>
      </div>
      <div className="row">
        <div className="row" id="formDatosEnvio">
          <div className="col-sm-12">
            <div>
              <h5>Nombre y apellido (*)</h5>
              <input
                type="text"
                className="form-control"
                name=""
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div>
              <h5>E-Mail (*)</h5>
              <input
                type="text"
                className="form-control"
                name=""
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="row">
              <div className="col-sm-6">
                <h5>Teléfono</h5>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="col-sm-6">
                <h5>Provincia</h5>
                <select className="form-select" onChange={handleProvinceChange}>
                  {provinces.length > 0
                    ? provinces.map((province) => (
                        <option value={province.id} key={province.id}>
                          {province.name}
                        </option>
                      ))
                    : ""}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h5>Tu mensaje (*)</h5>
                <textarea
                  className="form-select"
                  name="content"
                  onChange={handleContentChange}
                ></textarea>
              </div>
            </div>
            <hr />
            <button
              className="btn btn-dark btn-lg w-100"
              onClick={handleFormSubmit}
            >
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContact;
