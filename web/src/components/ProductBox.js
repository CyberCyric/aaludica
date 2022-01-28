import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { BsExclamationCircleFill, BsStarFill, BsTagFill } from "react-icons/bs";

const ProductBox = (props) => {
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
  };

  return (
    <div className="col-xl-4 col-md-6 mb-5">    
      <div className="template_card d-flex flex-column">
      <div className="product_box_image">
        <img src={`images/products/${props.product.main_photo}`} />
      </div>

      <div>
        <h5 className="text-center title">
          {props.product.name}
        </h5>
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
        <div className="product_price">$ {props.product.price.toFixed(2)}</div>
        <button className="btn btn-danger btn-buy" onClick={handleAddItem}>
          <span>Comprar</span>
          <span><img className="spinner" src="images/spinner.gif" /></span>
        </button>
      </div>

      <div className="price_row">Agregado al carrito</div>

      

      {props.product.is_new === "Y" && (
        <div className="label new">
          <BsStarFill />
          &nbsp; ¡Recién llegado! &nbsp;
          <BsStarFill />
        </div>
      )}
      {props.product.is_last_units === "Y" && (
        <div className="label stockout">
          <BsExclamationCircleFill />
          &nbsp; Quedan poquitos... &nbsp;
          <BsExclamationCircleFill />
        </div>
      )}
      {props.product.is_combo === "Y" && (
        <div className="label combo">
          <BsTagFill />
          &nbsp; Combo &nbsp;
          <BsTagFill />
        </div>
      )}

      </div>
    </div>

  );
};

export default ProductBox;
