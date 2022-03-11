import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BsExclamationCircleFill, BsStarFill, BsTagFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const ProductBox = (props) => {
  const history = useHistory();
  const [addedMessage, setAddedMessage] = useState(false);
  let cart = useContext(CartContext);

  const handleAddItem = () => {
    cart.add(
      props.product.id,
      1,
      props.product.name,
      props.product.main_photo,
      props.product.price,
      props.product.weight
    );
    setAddedMessage(true);
    setTimeout(() => {
      setAddedMessage(false);
    }, 1000);
  };

  const handleBuyItem = () => {
    cart.add(
      props.product.id,
      1,
      props.product.name,
      props.product.main_photo,
      props.product.price,
      props.product.weight
    );
    history.push("/cart");
  }

  return (
    <div className="col-xl-4 col-md-6 mb-5">    
      <div className="template_card d-flex flex-column">
      {props.product.is_new === "Y" && (
        <div className="label new">
          Recién llegado 
        </div>
      )}
      {props.product.is_last_units === "Y" && (
        <div className="label stockout">
          Quedan poquitos...
        </div>
      )}
      {props.product.is_combo === "Y" && (
        <div className="label combo">
          Combo
        </div>
      )}
        <div className="product_box_image">
          <img src={`/images/products/${props.product.main_photo}`} />
        </div>

        
          <div className="titleproducts" align="center">
            {props.product.name}
          
        </div>

        <div className="stats_box text-center">
          <span className="stats">
            {props.product.stat_players} | {props.product.stat_age} |{" "}{props.product.stat_time}
          </span>
        </div>

        <div>
          <p className="short_description">
            {props.product.short_description}
          </p>
        </div>

        <div className="price_row">
          <div className="product_price">AR$ {props.product.price.toFixed(2)}</div>
        </div>
        
        <div className="price_row">
          <button className="btn btn-danger btn-buy" id={"btn-buy-"+props.product.id} onClick={handleBuyItem}>
              <span className="buy_label">Comprar ahora</span>
            </button>
            &nbsp;
            <button className="btn btn-danger btn-buy" id={"btn-buy-"+props.product.id} onClick={handleAddItem}>
              <span className="buy_label">Agregar al carrito</span>
            </button>
        </div>

        <div className="added_row">{addedMessage && <span>¡Agregado!</span> }</div>

      

      </div>
    </div>

  );
};

export default ProductBox;
