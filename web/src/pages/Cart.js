/* eslint no-eval: 0 */
import React, { useState, useEffect, useContext, useMemo } from "react";
import { CartContext } from "../contexts/CartContext";
import {
  BsFillTrashFill,
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
} from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SHIPPING_METHOD_RETIRO_PERSONALMENTE = 1;
const SHIPPING_METHOD_CORREO_ARGENTINO = 2;

const PAYMENT_METHOD_EFECTIVO = 1;
const PAYMENT_METHOD_MERCADOPAGO = 3;


const PageCart = () => {
  const history = useHistory();
  let cart = useContext(CartContext);
  const [name, setName] = useState([]);
  const [address, setAddress] = useState([]);
  const [location, setLocation] = useState([]);
  const [zipCode, setZipCode] = useState([]);
  const [email, setEmail] = useState([]);
  const [phone, setPhone] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(2);
  const [selectedZone, setSelectedZone] = useState(2);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(1);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(1);
  const [shippingCosts, setShippingCosts] = useState([]);

  const checkoutInfo = useMemo(() => {

    /* Calculate cart subtotal and items weight */
    let subtotal = 0;
    let cartWeight = 0;
    if (cart.items) {
      cart.items.forEach((item) => {
        subtotal += item.price * item.quantity;
        cartWeight += item.weight * item.quantity;
      });
    }
    let cartShippingCost = 0;
    // eslint-disable-next-line eqeqeq

    if (selectedShippingMethod == SHIPPING_METHOD_CORREO_ARGENTINO) {
      shippingCosts.forEach((s) => {
        if (s.from < cartWeight && s.to >= cartWeight) {
          switch (selectedZone) {
            case 1:
              cartShippingCost = s.cost_zone_1;
              break;
            case 2:
              cartShippingCost = s.cost_zone_2;
              break;
            case 3:
              cartShippingCost = s.cost_zone_3;
              break;
            case 4:
              cartShippingCost = s.cost_zone_4;
              break;
            default:
              cartShippingCost = -1;
              break;
          }
        }
      });
    }

    /* Calculate Total */
    let total = subtotal + cartShippingCost;

    return {
      cartWeight: cartWeight,
      subtotal: subtotal,
      shippingCost: cartShippingCost,
      total: total,
    };
  }, [cart.items, shippingCosts, selectedShippingMethod, selectedZone, selectedProvince]);

  useEffect(() => {
    (async () => {
      const response = await fetch(process.env.REACT_APP_API_URL + "/provinces");
      const results = await response.json();
      setProvinces(results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        process.env.REACT_APP_API_URL + "/shipping_costs"
      );
      const result = await response.json();
      setShippingCosts(result);
    })();
  }, []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
    setSelectedZone(getZone(e.target.value));
  };
  const handleShippingMethodChange = (e) => {
    setSelectedShippingMethod(e.target.value);
  };
  const handlePaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const getZone = (provinceId) => {
    const province = provinces.find(p => p.id == provinceId);
    return province.zone;
  }

  const sendPurchaseOrder = async () => {
    let data = {
      name: name,
      address: address,
      zipCode: zipCode,
      location: location,
      email: email,
      phone: phone,
      province: selectedProvince,
      zone: selectedZone,
      paymentMethod: selectedPaymentMethod,
      shippingMethod: selectedShippingMethod,
      subtotal: checkoutInfo.subtotal,
      shippingCost: checkoutInfo.shippingCost,
      cartWeight: checkoutInfo.cartWeight,
      total: checkoutInfo.total
    };

    data.items = cart.items;

    const url = process.env.REACT_APP_API_URL + "/checkOut";
    const res = await axios.post(url, data);

    if (res.status === 200) {
      console.log("res:", res);

      if (res.data.mercado_pago === true) {
        const mp = new window.MercadoPago(process.env.REACT_APP_MERCADO_PAGO_PUBLIC_KEY, {
          locale: 'en-US'
        });

        mp.checkout({
          preference: {
            id: res.data.preference_id,
            external_reference: res.data.id
          },
          autoOpen: true, // Allow the Checkout Pro to open automatically
        });

      } else {
        Swal.fire({
          title: "Pedido enviado",
          text: "Nos comunicaremos con vos a la brevedad.",
          icon: "info",
          confirmButtonText: "Aceptar",
        }).then(() => {
          cart.empty();
          history.push("/");
        }
        );

      }
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
    let validateOK = true;

    // eslint-disable-next-line eqeqeq
    if (name == "" || address == "" || email == "") {
      validateOK = false;
      Swal.fire({
        title: "Error",
        text: "Por favor, complete los datos faltantes.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }

    if (selectedShippingMethod != SHIPPING_METHOD_RETIRO_PERSONALMENTE && selectedPaymentMethod == PAYMENT_METHOD_EFECTIVO) {
      validateOK = false;
      Swal.fire({
        title: "Error",
        text: "Sólo se acepta el pago en efectivo para retiros en persona.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }

    if (validateOK) {
      Swal.fire({
        showDenyButton: true,
        title: "Confirmación",
        text: "¿Enviar el pedido?",
        icon: "warning",
        confirmButtonText: "Enviar",
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          sendPurchaseOrder();
        }
      });
    }
  };

  return (
    <>

      <div className="container" id="CartPage">
        <div className="row">
          <div className="section-title">
            <h4>Tu carrito de compras</h4>
          </div>
        </div>
        <div className="row">
          {cart.items.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th></th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.items.map((item) => {
                    const handleRemoveItem = () => {
                      cart.remove(item.id, item.quantity);
                    };
                    const handleReduceItem = () => {
                      cart.remove(item.id, 1);
                    };
                    const handleAddItem = () => {
                      cart.add(item.id, 1);
                    };

                    return (
                      <tr className="cartRows" key={item.id}>
                        <td>
                          <img
                            src={"images/products/" + item.main_photo + ""}
                            alt=""
                            className="cartThumbnail"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>
                          <button
                            className="btn btn-default"
                            onClick={handleReduceItem}
                          >
                            <BsFillDashCircleFill />
                          </button>
                          {item.quantity}
                          <button
                            className="btn btn-default"
                            onClick={handleAddItem}
                          >
                            <BsFillPlusCircleFill />
                          </button>
                        </td>
                        <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          {" "}
                          <button
                            className="btn btn-danger"
                            onClick={handleRemoveItem}
                          >
                            <BsFillTrashFill />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="row" id="formDatosEnvio">
                <div className="col-sm-8">
                  <div>
                    <h5>Nombre y apellido</h5>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={name}
                      onChange={handleNameChange}
                    />
                  </div>
                  <div>
                    <h5>Dirección</h5>
                    <input
                      type="text"
                      className="form-control"
                      name=""
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div>
                    <h5>E-Mail</h5>
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
                        name=""
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                    <div className="col-sm-6">
                      <h5>Localidad o Barrio</h5>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value={location}
                        onChange={handleLocationChange}
                      />
                    </div>

                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <h5>Forma de envío</h5>
                      <select
                        className="form-select"
                        value={selectedShippingMethod}
                        onChange={handleShippingMethodChange}
                      >
                        <option value="1">Retiro personalmente</option>
                        <option value="2">Envío por Correo Argentino</option>
                      </select>
                      <div className="small_text">Zonas de retiro: Palermo, Floresta o Villa Urquiza (CABA)</div>
                    </div>
                    <div className="col-sm-6">
                      <h5>Provincia</h5>
                      <select
                        className="form-select"
                        onChange={handleProvinceChange}
                      >
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
                    <div className="col-sm-6">
                      <h5>Código Postal</h5>
                      <input
                        type="text"
                        className="form-control"
                        name=""
                        value={zipCode}
                        onChange={handleZipCodeChange}
                      />
                      <div className="small_text">Averiguá  <a href="https://www.correoargentino.com.ar/formularios/cpa">tu Código Postal aquí</a></div>
                    </div>
                    <div className="col-sm-6">
                      <h5>Forma de pago</h5>
                      <select
                        className="form-select"
                        value={selectedPaymentMethod}
                        onChange={handlePaymentMethodChange}
                      >
                        <option value="1">Efectivo</option>
                        <option value="2">Transferencia bancaria</option>
                        <option value="3">Mercado Pago</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4 backgroundResumenPedido">
                  <h4>RESUMEN</h4>
                  <div className="clearfix">
                    <div className="float-start">Subtotal</div>
                    <div className="float-end">$ {currencyFormat(checkoutInfo.subtotal)}</div>
                  </div>
                  <hr />

                  <div className="clearfix">
                    <div className="float-start">Costo de Envío</div>
                    <div className="float-end">$ {currencyFormat(checkoutInfo.shippingCost)}</div>
                  </div>
                  <hr />
                  <div className="clearfix">
                    <div className="float-start">Total</div>
                    <div className="float-end">$ {currencyFormat(checkoutInfo.total)}</div>
                  </div>
                  <hr />
                  <button
                    className="btn btn-dark btn-lg w-100"
                    onClick={handleFormSubmit}
                  >
                    ENVIAR PEDIDO
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div>Tu carrito está vacío.</div>
          )}
        </div>
      </div>
    </>
  );
};

export default PageCart;
