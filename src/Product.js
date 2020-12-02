import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
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
