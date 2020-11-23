import React from "react";
import "./ProductDetails";
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
      <div>
        <img src={product.image} />
        <h1>{product.name}</h1>
      </div>
    </div>
  );
}

export default ProductDetails;
