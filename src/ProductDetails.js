import React from "react";
import "./ProductDetails.css";
import data from "./data";
import Header from "./Header";

function ProductDetails(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <div className="productDetails">
      <Header />
      <div className="productDetails__top">
        <img
          className="productDetails__img"
          src="https://http2.mlstatic.com/storage/official-stores-images/lenovo/background201709180200.jpg"
        />
        <img
          className="productDetails__brandimg"
          src="https://http2.mlstatic.com/D_Q_NP_897210-MLA26014325691_092017-T.webp"
        />
      </div>
      <div className="productDetails__info">
        <img src={product.image} />
        <div className="productDetails__price">
          <h1>{product.name}</h1>
          <strong>${product.price}</strong>
          <button>Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
