import React from "react";
import "./Product.css";
import data from "./data";

console.log(data);

function Product(props) {
  const { product } = props;
  return (
    <div className="products">
      <div key={product._id} className="product">
        <a href={`/product/${product._id}`}>
          <img src={product.image} alt="" />
        </a>
        <div className="product__info">
          <p className="product__price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <p>{product.name}</p>
          <button className="product__button">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
