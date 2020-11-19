import React from "react";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Product;
