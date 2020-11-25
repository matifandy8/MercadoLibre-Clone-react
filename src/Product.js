import React from "react";
import "./Product.css";
import data from "./data";
import { Link } from "react-router-dom";

console.log(data);

function Product(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product._id}`}>
      <div className="products">
        <div key={product._id} className="product">
          <img src={product.image} />
          <div className="product__info">
            <p className="product__price">
              <small>$</small>
              <strong>{product.price}</strong>
            </p>
            <p>{product.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
