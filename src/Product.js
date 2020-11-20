import React from "react";
import "./Product.css";

function Product({ id, title, image, price }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{title}</p>
        <button className="product__button">Comprar ahora</button>
      </div>
    </div>
  );
}

export default Product;
