import React from "react";
import "./Product.css";
import data from "./data";

console.log(data);

function Product() {
  return (
    <div className="products">
      {data.products.map((product) => (
        <div key={product._id} className="product">
          <img src={product.image} alt="" />
          <div className="product__info">
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <p>{product.name}</p>
            <button className="product__button">Comprar ahora</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
